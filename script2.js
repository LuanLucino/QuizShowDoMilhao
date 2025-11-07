// =========================
// Controle das cartas
// =========================
let cardsUsed = false;
const cardsBtn = document.getElementById("cards-btn");
const cardsContainer = document.getElementById("cards-container");

// Efeitos possíveis das cartas
const cardEffects = [
  "Nada acontece",
  "Elimina 1 alternativa errada",
  "Elimina 2 alternativas erradas",
  "Elimina 3 alternativas erradas"
];

// Função para embaralhar array
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Mostrar cartas
function showCards() {
  if (cardsUsed) {
    feedbackEl.textContent = "⚠️ Você já usou as cartas nesta partida!";
    feedbackEl.style.color = "orange";
    return;
  }

  cardsContainer.innerHTML = "";
  cardsContainer.style.display = "flex";

  // Embaralha efeitos
  const shuffled = shuffle([...cardEffects]);

  shuffled.forEach(effect => {
    const card = document.createElement("div");
    card.textContent = "🂠"; // carta virada
    card.style.fontSize = "40px";
    card.style.margin = "10px";
    card.style.cursor = "pointer";

    card.addEventListener("click", () => {
      revealCard(card, effect);
    });

    cardsContainer.appendChild(card);
  });
}

// Revelar carta escolhida
function revealCard(card, effect) {
  cardsUsed = true;
  card.textContent = effect;

  feedbackEl.textContent = `🃏 Carta escolhida: ${effect}`;
  feedbackEl.style.color = "cyan";

  // Aplicar efeito
  if (effect.includes("Elimina")) {
    const numToRemove = parseInt(effect.match(/\d/)[0]);
    eliminateOptions(numToRemove);
  }

  // Esconde as outras cartas
  setTimeout(() => {
    cardsContainer.style.display = "none";
  }, 2000);
}

// Função para eliminar alternativas erradas
function eliminateOptions(num) {
  const options = Array.from(optionsEl.querySelectorAll("li"));
  const wrongOptions = options.filter((opt, idx) => idx !== currentQuestion.answer);

  shuffle(wrongOptions)
    .slice(0, num)
    .forEach(opt => {
      opt.style.textDecoration = "line-through";
      opt.style.color = "gray";
      opt.style.pointerEvents = "none";
    });
}

// Evento do botão
cardsBtn.addEventListener("click", showCards);

// Resetar cartas quando o jogo reinicia
function resetCards() {
  cardsUsed = false;
  cardsContainer.innerHTML = "";
  cardsContainer.style.display = "none";
}

// =========================
// Controle da ajuda dos universitários
// =========================
let uniUsed = false;
const uniBtn = document.getElementById("uni-btn");
const uniTimerEl = document.getElementById("uni-timer");
let uniTimerInterval;
let uniTimeLeft = 60;

function startUniTimer() {
  // 🔥 Pausa o timer principal para não conflitar
  clearInterval(timerInterval);

  // Reinicia o timer dos universitários
  clearInterval(uniTimerInterval);
  uniTimeLeft = 60;

  uniTimerInterval = setInterval(() => {
    uniTimeLeft--;
    uniTimerEl.textContent = `⏱️ ${uniTimeLeft}s`;

    if (uniTimeLeft <= 0) {
      clearInterval(uniTimerInterval);
      uniTimerEl.textContent = "⏰ Tempo dos universitários acabou!";
      uniTimerEl.style.color = "orange";

      // 🔥 Falha igual ao tempo principal
      openFeedbackModal("⏰ Tempo dos universitários acabou! Você perdeu!", "red", false);
    }
  }, 1000);

  // Mostra a primeira vez imediatamente
  feedbackEl.textContent = "🎓 Tempo dos universitários iniciado!";
  feedbackEl.style.color = "cyan";
  uniTimerEl.textContent = `⏱️ ${uniTimeLeft}s`;
  uniTimerEl.style.color = "cyan";
}

function useUniversitarios() {
  if (uniUsed) {
    feedbackEl.textContent = "⚠️ Você já usou a ajuda dos universitários!";
    feedbackEl.style.color = "orange";
    return;
  }

  uniUsed = true;
  startUniTimer();
}

uniBtn.addEventListener("click", useUniversitarios);

// Resetar universitários quando o jogo reinicia
function resetUniversitarios() {
  uniUsed = false;
  uniTimerEl.textContent = "";
  clearInterval(uniTimerInterval);
}
