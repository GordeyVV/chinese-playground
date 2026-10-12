/* Pure learning and persistence functions; browser and Node compatible. */
(function(root){
  'use strict';
  const VERSION=1, KEY='zhujian-progress-v1', DAY=86400000;
  const clamp=(n,a,b)=>Math.max(a,Math.min(b,n));
  const fresh=()=>({version:VERSION,settings:{lang:'en',goal:15,pinyin:true,rate:.8},started:[],completed:[],cards:{},events:[],homework:{},notes:{},drawings:{}});
  function normalize(s){return String(s??'').normalize('NFKC').toLowerCase().replace(/[\s，。！？、,.!?;；:：'"“”‘’·]/g,'');}
  function pinyin(s){
    s=String(s??'').normalize('NFC').toLowerCase().replace(/u:|v/g,'ü');
    const table={'ā':'a1','á':'a2','ǎ':'a3','à':'a4','ē':'e1','é':'e2','ě':'e3','è':'e4','ī':'i1','í':'i2','ǐ':'i3','ì':'i4','ō':'o1','ó':'o2','ǒ':'o3','ò':'o4','ū':'u1','ú':'u2','ǔ':'u3','ù':'u4','ǖ':'ü1','ǘ':'ü2','ǚ':'ü3','ǜ':'ü4'};
    let tones='';s=s.replace(/[āáǎàēéěèīíǐìōóǒòūúǔùǖǘǚǜ1-5]/g,c=>{if(table[c]){tones+=table[c][1];return table[c][0];}if(c!=='5')tones+=c;return '';});
    return s.replace(/[^a-zü]/g,'')+'|'+tones;
  }
  function matches(input,answers,mode='hanzi'){const fn=mode==='pinyin'?pinyin:normalize;return answers.some(a=>fn(input)===fn(a));}
  function review(previous,rating,now=Date.now()){
    const old=previous||{interval:0,reviews:0,lapses:0,ease:2.3};
    const ease=clamp((old.ease||2.3)+(rating===0?-.2:rating===1?-.1:rating===3?.1:0),1.3,2.8);
    let interval=rating===0?0:rating===1?Math.max(1,Math.round((old.interval||1)*1.2)):old.interval===0||!old.interval?1:old.interval===1?3:Math.max(old.interval+1,Math.round(old.interval*ease*(rating===3?1.2:1)));
    interval=Math.min(interval,180);
    return {interval,ease,reviews:(old.reviews||0)+1,lapses:(old.lapses||0)+(rating===0?1:0),due:now+(rating===0?600000:interval*DAY),last:now};
  }
  function wilson(correct,n){if(!n)return [0,1];const z=1.96,p=correct/n,d=1+z*z/n,c=(p+z*z/(2*n))/d,h=z*Math.sqrt(p*(1-p)/n+z*z/(4*n*n))/d;return [Math.max(0,c-h),Math.min(1,c+h)];}
  function stats(events,skill,lesson){const rows=events.filter(e=>e.kind==='checked'&&(!skill||e.skill===skill)&&(lesson===undefined||e.lesson===lesson));const n=rows.length,k=rows.filter(e=>e.correct).length;return {n,k,rate:n?k/n:null,ci:wilson(k,n)};}
  function dateKey(time=Date.now()){const d=new Date(time);return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;}
  function streak(events,now=Date.now()){const set=new Set(events.map(e=>dateKey(e.at)));let d=new Date(now),count=0;if(!set.has(dateKey(d)))d.setDate(d.getDate()-1);while(set.has(dateKey(d))){count++;d.setDate(d.getDate()-1);}return count;}
  function weak(events){const grouped=new Map();events.filter(e=>e.kind==='checked').slice(-300).forEach(e=>{const key=e.lesson+':'+e.skill+':'+e.item;const g=grouped.get(key)||{lesson:e.lesson,skill:e.skill,item:e.item,n:0,k:0,last:0};g.n++;g.k+=e.correct?1:0;g.last=e.at;grouped.set(key,g);});return [...grouped.values()].filter(g=>g.n-g.k>0).sort((a,b)=>(b.n-b.k)/(b.n+2)-(a.n-a.k)/(a.n+2)||b.last-a.last);}
  function dueItems(state,items,now=Date.now()){return items.filter(v=>state.started.includes(v.lesson)).filter(v=>!state.cards[v.id]||state.cards[v.id].due<=now).sort((a,b)=>{const ca=state.cards[a.id],cb=state.cards[b.id];if(ca&&!cb)return -1;if(cb&&!ca)return 1;return (ca?.due||0)-(cb?.due||0);});}
  function recommend(state,lessons,now=Date.now()){
    const vocab=lessons.flatMap(l=>l.vocab.map(v=>({...v,lesson:l.id})));
    const due=dueItems(state,vocab,now),reviewed=due.filter(v=>state.cards[v.id]);
    if(reviewed.length)return {reason:'due',count:reviewed.length,lesson:reviewed[0].lesson,mode:'cards'};
    const w=weak(state.events).find(g=>g.n>=3&&g.k/g.n<.7);
    if(w)return {reason:'weak',lesson:w.lesson,mode:w.skill==='grammar'?'grammar':w.skill==='reading'?'reading':w.skill==='listening'?'listening':'recall',skill:w.skill,n:w.n,k:w.k};
    if(due.length)return {reason:'new',count:due.length,lesson:due[0].lesson,mode:'cards'};
    return {reason:'next',lesson:lessons.find(l=>!state.completed.includes(l.id))?.id||1,mode:'lesson'};
  }
  function validate(raw){
    if(!raw||raw.version!==VERSION||!raw.settings||!Array.isArray(raw.events)||!Array.isArray(raw.started)||!Array.isArray(raw.completed))throw Error('Invalid backup format');
    const s=fresh();s.settings.lang=raw.settings.lang==='ru'?'ru':'en';s.settings.goal=[5,10,15,25].includes(raw.settings.goal)?raw.settings.goal:15;s.settings.pinyin=raw.settings.pinyin!==false;s.settings.rate=clamp(Number(raw.settings.rate)||.8,.5,1.2);
    s.started=[...new Set(raw.started.filter(n=>Number.isInteger(n)&&n>=1&&n<=14))];s.completed=[...new Set(raw.completed.filter(n=>Number.isInteger(n)&&n>=1&&n<=14))];
    if(raw.events.length>50000)throw Error('Backup is too large');
    s.events=raw.events.filter(e=>e&&Number.isFinite(e.at)&&e.at>0&&e.at<Date.now()+DAY&&typeof e.item==='string'&&Number.isInteger(e.lesson)&&e.lesson>=0&&e.lesson<=14&&['checked','self','study','writing'].includes(e.kind)&&['vocabulary','grammar','reading','listening','speaking','writing','homework','phonetics'].includes(e.skill)).map(e=>({at:e.at,lesson:e.lesson,item:e.item.slice(0,100),kind:e.kind,skill:e.skill,correct:e.correct===true,rating:clamp(Number(e.rating)||0,0,3)}));
    for(const [key,c] of Object.entries(raw.cards||{})){if(/^[\w-]{1,100}$/.test(key)&&c&&Number.isFinite(c.due)&&Number.isFinite(c.interval)&&c.interval>=0&&c.interval<=180)s.cards[key]={interval:c.interval,due:c.due,last:Number(c.last)||0,reviews:clamp(Number(c.reviews)||0,0,100000),lapses:clamp(Number(c.lapses)||0,0,100000),ease:clamp(Number(c.ease)||2.3,1.3,2.8)};}
    for(const field of ['homework','notes','drawings']){for(const [k,v] of Object.entries(raw[field]||{})){if(k==='__proto__'||k==='constructor'||k==='prototype')continue;if(typeof v==='string'&&v.length<=200000)s[field][k]=v;}}
    return s;
  }
  function load(storage){try{const raw=storage.getItem(KEY);return raw?validate(JSON.parse(raw)):fresh();}catch(e){return Object.assign(fresh(),{loadError:String(e.message||e)});}}
  function save(storage,state){try{storage.setItem(KEY,JSON.stringify(state));return true;}catch{return false;}}
  const api={VERSION,KEY,DAY,fresh,normalize,pinyin,matches,review,wilson,stats,dateKey,streak,weak,dueItems,recommend,validate,load,save};
  root.Learn=api;if(typeof module!=='undefined'&&module.exports)module.exports=api;
})(typeof window==='undefined'?globalThis:window);
