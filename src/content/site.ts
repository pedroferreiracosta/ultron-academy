/**
 * Conteúdo editável da landing page.
 * Troque os valores abaixo — nenhum outro arquivo precisa ser tocado
 * para atualizar textos, links, preços ou provas sociais.
 *
 * Campos marcados com "// TODO" ainda são placeholders aguardando
 * dado real do cliente (ver README.md para a lista completa).
 *
 * A home segue a mesma sequência de seções de https://www.hezilex.com/
 * (hero → ticker → plataforma → acesso → 3 passos → estrutura → números →
 * transparência → depoimentos → CTA → FAQ → rodapé). A Hezilex é corretora;
 * a Ultron é a agência que prepara, acompanha e conecta o aluno à corretora
 * parceira — por isso o texto foi escrito do zero sob esse ângulo.
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

// Mercados trabalhados dentro das trilhas (ticker abaixo do hero).
// Sem cotação: a Ultron não é fonte de preço, e número fixo pareceria dado ao vivo.
export const assets = [
  { symbol: 'BTC', name: 'Bitcoin' },
  { symbol: 'ETH', name: 'Ethereum' },
  { symbol: 'SOL', name: 'Solana' },
  { symbol: 'EUR/USD', name: 'Euro · Dólar' },
  { symbol: 'GBP/USD', name: 'Libra · Dólar' },
  { symbol: 'USD/JPY', name: 'Dólar · Iene' },
  { symbol: 'XAU', name: 'Ouro' },
  { symbol: 'XAG', name: 'Prata' },
  { symbol: 'AUD/CAD', name: 'Aussie · Loonie' },
  { symbol: 'US100', name: 'Nasdaq 100' },
]

export const platformFeatures = [
  {
    title: 'Leitura gráfica aplicada',
    description:
      'Você aprende a ler o gráfico na mesma tela em que vai operar: padrões, zonas e gatilhos explicados em cima de operações reais, não em slides.',
  },
  {
    title: 'Evolução acompanhada',
    description:
      'Trilhas com progresso, revisões de operação e metas por etapa. Você sabe onde está e qual é o próximo passo.',
  },
]

export const accessPoints = [
  { title: 'Acesso no mesmo dia', description: 'Conta aberta, trilhas e comunidade liberadas sem espera.' },
  { title: 'Comunidade no Telegram', description: 'Análises diárias, avisos de sessão e contato direto com o time.' },
  { title: 'Lives de operação', description: 'Sessões com a tela aberta, do planejamento ao fechamento.' },
]

export const steps = [
  {
    title: 'Abra sua conta',
    description: 'Cadastre-se pela Ultron na corretora parceira. É o que libera seu acesso às trilhas e à comunidade.',
  },
  {
    title: 'Aprenda o método',
    description: 'Siga as trilhas na ordem — Fundamentos, Análise, Fluxo, Risco — com o time acompanhando cada etapa.',
  },
  {
    title: 'Opere com consistência',
    description: 'Aplique o playbook com gestão de risco definida e evolua com revisões e lives semanais.',
  },
]

export const structure = [
  {
    title: 'Sala VIP',
    description: 'Traders operando ao vivo, com entradas explicadas em tempo real e registro de cada sessão.',
  },
  {
    title: 'Time de suporte',
    description: 'Atendimento humano na comunidade para dúvidas de plataforma, conta e conteúdo.',
  },
  {
    title: 'Playbook Ultron',
    description: 'Setups documentados com critério de entrada, saída e stop. Replicável e mensurável.',
  },
]

export const kpis = [
  { value: 12000, suffix: '+', label: 'Alunos impactados' }, // TODO: número real de alunos
  { value: 180, suffix: '+', label: 'Aulas no método' }, // TODO: número real de aulas
  { value: 400, suffix: 'h', label: 'De conteúdo prático' }, // TODO: horas reais de conteúdo
  { value: 3, suffix: ' anos', label: 'Formando traders' }, // TODO: tempo real de operação
]

// Equivalente da seção "Segurança" da referência, traduzida para o que a
// Ultron controla de fato: método, transparência e proteção de capital.
export const trustDetails = [
  {
    title: 'Gestão de risco antes do lucro',
    description: 'Todo setup do playbook nasce com stop e tamanho de posição definidos. Proteger capital é a primeira aula, não a última.',
  },
  {
    title: 'Operações mostradas ao vivo',
    description: 'As entradas da Sala VIP acontecem com a tela aberta. Acertos e erros ficam registrados para todo mundo ver.',
  },
  {
    title: 'Caráter 100% educacional',
    description: 'A Ultron ensina e acompanha. Não fazemos gestão de recursos nem operamos pelo aluno.',
  },
  {
    title: 'Corretora parceira separada',
    description: 'Seu dinheiro fica na sua conta, na corretora. A Ultron não recebe depósitos nem tem acesso ao seu saldo.',
  },
  {
    title: 'Sem promessa de resultado',
    description: 'Mercado envolve risco real. Mostramos método e disciplina — nunca garantia de ganho.',
  },
]

export const trustCards = [
  {
    title: 'Seu capital, sua conta',
    description: 'Depósitos e saques são feitos direto na corretora parceira, com a sua autenticação.',
  },
  {
    title: 'Transparência total',
    description: 'Histórico de sessões, prints e revisões abertos dentro da comunidade.',
  },
]

// TODO: substituir por depoimentos reais (nome, foto e autorização do aluno).
// Mantidos sem nome próprio para não atribuir falas a pessoas que não existem.
export const testimonials = [
  { quote: 'Eu operava no impulso. A trilha de gestão de risco mudou a forma como eu entro em qualquer operação.', author: 'Aluno Ultron', role: 'Trilha Gestão de Risco' },
  { quote: 'Ver a Sala VIP operando ao vivo, com erro e acerto, foi o que me fez confiar no método.', author: 'Aluna Ultron', role: 'Plano VIP' },
  { quote: 'Comecei do zero. Os Fundamentos são diretos e o suporte responde rápido na comunidade.', author: 'Aluno Ultron', role: 'Trilha Fundamentos' },
  { quote: 'O playbook tirou o achismo. Hoje eu sei por que entro e onde saio.', author: 'Aluno Ultron', role: 'Plano VIP' },
  { quote: 'As revisões de operação mostram exatamente onde eu estava errando.', author: 'Aluna Ultron', role: 'Trilha Análise Técnica' },
  { quote: 'Disciplina é o que mais se aprende aqui. O resto vem com o tempo.', author: 'Aluno Ultron', role: 'Trilha Psicologia' },
]

export const finalCtaPoints = ['Acesso no mesmo dia', 'Comunidade e suporte humano', 'Lives de operação semanais']

export const faq = [
  {
    q: 'A Ultron é uma corretora?',
    a: 'Não. A Ultron é uma agência de educação e acompanhamento. Você opera na sua própria conta, aberta na corretora parceira; nós entregamos método, trilhas, comunidade e Sala VIP.',
  },
  {
    q: 'O que diferencia a Ultron de um curso comum?',
    a: 'Acompanhamento contínuo. Além das trilhas gravadas, há lives de operação, revisões e um time presente na comunidade todos os dias.',
  },
  {
    q: 'Preciso ter experiência para começar?',
    a: 'Não. O método começa pelos Fundamentos e só avança para setups depois que a base e a gestão de risco estão firmes.',
  },
  {
    q: 'Como faço depósitos e saques?',
    a: 'Direto na corretora parceira, pela sua conta. A Ultron não recebe depósitos e não tem acesso ao seu saldo.',
  },
  {
    q: 'Qual o valor mínimo para operar?',
    a: 'O mínimo é definido pela corretora parceira. Recomendamos começar pequeno e escalar só depois de consistência comprovada.', // TODO: confirmar valor mínimo atual da corretora
  },
  {
    q: 'Consigo acompanhar pelo celular?',
    a: 'Sim. Trilhas, comunidade no Telegram e lives funcionam no celular, assim como a plataforma da corretora.',
  },
  {
    q: 'Como falo com o suporte?',
    a: 'Pela comunidade no Telegram. O time responde dúvidas de conta, plataforma e conteúdo.',
  },
]
