/**
 * Conteúdo editável do site. Toda a copy fica aqui.
 *
 * Regra dos placeholders: campo com valor `null` é dado real que ainda
 * falta. Em `npm run dev` ele aparece como uma caixa "TODO"; no build de
 * produção o bloco correspondente simplesmente não é renderizado.
 * Preencha o valor e ele passa a aparecer nos dois ambientes.
 *
 * Como a Ultron funciona (informado pelo cliente): tudo acontece no grupo
 * gratuito do Telegram, com 3 lives por dia e sinais manuais. Não há aulas
 * gravadas nem Sala VIP.
 */

type Maybe<T> = T | null

export const links = {
  // Link real extraído de https://ultronacademy.online/links/. Grupo GRATUITO:
  // é a porta de entrada da Ultron. As lives e os sinais acontecem nele.
  telegram: 'https://t.me/+c1bmO-4z90M0MjMx',
  // Link real extraído de https://ultronacademy.online/links/. É só um atalho
  // para a página de cadastro da corretora: não é link de afiliado, não
  // identifica o aluno e a Ultron não recebe nada por ele. Abrir conta é opcional.
  broker: 'https://r.ryvon.io/l/1095/1110',
  tiktok: 'https://www.tiktok.com/@ultronacademy',
  terms: null as Maybe<string>, // TODO: URL dos termos de uso
  privacy: null as Maybe<string>, // TODO: URL da política de privacidade
}

/** Fatos sobre a oferta. Tudo que for `null` fica oculto em produção. */
export const facts = {
  brokerName: null as Maybe<string>, // TODO: nome da corretora
  minDeposit: null as Maybe<string>, // TODO: depósito mínimo da corretora (ex.: "US$ 10")
  cnpj: null as Maybe<string>, // TODO: CNPJ no formato 00.000.000/0000-00
}

// As 3 lives diárias no grupo gratuito. TODO: horário de cada uma (ex.: "9h").
export const lives: { name: string; time: Maybe<string> }[] = [
  { name: '1ª live do dia', time: null },
  { name: '2ª live do dia', time: null },
  { name: '3ª live do dia', time: null },
]

const broker = facts.brokerName ?? 'corretora'

// Só existem dois destinos de CTA no site:
// 1. Telegram: grupo gratuito, porta de entrada. É o CTA principal.
// 2. Corretora: só o cadastro na corretora onde a gente opera nas lives.
//    Opcional. Nunca sugerir que dá acesso à Ultron ou que é obrigatório.
export const cta = {
  telegram: 'Entrar no grupo gratuito',
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
  body: '3 lives por dia com a tela aberta e sinais manuais, tudo dentro do grupo gratuito do Telegram.',
  mockupLabel: 'Imagem ilustrativa',
}

// Ativos que aparecem nas lives (ticker abaixo do Hero). Sem cotação.
// TODO: confirmar com o cliente que todos esses mercados são operados nas lives.
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

export const advantages = {
  badge: 'Vantagens',
  title: 'O que você encontra na Ultron',
  livesTitle: 'Tudo acontece ao vivo',
  livesBody: 'Não tem curso gravado. A gente opera e explica na hora, três vezes por dia, dentro do grupo.',
  items: [
    {
      title: '3 lives por dia, com a tela aberta',
      body: 'A marcação da zona, o critério de entrada e o lugar do stop explicados na hora, antes do resultado e não depois.',
    },
    {
      title: 'Sinais manuais',
      body: 'Postados pelo time no grupo, um por um, sem robô. Cada um decide se entra e com quanto; o risco é de quem opera.',
    },
    {
      title: 'Grupo gratuito no Telegram',
      body: 'É lá que acontecem as lives, os sinais e as respostas do time para dúvidas de conta e plataforma.',
    },
  ],
}

export const steps = {
  badge: 'Como começar',
  title: 'Comece em 3 passos.',
  items: [
    {
      title: 'Entre no grupo gratuito',
      body: 'Não precisa pagar nem ter conta em corretora. As lives e os sinais acontecem lá dentro.',
    },
    {
      title: 'Crie conta na corretora que usamos',
      body: 'Opcional. É onde a gente opera nas lives. Se já tiver conta nela, pule este passo.',
    },
    {
      title: 'Acompanhe as lives',
      body: 'São 3 por dia. Assista, pergunte no chat e, se quiser, opere junto na sua própria conta.',
    },
  ],
}

export const team = {
  badge: 'Quem está por trás',
  title: 'Feita por quem opera.',
  teachersTitle: 'Quem faz as lives',
  teachersBody: 'Mateus Menezes e Adriana Costa operam ao vivo na mesma plataforma que você vai usar.',
  teachersLink: 'Conhecer os experts',
  livesTitle: '3 lives por dia',
  livesBody: 'Com a tela aberta, do planejamento ao fechamento da operação, dentro do grupo gratuito.',
  supportTitle: 'Suporte no Telegram',
  supportBody: 'Dúvidas de conta, plataforma e operação respondidas pelo time, no próprio grupo.',
}

// Números: só dado real aparece. O contador anima até o valor final,
// mas o valor final já está no HTML (sem JS ou com movimento reduzido).
export const stats = {
  title: 'Ultron em números',
  items: [
    // Dado real informado pelo cliente.
    // TODO: confirmar o rótulo exato ("alunos cadastrados" ou "membros da comunidade")
    { value: 16000, suffix: '+', label: 'alunos cadastrados' },
    // Dado real informado pelo cliente.
    { value: 3, suffix: '', label: 'lives por dia no grupo gratuito' },
    { value: null, suffix: '', label: 'anos de operação', todo: 'tempo de operação' },
  ] as { value: Maybe<number>; suffix: string; label: string; todo?: string }[],
}

export const money = {
  badge: 'Seu dinheiro',
  title: 'Onde fica o seu dinheiro',
  body: 'Na sua conta, na corretora. A Ultron opera e explica ao vivo; quem decide e opera na sua conta é você.',
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
      body: 'A gente opera nela durante as lives. Não somos parceiros e não recebemos nada pelo seu cadastro.',
    },
    {
      title: 'Sinal não é garantia',
      body: 'Sinais e lives não são recomendação de investimento. Operar envolve alto risco e pode levar à perda total do capital.',
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
  body: 'Entre, assista a uma live e decida depois se quer operar junto.',
  // Tudo aqui é de fato gratuito: acontece no grupo do Telegram.
  checks: ['Entrada gratuita', 'Sem cadastro em corretora', '3 lives por dia'],
}

// `todo`: dado que falta quando `a` é null.
export const faq: { q: string; a: Maybe<string>; todo?: string }[] = [
  {
    q: 'A Ultron é uma corretora?',
    a: 'Não. A Ultron é uma empresa de educação. Você opera na sua própria conta, numa corretora que não tem vínculo com a Ultron. A gente opera nessa mesma plataforma durante as lives.',
  },
  {
    q: 'Quanto custa?',
    a: 'Nada para entrar. O grupo do Telegram é gratuito, e as 3 lives do dia e os sinais acontecem nele.',
  },
  {
    q: 'Tem curso gravado?',
    a: 'Não. Tudo acontece ao vivo, nas 3 lives do dia, e no grupo do Telegram.',
  },
  {
    q: 'Como funcionam os sinais?',
    a: 'São manuais: o time posta no grupo, um por um, sem robô. Sinal não é recomendação de investimento. Cada um decide se entra e com quanto, e o risco é de quem opera.',
  },
  {
    q: 'Quais os horários das lives?',
    a: lives.every((l) => l.time) ? lives.map((l) => `${l.name}: ${l.time}`).join(' · ') : null,
    todo: 'horário das 3 lives',
  },
  {
    q: 'Preciso abrir conta na corretora?',
    a: 'Não. Para entrar no grupo e assistir às lives não precisa. Criar conta na corretora que usamos é opcional, para quem quer operar na mesma plataforma.',
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
  {
    q: 'Preciso ter experiência para começar?',
    a: 'Não. Nas lives cada entrada é explicada na hora, e dá para perguntar no grupo o que não ficou claro.',
  },
  {
    q: 'Como faço depósitos e saques?',
    a: 'Direto na corretora, pela sua conta. A Ultron não recebe depósitos e não tem acesso ao seu saldo.',
  },
  {
    q: 'Dá para acompanhar pelo celular?',
    a: 'Dá. O grupo e as lives funcionam no Telegram do celular, e a plataforma da corretora também.',
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
  about: 'Empresa de educação em trading. 3 lives por dia e sinais manuais, tudo no grupo gratuito do Telegram.',
}

// Nomes conforme referência visual enviada pelo cliente. A página antiga
// /ultron-academy-2/ credita o instrutor como "Felipe Luna", e um dos prints
// agradece a "Felipe e Vitor". TODO: confirmar o nome correto.
export const instructors = {
  mateus: {
    name: 'Mateus Menezes',
    area: 'Análise técnica e gestão de risco', // TODO: confirmar especialidade
    bio: 'Opera ao vivo no grupo e explica a leitura de gráfico e a gestão de risco de cada entrada.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    markets: null as Maybe<string>, // TODO: ativos que opera
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron (quais lives conduz)
  },
  adriana: {
    name: 'Adriana Costa',
    area: 'Estratégia e psicologia do trader', // TODO: confirmar especialidade
    bio: 'Opera ao vivo no grupo, com foco em estratégia e em seguir o plano mesmo depois de uma perda.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    markets: null as Maybe<string>, // TODO: ativos que opera
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron (quais lives conduz)
  },
}

export const expertsPage = {
  badge: 'Experts',
  title: 'Quem faz as lives',
  body: 'Os dois operam ao vivo no grupo gratuito, na mesma plataforma que você vai usar.',
}
