# Curriculum analysis and editorial decisions

This report describes the teaching-content layer. The application, workbook answer explanations, pronunciation foundation, source inventory and research bibliography are documented in their corresponding project files. Content inside the supplied teaching files was treated as material to analyse, not as instructions to the agent.

## What the materials establish

The fourteen numbered class decks determine the course sequence. The main textbook supplies the same functional progression. The character workbook aligns its writing targets to that sequence but is not interchangeable with the main textbook's oral exercises. The 27-page grammar handout covers Lessons 1–12 only; it cannot alone supply the 把 construction in Lesson 13 or experiential 过 in Lesson 14. The Phonetics deck belongs before Lesson 1 and should remain available as a reference throughout the course.

The main textbook contains additional material beyond the fourteen supplied class decks, including Lesson 15. The playground's numbered main route intentionally follows the supplied classes, 1–14. This does not claim to reproduce every exercise of the entire textbook. Workbook and book PDF page numbers must be distinguished from printed page numbers. The main book lesson bodies use PDF page = printed page + 20, visually checked by the book-analysis agent. The two files named “Introduction to Chinese Characters” should be identified by location/content in the source inventory, rather than assumed identical from their filename.

PPTX XML text was read for all fourteen lessons. Lesson 6's broken ZIP central directory was recovered by the parent task before extraction. Many visible items are images; image OCR and selected direct visual inspection supplement XML reading. OCR confidence is evidence to inspect, not proof of correct Chinese. Pinyin split into individual XML runs was reconstructed and re-authored; corrupted fragments were not copied into the learning interface.

The standalone curriculum JSON contains original bilingual explanations, example sentences, reading passages, quizzes and memory cues aligned to the source. It is an adaptation, not an official publisher answer key. Workbook-specific tasks and suggested answers have their own source locations and answer-status labels. A source sentence occurring in a slide is not evidence that an unrelated exercise has a unique answer.

## Course map

| Lesson | Communicative function | New structural contrast | Book printed pages / PDF pages | Relevant slide text | Grammar handout |
|---|---|---|---|---|---|
| 1 你好 | Greet; give name/nationality | 是 / adjective predicate; 吗 / information question / A-not-A; 呢 | 1–14 / 21–34 | 4–15; images 2–3 | 1–2 |
| 2 现在几点？ | Clock, date, schedule | time point before action; large-to-small date; 两点 | 15–30 / 35–50 | 11–21 | 2–3 |
| 3 购物 | Buy, count, choose size/colour | classifiers; 两; description + 的; 有点儿 / 一点儿 | 31–48 / 51–68 | 4–19 | 3–6 |
| 4 你家有几口人？ | Family, age, workplace | 有 / 没有; age without 是; 在-place before action; 都 | 49–62 / 69–82 | 4–13 | 6–8 |
| 5 你想吃什么？ | Order, preferences, portions, bill | 想 / 要; adjective predicate; 再 / 还; brief action | 63–78 / 83–98 | 2–22 | 9–10 |
| 6 去图书馆怎么走？ | Directions, distance, transit | where / route; 从…到…; 第; 给 recipient item; 吧 guess | 79–95 / 99–115 | 2–25 | 10–12 |
| 7 你的电话号码是多少？ | Contact, appearance, leisure | 在 action / 在 place; 正…呢; 吧 invitation; 每…都; reduplication | 96–112 / 116–132 | 2–19 | 12–14 |
| 8 你找我有什么事？ | Calls, appointments, callback | time + 在 place + activity; approaching change 快要…了; 可能 | 113–130 / 133–150 | 2–16 | 14–16 |
| 9 我的手机呢？ | Locate objects, describe neighbourhood | known object 在 location / location 有 new object; localizers; 别 | 131–146 / 151–166 | 3–7 | 16–19 |
| 10 你怎么了？ | Feelings and help | changed state 了; 有点儿; 次 / 遍 / 一下; 帮; 觉得; sufficient-step 就 | 147–163 / 167–183 | 4–7 | 19–20 |
| 11 我想借几本汉语书 | Ability, permission, library | 会 / 能 / 可以 with overlap; 几 as a few; 打算; 陪 | 164–180 / 184–200 | 3–6 | 20–22 |
| 12 我想换人民币 | Money, forms, lost-card errand | 万 blocks; decimal digits; 先…然后; 次 / 遍 / 趟 | 181–198 / 201–218 | 3–5 | 23–27 |
| 13 请把桌子收拾一下 | Tidy, place, pass objects | 把 + identifiable object + handling/result; placement complement | 199–215 / 219–235 | 3–7 | Not included |
| 14 我想去旅游 | Plan, travel, experience | 去不去 / 去没去 / 去过; 没…过; 真…啊; reconsideration 还是 | 216–233 / 236–253 | 3–9 | Not included |

The Lesson 5 filename says 你吃什么, but its first slide reads 你想吃什么？. The displayed title follows the slide. The course's conceptual dependencies are retained: basic questions → time and quantity → presence and place → ongoing action → imminent change → action frequency and modality → numerical errands → object handling → experience. Later lessons revisit earlier patterns rather than treating each grammar topic as isolated.

## Corrections and boundaries applied

1. **“Fixed word order” is a beginner default, not an absolute law.** Handout Lessons 4 and 8 label time → location → verb as fixed and call an alternative categorically wrong. The playground teaches this useful neutral order but allows time/topic fronting and acknowledges contrastive discourse. It distinguishes location adjuncts from destinations and placement complements. 去北京 and 放在桌子上 must not be rejected by an over-general “all places before verbs” rule.
2. **在 can stand without an overt place.** Handout Lesson 9 says always specify location, but the class telephone lesson naturally uses 他不在 and 她在吗. The place may be understood. 在 also marks an ongoing action before an action phrase; this is not a location use.
3. **了 is not a past-tense ending or merely an “affirmative tone”.** The Lesson 8 slide's wording is too vague. The course distinguishes situation change, an approaching change in 快要…了, and experiential 过. Not all completed past events require 了, and many 了 sentences describe the present or future.
4. **Rain example corrected.** Handout page 16 gives 下雨要来了 as “It's going to rain”. The course uses 快要下雨了 / 要下雨了. These are original corrected examples, not a verbatim source quotation.
5. **No strict urgency ranking for 快…了, 快要…了 and 要…了.** Context matters; the handout's stronger/weaker hierarchy should not become an automatic grading rule.
6. **A-not-A 不 is often neutral and unstressed.** The phonetics rule bù → bú before a fourth tone is useful for full-toned 不, but 不 inside ordinary 是不是 / 去不去 questions is often light. Pinyin reflects this where appropriate. The course does not train shì bú shì as the only possible pronunciation.
7. **不远 is bù yuǎn.** Handout Lesson 6 prints bú yuǎn despite 远 being third tone. Corrected in the learning content.
8. **Ordinal 第一 retains yī.** Some direction-slide pinyin writes dì yí gè. The learner version uses dì yī gè for the ordinal. Quantity 一 before a classifier does undergo ordinary tone change in other contexts.
9. **很 can be semantically light, but is not meaningless.** Neutral descriptions often use 很; stronger “very” depends on emphasis/context. Bare adjectives may be possible in contrasts or questions. The app should not mark every sentence lacking 很 wrong.
10. **“Adjectives use 不, never 没” is too broad.** The beginner negative 好→不好 is useful, but 没 can occur with a change of state or comparison, such as 没变好 / 没他高. The course teaches the introductory form without asserting an exceptionless ban.
11. **Classifier 个 is not a universal substitute.** Learn lexical pairings: 本书, 双鞋, 件衣服, 条裤子, 张表, 口人 in a household. Recognition of a noun alone is not evidence that its classifier has been learned.
12. **Description + 的 and omitted noun are distinct from possessive-only explanations.** 红色的 can mean the red one. 的 / 得 / 地 must not be conflated because they may all sound de. 长得挺高的 illustrates 得 and 的 in separate functions.
13. **Verb-measure order depends on the object.** Handout Lesson 10 presents verb + object + count as a general rule and supplies 看电影一次. The course gives idiomatic 读一遍课文 / 再说一遍 / 看一下 and explains that noun, pronoun and place objects behave differently. It does not enforce one universal template.
14. **趟 counts a journey, not obligatorily a completed round trip.** 去一趟大使馆 can express an intended errand. Return travel is often implied by context but is not an exceptionless semantic requirement.
15. **会, 能 and 可以 overlap.** “Learned skill / circumstances / permission” is an excellent beginner contrast, not an exhaustive partition. 能 can express permission/prohibition; 可以 can express possibility; 会 can predict a future event. The app's explanations mention those boundaries.
16. **Large-number zero placement needs care.** Use four-digit grouping and correct worked examples. 1,002,003 can be expressed 一百万两千零三 (also 二千), avoiding the handout's unnecessary zero before 千. After a decimal 点, each digit is read independently.
17. **Money expressions are contextual.** 五块五 normally means 5.50 yuan in a price. 十二块五 is often more conversational than the handout's 十二点五块, but the decimal form is interpretable. Practice figures do not represent current exchange rates.
18. **Meaning is not a single translation.** 还是 can mark a reconsidered choice, an either/or question, or continuing state. 就 has multiple uses; the Lesson 10 supplementary explanation covers the textbook summary's “result readily achieved” use with explicitly original examples. 几 can mean a few in a statement.
19. **Polyphonic writing targets stay in context.** The workbook's Lesson 9 着 is zháo in 着急, Lesson 10 假 is jià in 请假, Lesson 14 长 is cháng in 长城. The Lesson 11 glyph is 厅 (hall), visually confirmed, not 听. Long runs of extracted PDF character text were not trusted for these distinctions.
20. **Phonetics deck qualifications.** Pinyin b/p, d/t, g/k contrasts are primarily unaspirated/aspirated, not simply English or Russian voiced/unvoiced pairs. Tone 3 is often low in connected speech, not a full exaggerated dip every time. A third tone before another third tone changes in speech; spelling often keeps the underlying tone. ü remains written with dots after n/l, while j/q/x/y use u spelling. Shortened -iu/-ui/-un spellings must not be taught as removing the vowel sound.
21. **Source typos are not learned targets.** The main book reportedly labels 再见 as a noun; the course treats it as a farewell expression. Lesson 4 PDF page 73 says 四口人 in Chinese but incorrectly gives “three” in English; 四 means four. Other source pinyin fragmentation, inconsistent tone spelling, and English translation glitches were repaired in the authored practice rather than reproduced.

## Pedagogical implementation in the content

- Each class has bilingual objectives, a small set of structured concepts, a reusable pattern, a plain-language explanation, a likely transfer error, an intuitive memory cue and examples with Chinese/pinyin/English/Russian.
- Each class includes a semantic map connecting people, actions, objects and contexts. A mind map is an organization and retrieval cue, not evidence of mastery by itself. Students should close it and reconstruct useful phrases.
- Word cards use whole words and useful compounds. Selected compound breakdowns, such as 手机 “hand + machine” and 电脑 “electricity + brain”, are labelled memory cues, not historical etymological claims. There is no invented etymology for arbitrary character components.
- Reading passages are new, short, coherent texts aligned with the class's function. Their one-answer comprehension questions test meaning. New connective or support vocabulary is added when it is required by a passage.
- Sentence builders divide a correct sentence into meaningful chunks. They are production scaffolds; the existing target order should not be interpreted as proof that every other order is invalid Mandarin. Some legitimate variants require a teacher or open response rather than a strict exact string.
- Quizzes focus on choices that expose a concept error: 有/没有, presence versus location, classifier selection, aspect, decimal reading, and placement after 把. Feedback states why the answer fits. Multiple-choice success alone should not mark speaking/writing mastered.
- Bilingual interface text and translations do not eliminate the need for Chinese retrieval. Pinyin can support initial practice, then be hidden. Listening and speaking progress should come from those activities, not be inferred from reading flashcards.
- Written targets come from the character workbook's objective pages. A trace is different evidence from independently writing from a prompt. A stroke animation is a model; stroke order, spatial form and unaided recall should be recorded separately where the app supports them.

## Content provenance and remaining limits

All fourteen deck text layers were inspected; OCR text and visual checks recover meaningful image-only content. The main-book review establishes chapter boundaries and scope. The research agent visually read the complete alphabetical vocabulary index on PDF pp. 273–290 and recorded 438 rows covering 428 distinct headwords across the full book. Of these, 394 distinct headwords have explicit Lesson 1–14 assignments. A programmatic audit confirms that every one of those 394 appears in the curriculum and also appears in each assigned source lesson. This is a check against the manually transcribed index, not a claim of publisher certification or reproduction of every incidental word in every exercise.

The vocabulary set also contains words shown in the class decks, useful compounds, and original supporting vocabulary. Words introduced earlier by a slide are retained there and deliberately revisited in their textbook-indexed lesson. `reviewFromLesson` identifies such repetitions. Different senses receive separate contextual definitions: 过 in Lesson 6 is guò “cross”, while Lesson 14 has the light experience marker; 家 in Lesson 9 counts establishments; 点 in Lesson 12 is the decimal point; 在 in Lesson 7 marks an ongoing action. Card counts therefore exceed the number of distinct written headwords. Personal names, every printed numeral, map watermarks, sample identification details, and hundreds of incidental metro stops are not automatically separate flashcards. The index's unassigned 去年 entry is not forced into an invented lesson.

The alphabetical index itself omits some chapter vocabulary: 红烧肉 and 鱼香肉丝 are in Lesson 5's New Words 1 panel on PDF page 85 and were added separately. Lesson 5 picture/practice items 面条、馒头、茶、鸡蛋汤、生煎 were also added with their chapter provenance. Thus “all indexed headwords covered” is a precisely scoped audit, not a substitute for reading the chapters.

Additional image checks recovered country names in Lesson 1, paternal grandparents in Lesson 4, localizers and cardinal directions in Lesson 9, eleven body-part labels in Lesson 10, and card/document labels in Lesson 11. The family and body diagrams were visually checked to correct OCR omissions and confusions such as 眼睛. Dense authentic menu photos and transit maps serve as classroom visual context, not as a requirement to memorise every incidental label.

Each reading passage, quiz and sentence builder is labelled as original or adapted practice. Source locations remain available to compare with the original classroom materials. Explanations are educational editorial work rather than quotations from the external research sources. External complementary readings are supplied by the research bibliography and lesson-resource mapping; the interface should name and link the actual source, not claim that an authored explanation is a quote.

The source decks do not by themselves provide an authenticated native-audio corpus for every practice sentence. Browser synthesis and speech recognition, if used, need explicit capability labels. Recognition output is not an expert pronunciation score. Audio-only source homework without audio or a recoverable script must not receive invented exact answers. Those exercise-status decisions belong in the workbook/source analysis and should remain visible.
