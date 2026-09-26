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
- [ ] `facts.companyName`: razão social (Legacy Company?)
- [ ] `facts.liveDuration`: duração de cada live
- [ ] Print real da plataforma para o mockup do hero (`PlatformMockup.tsx`)
- [ ] `facts.cnpj`
- [ ] `links.terms`, `links.privacy` e `links.refund` (Termos de Uso, Política de Privacidade e Política de Reembolso)
- [ ] `course.topics`: confirmar os temas ensinados nas lives
- [ ] `stats`: confirmar o rótulo do 16.000+ ("alunos cadastrados" x "membros da comunidade") e informar tempo de operação
- [ ] `lives`: horário de cada uma das 3 lives diárias
- [ ] `instructors`: confirmar o nome (Mateus Menezes x Felipe Luna; um print agradece a "Felipe e Vitor"), se os dois conduzem as lives, bio, ano de início, formação e experiência em ensino (`credentials`)
- [ ] `assets`: confirmar os mercados usados como exemplo nas lives
- [ ] OG image: criar `public/og-cover.png` (1200x630) e reativar a tag comentada nos dois HTML

## Links reais

- Lives gratuitas no Telegram: `https://t.me/+c1bmO-4z90M0MjMx`. É o único CTA do site ("Assistir às lives gratuitas").
- Cadastro na corretora: `https://r.ryvon.io/l/1095/1110`. É só um atalho para a página de cadastro: não é link de afiliado, não identifica o aluno e a Ultron não recebe nada por ele. Aparece só no rodapé e é citado no FAQ; nunca como botão de destaque.

## Regras de copy (política de anúncios do TikTok)

O site é 100% educacional: formação em análise técnica dada em 3 lives
gratuitas por dia. Não há sinais, aulas gravadas, Sala VIP nem curso pago, e
o site não deve citar nenhum deles como existente.

- Proibido: ganhar dinheiro, lucro, liberdade financeira, "quer operar",
  "operar junto", sinal (de entrada), compre/venda agora, "método que
  funciona", rentabilidade, promessa de resultado, contador ou vaga fictícia.
- Usar: aprenda análise técnica, formação, leitura de gráficos, análise de
  mercado, gestão de risco, desenvolva suas habilidades.
- Ativos (ticker e mockup) são exemplos de análise, sem cotação e sem
  apresentar como oportunidade. O mockup não tem botões de compra e venda.
- Nada de prints de resultado, extratos ou prova de ganho.
- O aviso "Aviso importante - conteúdo educacional" (`riskNotice`) fica
  logo acima do CTA principal, no Hero e no CTA final.
- O aviso legal e de risco (`disclaimer`) e o bloco institucional (razão
  social e CNPJ) ficam no rodapé das duas páginas, sempre abertos.
- Nenhum número, depoimento, nome ou dado de curso inventado.

## Direção visual

Layout e ritmo inspirados em https://www.hezilex.com/ (estrutura de seções,
header flutuante, hero centralizado com mockup, ticker, números grandes em
gradiente, bloco claro no meio, faixa de CTA em gradiente, FAQ em acordeão,
wordmark gigante no rodapé), recriados do zero com a identidade da Ultron.
Nada de texto, imagem, ícone ou código deles foi copiado.

- Ciano/azul da marca no lugar do laranja da referência. Montserrat 600 nos
  títulos, Inter no texto, número do contador em JetBrains Mono.
- Ordem da home: Header → Hero (aviso + mockup ilustrativo) → Ticker →
  Conteúdo → Formação → Comece em 3 passos → Feita por quem ensina (bloco claro, id `experts`) →
  Números (bloco claro) → Transparência → CTA final (com aviso) →
  FAQ → Rodapé.
- Animações sem biblioteca: entrada ao rolar com IntersectionObserver
  (`src/lib/useReveal.ts` + `data-reveal`), marquees e acordeão em CSS,
  contador em `src/components/ui/Counter.tsx`. Com `prefers-reduced-motion`
  tudo aparece parado; o contador já vem com o valor final no HTML. Sem JS,
  o `<noscript>` do `index.html` mostra o essencial e o aviso legal.
- Ícones do ticker em `src/assets/icons/` (cryptocurrency-icons CC0 e
  flag-icons MIT; ver `LICENSES.md` na pasta).
- Mockup do hero (`PlatformMockup.tsx`) é uma recriação marcada como
  "Imagem ilustrativa". TODO: trocar pelo print real da plataforma.

## Deploy

`base: '/academy/'` em `vite.config.ts`; os links entre páginas usam
`import.meta.env.BASE_URL` no Header e no Footer. As duas entradas estão em
`build.rollupOptions.input`.
