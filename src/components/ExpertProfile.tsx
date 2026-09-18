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

export default function ExpertProfile({ expert, reverse = false }: { expert: Expert; reverse?: boolean }) {
  return (
    <Reveal>
      <div
        className={`glow-card flex flex-col items-center gap-8 rounded-2xl bg-grafite p-8 sm:p-10 md:gap-12 ${
          reverse ? 'md:flex-row-reverse' : 'md:flex-row'
        }`}
      >
        <div className="relative shrink-0">
          <div
            className="absolute inset-0 -z-10 rounded-full blur-2xl"
            style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.25) 0%, transparent 70%)' }}
            aria-hidden="true"
          />
          <img
            src={expert.photo}
            alt=""
            className="h-40 w-40 rounded-full border border-white/10 object-cover object-top grayscale contrast-[1.08] sm:h-48 sm:w-48"
          />
        </div>

        <div className="text-center md:text-left">
          <h2 className="font-heading text-2xl font-bold text-branco sm:text-3xl">{expert.name}</h2>
          <p className="mt-1 text-sm font-medium uppercase tracking-wider text-ciano">{expert.role}</p>
          <p className="mt-4 max-w-lg text-base text-aco">{expert.bio}</p>

          <div className="mt-5 flex flex-wrap justify-center gap-2 md:justify-start">
            {expert.tags.map((t) => (
              <span
                key={t}
                className="rounded-full border border-white/10 bg-preto px-3 py-1 text-[11px] uppercase tracking-wide text-aco"
              >
                {t}
              </span>
            ))}
          </div>

          <Button
            href={links.broker}
            target="_blank"
            rel="noopener noreferrer"
            variant="secondary"
            className="mt-6"
          >
            Aprender com {expert.name.split(' ')[0]}
          </Button>
        </div>
      </div>
    </Reveal>
  )
}
