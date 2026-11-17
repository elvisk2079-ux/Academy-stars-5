// TITLE: Daniel's Diary — Box Words
// EYEBROW: Academy Stars 5 · Unit 2 · Read a diary entry
// SUB: Десять слов из рамочки к тексту «Daniel's diary». Карточки и пять тренировок, чтобы выучить их по-настоящему.
// BOARD: Твои слова
// LEAD: Каждый правильный ответ добавляет точку. Все точки зелёные — слово выучено. Красная рамка — повтори его.
const META = { ls: "as5-u2-diary-box" };
const P = [
  { id: "atlas", phrase: "atlas", ru: "атлас (книга с картами)", en: "a book of maps" },
  { id: "borrow", phrase: "borrow – borrowed", ru: "одалживать, брать на время", en: "to take something and use it, then give it back later", say: "borrow, borrowed" },
  { id: "cassette", phrase: "cassette player", ru: "кассетный плеер", en: "an old machine for listening to music or recordings on cassette tapes" },
  { id: "diary", phrase: "diary", ru: "дневник", en: "a book where you write about what happens to you every day" },
  { id: "encyclopaedia", phrase: "encyclopaedia", ru: "энциклопедия", en: "a book or set of books with facts about many different subjects" },
  { id: "freezing", phrase: "freezing", ru: "ледяной, очень холодный", en: "extremely cold, like ice" },
  { id: "hotwaterbottle", phrase: "hot water bottle", ru: "грелка", en: "a rubber container filled with hot water, used to keep warm in bed" },
  { id: "office", phrase: "office", ru: "офис, кабинет", en: "a room or building where people do business work" },
  { id: "phonebox", phrase: "phone box", ru: "телефонная будка", en: "a small structure in the street with a public telephone inside" },
  { id: "remember", phrase: "remember – remembered", ru: "помнить, вспоминать", en: "to keep something in your memory, or to bring it back to mind", say: "remember, remembered" }
];
const DRILLS = [
  { type: "meaning", title: "Найди слово", short: "RU → EN", instr: "Прочитай слово по-русски и выбери, как оно будет по-английски." },
  { type: "gaps", title: "Choose the word", short: "Choose", instr: "Выбери слово, которое подходит по смыслу.",
    items: [
      { id: "atlas", t: "We looked at the map of Africa in the {{*atlas|diary|encyclopaedia}}." },
      { id: "borrow", t: "Can I {{*borrow|remember|forget}} your pen, please?" },
      { id: "borrow", t: "Daniel {{*borrowed|borrow|lent}} a book from the library last week." },
      { id: "cassette", t: "Before phones and computers, people listened to music on a {{*cassette player|phone box|atlas}}." },
      { id: "diary", t: "She writes what happens every day in her {{*diary|atlas|office}}." },
      { id: "encyclopaedia", t: "I found facts about volcanoes in an {{*encyclopaedia|atlas|office}}." },
      { id: "freezing", t: "Put your coat on — it's {{*freezing|hot|warm}} outside today!" },
      { id: "hotwaterbottle", t: "On cold nights I use a {{*hot water bottle|cassette player|phone box}} to stay warm." },
      { id: "office", t: "My mum works in an {{*office|atlas|phone box}} in the city centre." },
      { id: "phonebox", t: "Before mobile phones, people made calls from a {{*phone box|office|cassette player}} in the street." },
      { id: "remember", t: "I can't {{*remember|borrow|forget}} where I left my keys." },
      { id: "remember", t: "I {{*remembered|remember|remembering}} to bring my homework today." }
    ] },
  { type: "gaps", title: "Write the word", short: "Write it", instr: "Напиши нужное слово из рамки. Следи за формой слова (прошедшее время, если нужно).",
    bank: ["atlas", "borrow", "cassette player", "diary", "encyclopaedia", "freezing", "hot water bottle", "office", "phone box", "remember"],
    items: [
      { id: "atlas", t: "He used an [[atlas]] to find the country on the map." },
      { id: "borrow", t: "Could I [[borrow]] your atlas for the geography lesson?" },
      { id: "cassette", t: "Grandad still has an old [[cassette player]] in his car." },
      { id: "diary", t: "Daniel keeps a [[diary]] and writes in it every evening." },
      { id: "encyclopaedia", t: "The school library has a big [[encyclopaedia]] about animals." },
      { id: "freezing", t: "It's absolutely [[freezing]] — there's ice on the window." },
      { id: "hotwaterbottle", t: "A [[hot water bottle]] can help you sleep when it's cold." },
      { id: "office", t: "My dad works in an [[office]] near the station." },
      { id: "phonebox", t: "There used to be a red [[phone box]] on this corner." },
      { id: "remember", t: "Please [[remember]] to bring your PE kit tomorrow." }
    ] },
  { type: "tf", title: "Right or wrong?", short: "Right or wrong", instr: "Предложение верное или с ошибкой?",
    items: [
      { id: "atlas", t: "An atlas is a book full of maps.", ok: true },
      { id: "borrow", t: "I lended my friend's bike yesterday.", ok: false, fix: "I borrowed my friend's bike yesterday." },
      { id: "cassette", t: "A cassette player is used to charge your phone.", ok: false, fix: "A cassette player is used to listen to music or recordings." },
      { id: "diary", t: "Daniel writes about his day in his diary.", ok: true },
      { id: "encyclopaedia", t: "An encyclopaedia has facts about lots of different subjects.", ok: true },
      { id: "freezing", t: "It's freezing today, so I'm wearing shorts.", ok: false, fix: "It's freezing today, so I'm wearing a warm coat." },
      { id: "hotwaterbottle", t: "A hot water bottle helps you stay cool in summer.", ok: false, fix: "A hot water bottle helps you stay warm in winter." },
      { id: "office", t: "People often go to the office to do business work.", ok: true },
      { id: "phonebox", t: "A phone box is a small place in the street with a public phone.", ok: true },
      { id: "remember", t: "I forgot to remember my homework, so I did it on time.", ok: false, fix: "I remembered my homework, so I did it on time." }
    ] },
  { type: "translate", title: "Say it in English", short: "Translate", instr: "Сначала скажи вслух, потом напиши по-английски.",
    items: [
      { id: "atlas", ru: "Мы посмотрели карту Африки в атласе.", en: "We looked at the map of Africa in the atlas.", key: "atlas" },
      { id: "borrow", ru: "Можно одолжить твою ручку?", en: "Can I borrow your pen?", key: "borrow" },
      { id: "cassette", ru: "У дедушки до сих пор есть кассетный плеер.", en: "Grandad still has a cassette player.", key: "cassette player" },
      { id: "encyclopaedia", ru: "Я нашёл(нашла) это в энциклопедии.", en: "I found it in an encyclopaedia.", key: "encyclopaedia" },
      { id: "freezing", ru: "Сегодня на улице очень холодно.", en: "It's freezing outside today.", key: "freezing" },
      { id: "hotwaterbottle", ru: "Грелка помогает мне согреться ночью.", en: "A hot water bottle helps me stay warm at night.", key: "hot water bottle" },
      { id: "office", ru: "Моя мама работает в офисе.", en: "My mum works in an office.", key: "office" },
      { id: "phonebox", ru: "На этом углу раньше стояла телефонная будка.", en: "There used to be a phone box on this corner.", key: "phone box" },
      { id: "remember", ru: "Не забудь принести домашнее задание.", en: "Please remember to bring your homework.", key: "remember" }
    ] }
];
