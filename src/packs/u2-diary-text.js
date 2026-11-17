// TITLE: Daniel's Diary — Text Words
// EYEBROW: Academy Stars 5 · Unit 2 · Read a diary entry
// SUB: Тринадцать подчёркнутых слов из текста «Daniel's diary». Карточки и пять тренировок, чтобы выучить их по-настоящему.
// BOARD: Твои слова
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — слово выучено. Красная рамка — повтори его.
const META = { ls: "as5-u2-diary-text" };
const P = [
  { id: "writing", phrase: "write – wrote – written", ru: "писать, пишу", en: "to put words on paper, e.g. I'm writing this diary", say: "write, wrote, written" },
  { id: "diary", phrase: "diary", ru: "дневник", en: "a book where you write about what happens to you every day" },
  { id: "ice", phrase: "ice", ru: "лёд", en: "water that has frozen and become solid" },
  { id: "inside", phrase: "inside", ru: "внутри", en: "in or into a place, not outside" },
  { id: "blanket", phrase: "blanket", ru: "одеяло", en: "a thick cloth you put on a bed to keep warm" },
  { id: "stay", phrase: "stay – stayed", ru: "оставаться", en: "to continue to be somewhere or in a state, e.g. stay warm", say: "stay, stayed" },
  { id: "believe", phrase: "believe – believed", ru: "верить", en: "to think that something is true", say: "believe, believed" },
  { id: "terrible", phrase: "terrible", ru: "ужасный", en: "very bad" },
  { id: "missed", phrase: "miss – missed", ru: "пропустил(а)", en: "did not manage to catch something, e.g. missed the bus", say: "miss, missed" },
  { id: "usedto", phrase: "used to", ru: "раньше (делал что-то, а сейчас нет)", en: "describes something that happened often in the past but not now" },
  { id: "forgot", phrase: "forget – forgot – forgotten", ru: "забыл(а)", en: "did not remember something", say: "forget, forgot, forgotten" },
  { id: "want", phrase: "want – wanted", ru: "хотеть", en: "to wish to have or do something", say: "want, wanted" },
  { id: "tonight", phrase: "tonight", ru: "сегодня вечером / сегодня ночью", en: "this evening or this night" }
];
const DRILLS = [
  { type: "meaning", title: "Найди слово", short: "RU → EN", instr: "Прочитай слово по-русски и выбери, как оно будет по-английски." },
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Выбери слово, которое подходит по смыслу.",
    items: [
      { id: "writing", t: "Another power cut! I'm {{*writing|wrote|written}} this diary in my bedroom." },
      { id: "diary", t: "Daniel keeps a {{*diary|atlas|encyclopaedia}} and writes in it every day." },
      { id: "ice", t: "It's very cold — there's {{*ice|water|blanket}} on the inside of the window." },
      { id: "inside", t: "There's ice on the {{*inside|outside|office}} of the window." },
      { id: "blanket", t: "I've got a {{*blanket|diary|atlas}}, a torch and a hot water bottle to help me stay warm." },
      { id: "stay", t: "I've got a hot water bottle to help me {{*stay|believe|want}} warm." },
      { id: "believe", t: "You won't {{*believe|remember|forget}} what happened today." },
      { id: "terrible", t: "It was a really, really {{*terrible|freezing|missed}} day." },
      { id: "missed", t: "I {{*missed|forgot|borrowed}} the bus, so I had to walk home from school." },
      { id: "usedto", t: "I {{*used to|use to|using to}} get bad marks when I forgot my homework." },
      { id: "forgot", t: "I don't want to {{*forget|forgot|forgets}} my homework again." },
      { id: "want", t: "I don't {{*want|believe|remember}} to do that again." },
      { id: "tonight", t: "I don't know the homework for {{*tonight|today|yesterday}}!" }
    ] },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Напиши нужное слово из рамки. Следи за формой слова (прошедшее время, если нужно).",
    bank: ["writing", "diary", "ice", "inside", "blanket", "stay", "believe", "terrible", "miss", "used to", "forget", "want", "tonight"],
    items: [
      { id: "writing", t: "Daniel is [[writing]] in his [[diary#diary]] by torchlight." },
      { id: "ice", t: "There's [[ice]] on the [[inside#inside]] of the window — it's freezing!" },
      { id: "blanket", t: "A [[blanket]] and a hot water bottle help you [[stay#stay]] warm." },
      { id: "believe", t: "You won't [[believe]] what a [[terrible#terrible]] day I had." },
      { id: "missed", t: "I [[missed]] the bus and had to walk home." },
      { id: "usedto", t: "I [[used to]] get bad marks when I [[forgot#forgot]] my homework." },
      { id: "want", t: "I don't [[want]] to forget my homework for [[tonight#tonight]]." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "diary", t: "Daniel is writing in his diary because there is a power cut.", ok: true },
      { id: "ice", t: "There is ice on the outside of the window only.", ok: false, fix: "There is ice on the inside of the window." },
      { id: "blanket", t: "He has a blanket, a torch and a hot water bottle to stay warm.", ok: true },
      { id: "missed", t: "Daniel missed the bus, so he took a taxi home.", ok: false, fix: "Daniel missed the bus, so he walked home." },
      { id: "usedto", t: "Daniel use to get bad marks when he forgot his homework.", ok: false, fix: "Daniel used to get bad marks when he forgot his homework." },
      { id: "forgot", t: "His homework book was in his bag — he didn't forget it.", ok: false, fix: "His homework book wasn't there — he forgot it." },
      { id: "want", t: "Daniel doesn't want to forget his homework again.", ok: true },
      { id: "tonight", t: "Daniel doesn't know the homework for tonight.", ok: true }
    ] },
  { type: "order", title: "Собери предложение", short: "Collect", instr: "Нажимай на слова по порядку и собери предложение по-английски. Печатать не нужно.",
    items: [
      { id: "ice", q: "На окне лёд!", s: "There's ice on the window!" },
      { id: "blanket", q: "У меня есть одеяло и грелка.", s: "I've got a blanket and a hot water bottle." },
      { id: "believe", q: "Ты не поверишь!", s: "You won't believe it!" },
      { id: "missed", q: "Я пропустил автобус.", s: "I missed the bus." },
      { id: "usedto", q: "Раньше я получал плохие оценки.", s: "I used to get bad marks." },
      { id: "want", q: "Я не хочу делать это снова.", s: "I don't want to do that again." },
      { id: "tonight", q: "Я не знаю домашнее задание на сегодня вечером.", s: "I don't know the homework for tonight." }
    ] }
];
