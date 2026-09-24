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
  // Link real extraído de https://ultronacademy.online/links/. É só um atalho
  // para a página de cadastro da corretora: não é link de afiliado, não
  // identifica o aluno e a Ultron não recebe nada por ele.
  broker: 'https://r.ryvon.io/l/1070/913',
  // Link real extraído de https://ultronacademy.online/links/
  telegram: 'https://t.me/+c1bmO-4z90M0MjMx',
  tiktok: 'https://www.tiktok.com/@ultronacademy',
  terms: null as Maybe<string>, // TODO: URL dos termos de uso
  privacy: null as Maybe<string>, // TODO: URL da política de privacidade
}

/** Fatos sobre a oferta. Tudo que for `null` fica oculto em produção. */
export const facts = {
  brokerName: null as Maybe<string>, // TODO: nome da corretora
  access: null as Maybe<string>, // TODO: "Gratuito" ou "Pago: R$ …"
  minDeposit: null as Maybe<string>, // TODO: depósito mínimo da corretora (ex.: "US$ 10")
  // TODO: como o aluno ganha acesso às aulas (ex.: "Entrando no grupo do Telegram")
  accessHow: null as Maybe<string>,
  signals: null as Maybe<string>, // TODO: o grupo do Telegram passa sinais? Resposta para o FAQ
  liveSchedule: null as Maybe<string>, // TODO: dias e horário das sessões da Sala VIP (ex.: "Seg a sex, 10h")
  cnpj: null as Maybe<string>, // TODO: CNPJ no formato 00.000.000/0000-00
}

const broker = facts.brokerName ?? 'corretora'

// A corretora aparece como "a que usamos nas aulas", nunca como condição
// para estudar com a Ultron.
export const brokerCta = facts.brokerName ? `Abrir conta na ${facts.brokerName}` : 'Abrir conta na corretora que usamos'
export const brokerCtaShort = 'Corretora'
export const brokerNote = `É a ${broker} onde a gente opera e onde as aulas são gravadas. A Ultron não tem vínculo com ela e não recebe nada pelo seu cadastro.`
export const telegramCta = 'Entrar no grupo do Telegram'

export const riskLine =
  'Operar no mercado financeiro envolve alto risco e pode levar à perda total do capital. Conteúdo educacional, não é recomendação de investimento.'

export const hero = {
  label: 'Ultron Academy / Educação em trading',
  title: 'Aulas gravadas na plataforma em que a gente opera.',
  titleSecond: 'Você aprende na tela em que vai operar.',
  body:
    'Aulas gravadas com o gráfico aberto, sessões ao vivo na Sala VIP e um grupo no Telegram onde o time responde. O dinheiro fica na sua conta: a Ultron não recebe depósito e não opera por você.',
}

// Ficha técnica do Hero. `value: null` = oculto em produção.
export const heroSpecs: { k: string; value: Maybe<string>; mono?: boolean; todo?: string }[] = [
  // Dado real informado pelo cliente. TODO: confirmar o rótulo exato
  // ("alunos cadastrados" ou "membros da comunidade").
  { k: 'Alunos', value: '16.000+', mono: true },
  { k: 'Conteúdo', value: 'Trilhas gravadas, de Fundamentos a Psicologia' },
  { k: 'Ao vivo', value: facts.liveSchedule ? `Sala VIP · ${facts.liveSchedule}` : 'Sala VIP', todo: facts.liveSchedule ? undefined : 'horário da Sala VIP' },
  { k: 'Comunidade', value: 'Grupo no Telegram' },
  {
    k: 'Corretora',
    value: facts.brokerName ? `${facts.brokerName}, a que usamos nas aulas. Sem vínculo com a Ultron` : 'A que usamos nas aulas. Sem vínculo com a Ultron',
    todo: facts.brokerName ? undefined : 'nome da corretora',
  },
  { k: 'Acesso', value: facts.accessHow, todo: 'como o aluno ganha acesso às aulas' },
  { k: 'Custo', value: facts.access, todo: 'gratuito ou pago' },
  { k: 'Depósito mín.', value: facts.minDeposit, mono: true, todo: 'depósito mínimo' },
  { k: 'Risco', value: 'Alto. Pode haver perda total do capital.' },
]

// Mercados que aparecem nas aulas (faixa estática abaixo do Hero).
// Sem cotação: a Ultron não é fonte de preço.
// TODO: confirmar com o cliente que todos esses mercados são ensinados.
export const assets = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'XRP', name: 'Ripple' },
  { symbol: 'EUR/USD', name: 'Euro / Dólar' },
  { symbol: 'GBP/USD', name: 'Libra / Dólar' },
  { symbol: 'USD/JPY', name: 'Dólar / Iene' },
  { symbol: 'XAU', name: 'Ouro' },
  { symbol: 'US100', name: 'Nasdaq 100' },
]

export const method = {
  title: 'O conteúdo, trilha por trilha',
  body:
    'As aulas são gravadas com o gráfico aberto. A marcação da zona, o critério de entrada e o lugar do stop aparecem antes do resultado, e não depois.',
  note: 'A ordem importa: setup só entra depois que a base e o gerenciamento estão firmes.',
}

// TODO: validar a ementa com o cliente. O README fala em 7 trilhas; só
// estas 5 estão confirmadas no material atual. Aulas e duração em branco.
export const tracks: { code: string; name: string; content: string; lessons: Maybe<number>; hours: Maybe<string> }[] = [
  { code: 'T01', name: 'Fundamentos', content: 'Como a plataforma funciona, leitura de candle e timeframe.', lessons: null, hours: null },
  { code: 'T02', name: 'Análise técnica', content: 'Zonas, padrões e gatilhos de entrada, marcados em cima de operações reais.', lessons: null, hours: null },
  { code: 'T03', name: 'Leitura de fluxo', content: 'Leitura do movimento enquanto ele acontece, aplicada nas sessões ao vivo.', lessons: null, hours: null },
  { code: 'T04', name: 'Gestão de risco', content: 'Stop e tamanho de posição definidos antes da entrada. Proteger o capital vem primeiro.', lessons: null, hours: null },
  { code: 'T05', name: 'Psicologia', content: 'Seguir o plano depois de uma sequência de perdas, e parar quando o dia não é seu.', lessons: null, hours: null },
]

export const steps = {
  title: 'Por onde começar',
  items: [
    {
      title: `Abra sua conta na ${broker} que usamos nas aulas`,
      body: 'Se já tiver conta nela, pule este passo. Depósitos e saques são feitos direto na corretora, com a sua autenticação.',
    },
    {
      title: 'Acesso às aulas',
      body: facts.accessHow,
      todo: 'como o aluno ganha acesso às aulas',
    },
    {
      title: 'Grupo no Telegram',
      body: 'Avisos de sessão, análises do dia e o time respondendo dúvidas de conta, plataforma e conteúdo.',
    },
    {
      title: 'Começar pelos Fundamentos',
      body: 'Sem pular etapa. As trilhas seguem a ordem Fundamentos, Análise técnica, Leitura de fluxo e Gestão de risco.',
    },
  ] as { title: string; body: Maybe<string>; todo?: string }[],
}

export const vip = {
  title: 'Operação ao vivo, com a tela aberta',
  body:
    'Na Sala VIP os traders operam ao vivo e explicam cada entrada na hora. A sessão fica registrada no grupo, com acerto e com erro.',
  // TODO: grade real de sessões (dia, horário, tema, quem conduz).
  schedule: null as Maybe<{ day: string; time: string; session: string; host: string }[]>,
  playbookTitle: 'Como cada setup do Playbook é documentado',
  playbookBody: 'Todo setup tem os mesmos campos. Dá para repetir, medir e revisar cada operação.',
  playbookFields: [
    { k: 'Entrada', v: 'O que precisa acontecer no gráfico para entrar.' },
    { k: 'Saída', v: 'Onde a operação é encerrada no ganho.' },
    { k: 'Stop', v: 'Onde a leitura está errada e a operação sai no prejuízo.' },
    { k: 'Posição', v: 'Quanto do capital vai nessa operação.' },
  ],
  // TODO: print real de uma ficha do Playbook ou da plataforma
  playbookImage: null as Maybe<string>,
}

// Número real informado pelo cliente. Os outros ficam ocultos até existir dado.
export const kpis: { value: Maybe<string>; label: string; todo?: string }[] = [
  // TODO: confirmar o rótulo exato: "alunos cadastrados" ou "membros da comunidade"
  { value: '16.000+', label: 'alunos cadastrados' },
  { value: null, label: 'aulas gravadas', todo: 'número de aulas' },
  { value: null, label: 'horas de conteúdo', todo: 'horas de conteúdo' },
  { value: null, label: 'anos de operação', todo: 'tempo de operação' },
]

export const proof = {
  title: 'Prints que os alunos mandaram',
  body: 'Conversas reais de alunos com o time. Cortamos nome, foto e dados pessoais; o resto está como veio.',
  disclaimer: 'Resultados individuais. Não representam garantia de ganho.',
  // Rótulo de cada print, na ordem de src/assets/results/result-N.webp
  captions: ['Telegram · 02/11/2025', 'Telegram', 'Telegram', 'Telegram', 'WhatsApp', 'WhatsApp'],
}

export const money = {
  title: 'Onde fica o seu dinheiro',
  body: 'Na sua conta, na corretora. A Ultron ensina; quem opera é você.',
  does: [
    'Ensina a operar, com aulas gravadas e sessões ao vivo',
    'Mostra as próprias operações na Sala VIP, com acerto e erro',
    'Responde dúvidas de conta, plataforma e conteúdo no Telegram',
  ],
  doesNot: [
    'Não recebe depósitos e não tem acesso ao seu saldo',
    'Não opera por você e não faz gestão de recursos',
    'Não é corretora, não representa a corretora e não recebe nada pelo seu cadastro nela',
    'Não promete resultado nem garante ganho',
  ],
}

export const faq: { q: string; a: Maybe<string>; todo?: string }[] = [
  {
    q: 'A Ultron é uma corretora?',
    a: 'Não. A Ultron é uma empresa de educação. Você opera na sua própria conta, numa corretora que não tem vínculo com a Ultron. A gente opera nessa mesma plataforma e ensina a operar nela.',
  },
  { q: 'Como tenho acesso às aulas?', a: facts.accessHow, todo: 'como o aluno ganha acesso às aulas' },
  {
    q: 'A Ultron ganha alguma coisa se eu abrir conta na corretora?',
    a: 'Não. O botão do site é só um atalho para a página de cadastro da corretora que usamos nas aulas. Ele não identifica você e a Ultron não recebe nada por ele.',
  },
  { q: 'Qual é a corretora?', a: facts.brokerName, todo: 'nome da corretora' },
  { q: 'Quanto custa?', a: facts.access, todo: 'gratuito ou valor' },
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
    q: 'O que tem além das aulas gravadas?',
    a: 'Sessões ao vivo na Sala VIP, revisão de operação e o time respondendo no grupo do Telegram.',
  },
  {
    q: 'Como faço depósitos e saques?',
    a: 'Direto na corretora, pela sua conta. A Ultron não recebe depósitos e não tem acesso ao seu saldo.',
  },
  {
    q: 'Dá para acompanhar pelo celular?',
    a: 'Dá. Trilhas, grupo no Telegram e sessões ao vivo funcionam no celular, e a plataforma da corretora também.',
  },
  { q: 'Como falo com o suporte?', a: 'Pelo grupo no Telegram. O time responde dúvidas de conta, plataforma e conteúdo.' },
]

export const finalCta = {
  title: 'Comece pelos Fundamentos, na mesma plataforma em que a gente opera.',
  body: 'Se preferir conhecer antes, entre no grupo do Telegram e veja como o time trabalha no dia a dia.',
}

// Texto do aviso legal definido pelo cliente. Aparece aberto no rodapé das duas páginas.
export const disclaimer = [
  'A Ultron Academy é uma empresa de educação. Não somos corretora, não recebemos depósitos, não acessamos a conta de alunos e não fazemos gestão de recursos.',
  `Não temos vínculo com a ${broker}: operamos na plataforma e ensinamos a operar nela.`,
  'O conteúdo é educacional e não constitui recomendação de investimento. Operações no mercado financeiro envolvem alto risco e podem resultar na perda total do capital. Resultados passados, inclusive os mostrados neste site, não garantem resultados futuros.',
].join(' ')

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
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron (trilhas, Sala VIP…)
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
  label: 'Experts',
  title: 'Quem dá as aulas e conduz a Sala VIP',
  body: 'Os dois operam na mesma plataforma em que ensinam, e usam nas aulas as estratégias das próprias operações.',
}
