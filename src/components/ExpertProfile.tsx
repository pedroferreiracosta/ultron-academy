import { ArrowRight } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import { links } from '../content/site'

interface Expert {
  name: string
  role: string
  bio: string
  tags: string[]
  photo: string
}

// Cantoneiras de mira nos quatro cantos do retrato
function Corners() {
  const base = 'absolute h-6 w-6 border-ciano/70'
  return (
    <div className="pointer-events-none absolute -inset-3" aria-hidden="true">
      <span className={`${base} left-0 top-0 border-l-2 border-t-2`} />
      <span className={`${base} right-0 top-0 border-r-2 border-t-2`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  )
}

export default function ExpertProfile({
  expert,
  index,
  reverse = false,
}: {
  expert: Expert
  index: number
  reverse?: boolean
}) {
  const code = String(index + 1).padStart(2, '0')
  const firstName = expert.name.split(' ')[0]

  return (
    <article className="relative grid items-center gap-12 md:grid-cols-2 md:gap-16">
      <Reveal className={reverse ? 'md:order-2' : ''}>
        <div className="relative mx-auto w-full max-w-[420px]">
          <div
            className="absolute -inset-10 -z-10 rounded-full blur-3xl"
            style={{ background: 'radial-gradient(circle, rgba(30,107,255,0.28) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <Corners />

          <figure className="relative aspect-[4/5] overflow-hidden rounded-xl border border-white/10 bg-grafite">
            <img
              src={expert.photo}
              alt={`${expert.name} ensinando análise gráfica ao vivo`}
              loading="lazy"
              className="h-full w-full object-cover saturate-[0.85]"
            />
            {/* Linhas de varredura e degradê para integrar a foto ao fundo escuro */}
            <div
              className="pointer-events-none absolute inset-0 opacity-25 mix-blend-overlay"
              style={{ backgroundImage: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 3px)' }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-t from-preto via-preto/10 to-transparent"
              aria-hidden="true"
            />

            <figcaption className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5 font-mono text-[11px] uppercase tracking-widest">
              <span className="text-prata/90">Expert_{code}</span>
              <span className="flex items-center gap-2 text-ciano">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ciano opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-ciano" />
                </span>
                Sala VIP
              </span>
            </figcaption>
          </figure>

          <div className="absolute -right-3 top-8 hidden rounded-lg border border-white/10 bg-preto/80 px-4 py-3 backdrop-blur-md sm:block md:-right-8">
            <p className="font-mono text-[10px] uppercase tracking-widest text-aco">Especialidade</p>
            <p className="mt-1 max-w-[180px] text-sm font-semibold leading-snug text-branco">{expert.role}</p>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.1} className={reverse ? 'md:order-1' : ''}>
        <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-ciano">
          <span>{code}</span>
          <span className="h-px w-12 bg-gradient-to-r from-ciano to-transparent" aria-hidden="true" />
          <span className="text-aco">Instrutor Ultron</span>
        </div>

        <h2 className="mt-4 font-heading text-[clamp(2rem,4.5vw,3.25rem)] font-extrabold leading-[1.05] text-branco">
          {expert.name}
        </h2>
        <p className="mt-3 text-sm font-medium uppercase tracking-wider text-ciano sm:hidden">{expert.role}</p>
        <p className="mt-5 max-w-md text-base text-aco sm:text-lg">{expert.bio}</p>

        <dl className="mt-8 grid max-w-md grid-cols-2 border-t border-white/10">
          {expert.tags.map((t, i) => (
            <div
              key={t}
              className={`flex items-baseline gap-3 border-b border-white/10 py-3 ${i % 2 === 0 ? 'pr-4' : 'border-l pl-4'}`}
            >
              <dt className="font-mono text-[11px] text-aco/70">{String(i + 1).padStart(2, '0')}</dt>
              <dd className="text-sm font-medium text-prata">{t}</dd>
            </div>
          ))}
        </dl>

        <Button
          href={links.broker}
          target="_blank"
          rel="noopener noreferrer"
          variant="secondary"
          className="mt-8"
        >
          Aprender com {firstName}
          <ArrowRight size={16} aria-hidden="true" />
        </Button>
      </Reveal>
    </article>
  )
}
