const state = {
  mode: "explore",
  filtered: [...LEGAL_MAXIMS],
  cardIndex: 0,
  quizIndex: 0,
  score: 0,
  answered: false,
  selectedTerm: null,
  selectedMeaning: null
};

const modeTitles = {
  explore: "Explore Maxims",
  flashcards: "Flashcards",
  quiz: "Quiz Mode",
  match: "Match Meanings"
};

const $ = (selector) => document.querySelector(selector);

const shuffle = (items) => {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index -= 1) {
    const target = Math.floor(Math.random() * (index + 1));
    [copy[index], copy[target]] = [copy[target], copy[index]];
  }
  return copy;
};

const normalize = (value) => value.toLowerCase().trim();

function initializeFilters() {
  const categories = ["all", ...new Set(LEGAL_MAXIMS.map((item) => item.category).sort())];
  $("#categorySelect").innerHTML = categories
    .map((category) => `<option value="${category}">${category === "all" ? "All categories" : category}</option>`)
    .join("");
}

function applyFilters() {
  const search = normalize($("#searchInput").value);
  const category = $("#categorySelect").value;
  const level = $("#levelSelect").value;

  state.filtered = LEGAL_MAXIMS.filter((item) => {
    const haystack = normalize(`${item.maxim} ${item.meaning} ${item.category} ${item.context}`);
    const matchesSearch = !search || haystack.includes(search);
    const matchesCategory = category === "all" || item.category === category;
    const matchesLevel = level === "all" || item.level === level;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  state.cardIndex = 0;
  state.quizIndex = 0;
  state.score = 0;
  state.answered = false;
  $("#visibleCount").textContent = state.filtered.length;
  renderCurrentMode();
}

function setMode(mode) {
  state.mode = mode;
  $(".tab-button.active")?.classList.remove("active");
  document.querySelector(`[data-mode="${mode}"]`).classList.add("active");
  document.querySelector(".active-panel")?.classList.remove("active-panel");
  $(`#${mode}Mode`).classList.add("active-panel");
  $("#modeTitle").textContent = modeTitles[mode];
  renderCurrentMode();
}

function renderCurrentMode() {
  if (state.mode === "explore") renderExplore();
  if (state.mode === "flashcards") renderFlashcard();
  if (state.mode === "quiz") renderQuiz();
  if (state.mode === "match") renderMatch();
}

function emptyMessage() {
  return `<article class="maxim-card"><h3>No matches yet</h3><p>Try a different search, category, or level.</p></article>`;
}

function renderExplore() {
  const grid = $("#maximGrid");
  if (!state.filtered.length) {
    grid.innerHTML = emptyMessage();
    return;
  }

  grid.innerHTML = state.filtered
    .map(
      (item) => `
        <article class="maxim-card">
          <div class="meta-row">
            <span class="pill level-${item.level}">${item.level}</span>
            <span class="pill">${item.category}</span>
          </div>
          <h3>${item.maxim}</h3>
          <p><strong>Meaning:</strong> ${item.meaning}</p>
          <p>${item.context}</p>
        </article>
      `
    )
    .join("");
}

function renderFlashcard() {
  const card = $("#flashcard");
  card.classList.remove("flipped");

  if (!state.filtered.length) {
    $("#cardLevel").textContent = "Empty";
    $("#cardMaxim").textContent = "No cards in this filter";
    $("#cardMeaning").textContent = "Try changing the filters";
    $("#cardExplanation").textContent = "";
    $("#cardContext").textContent = "";
    return;
  }

  const item = state.filtered[state.cardIndex % state.filtered.length];
  $("#cardLevel").textContent = `${item.level} / ${item.category}`;
  $("#cardLevel").className = `pill level-${item.level}`;
  $("#cardMaxim").textContent = item.maxim;
  $("#cardMeaning").textContent = item.meaning;
  $("#cardExplanation").textContent = item.context;
  $("#cardContext").textContent = `${state.cardIndex + 1} of ${state.filtered.length}`;
}

function buildQuizQuestion() {
  const pool = state.filtered.length >= 4 ? state.filtered : LEGAL_MAXIMS;
  const answer = pool[state.quizIndex % pool.length];
  const distractors = shuffle(LEGAL_MAXIMS.filter((item) => item.maxim !== answer.maxim)).slice(0, 3);
  return {
    answer,
    options: shuffle([answer, ...distractors])
  };
}

function renderQuiz() {
  const options = $("#quizOptions");
  $("#quizFeedback").textContent = "";
  $("#quizFeedback").className = "feedback";
  state.answered = false;

  if (!state.filtered.length) {
    $("#quizQuestion").textContent = "No quiz questions match your filters.";
    options.innerHTML = "";
    return;
  }

  const question = buildQuizQuestion();
  $("#quizQuestion").textContent = `What does "${question.answer.maxim}" mean?`;
  $("#quizProgress").textContent = `Question ${state.quizIndex + 1}`;
  $("#quizScore").textContent = `Score ${state.score}`;

  options.innerHTML = question.options
    .map((item) => `<button type="button" data-answer="${item.maxim}">${item.meaning}</button>`)
    .join("");

  options.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", () => checkQuizAnswer(button, question.answer.maxim));
  });
}

function checkQuizAnswer(button, correctMaxim) {
  if (state.answered) return;
  state.answered = true;

  const isCorrect = button.dataset.answer === correctMaxim;
  if (isCorrect) {
    state.score += 1;
    button.classList.add("correct");
    $("#quizFeedback").textContent = "Correct.";
    $("#quizFeedback").classList.add("good");
  } else {
    button.classList.add("wrong");
    $("#quizFeedback").textContent = `Not quite. Correct answer: ${LEGAL_MAXIMS.find((item) => item.maxim === correctMaxim).meaning}`;
    $("#quizFeedback").classList.add("bad");
  }

  $("#quizScore").textContent = `Score ${state.score}`;
  $("#quizOptions")
    .querySelectorAll("button")
    .forEach((option) => {
      if (option.dataset.answer === correctMaxim) option.classList.add("correct");
    });
}

function renderMatch() {
  const terms = $("#matchTerms");
  const meanings = $("#matchMeanings");
  const round = shuffle(state.filtered.length >= 5 ? state.filtered : LEGAL_MAXIMS).slice(0, 5);

  terms.innerHTML = round
    .map((item) => `<button class="match-card" type="button" data-id="${item.maxim}" data-kind="term">${item.maxim}</button>`)
    .join("");

  meanings.innerHTML = shuffle(round)
    .map((item) => `<button class="match-card" type="button" data-id="${item.maxim}" data-kind="meaning">${item.meaning}</button>`)
    .join("");

  state.selectedTerm = null;
  state.selectedMeaning = null;
  document.querySelectorAll(".match-card").forEach((card) => card.addEventListener("click", () => selectMatch(card)));
}

function selectMatch(card) {
  if (card.classList.contains("matched")) return;

  const kind = card.dataset.kind;
  document.querySelectorAll(`.match-card[data-kind="${kind}"]`).forEach((item) => item.classList.remove("selected"));
  card.classList.add("selected");

  if (kind === "term") state.selectedTerm = card;
  if (kind === "meaning") state.selectedMeaning = card;

  if (!state.selectedTerm || !state.selectedMeaning) return;

  const matched = state.selectedTerm.dataset.id === state.selectedMeaning.dataset.id;
  if (matched) {
    state.selectedTerm.classList.add("matched");
    state.selectedMeaning.classList.add("matched");
  }

  state.selectedTerm.classList.remove("selected");
  state.selectedMeaning.classList.remove("selected");
  state.selectedTerm = null;
  state.selectedMeaning = null;
}

function wireEvents() {
  document.querySelectorAll(".tab-button").forEach((button) => {
    button.addEventListener("click", () => setMode(button.dataset.mode));
  });

  $("#searchInput").addEventListener("input", applyFilters);
  $("#categorySelect").addEventListener("change", applyFilters);
  $("#levelSelect").addEventListener("change", applyFilters);
  $("#shuffleButton").addEventListener("click", () => {
    state.filtered = shuffle(state.filtered);
    state.cardIndex = 0;
    state.quizIndex = 0;
    renderCurrentMode();
  });

  $("#flashcard").addEventListener("click", () => $("#flashcard").classList.toggle("flipped"));
  $("#flipCard").addEventListener("click", () => $("#flashcard").classList.toggle("flipped"));
  $("#prevCard").addEventListener("click", () => {
    if (!state.filtered.length) return;
    state.cardIndex = (state.cardIndex - 1 + state.filtered.length) % state.filtered.length;
    renderFlashcard();
  });
  $("#nextCard").addEventListener("click", () => {
    if (!state.filtered.length) return;
    state.cardIndex = (state.cardIndex + 1) % state.filtered.length;
    renderFlashcard();
  });

  $("#nextQuestion").addEventListener("click", () => {
    if (!state.filtered.length) return;
    state.quizIndex += 1;
    renderQuiz();
  });

  $("#resetMatch").addEventListener("click", renderMatch);
}

initializeFilters();
wireEvents();
applyFilters();
