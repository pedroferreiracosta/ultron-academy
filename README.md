# Ultron Academy — Landing Page

Site em React + Vite + TypeScript + Tailwind CSS v4, publicado em
`https://ultronacademy.online/academy/` (`base: '/academy/'` em `vite.config.ts`).
Duas páginas (Vite MPA, sem router): `index.html` e `experts.html`.

```bash
npm install
npm run dev       # desenvolvimento (mostra os placeholders TODO)
npm run build     # build de produção em dist/ (esconde os placeholders)
npm run lint
npm run preview   # pré-visualiza o build
```

## Onde editar

Toda a copy, links e dados ficam em **`src/content/site.ts`**.

### Placeholders de dado real

Campo com valor `null` em `site.ts` é dado que ainda falta. O componente
`src/components/ui/Todo.tsx` mostra uma caixa tracejada "TODO · …" **só em
`npm run dev`**; no build de produção o bloco correspondente não é renderizado.
Preencher o valor faz o dado aparecer nos dois ambientes.

Pendentes hoje:

- [ ] `facts.brokerName`: nome da corretora
- [ ] `facts.minDeposit`: depósito mínimo
- [ ] Print real da plataforma para o mockup do hero (`PlatformMockup.tsx`)
- [ ] `facts.cnpj`
- [ ] `links.terms` e `links.privacy`
- [ ] `stats`: confirmar o rótulo do 16.000+ ("alunos cadastrados" x "membros da comunidade") e informar tempo de operação
- [ ] `lives`: horário de cada uma das 3 lives diárias
- [ ] `instructors`: confirmar o nome (Mateus Menezes x Felipe Luna; um print agradece a "Felipe e Vitor"), se os dois conduzem as lives, bio, ano de início, ativos que operam
- [ ] `assets`: confirmar os mercados que aparecem nas aulas
- [ ] OG image: criar `public/og-cover.png` (1200x630) e reativar a tag comentada nos dois HTML

## Links reais

- Cadastro na corretora: `https://r.ryvon.io/l/1095/1110`. É só um atalho para a página de cadastro: não é link de afiliado, não identifica o aluno e a Ultron não recebe nada por ele.
- Grupo no Telegram: `https://t.me/+c1bmO-4z90M0MjMx`. Grupo **gratuito**, porta de entrada: qualquer pessoa entra sem pagar e sem conta em corretora. É o CTA principal do site.

A Ultron **não tem vínculo** com a corretora: opera nela e ensina a operar
nela. Só existem esses dois destinos de CTA: o texto do botão varia por seção, mas nunca promete o que o link não entrega (ex.: "Aprender com Mateus" levando à corretora). O botão da corretora diz sempre que é o cadastro na corretora, opcional. A copy não pode sugerir parceria, representação, nem que abrir conta pelo link seja condição para estudar com a Ultron. A corretora aparece sempre como "a que usamos nas lives". O aviso legal e de
risco no rodapé (`disclaimer` em `site.ts`) é obrigatório e aparece nas duas
páginas, sempre aberto.

Nada de promessa de ganho, "risco zero", "dobre a banca", contador ou vaga
fictícia. Nenhum número, depoimento ou nome inventado.

## Direção visual

Layout e ritmo inspirados em https://www.hezilex.com/ (estrutura de seções,
header flutuante, hero centralizado com mockup, ticker, números grandes em
gradiente, bloco claro no meio, faixa de CTA em gradiente, FAQ em acordeão,
wordmark gigante no rodapé), recriados do zero com a identidade da Ultron.
Nada de texto, imagem, ícone ou código deles foi copiado.

- Ciano/azul da marca no lugar do laranja da referência. Montserrat 600 nos
  títulos, Inter no texto, número do contador em JetBrains Mono.
- Ordem da home: Header → Hero (mockup ilustrativo) → Ticker → Vantagens →
  Comece em 3 passos → Feita por quem opera (bloco claro, id `experts`) →
  Números (bloco claro) → Onde fica o seu dinheiro → Feedbacks (prints) →
  CTA final → FAQ → Rodapé.
- Animações sem biblioteca: entrada ao rolar com IntersectionObserver
  (`src/lib/useReveal.ts` + `data-reveal`), marquees e acordeão em CSS,
  contador em `src/components/ui/Counter.tsx`. Com `prefers-reduced-motion`
  tudo aparece parado; o contador já vem com o valor final no HTML. Sem JS,
  o `<noscript>` do `index.html` mostra o essencial e o aviso legal.
- Ícones do ticker em `src/assets/icons/` (cryptocurrency-icons CC0 e
  flag-icons MIT; ver `LICENSES.md` na pasta).
- Mockup do hero (`PlatformMockup.tsx`) é uma recriação marcada como
  "Imagem ilustrativa". TODO: trocar pelo print real da plataforma.
- Como a Ultron funciona: 3 lives por dia e sinais manuais, tudo no grupo
  gratuito do Telegram. Não há aulas gravadas nem Sala VIP; o site não deve
  citar nenhum dos dois como existentes.

## Prints de alunos

`src/assets/results/result-1..6.webp` são prints reais enviados por alunos,
**recortados** para tirar nome e foto de perfil do cabeçalho do chat (e o
teclado). No print 5 a placa do carro foi borrada. Exibidos em grade estática
com o aviso "Resultados individuais. Não representam garantia de ganho.".

## Deploy

`base: '/academy/'` em `vite.config.ts`; os links entre páginas usam
`import.meta.env.BASE_URL` no Header e no Footer. As duas entradas estão em
`build.rollupOptions.input`.
