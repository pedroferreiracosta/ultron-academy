import { ArrowRight, Send } from 'lucide-react'
import { team } from '../content/site'
import mateus from '../assets/speakers/expert-mateus.webp'
import adriana from '../assets/speakers/expert-adriana.webp'

// Bloco claro do meio da página (branco da marca com textura)
export default function Team() {
  const experts = `${import.meta.env.BASE_URL}experts.html`

  return (
    <section id="experts" className="noise bg-branco pt-24 text-preto sm:pt-32">
      <div className="container-x">
        <div className="text-center" data-reveal>
          <span className="badge-light">{team.badge}</span>
          <h2 className="h-section mt-6 text-preto">{team.title}</h2>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <a
            href={experts}
            data-reveal
            className="group flex flex-col overflow-hidden rounded-2xl border border-preto/15 bg-branco transition-colors hover:border-azul/50"
          >
            <img
              src={mateus}
              alt="Mateus Menezes falando ao público com um gráfico projetado ao fundo"
              width={960}
              height={1199}
              loading="lazy"
              decoding="async"
              className="aspect-[4/3] w-full object-cover object-[50%_20%]"
            />
            <div className="flex flex-1 flex-col p-7 sm:p-10">
              <h3 className="text-[clamp(1.6rem,2.4vw,2.2rem)] font-semibold">{team.teachersTitle}</h3>
              <p className="lead mt-3 text-preto/70">{team.teachersBody}</p>
              <span className="mt-6 inline-flex items-center gap-2 font-semibold text-azul">
                {team.teachersLink}
                <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </div>
          </a>

          <div className="flex flex-col gap-6">
            <article
              data-reveal
              style={{ ['--reveal-delay' as string]: '100ms' }}
              className="grid overflow-hidden rounded-2xl border border-preto/15 bg-branco sm:grid-cols-2 lg:flex-1"
            >
              {/* A foto fica num wrapper com posição absoluta para nunca invadir o texto no mobile */}
              <div className="relative aspect-[4/3] sm:aspect-auto sm:min-h-[260px]">
                <img
                  src={adriana}
                  alt="Adriana Costa falando ao público com um gráfico projetado ao fundo"
                  width={960}
                  height={1200}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 h-full w-full object-cover object-[50%_25%]"
                />
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-semibold">{team.livesTitle}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-preto/70">{team.livesBody}</p>
              </div>
            </article>

            <article
              data-reveal
              style={{ ['--reveal-delay' as string]: '180ms' }}
              className="grid overflow-hidden rounded-2xl border border-preto/15 bg-branco sm:grid-cols-2 lg:flex-1"
            >
              <div
                className="flex min-h-[200px] items-center justify-center"
                style={{ background: 'radial-gradient(80% 80% at 30% 20%, #1E6BFF 0%, #0A2F77 60%, #0D0D0D 100%)' }}
                aria-hidden="true"
              >
                <span className="flex h-20 w-20 items-center justify-center rounded-2xl bg-branco/10 ring-1 ring-branco/20">
                  <Send size={36} className="text-branco" />
                </span>
              </div>
              <div className="p-7 sm:p-8">
                <h3 className="text-[clamp(1.5rem,2.2vw,2rem)] font-semibold">{team.supportTitle}</h3>
                <p className="mt-3 text-[17px] leading-relaxed text-preto/70">{team.supportBody}</p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}
