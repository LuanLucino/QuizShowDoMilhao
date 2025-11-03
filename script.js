/* =========================
   Contagem Regressiva
========================= */

let timerInterval;
let timeLeft = 60;

const timerEl = document.getElementById("timer");

function startTimer() {
  clearInterval(timerInterval); // limpa qualquer timer anterior
  timeLeft = 60;
  timerEl.textContent = `⏱️ Tempo: ${timeLeft}s`;

  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `⏱️ Tempo: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
      openFeedbackModal("⏰ Tempo esgotado! Você perdeu!", "orange", false);
    }
  }, 1000);
}

/* =========================
   Configuração da missão
========================= */

let skipsRemaining = 3;
let totalQuestions = 16; // limite fixo de rodadas
let currentIndex = 0;
let selectedOption = null;
let currentQuestion = {};
let usedQuestions = [];

// Valores progressivos (100 até 100.000 em 16 passos)
const valores = [
  100, 200, 500, 1000,
  2000, 5000, 10000, 20000,
  30000, 40000, 50000, 60000,
  70000, 80000, 90000, 100000
];

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const feedbackEl = document.getElementById("feedback"); // usado para avisos rápidos
const modalNextBtn = document.getElementById("modal-next-btn"); // botão do modal final
const confirmBtn = document.getElementById("confirm-btn");
const progressEl = document.getElementById("progress");
const valorEl = document.getElementById("valor");
const skipCountEl = document.getElementById("skip-count");

// Modal de feedback
const feedbackModal = document.getElementById("feedback-modal");
const feedbackMessage = document.getElementById("feedback-message");
const feedbackNextBtn = document.getElementById("feedback-next-btn");
const feedbackRestartBtn = document.getElementById("feedback-restart-btn");

function getRandomQuestion() {
  if (usedQuestions.length === questionBank.length) {
    usedQuestions = [];
  }
  let randomIndex;
  do {
    randomIndex = Math.floor(Math.random() * questionBank.length);
  } while (usedQuestions.includes(randomIndex));
  usedQuestions.push(randomIndex);
  return questionBank[randomIndex];
}

function showQuestion() {
  if (currentIndex >= totalQuestions) {
    questionEl.textContent = "🎉 Missão concluída!";
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "Você alcançou o valor máximo!";
    confirmBtn.style.display = "none";
    modalNextBtn.style.display = "none";
    return;
  }

  currentQuestion = getRandomQuestion();
  questionEl.textContent = currentQuestion.question;
  optionsEl.innerHTML = "";
  feedbackEl.textContent = "";
  selectedOption = null;

  currentQuestion.options.forEach((opt, index) => {
    const li = document.createElement("li");
    li.textContent = opt;
    li.addEventListener("click", () => selectOption(li, index));
    optionsEl.appendChild(li);
  });

  progressEl.textContent = `Pergunta ${currentIndex + 1} de ${totalQuestions}`;
  valorEl.textContent = `Valor atual: ${valores[currentIndex]}`;

  // 🔥 Reinicia o cronômetro a cada nova pergunta
  startTimer();

  // 🔄 Reseta ajudas visuais (cartas/universitários)
  if (typeof resetCards === "function") resetCards();
  if (typeof resetUniversitarios === "function") resetUniversitarios();
}

function selectOption(li, index) {
  const allOptions = optionsEl.querySelectorAll("li");
  allOptions.forEach(opt => opt.classList.remove("selected"));
  li.classList.add("selected");
  selectedOption = index;
}

function confirmAnswer() {
  if (selectedOption === null) {
    feedbackEl.textContent = "⚠️ Escolha uma opção antes de confirmar.";
    feedbackEl.style.color = "yellow";
    return;
  }

  if (selectedOption === currentQuestion.answer) {
    // Acertou → mostra modal com botão de próxima
    openFeedbackModal("✅ Correto! " + currentQuestion.explanation, "lightgreen", true);
  } else {
    // Errou → mostra modal de derrota com botão Reiniciar
    openFeedbackModal("❌ Errado! Você perdeu!", "red", false);
  }
}

// Função para abrir modal de feedback
function openFeedbackModal(message, color, showNext) {
  feedbackMessage.textContent = message;
  feedbackMessage.style.color = color;

  if (showNext) {
    feedbackNextBtn.style.display = "inline-block";
    feedbackRestartBtn.style.display = "none";
  } else {
    feedbackNextBtn.style.display = "none";
    feedbackRestartBtn.style.display = "inline-block";
  }

  feedbackModal.style.display = "block";
}

// Botão dentro do modal de feedback (quando acerta)
feedbackNextBtn.addEventListener("click", () => {
  feedbackModal.style.display = "none"; // fecha modal
  currentIndex++;
  showQuestion();
});

// Botão Reiniciar (quando erra)
feedbackRestartBtn.addEventListener("click", () => {
  resetGame();
});

function skipQuestion() {
  if (skipsRemaining > 0) {
    skipsRemaining--;
    skipCountEl.textContent = skipsRemaining; // 🔄 Atualiza contador no botão
    feedbackEl.textContent = `⏭️ Você pulou a pergunta! Restam ${skipsRemaining} pulos.`;
    feedbackEl.style.color = "cyan";

    // Sorteia uma nova pergunta sem avançar o índice
    currentQuestion = getRandomQuestion();
    questionEl.textContent = currentQuestion.question;
    optionsEl.innerHTML = "";
    selectedOption = null;

    currentQuestion.options.forEach((opt, index) => {
      const li = document.createElement("li");
      li.textContent = opt;
      li.addEventListener("click", () => selectOption(li, index));
      optionsEl.appendChild(li);
    });

    progressEl.textContent = `Pergunta ${currentIndex + 1} de ${totalQuestions}`;
    valorEl.textContent = `Valor atual: ${valores[currentIndex]}`;

    startTimer(); // reinicia o cronômetro ao pular
  } else {
    feedbackEl.textContent = "⚠️ Você já usou todos os 3 pulos!";
    feedbackEl.style.color = "orange";
  }
}

const skipBtn = document.getElementById("skip-btn");
skipBtn.addEventListener("click", skipQuestion);

confirmBtn.addEventListener("click", confirmAnswer);
modalNextBtn.addEventListener("click", () => {
  currentIndex++;
  showQuestion();
});

// Função para reiniciar o jogo
function resetGame() {
  currentIndex = 0;
  skipsRemaining = 3;
  usedQuestions = [];
  skipCountEl.textContent = skipsRemaining;
  confirmBtn.style.display = "inline-block";
  feedbackModal.style.display = "none";
  showQuestion();
}

// Inicia o quiz
showQuestion();
