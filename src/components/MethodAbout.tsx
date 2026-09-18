import Reveal from './ui/Reveal'

const pillars = ['Performance', 'Precisão', 'Confiança']

export default function MethodAbout() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">Formamos traders com método</h2>
          <p className="mt-6 text-aco">
            A Ultron Academy é para quem opera capital de verdade, ou quer aprender a fazê-lo
            com seriedade. O método é aplicado todos os dias, dentro da comunidade.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          {pillars.map((p) => (
            <span
              key={p}
              className="rounded-full border border-white/10 bg-preto px-5 py-2 text-sm font-medium text-prata"
            >
              {p}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
