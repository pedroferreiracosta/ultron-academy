# Ultron Academy — Landing Page

LP de conversão construída em React + Vite + TypeScript + Tailwind CSS v4 +
Framer Motion, seguindo o Manual da Marca Ultron v1.0 (navy/preto/ciano,
Montserrat + Inter, dark total).

## Rodando o projeto

```bash
npm install
npm run dev       # servidor de desenvolvimento
npm run build     # build de produção em dist/
npm run preview   # pré-visualiza o build de produção
```

## Onde editar

Todo o conteúdo editável (textos, links, preços, KPIs, depoimentos, FAQ)
está centralizado em **`src/content/site.ts`** — não é necessário mexer em
nenhum componente para atualizar copy, links de checkout/WhatsApp/VIP,
números da barra de KPI ou perguntas do FAQ.

Os assets de marca ficam em `src/assets/`:
- `logo-ultron.png` — símbolo + wordmark sobre fundo preto (versão principal do manual).
- `speakers/speaker-felipe.webp` e `speakers/speaker-adriana.webp` — fotos dos instrutores, recortadas (fundo transparente) e comprimidas, usadas no Hero com máscara radial + grayscale.

As cores e fontes da marca estão definidas como tokens Tailwind em
`src/index.css` (bloco `@theme`): `navy`, `preto`, `azul`, `ciano`,
`grafite`, `aco`, `prata`, `branco`, `verde`, `vermelho`.

## Links reais utilizados

Extraídos de `https://ultronacademy.online/links/` via inspeção do DOM:
- **Abrir conta / CTA principal**: `https://r.ryvon.io/l/1070/913`
- **Comunidade (Telegram)**: `https://t.me/+c1bmO-4z90M0MjMx`

A página `/ultron-academy-2/` do cliente usa um tom de urgência agressivo
("risco ZERO", "dobre a banca") que **não foi reaproduzido** aqui — contradiz
o tom sóbrio/premium do manual de marca e a divulgação de risco padrão do
mercado financeiro. A copy desta LP foi reescrita com base na trilha
educacional (Fundamentos → Psicologia) descrita no manual e no
posicionamento comunitário/transparente de `/links/`.

## Placeholders aguardando dado real do cliente

Marcados com `// TODO` em `src/content/site.ts` e nos componentes:

- [ ] **Preços** dos planos Aluno e VIP (hoje: "Sob consulta")
- [ ] **Link de checkout dedicado da Sala VIP** (hoje reaproveita o link de corretora)
- [ ] **KPIs reais**: nº de alunos, nº de aulas, horas de conteúdo, tempo de operação
- [ ] **Condições de garantia** (seção Garantia + FAQ)
- [ ] **OG image** (`/og-cover.png` referenciada no `index.html` — arquivo ainda não existe em `public/`)
- [ ] **Bio e cargo reais dos instrutores** (página `/experts.html` — hoje com texto genérico, ver `instructors` em `site.ts`)

## Página dedicada aos experts (`/experts.html`)

A pedido do cliente, os experts (fotos, nomes, cargos, bios) foram
**removidos da home** e ganharam uma página própria — o projeto agora é
multi-página (Vite MPA, sem router):

- `experts.html` (raiz do projeto) → `src/main-experts.tsx` →
  `src/pages/ExpertsPage.tsx`.
- `vite.config.ts` registra os dois entry points (`index.html` +
  `experts.html`) em `build.rollupOptions.input` — necessário para o
  `npm run build` gerar as duas páginas em `dist/`.
- `Header.tsx` e `Footer.tsx` aceitam uma prop `page?: 'home' | 'experts'`
  para ajustar os links de âncora (`#metodo` vs `/#metodo`) conforme a
  página atual, e ambos já têm um item "Experts" no menu.
- `src/components/ExpertProfile.tsx` é o card de perfil (foto grande,
  cargo, bio, tags, CTA) reused nas duas entradas de `instructors`.

O Hero da home voltou a ser só atmosfera (mapa-múndi, candles, glow) —
sem fotos/nomes dos instrutores.

**Atenção:** a referência visual do cliente credita o instrutor como
**"Mateus Menezes"**, mas a página atual do cliente em
`/ultron-academy-2/` credita **"Felipe Luna"** para a mesma foto/contexto.
Usei "Mateus Menezes" (`src/content/site.ts`, export `instructors`) —
confirme com o cliente qual nome é o correto antes de publicar.

## Fundo contínuo e glow nas boxes

Para eliminar a sensação de seções separadas, a página não tem mais um
background por `<section>`. Em vez disso:

- **`src/components/ui/ScrollBackdrop.tsx`** — fundo único, `fixed`, atrás de
  toda a página (grid técnico + 3 glows radiais navy/azul/ciano que se
  deslocam com `useScroll`/`useTransform` do Framer Motion conforme o scroll
  avança). Todas as seções ficam com fundo transparente por cima dele.
- **`src/components/ui/ScrollProgress.tsx`** — fio fino no topo (`scaleX`
  ligado a `scrollYProgress`) reforçando a leitura de "uma página só".
- **`.glow-card` / `.glow-card-strong`** (em `src/index.css`) — glow
  persistente e sutil na borda de todo card/box (trilhas, Sala VIP, provas,
  planos, FAQ), que se intensifica no hover. Substituem os antigos
  `border` + `shadow` soltos em cada componente.

## Carrossel de resultados (prints reais)

**`src/components/ResultsCarousel.tsx`** exibe as 6 imagens reais extraídas
do carrossel "Veja quem já transformou seus resultados com a Ultron" em
`https://ultronacademy.online/ultron-academy-2/` (via inspeção do DOM,
`img.swiper-slide-image`), salvas comprimidas em `src/assets/results/`.
Roda sozinho via `animate-marquee` (CSS, pausa no hover), com fade nas
bordas (`.edge-fade`).

**Atenção:** essas imagens são prints de conversas privadas de WhatsApp de
alunos reais (nome e foto de perfil visíveis), com tag "copy" nas
operações — linguagem de copy trading que destoa do posicionamento
"educação com método" construído no resto da LP. Usadas como estão a
pedido explícito do cliente; se depois quiser trocar por um formato mais
alinhado ao tom sóbrio da marca, a opção de recortar só o painel de
resultado (sem nome/foto/conversa) fica registrada aqui.

## Ecossistema do método (diagrama orbital)

**`src/components/OrbitMethod.tsx`** — seção decorativa inspirada num
diagrama orbital de referência (fornecido pelo usuário), adaptada à
paleta e ao conteúdo da Ultron: as 7 trilhas do método orbitam um hub
central "Método" em dois anéis CSS (sem JS/libs externas, só
`@keyframes` em `src/index.css`), girando em velocidades e sentidos
diferentes. Puramente visual/decorativo (`aria-hidden`), com um resumo
em texto (`sr-only`) para leitores de tela, já que as mesmas 7 trilhas
estão descritas de forma acessível na seção anterior.

## Rodada de correção (nível agência)

Reconstrução do Hero, navbar e 3 seções a pedido explícito do cliente, que
considerou a entrega anterior "com cara de IA". Mudanças:

- **Hero**: refeito com fade radial nas fotos (`mask-image`, nunca retângulo
  colado), glow navy/azul dedicado atrás do headline, "geração de traders"
  com `ShinyText` (metálico) e transição de saída em gradiente + linha neon
  (nunca corte seco).
- **Navbar**: agora é uma ilha flutuante de vidro (`Header.tsx`) — pill
  centralizada, `backdrop-blur`, margem do topo, links Método/Sala
  VIP/Planos/FAQ, encolhe e aumenta opacidade ao rolar.
- **Botões**: `Button.tsx` ganhou variantes de vidro (`primary` claro,
  `secondary` contorno, `navy` para o navbar) — pílula (`rounded-full`) em
  vez do antigo `rounded-lg` navy sólido. Isso mudou o botão em toda a
  página automaticamente (Header, Hero, VIP, Pricing, FinalCta).
- **Trilhas (Tracks)**: trocado o carrossel com setas por um marquee
  automático e contínuo (`[animation:marquee_42s_linear_infinite]`, lista
  duplicada para loop sem "pulo", pausa no hover, mais lento que o do
  React Bits genérico).
- **Faturamento (ResultsProof)**: as placas voltaram a ser um grid estável
  de 3 colunas (não mais carrossel) com `text-balance` para nunca quebrar
  "R$ 100 mil" feio, alturas garantidas iguais via CSS Grid, e um
  campo `note` (relato curto) por placa — mais o disclaimer "resultados
  individuais, não representam garantia de ganhos".
- **Sala VIP**: os cards voltaram a ser um grid estável (não mais
  carrossel) — a distorção relatada vinha do container flex do carrossel
  não lidar bem com `h-full` em cards de largura fixa.
- **Performance**: o diagrama orbital (`OrbitMethod`) e os dois marquees
  agora pausam via `useInView` quando saem da tela, em vez de rodar
  para sempre — evita gasto de CPU/GPU constante com ~15 animações
  simultâneas.
- **Acessibilidade**: `<MotionConfig reducedMotion="user">` envolve o app
  inteiro em `App.tsx` — antes, `prefers-reduced-motion` só desligava
  animações CSS puras (marquees, órbita); agora também desliga as
  animações do Framer Motion (reveals, ShinyText, entrada das fotos do
  Hero).
- Removidos: `Carousel.tsx` (componente de carrossel com setas, não é
  mais usado em lugar nenhum) e `ChartStrip.tsx` (gráfico horizontal do
  Hero antigo, substituído por `CandleColumn.tsx`).

## Melhorias do relatório CRO (implementadas)

- **Autoridade dos experts**: inicialmente virou uma seção "Quem ensina"
  na própria home, logo após a barra de KPIs; depois, a pedido do
  cliente, essa apresentação foi removida da home e migrou para a
  página dedicada `/experts.html` (ver seção acima).
- **CTA intermediário** em `ResultsProof.tsx`, logo após o carrossel de
  prints reais ("Quero resultados assim também") — resolve o ponto do
  CRO sobre a prova social terminar sem convite à ação.
- **Hero**: subheadline agora deixa explícito o público
  ("para quem está começando do zero e para quem já opera, mas busca
  consistência") — resolve o ponto do CRO sobre a proposta de valor não
  dizer para quem é.

## Observações técnicas

- MCP do React Bits não estava configurado neste ambiente (`mcpServers: {}`
  em `.claude.json`); os componentes animados (Shiny/Gradient Text, Count
  Up, fundo com scroll parallax, glow nas boxes) foram implementados
  manualmente com Framer Motion + Tailwind, seguindo a mesma linguagem
  visual que o React Bits teria entregue.
- O skill `ui-ux-pro-max` está instalado apenas como marketplace (não
  habilitado como plugin ativo nesta sessão); a referência de acessibilidade,
  responsividade e animação do seu `SKILL.md` foi aplicada manualmente
  (contraste, foco visível, `prefers-reduced-motion`, mobile-first, tap
  targets ≥44px).
- Banner original (1.68MB) foi comprimido para WebP (~80KB) para performance.
