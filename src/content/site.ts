/**
 * Conteúdo editável do site. Toda a copy fica aqui.
 *
 * Regra dos placeholders: campo com valor `null` é dado real que ainda
 * falta. Em `npm run dev` ele aparece como uma caixa "TODO"; no build de
 * produção o bloco correspondente simplesmente não é renderizado.
 * Preencha o valor e ele passa a aparecer nos dois ambientes.
 *
 * Como a Ultron funciona (informado pelo cliente): produto educacional.
 * 3 lives gratuitas por dia no Telegram, com o gráfico aberto e explicação
 * de análise técnica. Não há sinais, aulas gravadas, Sala VIP nem curso pago.
 *
 * Copy em linguagem educacional (política de anúncios do TikTok): nada de
 * ganho, lucro, "operar junto", sinal, compra/venda ou prova de resultado.
 */

type Maybe<T> = T | null

export const links = {
  // Link real extraído de https://ultronacademy.online/links/. Grupo GRATUITO
  // do Telegram onde acontecem as lives.
  telegram: 'https://t.me/+c1bmO-4z90M0MjMx',
  // Link real extraído de https://ultronacademy.online/links/. É só um atalho
  // para a página de cadastro da corretora: não é link de afiliado, não
  // identifica o aluno e a Ultron não recebe nada por ele. Abrir conta é opcional.
  // Fica só no rodapé e no FAQ, nunca como CTA de destaque.
  broker: 'https://r.ryvon.io/l/1095/1110',
  tiktok: 'https://www.tiktok.com/@ultronacademy',
  terms: null as Maybe<string>, // TODO: URL dos termos de uso
  privacy: null as Maybe<string>, // TODO: URL da política de privacidade
  refund: null as Maybe<string>, // TODO: URL da política de reembolso
}

/** Fatos sobre a oferta. Tudo que for `null` fica oculto em produção. */
export const facts = {
  brokerName: null as Maybe<string>, // TODO: nome da corretora
  companyName: null as Maybe<string>, // TODO: razão social (Legacy Company?)
  cnpj: null as Maybe<string>, // TODO: CNPJ no formato 00.000.000/0000-00
  liveDuration: null as Maybe<string>, // TODO: duração de cada live (ex.: "1 hora")
}

// As 3 lives diárias no grupo gratuito. TODO: horário de cada uma (ex.: "9h").
export const lives: { name: string; time: Maybe<string> }[] = [
  { name: '1ª live do dia', time: null },
  { name: '2ª live do dia', time: null },
  { name: '3ª live do dia', time: null },
]

const broker = facts.brokerName ?? 'corretora'

// CTA principal: as lives gratuitas no Telegram. A corretora não é CTA.
export const cta = {
  telegram: 'Assistir às lives gratuitas',
  telegramShort: 'Lives gratuitas',
  note: 'As lives são gratuitas e acontecem no Telegram. Não precisa de conta em corretora.',
}

export const nav = [
  { label: 'Conteúdo', hash: '#vantagens' },
  { label: 'Formação', hash: '#formacao' },
  { label: 'Experts', hash: '#experts' },
  { label: 'Transparência', hash: '#transparencia' },
  { label: 'FAQ', hash: '#faq' },
]

// Aviso obrigatório acima do CTA principal (texto definido pelo cliente)
export const riskNotice = {
  title: 'Aviso importante - conteúdo educacional',
  body: 'Este é um produto educacional que ensina conceitos e técnicas de análise técnica e operações no mercado. Não constitui recomendação de investimento. Rentabilidade passada não garante resultados futuros. Sempre consulte um profissional qualificado antes de tomar decisões de investimento. O mercado comporta riscos, incluindo perda total do capital investido.',
}

export const hero = {
  badge: 'Educação em análise técnica · Lives gratuitas',
  title: 'Aprenda análise técnica ao vivo, com o gráfico aberto.',
  body: '3 lives por dia para entender leitura de gráficos, gestão de risco e análise de mercado, com explicação passo a passo.',
  mockupLabel: 'Imagem ilustrativa',
}

// Ativos usados como exemplo de análise nas lives (ticker abaixo do Hero).
// Contexto educacional: sem cotação e sem apresentar como oportunidade.
// TODO: confirmar com o cliente que todos esses mercados aparecem nas lives.
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
  badge: 'Conteúdo',
  title: 'O que você aprende na Ultron',
  livesTitle: 'Tudo acontece ao vivo',
  livesBody: 'Não tem curso gravado. O time analisa o gráfico e explica cada marcação na hora, três vezes por dia.',
  items: [
    {
      title: 'Leitura de gráficos, com a tela aberta',
      body: 'Como marcar zonas, que critério usar em cada análise e onde fica o stop, explicado na hora, antes do desfecho e não depois.',
    },
    {
      title: 'Gestão de risco e disciplina',
      body: 'Quanto arriscar, quando parar e como seguir o plano depois de uma perda. É a parte da análise que protege o seu capital.',
    },
    {
      title: 'Dúvidas respondidas ao vivo',
      body: 'Pergunte no chat durante a live. O time responde sobre análise, leitura de gráfico e uso da plataforma.',
    },
  ],
}

// O que existe hoje, sem inventar curso: 3 lives gratuitas por dia.
// TODO: confirmar com o cliente a lista de temas abordados nas lives.
export const course = {
  badge: 'Formação',
  title: 'Como é a formação',
  body: 'Formação em análise técnica feita inteiramente ao vivo. Sem módulos gravados: os temas abaixo aparecem aplicados ao gráfico em cada live.',
  topicsTitle: 'O que é ensinado',
  topics: [
    'Leitura de gráficos de candles',
    'Tendência, suporte e resistência',
    'Marcação de zonas no gráfico',
    'Critérios de análise antes de cada decisão',
    'Posicionamento do stop',
    'Gestão de risco',
    'Psicologia e disciplina do trader',
  ],
  detailsTitle: 'Resumo',
  details: [
    { k: 'Formato', v: '3 lives por dia, ao vivo, no Telegram' },
    { k: 'Duração de cada live', v: facts.liveDuration, todo: 'duração da live' },
    { k: 'Para quem', v: 'Iniciantes e quem já estuda o mercado' },
    { k: 'Instrutores', v: 'Mateus Menezes e Adriana Costa' },
    { k: 'Preço', v: 'Gratuito' },
    { k: 'Inclui', v: 'Lives diárias e dúvidas respondidas pelo time no chat' },
  ] as { k: string; v: Maybe<string>; todo?: string }[],
}

export const steps = {
  badge: 'Como começar',
  title: 'Comece em 3 passos.',
  items: [
    {
      title: 'Acesse as lives gratuitas',
      body: 'Não precisa pagar nem ter conta em corretora. As lives acontecem no Telegram.',
    },
    {
      title: 'Acompanhe a análise',
      body: 'Veja o gráfico na tela e anote os critérios usados em cada marcação.',
    },
    {
      title: 'Pratique no seu ritmo',
      body: 'Tire dúvidas no chat e treine a leitura de gráfico, de preferência em conta demo.',
    },
  ],
}

export const team = {
  badge: 'Quem está por trás',
  title: 'Feita por quem ensina análise técnica.',
  teachersTitle: 'Quem faz as lives',
  teachersBody: 'Mateus Menezes e Adriana Costa conduzem as lives e explicam a leitura do gráfico passo a passo.',
  teachersLink: 'Conhecer os experts',
  livesTitle: '3 lives por dia',
  livesBody: 'Com o gráfico aberto, da marcação das zonas à revisão da análise, ao vivo e de graça.',
  supportTitle: 'Dúvidas no Telegram',
  supportBody: 'Perguntas sobre análise, gráficos e plataforma respondidas pelo time, no próprio grupo.',
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
    { value: 3, suffix: '', label: 'lives gratuitas por dia' },
    { value: null, suffix: '', label: 'anos de atividade', todo: 'tempo de atividade' },
  ] as { value: Maybe<number>; suffix: string; label: string; todo?: string }[],
}

export const money = {
  badge: 'Transparência',
  title: 'O que a Ultron faz, e o que não faz',
  body: 'A Ultron ensina análise técnica. Qualquer decisão sobre o seu dinheiro é sua, na sua conta.',
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
      title: 'Sem acesso ao seu dinheiro',
      body: 'Depósitos e saques, se você tiver conta em corretora, são feitos direto nela, com a sua autenticação.',
    },
    {
      title: 'Sem vínculo com a corretora',
      body: 'A plataforma dela é usada nas lives para mostrar a análise. Não somos parceiros e não recebemos nada por cadastros.',
    },
    {
      title: 'Conteúdo educacional',
      body: 'Nenhuma análise mostrada nas lives é recomendação de investimento. O mercado envolve alto risco, inclusive de perda total do capital.',
    },
  ],
}

export const finalCta = {
  title: 'Comece pela próxima live.',
  body: 'Assista a uma live gratuita, veja como a análise é feita e tire suas dúvidas no chat.',
  checks: ['Lives gratuitas', 'Sem cadastro em corretora', '3 lives por dia'],
}

// `todo`: dado que falta quando `a` é null.
export const faq: { q: string; a: Maybe<string>; todo?: string }[] = [
  {
    q: 'O que é a Ultron Academy?',
    a: 'Uma empresa de educação em análise técnica. O conteúdo é dado em 3 lives gratuitas por dia, no Telegram, com o gráfico aberto e explicação passo a passo.',
  },
  {
    q: 'Quanto custa?',
    a: 'Nada. As 3 lives do dia são gratuitas.',
  },
  {
    q: 'Para quem são as lives?',
    a: 'Para iniciantes que querem entender leitura de gráficos e para quem já estuda o mercado e quer ver análise técnica aplicada ao vivo.',
  },
  {
    q: 'Tem curso gravado?',
    a: 'Não. Todo o conteúdo é dado ao vivo, nas 3 lives do dia.',
  },
  {
    q: 'As lives são recomendação de investimento?',
    a: 'Não. As lives mostram como a análise é feita, para fins educacionais. Nenhuma análise é recomendação de compra ou venda, e cada pessoa é responsável pelas próprias decisões.',
  },
  {
    q: 'Quais os horários das lives?',
    a: lives.every((l) => l.time) ? lives.map((l) => `${l.name}: ${l.time}`).join(' · ') : null,
    todo: 'horário das 3 lives',
  },
  {
    q: 'A Ultron é uma corretora?',
    a: 'Não. A Ultron não recebe depósitos nem acessa contas. Nas lives usamos a plataforma de uma corretora sem vínculo com a Ultron, só para mostrar a análise.',
  },
  {
    q: 'Preciso abrir conta em corretora?',
    a: 'Não. Para assistir às lives não precisa. Ter conta na corretora usada nas lives é opcional e não é condição para estudar com a Ultron.',
  },
  {
    q: 'A Ultron ganha alguma coisa se eu abrir conta na corretora?',
    a: 'Não. O link da corretora no rodapé é só um atalho para a página de cadastro dela. Ele não identifica você e a Ultron não recebe nada por ele.',
  },
  { q: 'Qual é a corretora usada nas lives?', a: facts.brokerName, todo: 'nome da corretora' },
  {
    q: 'Preciso ter experiência para começar?',
    a: 'Não. Nas lives cada análise é explicada passo a passo, e dá para perguntar no chat o que não ficou claro.',
  },
  {
    q: 'Dá para acompanhar pelo celular?',
    a: 'Dá. As lives funcionam no Telegram do celular.',
  },
]

export const faqSection = {
  badge: 'Perguntas frequentes',
  title: 'FAQ',
  body: 'O que perguntam antes de começar.',
  moreTitle: 'Ainda tem dúvidas?',
  moreBody: 'Pergunte no chat de uma live. O time responde por lá.',
}

// Texto do aviso legal. Aparece aberto no rodapé das duas páginas.
export const disclaimer = [
  'A Ultron Academy é uma empresa de educação. Não somos corretora, não recebemos depósitos, não acessamos a conta de alunos e não fazemos gestão de recursos.',
  `Não temos vínculo com a ${broker}: usamos a plataforma dela nas lives apenas para demonstrar a análise.`,
  'O conteúdo é educacional e não constitui recomendação de investimento. Operações no mercado financeiro envolvem alto risco e podem resultar na perda total do capital. Resultados passados não garantem resultados futuros.',
].join(' ')

export const footer = {
  about: 'Formação em análise técnica. 3 lives gratuitas por dia no Telegram, com o gráfico aberto e explicação passo a passo.',
  institutionalTitle: 'Ultron Academy - Formação em análise técnica',
}

// Nomes conforme referência visual enviada pelo cliente. A página antiga
// /ultron-academy-2/ credita o instrutor como "Felipe Luna", e um dos prints
// agradece a "Felipe e Vitor". TODO: confirmar o nome correto.
export const instructors = {
  mateus: {
    name: 'Mateus Menezes',
    area: 'Análise técnica e gestão de risco', // TODO: confirmar especialidade
    bio: 'Conduz as lives e explica, com o gráfico aberto, a leitura de cada movimento e a gestão de risco por trás de cada análise.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    credentials: null as Maybe<string>, // TODO: formação, certificações e experiência em ensino
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron (quais lives conduz)
  },
  adriana: {
    name: 'Adriana Costa',
    area: 'Estratégia e psicologia do trader', // TODO: confirmar especialidade
    bio: 'Conduz as lives com foco em estratégia, disciplina e em seguir o plano mesmo depois de uma perda.', // TODO: bio real
    since: null as Maybe<string>, // TODO: no mercado desde (ano)
    credentials: null as Maybe<string>, // TODO: formação, certificações e experiência em ensino
    atUltron: null as Maybe<string>, // TODO: o que faz na Ultron (quais lives conduz)
  },
}

export const expertsPage = {
  badge: 'Experts',
  title: 'Quem faz as lives',
  body: 'Os dois ensinam análise técnica ao vivo, com o gráfico aberto e explicação passo a passo.',
}
