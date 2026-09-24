/**
 * Conteúdo editável do site. Toda a copy fica aqui.
 *
 * Regra dos placeholders: campo com valor `null` é dado real que ainda
 * falta. Em `npm run dev` ele aparece como uma caixa "TODO"; no build de
 * produção o bloco correspondente simplesmente não é renderizado.
 * Preencha o valor e ele passa a aparecer nos dois ambientes.
 */

type Maybe<T> = T | null

export const links = {
  // Link real extraído de https://ultronacademy.online/links/. Grupo GRATUITO:
  // é a porta de entrada da Ultron. Não exige pagamento nem conta em corretora.
  telegram: 'https://t.me/+c1bmO-4z90M0MjMx',
  // Link real extraído de https://ultronacademy.online/links/. É só um atalho
  // para a página de cadastro da corretora: não é link de afiliado, não
  // identifica o aluno e a Ultron não recebe nada por ele. Abrir conta é opcional.
  broker: 'https://r.ryvon.io/l/1070/913',
  tiktok: 'https://www.tiktok.com/@ultronacademy',
  terms: null as Maybe<string>, // TODO: URL dos termos de uso
  privacy: null as Maybe<string>, // TODO: URL da política de privacidade
}

/** Fatos sobre a oferta. Tudo que for `null` fica oculto em produção. */
export const facts = {
  brokerName: null as Maybe<string>, // TODO: nome da corretora
  // TODO: custo das aulas e da Sala VIP (o grupo do Telegram já é gratuito)
  access: null as Maybe<string>,
  minDeposit: null as Maybe<string>, // TODO: depósito mínimo da corretora (ex.: "US$ 10")
  // TODO: como o aluno ganha acesso às aulas (ex.: "Entrando no grupo do Telegram")
  accessHow: null as Maybe<string>,
  signals: null as Maybe<string>, // TODO: o grupo do Telegram passa sinais? Resposta para o FAQ
  cnpj: null as Maybe<string>, // TODO: CNPJ no formato 00.000.000/0000-00
}

// A Sala VIP existe, mas ainda não tem link no site. Nada de botão próprio,
// e nada de dizer se é gratuita ou paga. Nunca listar junto do que é gratuito.
export const vipRoom = {
  link: null as Maybe<string>, // TODO: link da Sala VIP
  conditions: null as Maybe<string>, // TODO: condições de acesso à Sala VIP
}

const broker = facts.brokerName ?? 'corretora'

// Só existem dois destinos de CTA no site:
// 1. Telegram: grupo gratuito, porta de entrada. É o CTA principal.
// 2. Corretora: só o cadastro na corretora onde operamos e gravamos as aulas.
//    Opcional. Nunca sugerir que dá acesso à Ultron, libera aula ou é obrigatório.
export const cta = {
  telegram: 'Entrar no grupo gratuito',
  telegramLong: 'Entrar no grupo gratuito do Telegram',
  telegramShort: 'Grupo gratuito',
  broker: facts.brokerName ? `Criar conta na ${facts.brokerName}` : 'Criar conta na corretora que usamos',
  brokerShort: 'Corretora que usamos',
  note: 'O grupo do Telegram é gratuito. Conta na corretora é opcional.',
}

export const nav = [
  { label: 'Vantagens', hash: '#vantagens' },
  { label: 'Como começar', hash: '#como-comecar' },
  { label: 'Experts', hash: '#experts' },
  { label: 'Seu dinheiro', hash: '#seu-dinheiro' },
  { label: 'FAQ', hash: '#faq' },
]

export const hero = {
  badge: 'Educação em trading · Grupo gratuito no Telegram',
  title: 'Aprenda trading na tela em que a gente opera.',
  body: 'Aulas gravadas com o gráfico aberto, Sala VIP ao vivo e um grupo gratuito no Telegram, onde o time responde.',
  mockupLabel: 'Imagem ilustrativa',
}

// Ativos que aparecem nas aulas (ticker abaixo do Hero). Sem cotação.
// TODO: confirmar com o cliente que todos esses mercados são ensinados.
export const assets: { name: string; symbol: string; icons: string[] }[] = [
  { name: 'Bitcoin', symbol: 'BTC', icons: ['btc'] },
  { name: 'EUR/USD', symbol: 'Euro / Dólar', icons: ['flag-eu', 'flag-us'] },
  { name: 'Ethereum', symbol: 'ETH', icons: ['eth'] },
  { name: 'GBP/USD', symbol: 'Libra / Dólar', icons: ['flag-gb', 'flag-us'] },
  { name: 'Ouro', symbol: 'XAU/USD', icons: ['xau'] },
  { name: 'Solana', symbol: 'SOL', icons: ['sol'] },
  { name: 'USD/JPY', symbol: 'Dólar / Iene', icons: ['flag-us', 'flag-jp'] },
  { name: 'XRP', symbol: 'XRP', icons: ['xrp'] },
]

// TODO: validar a ementa com o cliente (só estas 5 trilhas estão confirmadas).
export const tracks = ['Fundamentos', 'Análise técnica', 'Leitura de fluxo', 'Gestão de risco', 'Psicologia']

export const advantages = {
  badge: 'Vantagens',
  title: 'O que você encontra na Ultron',
  trackTitle: 'Do básico à psicologia',
  trackBody: 'As trilhas seguem uma ordem. Setup só entra depois que a base e o gerenciamento estão firmes.',
  items: [
    {
      title: 'Aulas gravadas com o gráfico aberto',
      body: 'A marcação da zona, o critério de entrada e o lugar do stop aparecem antes do resultado, e não depois.',
    },
    {
      title: 'Sala VIP ao vivo',
      body: 'Traders operando com a tela aberta e explicando cada entrada na hora, com acerto e com erro.',
    },
    {
      title: 'Grupo gratuito no Telegram',
      body: 'Avisos de sessão, análises do dia e o time respondendo dúvidas de conta, plataforma e conteúdo.',
    },
  ],
}

export const steps = {
  badge: 'Como começar',
  title: 'Comece em 3 passos.',
  items: [
    {
      title: 'Entre no grupo gratuito',
      body: 'Não precisa pagar nem ter conta em corretora. É por lá que a gente avisa as sessões e responde dúvidas.',
    },
    {
      title: 'Crie conta na corretora que usamos',
      body: 'Opcional. É onde a gente opera e grava as aulas. Se já tiver conta nela, pule este passo.',
    },
    {
      title: 'Comece pelos Fundamentos',
      body: 'A primeira trilha explica a plataforma, o candle e o timeframe. O resto vem depois, na ordem.',
    },
  ],
  accessTodo: 'como o aluno ganha acesso às aulas',
}

export const team = {
  badge: 'Quem está por trás',
  title: 'Feita por quem opera.',
  teachersTitle: 'Quem ensina',
  teachersBody: 'Mateus Menezes e Adriana Costa operam na mesma plataforma em que dão aula.',
  teachersLink: 'Conhecer os experts',
  vipTitle: 'Sala VIP ao vivo',
  vipBody: 'Conduzida pela Adriana, com as operações abertas na tela do começo ao fim da sessão.',
  supportTitle: 'Suporte no Telegram',
  supportBody: 'Dúvidas de conta, plataforma e conteúdo respondidas pelo time, dentro do grupo gratuito.',
}

// Números: só dado real aparece. O contador anima até o valor final,
// mas o valor final já está no HTML (sem JS ou com movimento reduzido).
export const stats = {
  title: 'Ultron em números',
  items: [
    // Dado real informado pelo cliente.
    // TODO: confirmar o rótulo exato ("alunos cadastrados" ou "membros da comunidade")
    { value: 16000, suffix: '+', label: 'alunos cadastrados' },
    { value: null, suffix: '', label: 'aulas gravadas', todo: 'número de aulas' },
    { value: null, suffix: 'h', label: 'de conteúdo', todo: 'horas de conteúdo' },
    { value: null, suffix: '', label: 'anos de operação', todo: 'tempo de operação' },
  ] as { value: Maybe<number>; suffix: string; label: string; todo?: string }[],
}

export const money = {
  badge: 'Seu dinheiro',
  title: 'Onde fica o seu dinheiro',
  body: 'Na sua conta, na corretora. A Ultron ensina; quem opera é você.',
  listTitle: 'A Ultron não toca no seu capital',
  list: [
    'Não recebe depósitos',
    'Não acessa a sua conta nem o seu saldo',
    'Não opera por você',
    'Não faz gestão de recursos',
    'Não promete resultado nem garante ganho',
  ],
  cards: [
    {
      title: 'Depósitos e saques na corretora',
      body: 'Feitos direto na sua conta, com a sua autenticação. A Ultron não participa dessa etapa.',
    },
    {
      title: 'Sem vínculo com a corretora',
      body: 'A gente opera nela e grava as aulas nela. Não somos parceiros e não recebemos nada pelo seu cadastro.',
    },
    {
      title: 'Conteúdo educacional',
      body: 'Nada aqui é recomendação de investimento. Operar envolve alto risco e pode levar à perda total do capital.',
    },
  ],
}

export const proof = {
  badge: 'Feedbacks',
  title: 'O que os alunos mandam no grupo',
  body: 'Prints reais. Cortamos nome, foto e dados pessoais; o resto está como veio.',
  disclaimer: 'Resultados individuais. Não representam garantia de ganho.',
  // Rótulo de cada print, na ordem de src/assets/results/result-N.webp
  captions: ['Telegram · 02/11/2025', 'Telegram', 'Telegram', 'Telegram', 'WhatsApp', 'WhatsApp'],
}

export const finalCta = {
  title: 'Comece pelo grupo gratuito.',
  body: 'Entre, veja como o time trabalha no dia a dia e decida depois se quer operar junto.',
  // Só o que é de fato gratuito: o grupo do Telegram. Sala VIP não entra aqui.
  checks: ['Entrada gratuita', 'Sem cadastro em corretora', 'Avisos de sessão e análises do dia'],
}

// `todo`: dado que falta quando `a` é null. `partialTodo`: resposta existe, mas falta completar.
export const faq: { q: string; a: Maybe<string>; todo?: string; partialTodo?: string }[] = [
  {
    q: 'A Ultron é uma corretora?',
    a: 'Não. A Ultron é uma empresa de educação. Você opera na sua própria conta, numa corretora que não tem vínculo com a Ultron. A gente opera nessa mesma plataforma e ensina a operar nela.',
  },
  { q: 'Como tenho acesso às aulas?', a: facts.accessHow, todo: 'como o aluno ganha acesso às aulas' },
  {
    q: 'Quanto custa?',
    a: facts.access ? `O grupo do Telegram é gratuito. ${facts.access}` : 'O grupo do Telegram é gratuito.',
    partialTodo: facts.access ? undefined : 'custo das aulas e da Sala VIP',
  },
  {
    q: 'O que é a Sala VIP?',
    a: 'Sessões ao vivo em que os traders operam com a tela aberta e explicam cada entrada na hora.',
    partialTodo: vipRoom.conditions ? undefined : 'link e condições da Sala VIP',
  },
  {
    q: 'Preciso abrir conta na corretora?',
    a: 'Não. Para entrar no grupo do Telegram não precisa. Criar conta na corretora que usamos nas aulas é opcional, para quem quer operar na mesma plataforma.',
  },
  {
    q: 'A Ultron ganha alguma coisa se eu abrir conta na corretora?',
    a: 'Não. O botão da corretora é só um atalho para a página de cadastro dela. Ele não identifica você e a Ultron não recebe nada por ele.',
  },
  { q: 'Qual é a corretora?', a: facts.brokerName, todo: 'nome da corretora' },
  {
    q: 'Qual o valor mínimo para operar?',
    a: facts.minDeposit
      ? `O depósito mínimo da corretora é ${facts.minDeposit}. A recomendação é começar pequeno e só aumentar a mão depois de seguir o gerenciamento por um bom tempo.`
      : null,
    todo: 'depósito mínimo',
  },
  { q: 'O grupo do Telegram passa sinais?', a: facts.signals, todo: 'resposta sobre sinais' },
  {
    q: 'Preciso ter experiência para começar?',
    a: 'Não. O conteúdo começa pelos Fundamentos e só avança para setup depois que a base e a gestão de risco estão firmes.',
  },
  {
    q: 'Como faço depósitos e saques?',
    a: 'Direto na corretora, pela sua conta. A Ultron não recebe depósitos e não tem acesso ao seu saldo.',
  },
  {
    q: 'Dá para acompanhar pelo celular?',
    a: 'Dá. Aulas, grupo no Telegram e sessões ao vivo funcionam no celular, e a plataforma da corretora também.',
  },
]

export const faqSection = {
  badge: 'Perguntas frequentes',
  title: 'FAQ',
  body: 'O que perguntam antes de entrar.',
  moreTitle: 'Ainda tem dúvidas?',
  moreBody: 'Pergunte no grupo. O time responde por lá.',
}

// Texto do aviso legal definido pelo cliente. Aparece aberto no rodapé das duas páginas.
export const disclaimer = [
  'A Ultron Academy é uma empresa de educação. Não somos corretora, não recebemos depósitos, não acessamos a conta de alunos e não fazemos gestão de recursos.',
  `Não temos vínculo com a ${broker}: operamos na plataforma e ensinamos a operar nela.`,
  'O conteúdo é educacional e não constitui recomendação de investimento. Operações no mercado financeiro envolvem alto risco e podem resultar na perda total do capital. Resultados passados, inclusive os mostrados neste site, não garantem resultados futuros.',
].join(' ')

export const footer = {
  about: 'Empresa de educação em trading. Aulas gravadas com o gráfico aberto, Sala VIP ao vivo e grupo gratuito no Telegram.',
}

// Nomes conforme referência visual enviada pelo cliente. A página antiga
// /ultron-academy-2/ credita o instrutor como "Felipe Luna", e um dos prints
// agradece a "Felipe e Vitor". TODO: confirmar o nome correto.
export const instructors = {
  mateus: {
    name: 'Mateus Menezes',
    area: 'Análise técnica e gestão de risco', // TODO: confirmar especialidade
    bio: 'Ensina na comunidade a leitura de gráfico e a gestão de risco que usa nas próprias operações.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    markets: null as Maybe<string>, // TODO: ativos que opera
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron
  },
  adriana: {
    name: 'Adriana Costa',
    area: 'Estratégia e psicologia do trader', // TODO: confirmar especialidade
    bio: 'Conduz a Sala VIP e o acompanhamento de quem já opera, com foco em consistência e disciplina.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    markets: null as Maybe<string>, // TODO: ativos que opera
    atUltron: 'Conduz a Sala VIP' as Maybe<string>,
  },
}

export const expertsPage = {
  badge: 'Experts',
  title: 'Quem dá as aulas e conduz a Sala VIP',
  body: 'Os dois operam na mesma plataforma em que ensinam, e usam nas aulas as estratégias das próprias operações.',
}
