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
- [ ] `facts.access`: custo das aulas e da Sala VIP (o grupo do Telegram já é gratuito)
- [ ] `facts.minDeposit`: depósito mínimo
- [ ] `facts.accessHow`: como o aluno ganha acesso às aulas
- [ ] `facts.signals`: o grupo do Telegram passa sinais?
- [ ] `facts.liveSchedule` e `vip.schedule`: dias e horários da Sala VIP
- [ ] `facts.cnpj`
- [ ] `links.terms` e `links.privacy`
- [ ] `kpis`: aulas, horas, anos (só "16.000+ alunos" é dado confirmado; confirmar o rótulo "alunos cadastrados" x "membros da comunidade")
- [ ] `tracks`: validar a ementa (5 trilhas confirmadas, material antigo citava 7), nº de aulas e duração
- [ ] `vip.playbookImage`: print real da plataforma ou de uma ficha do Playbook
- [ ] `instructors`: confirmar o nome (Mateus Menezes x Felipe Luna; um print agradece a "Felipe e Vitor"), bio, ano de início, ativos que opera, papel na Ultron
- [ ] `assets`: confirmar os mercados que aparecem nas aulas
- [ ] OG image: criar `public/og-cover.png` (1200x630) e reativar a tag comentada nos dois HTML

## Links reais

- Cadastro na corretora: `https://r.ryvon.io/l/1070/913`. É só um atalho para a página de cadastro: não é link de afiliado, não identifica o aluno e a Ultron não recebe nada por ele.
- Grupo no Telegram: `https://t.me/+c1bmO-4z90M0MjMx`. Grupo **gratuito**, porta de entrada: qualquer pessoa entra sem pagar e sem conta em corretora. É o CTA principal do site.

A Ultron **não tem vínculo** com a corretora: opera nela e ensina a operar
nela. Só existem esses dois destinos de CTA: o texto do botão varia por seção, mas nunca promete o que o link não entrega (ex.: "Entrar na Sala VIP" ou "Aprender com Mateus" levando à corretora). O botão da corretora diz sempre que é o cadastro na corretora, opcional. A copy não pode sugerir parceria, representação, nem que abrir conta pelo link seja condição para estudar com a Ultron. A corretora aparece sempre como "a que usamos nas aulas". O aviso legal e de
risco no rodapé (`disclaimer` em `site.ts`) é obrigatório e aparece nas duas
páginas, sempre aberto.

Nada de promessa de ganho, "risco zero", "dobre a banca", contador ou vaga
fictícia. Nenhum número, depoimento ou nome inventado.

## Direção visual

Referência: software de trading e ferramentas de engenharia, não "futurista".

- Coluna central de 1200px com réguas verticais de 1px (`.frame`), seções
  separadas por régua horizontal e numeradas (`01 / Conteúdo`), via
  `src/components/ui/Section.tsx`.
- Montserrat para títulos, Inter para texto, **JetBrains Mono** para números,
  códigos e rótulos (`.label`, `.num` com `tabular-nums`).
- Cantos de 2 a 4px, sem sombra, sem glow, sem vidro, sem gradiente.
- Ciano só para o que é ação ou destaque (botão principal, índice da seção).
  Verde e vermelho reservados para alta e baixa.
- Movimento só em hover (150ms). FAQ com `<details>` nativo. Sem
  framer-motion e sem GSAP.

## Prints de alunos

`src/assets/results/result-1..6.webp` são prints reais enviados por alunos,
**recortados** para tirar nome e foto de perfil do cabeçalho do chat (e o
teclado). No print 5 a placa do carro foi borrada. Exibidos em grade estática
com o aviso "Resultados individuais. Não representam garantia de ganho.".

## Deploy

`base: '/academy/'` em `vite.config.ts`; os links entre páginas usam
`import.meta.env.BASE_URL` no Header e no Footer. As duas entradas estão em
`build.rollupOptions.input`.
