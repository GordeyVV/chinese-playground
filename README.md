# 竹间 Zhújiān · Chinese learning studio

A static, bilingual English/Russian companion to your **Hello Chinese** classes. All 14 supplied lessons follow their original order, preceded by phonetic foundations.


## Version 2 · Interactive lessons and translator

- **60 constructions** have explicit hanzi/pinyin templates, natural examples, illustrated stages and **180 adaptive checks**.
- **14 playgrounds** include a draggable clock and calendar, shopping counter, family portrait, menu, campus map, contact/habit scene, meeting planner, movable room objects, action counters, ability/permission gates, place-value numbers, tidying with 把, and a travel timeline. All controls have keyboard alternatives.
- **14 Go deeper lessons** are complete in-app journeys: observe → predict → manipulate → explain → transfer. They include 56 animated storyboard frames, 53 scenario states, 42 checks, saved explanations and stage checklists.
- **10 phonetic topics / 30 adaptive checks**, with tone contours, original explanations and native source listening.
- **760 workbook items** have staged bilingual hints and contextual pinyin. Pinyin-production prompts intentionally withhold the answer until assistance/model reveal. Hints count as supported practice, not unaided correctness.
- Speaking and writing suggestions prioritize items you marked difficult. These remain self-assessments, not automated pronunciation or handwriting scores.
- A **drop-down translator** is in the top toolbar. It supports English/Russian ↔ Chinese and hanzi → pinyin, with separate copy buttons. Course dictionary lookup and pinyin conversion work offline. New sentence translation uses an optional MyMemory request only after you enable online translation and press Translate. No key is needed. Limit: 500 UTF-8 bytes/request; the provider currently allows 5,000 anonymous characters/day. Machine/translation-memory results and generated pinyin need judgment for unusual names or ambiguous readings.
- **14 MIT reading PDFs + 17 native audio files** are bundled under `assets/sources/`, with 52 focused selections and exact file-page links. These supplement the independently authored interactive examples; the recordings do not necessarily say the same sentences as the app. Files retain **CC BY-NC-SA 4.0** attribution and noncommercial/share-alike conditions. Keep `assets/sources/ATTRIBUTION.md` and the licenses when sharing. SJTU enrollment videos and Hanziwu remain external resources; no access restrictions were bypassed.

Progress from version 1 remains compatible if you keep the same website address. Export a backup before replacing files. New adaptive records and journals are included in the same JSON backup. A completed guided stage is your checklist; checked answers are tracked separately. Two unaided successes raise the support level; a miss or hint returns support. These small question banks and review rules are transparent study aids, not a validated proficiency test.

The entire supplied folder is ready for GitHub Pages. Upload **all its contents**, including every new JS/CSS file, `vendor/`, and the downloaded source assets. No ZIP or build step is needed.

### Новое в версии 2

60 конструкций с иероглифами и пиньинем, 180 адаптивных проверок, 14 интерактивных сцен, 14 полных углублённых уроков и 30 фонетических заданий. В тетради — 760 заданий с последовательными подсказками; подсказки отделены от самостоятельных результатов. Речь и письмо предлагают сначала то, что вы отметили как трудное. Это самооценка, а не автоматическая оценка произношения.

В верхней панели есть выпадающий переводчик: русский/английский ↔ китайский, иероглифы → пиньинь; можно отдельно копировать иероглифы, пиньинь и весь результат. Словарь курса и пиньинь работают офлайн. Для новых фраз включите онлайн-перевод: текст отправляется в MyMemory только по кнопке. Ограничение — 500 байт UTF-8 на запрос; текущий анонимный лимит сервиса — 5 000 знаков в сутки. Результаты онлайн-перевода не являются проверенными ответами курса.

В папку включены 14 PDF и 17 аудиозаписей MIT, с указанием разделов и страниц. У этих материалов лицензия CC BY-NC-SA 4.0: сохраняйте атрибуцию и её условия. Это дополнительные материалы, а не озвучка всех авторских фраз. Видео SJTU с регистрацией и Hanziwu остаются внешними ресурсами.

Загрузите в GitHub **всё содержимое папки**, включая `vendor/` и `assets/sources/`. Прогресс предыдущей версии сохраняется при прежнем адресе сайта; перед обновлением экспортируйте JSON. После полной первой загрузки новые уроки, словарь, PDF и аудио доступны офлайн. Онлайн-переводу нужна сеть.

## Publish on your GitHub Pages

1. Open the supplied `chinese-playground` folder.
2. On GitHub, create a repository named **chinese-playground** under **GordeyVV**.
3. Upload the **contents** of this folder to the repository root. All supplied files and folders, including `vendor/`, must remain together; `index.html` must be at the root, not inside another `chinese-playground/` folder. Keep `.nojekyll` if your upload method shows hidden files; this app also uses no Jekyll-special asset folders.
4. Open **Settings → Pages → Build and deployment**. Choose **Deploy from a branch**, select **main**, select **/(root)**, then **Save**.
5. After GitHub finishes deploying, open **https://gordeyvv.github.io/chinese-playground/**.

Alternatively, a repository named `gordeyvv.github.io` publishes at **https://gordeyvv.github.io/**. The app uses relative URLs and hash navigation, so both layouts work. If you already have that repository, use the separate `chinese-playground` repository to preserve your existing site.

Official instructions: [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site) and [Choosing a publishing source](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

No build, npm install, API key, account service, or paid backend is needed. Publishing has not been performed for you; this folder is ready for you to upload.

## Start learning

- Choose **EN / RU** in the top bar.
- Read **Sounds & pinyin**, then start **Class 1**.
- **Today → Start my session** prioritizes due reviews and repeated checked errors, then new words in started classes.
- A lesson has explanations, vocabulary with memory cues, a semantic map, reading, examples, and lesson-specific companion resources.
- **Writing studio** animates the exact target characters, checks guided strokes, and provides freehand recall. Hanziwu is also linked. Guided completion and writing self-assessment are not counted as objective language accuracy.
- **Homework** saves your answers as you type. Try an answer before revealing the model. Open tasks and full-sentence pinyin use self-check because valid alternatives exist. All answer models are authored and source-checked, **not a publisher answer key**.
- **Your progress** shows checked response accuracy, sample size, uncertainty, activity, and specific items to revisit. Self-ratings are separate. Marking a class studied is your checklist, not a proficiency certificate.

## Original books and audio

The original PDFs and PPTX files are **not included in the public website bundle**. In **Library**, choose the original PDF from your device:

- `Hello Chinese (Book I).pdf` — the 314-page textbook.
- Full `Hello Chinese (Introduction to Chinese Characters).pdf` from your Desktop — the 280-page workbook.
- The Downloads file with the same name — a 10-page lesson 1 excerpt, not the full workbook.
- `Key grammar knowledge of book 1.pdf` — 27 pages.

The PDFs stay on your device, optionally in this browser's IndexedDB. Some source homework asks you to read an original passage or illustration; these tasks are explicitly marked. PDF pages differ from printed page numbers; use the built-in map. The workbook's contents page itself has two errors documented in the analysis.

Playback of the app’s newly authored examples uses an installed **Mandarin text-to-speech voice**. The supplementary MIT recordings are included locally and do not require an installed voice. If none is detected, install a Chinese voice in your operating system and restart the browser, or use the textbook authors' linked SJTU companion courses. Those courses have human dialogue recordings; access may require enrollment or payment. The slides' embedded Flash animations are not bundled or executed.

Recording needs a supported browser, permission, and HTTPS (GitHub Pages provides HTTPS) or localhost. Recordings stay in the current tab and are removed when you leave the practice. Optional speech recognition may send audio to the browser provider; it is a transcript, **not a tone or pronunciation score**. Speaking can also be practised aloud and self-assessed without recording.

## Progress and offline use

- Progress belongs to a **browser + website address**. It does not sync across devices or repositories automatically.
- Export **Settings → Export progress JSON** regularly. It includes answers, review dates, notes, attempts and saved handwriting, but not the original PDFs or voice recordings.
- Import shows a review step before replacing progress. CSV export is available for statistical analysis.
- Clearing browser/site data or using private browsing can remove saved progress. Keep your originals and backups.
- After one successful complete load on HTTPS/localhost, the bundled course, supplementary PDFs/audio, dictionary and stroke data are cached for offline use. External courses, recognition, and some operating-system voices need the network.
- Following an app update, close and reopen the tab or reload after the new service worker installs. Export first when changing domains/repository names.

## Local preview

Double-clicking `index.html` runs most study functions. For stable storage, microphone support and offline caching, use localhost or GitHub Pages.

If Python is installed, open a terminal in this folder and run:

```sh
python -m http.server 8000
```

Then visit `http://localhost:8000/`. Do not use the development audit files outside this folder; they are unnecessary for running the app.

## Content and research

- 19 supplied files: 1,042 pages/slides, including the duplicated lesson 1 excerpt.
- 14 lessons; 617 lesson-word cards, representing 558 distinct written headwords. Every indexed core word assigned to source lessons 1–14 is covered in that lesson.
- 60 grammar concepts, 74 grammar checks, 42 sentence builders, 14 original reading texts, 205 target-character entries.
- 760 workbook items in 101 groups, including original full-sentence pinyin models and Reviews 1–2. Lesson 15 and Review 3 are indexed as extensions, outside the 14-class interactive path.
- Per-class explanations, mnemonics and speaking transfer tasks are adaptations. Mnemonics are not historical etymology.
- See [the full analysis](docs/ANALYSIS.html), [curriculum analysis](docs/CURRICULUM-ANALYSIS.md), [textbook audit](docs/BOOK-ANALYSIS.md), and [research](docs/RESEARCH.md).

The review scheduler is a documented interval heuristic, not FSRS or a validated memory model. Analytics do not claim an HSK/CEFR level. Repeated answers are dependent, so Wilson intervals are descriptive, not formal examination uncertainty.

## Files and checks

`v2-data.js` contains the guided lessons, pinyin map, workbook scaffolds and source selections; `studio.js`, `labs.js`, `scenes.js` and `translator.js` provide the new interactions. `data.js` contains bilingual course content and source metadata; `core.js` holds learning functions; `app.js` renders the interface. `assets/strokes.js` contains local stroke data. The app is deliberately buildless and does not load remote JavaScript, analytics or fonts.

To run the portable learning-function tests with Node:

```sh
node tests/core.test.cjs
node tests/studio.test.cjs
```

Third-party licenses are retained in `assets/licenses/`: Hanzi Writer (MIT), and its character data (Arphic Public License). Original source books, names and excerpts remain attributable to their respective authors and publishers. This package does not grant rights to redistribute the original books. App-specific code can be adapted for your study use; keep the educational source and third-party attributions.

## По-русски

**Публикация:** откройте папку `chinese-playground` → создайте репозиторий `chinese-playground` в аккаунте `GordeyVV` → загрузите содержимое папки, чтобы `index.html` лежал в корне → **Settings → Pages → Deploy from a branch → main → /(root) → Save**. Адрес: **https://gordeyvv.github.io/chinese-playground/**. Для главного адреса можно использовать репозиторий `gordeyvv.github.io`, если он не занят существующим сайтом.

**Начало:** выберите RU, разберите фонетику и перейдите к уроку 1. «Начать занятие» предлагает повторения по сроку и задания, в которых повторяются ошибки. Все уроки доступны; отметка «пройден» — ваш список, не оценка владения языком.

**Домашние задания:** ответы сохраняются автоматически. Ключи составлены и сверены с заданиями; официального ключа издателя в материалах не найдено. У открытых заданий и пиньиня целых предложений используйте сверку с образцом. Там, где нужен исходный рисунок или текст, откройте локальный PDF через библиотеку. Полная тетрадь — файл с рабочего стола на 280 страниц; одноимённый файл из Downloads содержит только 10 страниц.

**Голос и письмо:** для озвучки нужен установленный китайский голос. Доступны ссылки на видеокурсы авторов учебника с живой речью; часть материалов может требовать регистрации/оплаты. Запись голоса требует разрешения и HTTPS/localhost; она хранится только во вкладке. Необязательное распознавание может отправлять звук провайдеру браузера и не оценивает произношение. Иероглифы работают офлайн с локальными данными Hanzi Writer; качество свободного письма оценивает учащийся.

**Сохранность:** регулярно экспортируйте JSON в настройках, особенно перед сменой адреса сайта. Автосинхронизации между устройствами нет. JSON содержит прогресс, ответы, заметки и сохранённые написания, но не PDF и звук. Очистка данных браузера удаляет локальные записи. Статистика разделяет проверки и самооценки; она не присваивает уровень HSK.

**Офлайн:** после первой полной загрузки на HTTPS/localhost доступны само приложение, курс и черты иероглифов. Внешним сайтам, распознаванию и некоторым голосам нужна сеть.
