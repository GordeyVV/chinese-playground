# PowerPoint embedded-media audit / Аудит вложений презентаций

All 15 supplied PPTX files were inspected at the archive, slide-relationship and OLE-stream levels. The 195 readable OLE objects consist of **194 single-character Flash animations and one Word document containing a room photograph**. No original class-dialogue recording was recovered. A blank-looking final slide can therefore contain a character animation rather than missing text.

Все 15 предоставленных PPTX проверены на уровне архива, связей слайдов и потоков OLE. Из 195 доступных объектов OLE **194 — Flash-анимации отдельных иероглифов, один — документ Word с фотографией комнаты**. Исходные записи диалогов уроков не найдены. Внешне пустой заключительный слайд может содержать анимацию иероглифа, а не пропущенный текст.

## Extracted sound / Извлечённый звук

- **76 MP3 payloads** from 75 character animations, representing **75 distinct audio hashes**. One 他 animation is duplicated in Lesson 1. Declared sound durations are 0.627–1.855 seconds. These are short character-animation sounds; their actual spoken content and pronunciation have **not** been verified by listening.
- **76 MP3-потоков** из 75 анимаций, **75 разных хешей звука**. В уроке 1 анимация 他 повторена. Длительность по метаданным — 0.627–1.855 с. Содержание и произношение **не проверены прослушиванием**.
- `source-audio/audio-manifest.json` records the source deck, exact slide numbers, OLE member, original SWF filename, extracted MP3 filename, size, checksum and duration. All extracted clips retain the original MP3 payload; none were generated or presented as dialogue audio. Both MP3 signature and source ZIP CRC were checked.
- `source-audio/audio-manifest.json` сохраняет презентацию, номера слайдов, объект OLE, исходное имя SWF, имя MP3, размер, хеш и длительность. Сохранены исходные MP3-потоки; они не выдаются за диалоги. Проверены сигнатура MP3 и CRC архивной записи.
- Four direct WAV/bin media entries are named **camera.wav, hammer.wav or type.wav** in the slide XML. These are PowerPoint transition/animation sound effects, excluded from learning audio and kept under `excluded-effects/` for audit only.
- Четыре прямых WAV/bin-вложения названы в XML **camera.wav, hammer.wav или type.wav**. Это эффекты переходов/анимации PowerPoint; они исключены из учебного аудио и перенесены в `excluded-effects/` только для проверки.

## Visual attachments / Графические вложения

All **15 EMF** images were rendered and visually inspected. The eight in Lesson 1 and six in Lesson 2 are red flower borders without linguistic content. Lesson 13's EMF is a room photograph preview. Its embedded Word document on slide 8 contains the same untidy-room JPEG and no document text; it supports an open 把/cleaning description, not a hidden worksheet or answer key.

Все **15 EMF** отрисованы и визуально проверены. Восемь в уроке 1 и шесть в уроке 2 — красные цветочные рамки без языкового содержания. EMF урока 13 показывает комнату. Вложенный Word на слайде 8 содержит ту же фотографию неубранной комнаты и не содержит текста: это опора для открытого задания с 把, а не скрытый лист упражнений или ключ.

There are **194 WMF** files: 192 are referenced as OLE previews; two additional Lesson 2 graphics show a title-slide alarm clock and a yellow flower border. Both were visually checked. 65 standard non-placeable WMF previews were not supported by Pillow; their OLE-preview role is established by XML relationships, and their underlying packages were independently parsed. No new core grammar or vocabulary was discovered in these vector graphics.

Обнаружено **194 WMF**: 192 используются как превью OLE; ещё две картинки урока 2 — будильник на титульном слайде и жёлтая цветочная рамка. Обе просмотрены. Pillow не поддержал 65 обычных WMF без placeable-заголовка; их роль превью подтверждена XML-связями, а вложенные пакеты разобраны независимо. Новая обязательная грамматика или лексика в этих векторных изображениях не обнаружена.

## Source recovery limits / Ограничения восстановления

Lesson 6 has a damaged ZIP directory and was inventoried from readable local headers. Five OLE character packages are recoverable; this is not evidence that other files never existed in the original presentation. In Lesson 5, fifteen raster members remain unreadable after local-header recovery; another JPEG is readable but fails its ZIP CRC. One Lesson 6 JPG also fails CRC. These image problems do not affect the CRC-verified OLE sound payloads, but they limit an unconditional claim of complete original visual recovery. `manifest.json` preserves each member's error/CRC status. No SWF scripts were executed.

У урока 6 повреждён каталог ZIP; использованы доступные локальные заголовки. Восстановлены пять пакетов иероглифов OLE; это не доказывает отсутствие других файлов в первоначальной презентации. В уроке 5 пятнадцать растровых вложений остались недоступны после восстановления; ещё один JPEG читается, но не проходит CRC. Один JPG урока 6 также не проходит CRC. Это не затрагивает проверенные звуковые потоки OLE, но ограничивает утверждение о полном восстановлении исходной графики. `manifest.json` сохраняет ошибки и CRC по каждой записи. Скрипты SWF не запускались.

## Package inventory / Список пакетов

| Lesson | OLE objects | Original filenames | MP3 payloads |
|---|---:|---|---:|
| Phonetics | 0 |  | 0 |
| 1 | 11 | 认.swf, 你.swf, 好.swf, 我.swf, 不.swf, 识.swf, 他.swf, 他.swf, 也.swf, 她.swf, 是.swf | 4 |
| 2 | 15 | 现.swf, 在.swf, 点.swf, 几.swf, 分.swf, 月.swf, 号.swf, 国.swf, 回.swf, 天.swf, 今.swf, 半.swf, 上.swf, 课.swf, 下.swf | 6 |
| 3 | 13 | 谢.swf, 两.swf, 个.swf, 块.swf, 钱.swf, 的.swf, 什.swf, 少.swf, 有.swf, 小.swf, 大.swf, 多.swf, 买.swf | 5 |
| 4 | 15 | 生.swf, 院.swf, 都.swf, 医.swf, 家.swf, 口.swf, 人.swf, 工.swf, 作.swf, 岁.swf, 妈.swf, 爸.swf, 谁.swf, 和.swf, 没.swf | 9 |
| 5 | 15 | 想.swf, 吃.swf, 很.swf, 儿.swf, 您.swf, 要.swf, 还.swf, 别.swf, 快.swf, 再.swf, 请.swf, 那.swf, 这.swf, 单.swf, 菜.swf | 3 |
| 6 | 5 | 地.swf, 铁.swf, 站.swf, 远.swf, 坐.swf | 2 |
| 7 | 15 | 兴.swf, 吧.swf, 次.swf, 高.swf, 可.swf, 吗.swf, 球.swf, 以.swf, 跟.swf, 起.swf, 打.swf, 友.swf, 朋.swf, 喜.swf, 欢.swf | 3 |
| 8 | 15 | 来.swf, 时.swf, 候.swf, 对.swf, 哪.swf, 周.swf, 位.swf, 午.swf, 开.swf, 找.swf, 会.swf, 行.swf, 啊.swf, 见.swf, 面.swf | 7 |
| 9 | 15 | 急.swf, 包.swf, 里.swf, 桌.swf, 呢.swf, 手.swf, 机.swf, 玩.swf, 子.swf, 着.swf, 看.swf, 电.swf, 边.swf, 脑.swf, 旁.swf | 7 |
| 10 | 15 | 片.swf, 服.swf, 头.swf, 能.swf, 疼.swf, 舒.swf, 了.swf, 药.swf, 觉.swf, 得.swf, 昨.swf, 用.swf, 假.swf, 算.swf, 帮.swf | 3 |
| 11 | 15 | 学.swf, 同.swf, 中.swf, 说.swf, 文.swf, 借.swf, 书.swf, 办.swf, 班.swf, 明.swf, 后.swf, 就.swf, 本.swf, 卡.swf, 厅.swf | 7 |
| 12 | 15 | 客.swf, 万.swf, 千.swf, 零.swf, 美.swf, 币.swf, 换.swf, 民.swf, 气.swf, 元.swf, 先.swf, 给.swf, 照.swf, 带.swf, 护.swf | 10 |
| 13 | 16 | 记.swf, 果.swf, 忘.swf, 水.swf, 把.swf, Word: room photograph, 孩.swf, 们.swf, 题.swf, 饭.swf, 过.swf, 早.swf, 杯.swf, 洗.swf, 衣.swf, 碗.swf | 6 |
| 14 | 15 | 城.swf, 长.swf, 真.swf, 马.swf, 放.swf, 暑.swf, 期.swf, 南.swf, 旅.swf, 游.swf, 海.swf, 划.swf, 计.swf, 习.swf, 实.swf | 4 |

The recovered media remain in `chinese-build/source-audio/`; no application assets were changed by this audit. Single-character clips need auditory review and source-licensing review before publication. The audit does not replace dialogue TTS or official course video links with unverified sound.

Восстановленные файлы находятся в `chinese-build/source-audio/`; аудит не изменял ресурсы приложения. Перед публикацией коротких звуков нужны прослушивание и проверка прав на исходный материал. Непроверенные фрагменты не подменяют озвучивание диалогов или официальные видеокурсы.
