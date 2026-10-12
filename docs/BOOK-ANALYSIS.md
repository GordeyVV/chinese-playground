# Hello Chinese (Book I): source audit / Анализ учебника

This report analyses the supplied 314-page scan. All 15 chapters, the front matter and every appendix were read through OCR and selective visual inspection. Chapter boundaries, all grammar-summary pages, all listening-transcript pages, all sentence-reference pages, both character-list pages and all 18 core-vocabulary-index pages were checked visually. `book-analysis.json` records page-by-page OCR and visual-review coverage separately: an available OCR page is not a claim that every answer has been manually verified. `book-vocabulary-index.json` contains 438 manually checked index rows (428 distinct headwords), including different senses and the optional fifteenth lesson.

Отчёт относится к предоставленному скану на 314 страниц. Все 15 уроков, введение и каждое приложение прочитаны по OCR с выборочной визуальной проверкой. Визуально проверены границы уроков, полный грамматический обзор, все тексты аудирования, образцы предложений, обе страницы списка иероглифов и все 18 страниц основного словаря. В `book-analysis.json` отдельно указаны OCR и визуальный просмотр по страницам: наличие распознанного текста не означает ручную проверку каждого ответа. В `book-vocabulary-index.json` внесены 438 проверенных строк словаря — 428 разных заголовочных единиц с учётом разных значений и дополнительного урока 15.

## Navigation / Навигация

The body uses **PDF page = printed page + 20**. The introduction has a separate printed page sequence: phonetics is PDF 9–17, printed 1–9; the story characters are PDF 18–19, printed 10–11. The contents heading “Characters” on these introductory pages means recurring people in dialogues, not a Hanzi chapter. PDF page 20 is a divider.

В основной части **страница PDF = печатная страница + 20**. Введение имеет собственную нумерацию: фонетика — PDF 9–17, печатные 1–9; персонажи диалогов — PDF 18–19, печатные 10–11. Английский заголовок Characters во введении означает персонажей, а не иероглифы. PDF 20 — разделительная страница.

| Class | Source title | Printed pages | PDF pages |
|---|---|---:|---:|
| 1 | 你好 | 1–14 | 21–34 |
| 2 | 现在几点 | 15–30 | 35–50 |
| 3 | 你买什么 | 31–48 | 51–68 |
| 4 | 你家有几口人 | 49–62 | 69–82 |
| 5 | 你想吃什么 | 63–78 | 83–98 |
| 6 | 去图书馆怎么走 | 79–95 | 99–115 |
| 7 | 你的电话号码是多少 | 96–112 | 116–132 |
| 8 | 你找我有什么事 | 113–130 | 133–150 |
| 9 | 我的手机呢 | 131–146 | 151–166 |
| 10 | 你怎么了 | 147–163 | 167–183 |
| 11 | 我想借几本汉语书 | 164–180 | 184–200 |
| 12 | 我想换人民币 | 181–198 | 201–218 |
| 13 | 请把桌子收拾一下 | 199–215 | 219–235 |
| 14 | 我想去旅游 | 216–233 | 236–253 |
| 15 (extension / дополнение) | 我想订一张机票 | 234–252 | 254–272 |

Lesson 15 belongs to the book but has no corresponding classroom deck among the supplied files. The 14-class classroom route should retain its order; the airline chapter can be a separate extension.

Урок 15 есть в учебнике, но соответствующей презентации среди приложений нет. Основной маршрут сохраняет порядок 14 занятий; авиаперелёты можно вынести в дополнительный раздел.

| Appendix / Приложение | Printed | PDF | Use / Назначение |
|---|---:|---:|---|
| Vocabulary / Основной словарь | 253–270 | 273–290 | Headword, pinyin, meaning and source lesson / Слово, пиньинь, значение и номер урока |
| Supplementary words / Дополнительная лексика | 271–278 | 291–298 | Expansion rather than automatic core load / Расширение, а не обязательная нагрузка целиком |
| Character list / Список иероглифов | 279–280 | 299–300 | Writing curriculum / Программа письма |
| Language points / Грамматический обзор | 281–288 | 301–308 | Cross-checking each lesson’s structures / Проверка грамматики уроков |
| Listening scripts / Тексты аудирования | 289–291 | 309–311 | Evidence for selected listening tasks / Материал для отдельных заданий |
| Sentence references / Образцы предложений | 292–294 | 312–314 | Examples explicitly marked “for reference” / Примеры, обозначенные как справочные |

## Progression / Последовательность навыков

The book teaches actions in situations. Its recurring cycle is an illustrated lead-in, vocabulary, sentence patterns, dialogue, controlled practice, a second dialogue cycle, comprehensive practice, selected characters and cultural/supplementary material. The preface favours pair/group communication and selective writing instead of requiring learners to write every spoken word. The app should keep receptive vocabulary, productive vocabulary and character writing as separate progress dimensions.

Учебник учит действовать в конкретных ситуациях. Повторяющийся цикл: вводная иллюстрация, лексика, модели предложений, диалог, тренировка по модели, второй диалогический блок, комплексные задания, избранные иероглифы и культурные/дополнительные материалы. Предисловие ориентирует на общение в парах и группах и выборочное освоение письма. В приложении следует отдельно учитывать узнавание слов, самостоятельное употребление и написание иероглифов.

1. **L1–2: establish identity, then locate an action in time.** Introductions distinguish 是 from a general English/Russian “be”; date/time work establishes broad-to-small order. Reuse identity vocabulary in a daily schedule instead of presenting numbers as an isolated list. Teach a date, a weekday, clock time and duration as different jobs.

   **Уроки 1–2: представиться, затем поместить действие во времени.** 是 нужно объяснять через отнесение к категории, а не как универсальный перевод «быть». Даты и время вводят порядок от крупного к мелкому. Лексику знакомства полезно повторять в расписании дня, различая дату, день недели, время на часах и длительность.

2. **L3–5: describe and choose people, objects and food.** Shopping introduces classifiers and degree; family introduces possession, inclusive 都 and age; ordering food adds preferences, additional requests and softened attempts. One visual counter can compare 一个, 一口 and 一碗 without implying that classifiers are merely English articles. Contrast 有点儿贵 with 便宜一点儿 using the same imagined price scale.

   **Уроки 3–5: описывать и выбирать людей, вещи и еду.** Покупки вводят счётные слова и степень признака; семья — обладание, 都 и возраст; заказ еды — предпочтения, добавление заказа и мягкую пробу действия. На одном визуальном счётчике можно сопоставить 一个, 一口 и 一碗, а 有点儿贵 и 便宜一点儿 — на общей шкале цены.

3. **L6–9: coordinate movement, people and shared attention.** Directional paths precede phone/invitation coordination; imminent events and combined time/place phrases precede locating missing objects. A movable object/map is especially useful for object 在 place versus place 有 object. Keep “I am at…” and “I am doing…” uses of 在 distinguishable. The lesson-9 final 了 should be tied to a changed/current situation, not explained as a universal past tense.

   **Уроки 6–9: согласовывать движение, встречи и внимание.** Маршруты подготавливают телефонные приглашения; близкое будущее и сочетание времени с местом — поиск предметов. Перемещаемая вещь на схеме помогает различить «предмет 在 место» и «место 有 предмет». Значения 在 как местонахождения и протекания действия нужно разделять. Конечную 了 следует связывать с изменившейся ситуацией, а не с универсальным прошедшим временем.

4. **L10–12: get help and complete institutional tasks.** A symptom description leads to asking someone to help; library registration distinguishes learned skill 会 from ability/circumstances 能; bank tasks combine sequencing, documents, quantities and repeated actions. Teach 次 as an occurrence, 趟 as a journey and 遍 as one complete pass through content. Use fictional rates and documents in exercises. In L10 the source example action + 就可以了 means an action is sufficient; a safer neutral practice example is 写名字就可以了.

   **Уроки 10–12: получить помощь и выполнить последовательность действий.** Описание самочувствия переходит к просьбе о помощи; библиотека различает выученное умение 会 и возможность 能; банковские ситуации объединяют последовательность, документы, числа и повторяемость. 次 — случай выполнения, 趟 — поездка/поход, 遍 — полный проход по материалу. Курсы валют и документы в заданиях должны быть учебными. Модель 就可以了 в уроке 10 выражает достаточность действия; нейтральный пример для практики — 写名字就可以了.

5. **L13–14: change the state of an object, then describe plans and experience.** A before/after room makes 把 intelligible: which identifiable object is acted on, what action happens, and where/how it ends up. Travel then combines plans, priorities and 过 experience. Distinguish a planned event, a completed specific event and a life experience. L14 还是 + verb can mean a considered preference; alternative-question 还是 is explicitly revisited in L15.

   **Уроки 13–14: изменить состояние предмета, затем рассказать о планах и опыте.** Комната «до и после» объясняет 把 через известный предмет, действие и результат/место. Путешествие объединяет планы, приоритеты и опыт с 过. Нужно различать намерение, конкретное завершённое событие и наличие опыта. В уроке 14 还是 + глагол может выражать выбор после размышления; альтернативный вопрос с 还是 явно рассматривается в уроке 15.

## Exercises and answers / Упражнения и ответы

`book-analysis.json` maps OCR-detected exercise and section headings by PDF page. These are navigation candidates: image-based tasks, the continuation of a group on the next page and exact item boundaries require inspection. Appendix exercise numbers alone are ambiguous because each chapter restarts numbering within groups.

В `book-analysis.json` заголовки упражнений и разделов привязаны к страницам по OCR. Это навигационные ориентиры: задания по картинкам, продолжения групп и точные границы пунктов требуют просмотра. Одного номера упражнения из приложения недостаточно, потому что нумерация начинается заново внутри разных блоков.

| Lesson | Listening evidence PDF | Appendix task type |
|---|---:|---|
| 5 | 309 | #2 answer questions about a food order / ответы о заказе еды |
| 6 | 309 | #2 true/false about a taxi conversation / верно–неверно о такси |
| 7 | 309 | #1 answer questions about an invitation/current activity/number / приглашение, действие, номер |
| 8 | 310 | #2 true/false about an appointment / встреча |
| 9 | 310 | #2 true/false about spatial relationships / расположение |
| 10 | 310 | #2 questions; source exercise at PDF 178 / вопросы на PDF 178 |
| 11 | 310–311 | #3 true/false about library and identification / библиотека и документы |
| 12 | 311 | #3 choose an answer about documents/procedures / выбор ответа |
| 13 | 311 | #2 questions about chores/plans / уборка и планы |
| 15 | 311 | #3 true/false about check-in and departure / регистрация и вылет |

No separate transcript is listed here for lessons 1–4 or 14. This does **not** prove that those chapters contain no listening or pronunciation practice. A transcript is evidence for deriving a solution, not an official answer key. Pages 312–314 provide model sentences using target characters, not a complete solution set. Open introductions, personal schedules, family descriptions and roleplays have multiple legitimate answers. Show examples and a completion rubric; do not mark a learner wrong for differing from a model.

Для уроков 1–4 и 14 в этом приложении нет отдельного текста аудирования. Это **не** означает отсутствия фонетических или слуховых заданий в самих уроках. Текст аудирования позволяет вывести ответ, но не является официальным ключом. PDF 312–314 содержит образцы предложений с изучаемыми иероглифами, а не полные решения. Знакомство, личное расписание, описание семьи и ролевые диалоги допускают разные ответы. Нужны примеры и критерии выполнения, а не наказание за несовпадение с образцом.

A verified example of task grouping is L1: Practice 1 on PDF 26 has a personal introduction and an open dialogue completion; Practice 2 starts on PDF 30 with nationality-picture prompts and continues on PDF 31 with a constrained 是/也/不 fill-in; comprehensive practice is PDF 32; target characters start PDF 33. The constrained four blanks on PDF 31 can be solved as 是 / 不 / 也 / 也, but this is an editor-derived solution, not an answer quoted from a publisher key.

Проверенный пример структуры — урок 1: Practice 1 на PDF 26 содержит личное представление и открытое дополнение диалога; Practice 2 на PDF 30 — задания по изображениям, а на PDF 31 — заполнение пропусков 是/也/不; комплексная практика — PDF 32; иероглифы — PDF 33. Для четырёх пропусков PDF 31 получаются 是 / 不 / 也 / 也, но это редакторское решение, а не ответ из издательского ключа.

## Limits and editorial decisions / Ограничения и редакторские решения

The scan has no embedded text layer. OCR can confuse tone marks, columns, numerals, partial characters and picture captions. Core index labels are also imperfect: for example, 再见 is marked as a noun in a supplementary list, and some headwords have very broad or misleading English glosses. A visually verified translation error occurs on PDF 73: Chinese 四口人 and the enumerated people indicate four family members, but the English translation says three. Use the surrounding Chinese dialogue to decide a meaning. A missing exact headword in the draft app can already be present inside a compound or reduplication; the vocabulary comparison intentionally flags this for judgment rather than automatically adding duplicates.

В скане нет текстового слоя. OCR может путать тоны, колонки, числа, части иероглифов и подписи. Сам учебник тоже содержит неточности: например, 再见 помечено как существительное в дополнительном списке, а некоторые английские переводы слишком общие. На PDF 73 визуально подтверждена ошибка: китайское 四口人 и перечисление указывают на четырёх членов семьи, но английский перевод говорит о трёх. Значение нужно устанавливать по китайскому диалогу. Отсутствующий заголовок словаря иногда уже входит в составное слово или редупликацию приложения; сравнение словарей требует редакторского решения.

The preface mentions a companion app and audio access, but original audio files were not verified inside this PDF. Browser speech synthesis is a new rendering and must be labelled accordingly. Medical dialogues should support reporting symptoms and seeking help, not teach a dosing routine as health advice. Historical bank and travel dialogues should not imply current processing times or exchange rates. Cultural descriptions should be presented as contextual source material, avoiding claims that all Chinese speakers behave alike. The two-book course description and its historical HSK statement do not establish current examination coverage or a guaranteed learning time for this app.

В предисловии упоминаются приложение и аудио, но исходные аудиофайлы внутри данного PDF не подтверждены. Браузерное озвучивание — новая синтезированная версия, что следует обозначать. Медицинские диалоги нужны для описания симптомов и обращения за помощью, а не обучения схеме лечения. Банковские и туристические ситуации не подтверждают актуальные сроки и курсы валют. Культурные описания следует давать с контекстом, без обобщений на всех носителей. Историческое описание двухтомного курса и HSK не гарантирует соответствия нынешнему экзамену или определённого срока обучения в приложении.

Additional verified details / Дополнительные проверенные сведения:

- `book-exercise-audit.json` maps every chapter's three main exercise groups, including cross-page continuations. `book-listening-solutions.json` provides editor-derived answers and explanations for all ten transcript-backed sets. L10 question 3 does not confirm the leave request was completed; L11 question 3 shortens five working days to five days; L12 question 3 turns an approximate waiting period into an exact date. These need explanation rather than strict automatic scoring.
- `book-exercise-audit.json` связывает три основных блока упражнений каждого урока со страницами, включая продолжения. `book-listening-solutions.json` содержит редакторские ответы и объяснения для всех десяти наборов с текстом аудирования. Вопрос 3 урока 10 не подтверждает завершение просьбы об освобождении; вопрос 3 урока 11 заменяет пять рабочих дней пятью днями; вопрос 3 урока 12 превращает приблизительный срок в точную дату. Здесь нужен разбор вместо жёсткой оценки.
- PDF 206 contains another verified translation error: English **12,416** conflicts with Chinese **一万两千四百零一点六**, which is **12,401.6**. The example's arithmetic, 2,000 × 6.2008, confirms the Chinese amount. This rate is an example from the source, not a current quote.
- На PDF 206 подтверждена ещё одна ошибка перевода: английское **12,416** противоречит китайскому **一万两千四百零一点六**, то есть **12 401,6**. Расчёт 2 000 × 6,2008 подтверждает китайский вариант. Курс приведён как пример из учебника, а не как актуальная котировка.
- `book-character-list.json` records **230 distinct selected writing characters** from PDF 299–300: ten digits, ten characters for L1 and fifteen for each L2–15. The L1–14 classroom route uses 215 of them. This deliberately narrower writing set should not be confused with the full spoken vocabulary.
- В `book-character-list.json` записаны **230 разных иероглифов для письма** с PDF 299–300: десять цифр, десять знаков урока 1 и по пятнадцать в уроках 2–15. Основной маршрут 1–14 включает 215 из них. Этот ограниченный письменный набор не равен полному устному словарю.
- The source note on PDF 291 explicitly says supplementary vocabulary can recur as core vocabulary in later lessons. Selected food names also occur in L5 word panels without appearing in the core index. The final curriculum therefore needs chapter panels as well as the alphabetical index.
- Примечание PDF 291 прямо объясняет, что дополнительная лексика может повторяться в основных списках следующих уроков. Некоторые названия блюд есть в панелях урока 5, но отсутствуют в основном алфавитном словаре. Поэтому программа сверяется и с панелями уроков, и с указателем.

The exact official companion video syllabi were verified on Shanghai Jiao Tong University's Coursera course pages: [Mandarin Chinese 1](https://www.coursera.org/learn/mandarin-chinese-1) corresponds to L1–5, [Mandarin Chinese 2](https://www.coursera.org/learn/mandarin-chinese-2) to L6–10, and [Mandarin Chinese 3](https://www.coursera.org/learn/mandarin-chinese-3) to L11–15, with two consecutive modules per textbook lesson. Full videos were not audited; access or payment conditions can change.

Проверены официальные программы видеокурсов Шанхайского университета Цзяотун: [Mandarin Chinese 1](https://www.coursera.org/learn/mandarin-chinese-1) соответствует урокам 1–5, [Mandarin Chinese 2](https://www.coursera.org/learn/mandarin-chinese-2) — 6–10, [Mandarin Chinese 3](https://www.coursera.org/learn/mandarin-chinese-3) — 11–15; одному уроку соответствуют два последовательных модуля. Полные видео не проверялись; условия доступа и оплаты могут меняться.

Source / Источник: `originals/Hello Chinese (Book I).pdf`.
