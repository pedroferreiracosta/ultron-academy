/**
 * Conteúdo editável da landing page.
 * Troque os valores abaixo — nenhum outro arquivo precisa ser tocado
 * para atualizar textos, links, preços ou provas sociais.
 *
 * Campos marcados com "// TODO" ainda são placeholders aguardando
 * dado real do cliente (ver README.md para a lista completa).
 */

export const links = {
  // Link real extraído de https://ultronacademy.online/links/ (Realizar cadastro / Abra sua conta na corretora)
  broker: 'https://r.ryvon.io/l/1070/913',
  // Link real extraído de https://ultronacademy.online/links/ (Telegram — Comunidade e sinais diários)
  telegram: 'https://t.me/+c1bmO-4z90M0MjMx',
  // TODO: nenhum link de WhatsApp foi encontrado em /links/ — substituir quando disponível
  whatsapp: '#',
  // TODO: checkout dedicado da Sala VIP — hoje reaproveita o link da corretora
  vip: 'https://r.ryvon.io/l/1070/913',
  // TODO: redes sociais não localizadas em /links/
  instagram: '#',
  youtube: '#',
  tiktok: '#',
  terms: '#',
  privacy: '#',
}

// Nomes e tags conforme referência visual enviada pelo cliente
// ("ChatGPT Image 14 de set. de 2026"). Observação: a página atual do
// cliente em /ultron-academy-2/ credita o instrutor como "Felipe Luna" —
// a referência usa "Mateus Menezes". Mantido conforme a referência mais
// recente; confirmar com o cliente qual nome é o correto antes de publicar.
export const instructors = {
  mateus: {
    name: 'Mateus Menezes',
    role: 'Análise técnica e gestão de risco', // TODO: cargo/especialidade real a confirmar com o cliente
    tags: ['Análise', 'Estratégia', 'Disciplina', 'Resultados'],
    bio: 'Ensina o método aplicado todos os dias dentro da comunidade, da leitura de gráfico à gestão de risco.', // TODO: bio real
  },
  adriana: {
    name: 'Adriana Costa',
    role: 'Estratégia e psicologia do trader', // TODO: cargo/especialidade real a confirmar com o cliente
    tags: ['Estratégia', 'Gestão', 'Psicologia', 'Evolução'],
    bio: 'Conduz a Sala VIP e o acompanhamento de quem já opera, com foco em consistência e disciplina.', // TODO: bio real
  },
}

export const kpis = [
  { value: 12000, suffix: '+', label: 'Alunos impactados' }, // TODO: número real de alunos
  { value: 180, suffix: '+', label: 'Aulas no método' }, // TODO: número real de aulas
  { value: 400, suffix: 'h', label: 'De conteúdo prático' }, // TODO: horas reais de conteúdo
  { value: 3, suffix: ' anos', label: 'Formando traders' }, // TODO: tempo real de operação
]

export const tracks = [
  {
    title: 'Fundamentos',
    description: 'A base do mercado financeiro para quem está começando do zero.',
  },
  {
    title: 'Análise Técnica',
    description: 'Leitura de gráficos, padrões e indicadores com aplicação prática todos os dias.',
  },
  {
    title: 'Leitura de Fluxo',
    description: 'Interpretação do movimento do mercado em tempo real, na tela.',
  },
  {
    title: 'Gestão de Risco',
    description: 'Proteção de capital como prioridade número um, antes de qualquer lucro.',
  },
  {
    title: 'Cripto',
    description: 'Particularidades do mercado de criptoativos aplicadas ao mesmo método.',
  },
  {
    title: 'Setups',
    description: 'Modelos de entrada e saída validados, replicáveis e mensuráveis.',
  },
  {
    title: 'Psicologia',
    description: 'Disciplina e controle emocional na tomada de decisão sob pressão.',
  },
]

export const plans = [
  {
    name: 'Aluno',
    price: 'Sob consulta', // TODO: preço real do plano Aluno
    tagline: 'Para quem quer aprender o método do zero.',
    features: [
      'Acesso às 7 trilhas do método',
      'Comunidade no Telegram',
      'Aulas gravadas + atualizações',
      'Suporte via comunidade',
    ],
    cta: 'Começar como Aluno',
    href: links.broker,
    highlight: false,
  },
  {
    name: 'VIP',
    price: 'Sob consulta', // TODO: preço real do plano VIP
    tagline: 'Para quem quer operar junto da sala e do playbook completo.',
    features: [
      'Tudo do plano Aluno',
      'Sala VIP com traders ao vivo',
      'Playbook de setups validados',
      'Lives de operação diárias',
      'Prioridade no suporte',
    ],
    cta: 'Entrar na Sala VIP',
    href: links.vip,
    highlight: true,
  },
]

export const revenuePlaques = [
  { value: 'R$ 100 mil', note: 'Relato a inserir. Substituir por print/depoimento real.' }, // TODO
  { value: 'R$ 500 mil', note: 'Relato a inserir. Substituir por print/depoimento real.' }, // TODO
  { value: 'R$ 1 milhão', note: 'Relato a inserir. Substituir por print/depoimento real.' }, // TODO
]

export const faq = [
  {
    q: 'Preciso ter experiência prévia para começar?',
    a: 'Não. O método foi desenhado para levar você do zero até a consistência, começando pelos Fundamentos antes de qualquer estratégia avançada.',
  },
  {
    q: 'Quanto tempo leva para ver resultado?',
    a: 'Depende da dedicação e disciplina aplicada ao método. Não prometemos prazos nem resultados garantidos, já que o mercado envolve risco real.',
  },
  {
    q: 'Qual a diferença entre o plano Aluno e o VIP?',
    a: 'O plano Aluno dá acesso completo às trilhas do método. O VIP adiciona a Sala VIP com traders operando ao vivo, playbook de setups e prioridade no suporte.',
  },
  {
    q: 'Existe garantia de reembolso?',
    a: 'Consulte as condições vigentes de garantia com o time de suporte antes da contratação.', // TODO: condições reais de garantia
  },
  {
    q: 'Como funciona a comunidade?',
    a: 'Toda a comunidade acontece dentro do Telegram, com lives de operação, análises diárias e transparência total: as operações são mostradas ao vivo dentro do grupo.',
  },
  {
    q: 'Preciso de muito capital para começar a operar?',
    a: 'Não. O foco do método é construir consistência e gestão de risco antes de escalar capital.',
  },
]
