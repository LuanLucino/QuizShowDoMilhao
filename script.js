// Banco de perguntas unificado (Família + Ryoko + Hayate + Dohiko)
const questionBank = [
  // Família
  {
    question: "Em que contexto histórico surgiu a família Tōryū Shinkai?",
    options: [
      "Na era dos samurais feudais",
      "Após a Segunda Guerra Mundial",
      "Durante a Revolução Meiji",
      "Durante a Guerra Fria"
    ],
    answer: 1,
    explanation: "A família surgiu em meio às cinzas deixadas pela Segunda Guerra Mundial, no submundo portuário de Yokohama."
  },
  {
    question: "Qual é o significado do nome ‘Tōryū Shinkai’?",
    options: [
      "O Tigre das Águas Profundas",
      "O Dragão do Abismo do Mar",
      "O Espírito da Montanha Sagrada",
      "A Lâmina do Vento Silencioso"
    ],
    answer: 1,
    explanation: "O nome reflete ancestralidade e força estratégica."
  },
  {
    question: "Quais são os valores centrais da família Tōryū Shinkai?",
    options: [
      "Violência, medo e dominação",
      "Sigilo, riqueza e influência política",
      "Lealdade, respeito e consequência",
      "Ambição, poder e fama"
    ],
    answer: 2,
    explanation: "A família é guiada por lealdade inabalável, respeito pela palavra dada e a crença de que toda ação tem seu preço."
  },
  {
    question: "Qual é o símbolo que representa a Tōryū Shinkai?",
    options: [
      "Um dragão ascendente entre as ondas",
      "Um tigre rugindo sob a lua",
      "Um lobo solitário em meio à neve",
      "Uma espada envolta em chamas"
    ],
    answer: 0,
    explanation: "O símbolo é o dragão ascendente entre as ondas, representando poder que desperta das profundezas."
  },
  {
    question: "Quais são algumas das operações realizadas pela Tōryū Shinkai?",
    options: [
      "Contrabando, espionagem e jogos ilegais",
      "Tráfico de armas e sequestros",
      "Lavagem de dinheiro e assassinatos políticos",
      "Extorsão e controle de territórios urbanos"
    ],
    answer: 0,
    explanation: "A família atua em contrabando, espionagem, tráfico de informações e jogos ilegais, sempre com aparência refinada e discreta."
  },

  // Ryoko
  {
    question: "Quem é Tōryū Ryoko dentro da estrutura da Tōryū Shinkai?",
    options: [
      "A conselheira mais antiga da família",
      "A atual Oyabun e líder da organização",
      "A responsável pelas operações financeiras",
      "A filha de um membro exilado"
    ],
    answer: 1,
    explanation: "Ryoko é a atual Oyabun da Tōryū Shinkai, liderando com estratégia, silêncio e manipulação política."
  },
  {
    question: "Qual foi o impacto da morte de Tōryū Masamune na vida de Ryoko?",
    options: [
      "Ela cresceu sob suspeitas de conspiração e jurou restaurar o equilíbrio",
      "Ela se tornou conselheira da nova liderança",
      "Ela assumiu o comando imediatamente",
      "Ela abandonou a família e se exilou"
    ],
    answer: 0,
    explanation: "Ryoko cresceu sob a sombra da morte do pai e jurou restaurar o equilíbrio da organização."
  },
  {
    question: "Qual é a principal característica da liderança de Ryoko?",
    options: [
      "Manipulação política e estratégia silenciosa",
      "Uso da força bruta e intimidação",
      "Dependência da velha guarda",
      "Busca por fama e reconhecimento público"
    ],
    answer: 0,
    explanation: "Ryoko lidera com manipulação política, silêncio como arma e paciência como veneno lento."
  },
  {
    question: "O que simbolizam os trajes formais com bordados de dragão dourado usados por Ryoko?",
    options: [
      "Conexão com o submundo de Arkham",
      "Tradição familiar e vigilância ancestral",
      "Vaidade e status social",
      "Riqueza acumulada pela organização"
    ],
    answer: 1,
    explanation: "Os trajes lembram que o dragão ancestral ainda vigia, simbolizando tradição e vigilância."
  },
  {
    question: "Como Ryoko aprendeu a lidar com os conselheiros veteranos da família?",
    options: [
      "Delegando decisões a terceiros confiáveis",
      "Usando silêncio, diplomacia e paciência como armas",
      "Com ameaças e punições públicas",
      "Ignorando seus conselhos completamente"
    ],
    answer: 1,
    explanation: "Ryoko aprendeu a vencer sem levantar a voz, usando silêncio, diplomacia e paciência."
  },

  // Hayate
  {
    question: "Qual é o papel de Mada Hayate dentro da Tōryū Shinkai?",
    options: [
      "Conselheiro espiritual da família",
      "Braço direito da Oyabun e executor da vontade de Ryoko",
      "Responsável pelas finanças da organização",
      "Líder de uma célula rebelde"
    ],
    answer: 1,
    explanation: "Mada Hayate é o braço direito de Ryoko, atuando como executor da vontade da Oyabun e guardião da estrutura da organização."
  },
  {
    question: "O que simboliza o terno negro e a gravata vermelha usados por Hayate?",
    options: [
      "Disciplina e promessa de sangue derramado",
      "Tradição familiar e vigilância ancestral",
      "Conexão com o submundo de Arkham",
      "Vaidade e status social"
    ],
    answer: 0,
    explanation: "O terno negro e a gravata vermelha representam a disciplina de Hayate e a promessa de sangue derramado em nome da Tōryū Shinkai."
  },
  {
    question: "Como Ryoko decidiu recrutar Hayate para a Tōryū Shinkai?",
    options: [
      "Ao perceber sua lealdade e raiva transformável em força",
      "Por ser filho de um antigo aliado da família",
      "Após ele salvar sua vida em uma emboscada",
      "Por causa de sua experiência financeira"
    ],
    answer: 0,
    explanation: "Ryoko viu em Hayate uma lealdade indomável e uma raiva incandescente que poderiam ser transformadas em aço, decidindo recrutá-lo pessoalmente."
  },
  {
    question: "O que é o Espírito do Dragão do Abismo que habita Hayate?",
    options: [
      "Uma maldição ancestral que o enfraquece",
      "Um símbolo de sabedoria e paz interior",
      "Um espírito que protege os membros da família",
      "Uma entidade selada que desperta guerreiros no limite da morte"
    ],
    answer: 3,
    explanation: "O Espírito do Dragão do Abismo é uma entidade ancestral selada nos ossos da terra, que desperta apenas em guerreiros que provam sua força no limite entre vida e morte."
  },
  {
    question: "Como a influência do espírito afetou Hayate?",
    options: [
      "Fez com que abandonasse a família",
      "Tornou-o mais impulsivo e instável",
      "Deu-lhe uma aura opressora e voz grave com ecos sombrios",
      "Transformou-o em conselheiro espiritual da Oyabun"
    ],
    answer: 2,
    explanation: "Sob a influência do espírito, Hayate adquiriu uma aura opressora e uma voz grave e ressonante, carregada de ecos sombrios."
  },

  // Dohiko
  {
    question: "Qual é a origem de Dohiko Dokaitsu?",
    options: [
      "Filho de um político influente de Tóquio",
      "Filho indesejado de um traficante fracassado e de uma prostituta viciada",
      "Descendente direto de samurais da era Meiji",
      "Órfão criado em templos budistas"
    ],
    answer: 1,
    explanation: "Dohiko nasceu das sombras, filho indesejado de um traficante fracassado e de uma prostituta viciada que morreu quando ele ainda era criança."
    },
  {
    question: "O que Dohiko fazia ainda criança para sobreviver?",
    options: [
      "Trabalhava em fábricas clandestinas",
      "Era entregador de drogas pedalando bicicletas velhas",
      "Servia como guarda-costas de pequenos criminosos",
      "Vendia armas no mercado negro"
    ],
    answer: 1,
    explanation: "Ainda criança, Dohiko era usado como entregador de drogas, pedalando bicicletas velhas pelas vielas do interior do Japão."
  },
  {
    question: "Qual foi a reputação que Dohiko construiu em Osaka?",
    options: [
      "Um assassino silencioso",
      "Um fantasma das estradas, veloz e preciso",
      "Um mestre em manipulação política",
      "Um contrabandista de armas"
    ],
    answer: 1,
    explanation: "Em Osaka, Dohiko tornou-se um fantasma das estradas, conhecido por sua velocidade, precisão e silêncio."
  },
  {
    question: "Por que a Tōryū Shinkai se interessou por Dohiko?",
    options: [
      "Por sua habilidade em negociações políticas",
      "Por sua força física e brutalidade",
      "Por sua reputação de entregas rápidas e fugas limpas",
      "Por ser descendente de antigos aliados"
    ],
    answer: 2,
    explanation: "A Tōryū Shinkai viu em Dohiko não um aliado, mas uma ferramenta: veloz, preciso e calado, especialista em entregas rápidas e fugas limpas."
  },
  {
    question: "Qual é a missão atual de Dohiko Dokaitsu em Arkham?",
    options: [
      "Assumir o comando da família",
      "Treinar novos recrutas",
      "Realizar entregas rápidas e fugas limpas sem falhas",
      "Atuar como conselheiro espiritual da Oyabun"
    ],
    answer: 2,
    explanation: "Aos 30 anos, Dohiko foi enviado para Arkham com a missão de realizar entregas rápidas, fugas limpas e resultados sem falhas."
  }
];

// Configuração da missão
let totalQuestions = 16;
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
const feedbackEl = document.getElementById("feedback");
const nextBtn = document.getElementById("next-btn");
const confirmBtn = document.getElementById("confirm-btn");
const progressEl = document.getElementById("progress");
const valorEl = document.getElementById("valor");

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
    feedbackEl.textContent = "Você alcançou o valor máximo de 100.000!";
    confirmBtn.style.display = "none";
    nextBtn.style.display = "none";
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
    feedbackEl.textContent = "✅ Correto! " + currentQuestion.explanation;
    feedbackEl.style.color = "lightgreen";
  } else {
    feedbackEl.textContent = "❌ Errado! " + currentQuestion.explanation;
    feedbackEl.style.color = "red";
  }
}

confirmBtn.addEventListener("click", confirmAnswer);
nextBtn.addEventListener("click", () => {
  currentIndex++;
  showQuestion();
});

// Inicia o quiz
showQuestion();
