// Banco de perguntas unificado (Família + Ryoko)
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
  },

    // Kenjiro Takahashi (Kaze)
  {
    question: "Qual é a origem de Kenjiro Takahashi, também conhecido como Kaze?",
    options: [
      "Nasceu em Osaka, em uma família ligada ao submundo",
      "Foi criado em templos budistas no interior do Japão",
      "É descendente direto de samurais da era Edo",
      "Nasceu em Yokohama, já dentro da Tōryū Shinkai"
    ],
    answer: 0,
    explanation: "Kenjiro nasceu em Osaka, em meio aos sussurros de um submundo que sua família conhecia de perto."
  },
  {
    question: "Qual foi o papel de Kenjiro durante sua adolescência em Yokohama?",
    options: [
      "Atuar como executor violento da família",
      "Ser arquiteto de operações nos bastidores",
      "Trabalhar como mensageiro de rua",
      "Liderar um grupo de contrabandistas locais"
    ],
    answer: 1,
    explanation: "Em Yokohama, Kenjiro foi moldado como arquiteto de operações, atuando nos bastidores."
  },
  {
    question: "Por que Kenjiro recebeu o apelido de 'Kaze'?",
    options: [
      "Por sua habilidade com espadas",
      "Por sua velocidade e capacidade de infiltração e fuga sem rastros",
      "Por sua ligação espiritual com o vento",
      "Por ser um mestre em artes marciais"
    ],
    answer: 1,
    explanation: "Kenjiro ganhou o apelido de 'Kaze' — o vento — por sua capacidade de infiltração e fuga sem deixar rastros."
  },
  {
    question: "Em quais atividades Kenjiro se destacou dentro da Tōryū Shinkai?",
    options: [
      "Cassinos clandestinos, extorsões e contrabando internacional",
      "Tráfico de armas e assassinatos políticos",
      "Espionagem internacional e lavagem de dinheiro",
      "Treinamento de novos recrutas"
    ],
    answer: 0,
    explanation: "Kaze foi peça-chave em cassinos clandestinos, extorsões e contrabando internacional."
  },
  {
    question: "Qual é a marca de Kenjiro Takahashi dentro da organização?",
    options: [
      "Força bruta e intimidação",
      "Lealdade, inteligência e anonimato",
      "Ambição e busca por poder",
      "Conexões políticas e influência pública"
    ],
    answer: 1,
    explanation: "A marca de Kaze é sua lealdade, inteligência e anonimato, sempre atuando como estrategista invisível."
  },

  // Regi Moretti (Loira)
  {
    question: "Qual é a origem de Regi Moretti, conhecida como 'Loira'?",
    options: [
      "Nasceu em Yokohama, filha de um contrabandista",
      "Nasceu no interior de São Paulo, entre livros e pizzas",
      "É descendente de mafiosos italianos",
      "Foi criada em Arkham desde criança"
    ],
    answer: 1,
    explanation: "Regi nasceu no interior de SP, entre livros antigos e pizzas perfeitas."
  },
  {
    question: "Qual era a profissão de Regi antes de se envolver com o submundo?",
    options: [
      "Professora de História e Filosofia",
      "Advogada criminal",
      "Jornalista investigativa",
      "Piloto de corridas clandestinas"
    ],
    answer: 0,
    explanation: "Regi era professora de História e Filosofia, atualmente em 'licença sabática'."
  },
  {
    question: "Por que Regi recebeu o apelido de 'Loira'?",
    options: [
      "Por sua habilidade em manipular informações",
      "Por seu cabelo platinado e personalidade brilhante",
      "Por sua ligação com uma gangue de motociclistas",
      "Por ser especialista em disfarces"
    ],
    answer: 1,
    explanation: "Ela é chamada de 'Loira' por causa do cabelo platinado e da personalidade marcante."
  },
  {
    question: "Como Regi acabou se envolvendo com gangues em Los Santos?",
    options: [
      "Foi enviada pela Tōryū Shinkai como espiã",
      "Se apaixonou por um moto em uma briga de bar e ficou na cidade",
      "Foi sequestrada e obrigada a colaborar",
      "Entrou em um programa de proteção e mudou de vida"
    ],
    answer: 1,
    explanation: "Regi foi para Los Santos como intercambista, mas acabou ficando após se apaixonar em uma briga de bar."
  },
  {
    question: "Qual é a função atual de Regi dentro da Tōryū Shinkai?",
    options: [
      "Gerente de recrutamento e conselheira filosófica",
      "Chefe de segurança",
      "Responsável pelas finanças",
      "Instrutora de combate"
    ],
    answer: 0,
    explanation: "Regi se tornou gerente de recrutamento e atua como conselheira filosófica da família."
  },

    // Santiago Samora
  {
    question: "Qual foi a trajetória inicial de Santiago Samora antes de entrar para a família?",
    options: [
      "Trabalhou como motorista de táxi em Los Santos",
      "Serviu quase uma década nas Forças Armadas",
      "Era professor de educação física",
      "Foi criado em um orfanato em Arkham"
    ],
    answer: 1,
    explanation: "Santiago serviu com honra nas Forças Armadas por quase uma década, sendo conhecido por sua coragem e resistência."
  },
  {
    question: "Qual era a característica mais marcante (e problemática) de Santiago durante o serviço militar?",
    options: [
      "Excesso de agressividade",
      "Distração crônica e confusão de comandos",
      "Dificuldade em combate físico",
      "Medo de altura"
    ],
    answer: 1,
    explanation: "Apesar da coragem, Santiago era famoso por sua distração crônica, confundindo comandos e esquecendo equipamentos."
  },
  {
    question: "Qual episódio levou à sua deserção oficial?",
    options: [
      "Dormiu em serviço durante uma missão",
      "Confundiu um pombo com um drone inimigo e causou alarme falso",
      "Atacou um superior por engano",
      "Abandonou o quartel em plena operação"
    ],
    answer: 1,
    explanation: "Durante um treinamento, confundiu um pombo com um drone inimigo, causando um alarme falso que mobilizou três batalhões."
  },
  {
    question: "Como era a vida de Santiago após deixar as Forças Armadas?",
    options: [
      "Morava em um trailer atrás de um hospital psiquiátrico",
      "Trabalhava como segurança em cassinos",
      "Vivia em abrigos temporários em Arkham",
      "Mudou-se para o interior e abriu uma oficina"
    ],
    answer: 0,
    explanation: "Após ser deserdado, Santiago passou a viver em um trailer estacionado atrás de um hospital psiquiátrico."
  },
  {
    question: "Quem é Tenente na vida de Santiago?",
    options: [
      "Seu antigo comandante militar",
      "Um cachorro que ele trata como superior hierárquico",
      "Um amigo de infância",
      "Um codinome usado por ele mesmo"
    ],
    answer: 1,
    explanation: "Tenente é o cachorro de Santiago, tratado como seu superior hierárquico e consultado para decisões importantes."
  },
  {
    question: "Qual é a função atual de Santiago Samora dentro da Tōryū Shinkai?",
    options: [
      "Gerente de farm",
      "Chefe de segurança",
      "Conselheiro espiritual",
      "Instrutor de combate"
    ],
    answer: 0,
    explanation: "Hoje, Santiago se juntou à família e se tornou o gerente de farm."
  },

  // José Rossi (Tigrinho)
  {
    question: "Qual era a profissão de José Rossi antes de entrar para a Tōryū Shinkai?",
    options: [
      "Policial militar",
      "Advogado criminal",
      "Professor de artes marciais",
      "Segurança particular"
    ],
    answer: 0,
    explanation: "Antes de entrar para a família, José Rossi era policial militar."
  },
  {
    question: "Por que José Rossi, o Tigrinho, deixou a polícia?",
    options: [
      "Foi acusado injustamente de corrupção após uma operação mal-sucedida",
      "Abandonou a carreira para seguir no esporte",
      "Foi expulso por envolvimento com drogas",
      "Decidiu se mudar para o Japão por conta própria"
    ],
    answer: 0,
    explanation: "Tigrinho foi acusado injustamente de corrupção após uma operação mal-sucedida e acabou deixando a polícia."
  },
  {
    question: "Como Tigrinho chamou a atenção da Oyabun Ryoko?",
    options: [
      "Durante uma luta clandestina",
      "Trabalhando como segurança em Arkham",
      "Ao salvar um membro da família em combate",
      "Por meio de conexões políticas"
    ],
    answer: 1,
    explanation: "Enquanto trabalhava como segurança em Arkham, Tigrinho chamou a atenção de Ryoko, que o recrutou."
  },
  {
    question: "Qual é a principal característica de Tigrinho em combate?",
    options: [
      "Explosivo e impulsivo",
      "Frio e calculista",
      "Improvisador e caótico",
      "Dependente de armas de fogo"
    ],
    answer: 1,
    explanation: "Em combate, Tigrinho é frio e calculista, mantendo o controle da situação."
  },
  {
    question: "Qual é o código pessoal que Tigrinho ainda mantém mesmo no crime?",
    options: [
      "Ganância acima de tudo",
      "Honra e justiça próprias",
      "Obediência cega à família",
      "Violência sem limites"
    ],
    answer: 1,
    explanation: "Apesar de viver no submundo, Tigrinho mantém um forte senso de honra e justiça próprias."
  },

  // Mel Lira
  {
    question: "Qual era a profissão de Mel Lira antes de entrar para a Tōryū Shinkai?",
    options: [
      "Advogada criminal",
      "Médica formada",
      "Professora de filosofia",
      "Policial militar"
    ],
    answer: 1,
    explanation: "Mel Lira se formou em Medicina e sempre sonhou em salvar vidas antes de se envolver com a família."
  },
  {
    question: "Quem é Gustavo na vida de Mel Lira?",
    options: [
      "Seu irmão mais novo",
      "Seu marido, ex-militar leal e protetor",
      "Um antigo colega de faculdade",
      "Um membro da Tōryū Shinkai"
    ],
    answer: 1,
    explanation: "Gustavo é o marido de Mel, ex-militar, leal e protetor, que sempre acreditou no potencial dela."
  },
  {
    question: "Qual foi o grande dilema que levou Mel a abandonar o hospital?",
    options: [
      "A pressão financeira da família",
      "O pedido de ajuda do irmão Slaide em uma missão arriscada",
      "Um erro médico que a traumatizou",
      "A falta de reconhecimento profissional"
    ],
    answer: 1,
    explanation: "Mel abandonou o hospital para ajudar seu irmão Slaide em uma missão arriscada de levantar seis milhões em dinheiro sujo."
  },
  {
    question: "Como Mel conheceu a Tōryū Shinkai?",
    options: [
      "Foi apresentada por Gustavo",
      "Chegou ao submundo acompanhando Slaide e Gustavo",
      "Já tinha contato desde a faculdade",
      "Foi recrutada diretamente por Ryoko"
    ],
    answer: 1,
    explanation: "Mel conheceu a Tōryū Shinkai ao acompanhar Slaide e Gustavo no submundo, inicialmente apenas como observadora."
  },
  {
    question: "Qual foi a transformação de Mel após a missão dos seis milhões?",
    options: [
      "Voltou ao hospital e abandonou o crime",
      "Se tornou Dra. Mel, respeitada dentro da família",
      "Decidiu se exilar em outra cidade",
      "Passou a liderar uma facção rival"
    ],
    answer: 1,
    explanation: "Após a missão, Mel não conseguiu voltar ao hospital e se tornou Dra. Mel, respeitada dentro da Tōryū Shinkai."
  },
  {
    question: "Qual é a frase que resume a visão de Mel sobre sua nova vida?",
    options: [
      "Nem todo mundo que cura veste branco, e nem todo mundo que peca está perdido.",
      "A honra está acima de tudo.",
      "O sangue fala mais alto que a lei.",
      "A família é a única verdade."
    ],
    answer: 0,
    explanation: "Mel aprendeu que 'Nem todo mundo que cura veste branco, e nem todo mundo que peca está perdido'."
  }
];
