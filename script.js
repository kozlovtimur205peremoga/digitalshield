<!DOCTYPE html>
<html lang="uk">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Цифровий щит</title>
  <style>
:root {
  --bg: #f4f7fb;
  --ink: #132238;
  --muted: #607087;
  --panel: #ffffff;
  --line: #d8e1ee;
  --blue: #1c64f2;
  --blue-dark: #1748ad;
  --teal: #00a7a7;
  --green: #25a56a;
  --amber: #f5a623;
  --shadow: 0 18px 50px rgba(19, 34, 56, 0.12);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  background: var(--bg);
  color: var(--ink);
  font-family: Arial, "Segoe UI", sans-serif;
  line-height: 1.6;
}

a {
  color: inherit;
  text-decoration: none;
}

.topbar {
  position: sticky;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding: 16px clamp(18px, 5vw, 70px);
  background: rgba(244, 247, 251, 0.92);
  border-bottom: 1px solid var(--line);
  backdrop-filter: blur(14px);
}

.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 800;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--ink);
  color: #ffffff;
  font-size: 14px;
}

.nav {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
}

.nav a {
  padding: 8px 12px;
  border-radius: 8px;
  color: var(--muted);
  font-weight: 700;
  font-size: 14px;
}

.nav a:hover {
  background: #e7edf6;
  color: var(--ink);
}

.hero {
  display: grid;
  grid-template-columns: minmax(0, 1.1fr) minmax(320px, 0.9fr);
  align-items: center;
  min-height: calc(100vh - 72px);
  gap: clamp(32px, 7vw, 90px);
  padding: clamp(44px, 8vw, 90px) clamp(18px, 5vw, 70px);
  overflow: hidden;
}

.hero-content {
  max-width: 700px;
}

.eyebrow {
  margin: 0 0 12px;
  color: var(--teal);
  font-size: 13px;
  font-weight: 800;
  letter-spacing: 0;
  text-transform: uppercase;
}

h1,
h2,
h3,
p {
  overflow-wrap: anywhere;
}

h1 {
  margin: 0;
  font-size: clamp(48px, 7vw, 96px);
  line-height: 0.95;
  letter-spacing: 0;
}

h2 {
  margin: 0;
  font-size: clamp(30px, 4vw, 48px);
  line-height: 1.08;
  letter-spacing: 0;
}

h3 {
  margin: 0 0 10px;
  font-size: 21px;
  line-height: 1.2;
}

.hero-text {
  max-width: 590px;
  margin: 24px 0 0;
  color: var(--muted);
  font-size: clamp(17px, 2vw, 20px);
}

.hero-actions {
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  margin-top: 32px;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 46px;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  font: inherit;
  font-weight: 800;
  cursor: pointer;
}

.primary {
  background: var(--blue);
  color: #ffffff;
}

.primary:hover {
  background: var(--blue-dark);
}

.secondary {
  background: #ffffff;
  color: var(--ink);
  border: 1px solid var(--line);
}

.security-visual {
  position: relative;
  min-height: 420px;
  border-radius: 8px;
  background:
    radial-gradient(circle at 25% 25%, rgba(0, 167, 167, 0.22), transparent 26%),
    radial-gradient(circle at 72% 70%, rgba(245, 166, 35, 0.2), transparent 24%),
    linear-gradient(145deg, #10223d, #1e5fb8);
  box-shadow: var(--shadow);
  overflow: hidden;
}

.security-visual::before {
  content: "";
  position: absolute;
  inset: 28px;
  background-image:
    linear-gradient(rgba(255, 255, 255, 0.08) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255, 255, 255, 0.08) 1px, transparent 1px);
  background-size: 34px 34px;
  border: 1px solid rgba(255, 255, 255, 0.18);
}

.shield {
  position: absolute;
  left: 50%;
  top: 50%;
  display: grid;
  place-items: center;
  width: 150px;
  height: 180px;
  transform: translate(-50%, -50%);
  background: linear-gradient(180deg, #ffffff, #dbe9ff);
  clip-path: polygon(50% 0, 92% 18%, 84% 75%, 50% 100%, 16% 75%, 8% 18%);
  box-shadow: 0 20px 45px rgba(0, 0, 0, 0.28);
}

.shield::before {
  content: "";
  width: 62px;
  height: 48px;
  border: 12px solid var(--blue);
  border-bottom: 0;
  border-radius: 26px 26px 0 0;
}

.lock-hole {
  position: absolute;
  top: 88px;
  width: 70px;
  height: 58px;
  border-radius: 8px;
  background: var(--blue);
}

.lock-hole::after {
  content: "";
  position: absolute;
  left: 50%;
  top: 15px;
  width: 12px;
  height: 25px;
  border-radius: 10px;
  background: #ffffff;
  transform: translateX(-50%);
}

.node,
.line {
  position: absolute;
  display: block;
}

.node {
  width: 22px;
  height: 22px;
  border: 4px solid #ffffff;
  border-radius: 50%;
  background: var(--teal);
  box-shadow: 0 0 0 8px rgba(255, 255, 255, 0.12);
}

.node-one { left: 19%; top: 24%; }
.node-two { right: 18%; top: 20%; background: var(--amber); }
.node-three { left: 18%; bottom: 22%; background: var(--green); }
.node-four { right: 22%; bottom: 24%; }

.line {
  height: 2px;
  background: rgba(255, 255, 255, 0.55);
  transform-origin: left center;
}

.line-one {
  left: 23%;
  top: 28%;
  width: 32%;
  transform: rotate(23deg);
}

.line-two {
  right: 22%;
  top: 26%;
  width: 27%;
  transform: rotate(148deg);
}

.line-three {
  left: 23%;
  bottom: 28%;
  width: 52%;
  transform: rotate(-12deg);
}

.intro,
.section {
  padding: clamp(48px, 8vw, 90px) clamp(18px, 5vw, 70px);
}

.intro {
  display: grid;
  grid-template-columns: minmax(0, 0.75fr) minmax(320px, 1.25fr);
  gap: 32px;
  background: #ffffff;
}

.intro p,
.section-heading p {
  color: var(--muted);
}

.stat-strip {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 14px;
}

.stat-strip article,
.rule-card,
.quiz-box,
.threat-panel {
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 8px;
}

.stat-strip article {
  padding: 18px;
}

.stat-strip strong {
  display: block;
  margin-bottom: 8px;
  color: var(--blue);
  font-size: 32px;
  line-height: 1;
}

.stat-strip span {
  color: var(--muted);
  font-weight: 600;
}

.section-heading {
  max-width: 760px;
  margin-bottom: 28px;
}

.rule-grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(180px, 1fr));
  gap: 16px;
}

.rule-card {
  min-height: 245px;
  padding: 22px;
  box-shadow: 0 12px 30px rgba(19, 34, 56, 0.08);
}

.card-number {
  display: inline-block;
  margin-bottom: 32px;
  color: var(--teal);
  font-weight: 800;
}

.rule-card p,
.threat-panel p {
  margin: 0;
  color: var(--muted);
}

.threat-band {
  background: #eaf1f9;
}

.threat-layout {
  display: grid;
  grid-template-columns: 260px minmax(0, 1fr);
  gap: 18px;
  max-width: 980px;
}

.threat-list {
  display: grid;
  gap: 10px;
  align-content: start;
}

.threat-button,
.answer-button {
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #ffffff;
  color: var(--ink);
  font: inherit;
  font-weight: 800;
  text-align: left;
  cursor: pointer;
}

.threat-button.active,
.threat-button:hover {
  border-color: var(--blue);
  background: var(--blue);
  color: #ffffff;
}

.threat-panel {
  min-height: 220px;
  padding: clamp(22px, 4vw, 36px);
  box-shadow: var(--shadow);
}

.tip {
  margin-top: 18px !important;
  padding: 14px;
  border-left: 4px solid var(--green);
  background: #eefbf5;
  color: #1c6d48 !important;
  font-weight: 700;
}

.quiz-box {
  max-width: 820px;
  padding: clamp(22px, 4vw, 34px);
  box-shadow: var(--shadow);
}

.question {
  margin: 0 0 18px;
  font-size: 22px;
  font-weight: 800;
}

.answers {
  display: grid;
  gap: 10px;
}

.answer-button:hover {
  border-color: var(--blue);
}

.answer-button.correct {
  border-color: var(--green);
  background: #e8f8f0;
}

.answer-button.wrong {
  border-color: #d64242;
  background: #fff0f0;
}

.quiz-result {
  min-height: 28px;
  margin: 18px 0;
  color: var(--muted);
  font-weight: 700;
}

.checklist-section {
  background: #ffffff;
}

.checklist {
  display: grid;
  gap: 12px;
  max-width: 760px;
}

.checklist label {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  border: 1px solid var(--line);
  border-radius: 8px;
  background: #f8fbff;
  font-weight: 700;
}

.checklist input {
  width: 22px;
  height: 22px;
  accent-color: var(--blue);
  flex: 0 0 auto;
}

.progress-wrap {
  max-width: 760px;
  margin-top: 22px;
}

.progress-label {
  display: flex;
  justify-content: space-between;
  gap: 16px;
  margin-bottom: 8px;
  font-weight: 800;
}

.progress-track {
  height: 14px;
  overflow: hidden;
  border-radius: 999px;
  background: #dce6f3;
}

.progress-fill {
  width: 0;
  height: 100%;
  background: linear-gradient(90deg, var(--blue), var(--teal), var(--green));
  transition: width 0.25s ease;
}

.footer {
  padding: 26px clamp(18px, 5vw, 70px);
  color: #ffffff;
  background: var(--ink);
  text-align: center;
}

.footer p {
  margin: 0;
}

@media (max-width: 1050px) {
  .hero,
  .intro,
  .threat-layout {
    grid-template-columns: 1fr;
  }

  .security-visual {
    min-height: 340px;
  }

  .rule-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 720px) {
  .topbar {
    align-items: flex-start;
    flex-direction: column;
  }

  .nav {
    justify-content: flex-start;
  }

  .hero {
    min-height: auto;
  }

  .hero-actions,
  .button {
    width: 100%;
  }

  .stat-strip,
  .rule-grid {
    grid-template-columns: 1fr;
  }

  .rule-card {
    min-height: 0;
  }

  .card-number {
    margin-bottom: 18px;
  }
}

</style>
</head>
<body>
  <header class="topbar">
    <a class="brand" href="#home" aria-label="На головну">
      <span class="brand-mark">CS</span>
      <span>Цифровий щит</span>
    </a>

    <nav class="nav" aria-label="Основна навігація">
      <a href="#rules">Правила</a>
      <a href="#threats">Загрози</a>
      <a href="#quiz">Тест</a>
      <a href="#checklist">Чекліст</a>
    </nav>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="hero-content">
        <p class="eyebrow">Навчальний проект з інформатики</p>
        <h1>Цифровий щит</h1>
        <p class="hero-text">
          Короткий сайт про основи кібербезпеки: як захищати паролі, розпізнавати
          шахрайство та безпечніше користуватися інтернетом щодня.
        </p>
        <div class="hero-actions">
          <a class="button primary" href="#rules">Почати</a>
          <a class="button secondary" href="#quiz">Перевірити знання</a>
        </div>
      </div>

      <div class="security-visual" aria-label="Схема захисту даних">
        <div class="shield">
          <span class="lock-hole"></span>
        </div>
        <span class="node node-one"></span>
        <span class="node node-two"></span>
        <span class="node node-three"></span>
        <span class="node node-four"></span>
        <span class="line line-one"></span>
        <span class="line line-two"></span>
        <span class="line line-three"></span>
      </div>
    </section>

    <section class="intro">
      <div>
        <h2>Чому це важливо</h2>
        <p>
          Більшість проблем в інтернеті починається не зі складного злому, а з простих
          помилок: слабкого пароля, переходу за підозрілим посиланням або публікації
          особистих даних у відкритому доступі.
        </p>
      </div>
      <div class="stat-strip">
        <article>
          <strong>1</strong>
          <span>надійний пароль може захистити кілька важливих акаунтів</span>
        </article>
        <article>
          <strong>2FA</strong>
          <span>додає другий рівень перевірки під час входу</span>
        </article>
        <article>
          <strong>0</strong>
          <span>підозрілих файлів краще відкривати без перевірки</span>
        </article>
      </div>
    </section>

    <section class="section" id="rules">
      <div class="section-heading">
        <p class="eyebrow">База безпеки</p>
        <h2>5 правил цифрової гігієни</h2>
      </div>

      <div class="rule-grid">
        <article class="rule-card">
          <span class="card-number">01</span>
          <h3>Створюй сильні паролі</h3>
          <p>Використовуй довгі паролі з літерами, цифрами та символами. Не став один пароль на всі сайти.</p>
        </article>
        <article class="rule-card">
          <span class="card-number">02</span>
          <h3>Увімкни двофакторний вхід</h3>
          <p>Код з телефону або застосунку ускладнює доступ до акаунта навіть тоді, коли пароль дізналися.</p>
        </article>
        <article class="rule-card">
          <span class="card-number">03</span>
          <h3>Перевіряй посилання</h3>
          <p>Перед переходом подивись на адресу сайту. Шахраї часто роблять сторінки, схожі на справжні.</p>
        </article>
        <article class="rule-card">
          <span class="card-number">04</span>
          <h3>Оновлюй програми</h3>
          <p>Оновлення виправляють помилки безпеки, тому їх не варто відкладати на місяці.</p>
        </article>
        <article class="rule-card">
          <span class="card-number">05</span>
          <h3>Не публікуй зайве</h3>
          <p>Адреса, номер телефону, документи та приватні фото не мають бути доступні всім.</p>
        </article>
      </div>
    </section>

    <section class="section threat-band" id="threats">
      <div class="section-heading">
        <p class="eyebrow">Типові небезпеки</p>
        <h2>Як виглядають онлайн-загрози</h2>
      </div>

      <div class="threat-layout">
        <div class="threat-list">
          <button class="threat-button active" data-threat="phishing">Фішинг</button>
          <button class="threat-button" data-threat="malware">Шкідливі файли</button>
          <button class="threat-button" data-threat="oversharing">Зайві дані</button>
        </div>

        <article class="threat-panel" aria-live="polite">
          <h3 id="threat-title">Фішинг</h3>
          <p id="threat-text">
            Це повідомлення або сайт, який підробляє відому компанію та просить ввести пароль,
            дані банківської картки або код підтвердження.
          </p>
          <p class="tip" id="threat-tip">Порада: перевір адресу сайту та не вводь пароль після переходу з підозрілого листа.</p>
        </article>
      </div>
    </section>

    <section class="section" id="quiz">
      <div class="section-heading">
        <p class="eyebrow">Міні-тест</p>
        <h2>Перевір себе</h2>
      </div>

      <div class="quiz-box">
        <p class="question" id="question">Який пароль найнадійніший?</p>
        <div class="answers" id="answers"></div>
        <div class="quiz-result" id="quiz-result">Обери відповідь, щоб побачити результат.</div>
        <button class="button primary" id="next-question" type="button">Наступне питання</button>
      </div>
    </section>

    <section class="section checklist-section" id="checklist">
      <div class="section-heading">
        <p class="eyebrow">Практична частина</p>
        <h2>Особистий чекліст безпеки</h2>
      </div>

      <div class="checklist">
        <label><input type="checkbox"> У мене різні паролі для важливих сайтів</label>
        <label><input type="checkbox"> На пошті увімкнено двофакторну перевірку</label>
        <label><input type="checkbox"> Я перевіряю адресу сайту перед входом</label>
        <label><input type="checkbox"> На пристрої встановлені оновлення</label>
        <label><input type="checkbox"> Я не відкриваю невідомі файли без перевірки</label>
      </div>

      <div class="progress-wrap">
        <div class="progress-label">
          <span>Готовність</span>
          <strong id="progress-text">0%</strong>
        </div>
        <div class="progress-track">
          <div class="progress-fill" id="progress-fill"></div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <p>Проект підготував Козлов Тимур</p>
  </footer>

  <script>
const threats = {
  phishing: {
    title: "Фішинг",
    text: "Це повідомлення або сайт, який підробляє відому компанію та просить ввести пароль, дані банківської картки або код підтвердження.",
    tip: "Порада: перевір адресу сайту та не вводь пароль після переходу з підозрілого листа."
  },
  malware: {
    title: "Шкідливі файли",
    text: "Небезпечна програма може потрапити на пристрій через піратські файли, дивні архіви або вкладення від невідомих людей.",
    tip: "Порада: завантажуй програми з офіційних сайтів і перевіряй файли перед запуском."
  },
  oversharing: {
    title: "Зайві особисті дані",
    text: "Фото документів, адреса, номер телефону або геолокація можуть допомогти шахраям дізнатися про людину забагато.",
    tip: "Порада: перед публікацією подумай, чи не може ця інформація нашкодити тобі або близьким."
  }
};

const questions = [
  {
    question: "Який пароль найнадійніший?",
    answers: ["qwerty123", "Ivan2009", "Misto!Rika_47-Den"],
    correct: 2
  },
  {
    question: "Що треба зробити з підозрілим посиланням у повідомленні?",
    answers: ["Одразу перейти", "Перевірити адресу та відправника", "Надіслати всім друзям"],
    correct: 1
  },
  {
    question: "Навіщо потрібна двофакторна перевірка?",
    answers: ["Щоб додати другий рівень захисту", "Щоб пришвидшити інтернет", "Щоб вимкнути оновлення"],
    correct: 0
  }
];

let currentQuestion = 0;
let answered = false;

const threatButtons = document.querySelectorAll(".threat-button");
const threatTitle = document.querySelector("#threat-title");
const threatText = document.querySelector("#threat-text");
const threatTip = document.querySelector("#threat-tip");

threatButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const threat = threats[button.dataset.threat];

    threatButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    threatTitle.textContent = threat.title;
    threatText.textContent = threat.text;
    threatTip.textContent = threat.tip;
  });
});

const questionElement = document.querySelector("#question");
const answersElement = document.querySelector("#answers");
const resultElement = document.querySelector("#quiz-result");
const nextButton = document.querySelector("#next-question");

function renderQuestion() {
  const item = questions[currentQuestion];

  answered = false;
  questionElement.textContent = item.question;
  resultElement.textContent = "Обери відповідь, щоб побачити результат.";
  answersElement.innerHTML = "";

  item.answers.forEach((answer, index) => {
    const button = document.createElement("button");
    button.className = "answer-button";
    button.type = "button";
    button.textContent = answer;

    button.addEventListener("click", () => checkAnswer(button, index));
    answersElement.append(button);
  });
}

function checkAnswer(button, index) {
  if (answered) {
    return;
  }

  const item = questions[currentQuestion];
  const buttons = answersElement.querySelectorAll(".answer-button");

  answered = true;

  if (index === item.correct) {
    button.classList.add("correct");
    resultElement.textContent = "Правильно. Це безпечний вибір.";
  } else {
    button.classList.add("wrong");
    buttons[item.correct].classList.add("correct");
    resultElement.textContent = "Не зовсім. Зверни увагу на правильну відповідь.";
  }
}

nextButton.addEventListener("click", () => {
  currentQuestion = (currentQuestion + 1) % questions.length;
  renderQuestion();
});

const checklistItems = document.querySelectorAll(".checklist input");
const progressFill = document.querySelector("#progress-fill");
const progressText = document.querySelector("#progress-text");

function updateProgress() {
  const checked = [...checklistItems].filter((item) => item.checked).length;
  const progress = Math.round((checked / checklistItems.length) * 100);

  progressFill.style.width = `${progress}%`;
  progressText.textContent = `${progress}%`;
}

checklistItems.forEach((item) => {
  item.addEventListener("change", updateProgress);
});

renderQuestion();
updateProgress();

</script>
</body>
</html>
