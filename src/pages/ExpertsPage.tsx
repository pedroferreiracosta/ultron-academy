import { ArrowRight } from 'lucide-react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import FinalCta from '../components/FinalCta'
import Button from '../components/ui/Button'
import Todo from '../components/ui/Todo'
import { cta, expertsPage, instructors, links } from '../content/site'
import { useReveal } from '../lib/useReveal'
import mateus from '../assets/speakers/expert-mateus.webp'
import adriana from '../assets/speakers/expert-adriana.webp'

const experts = [
  { ...instructors.mateus, photo: mateus, height: 1199 },
  { ...instructors.adriana, photo: adriana, height: 1200 },
]

export default function ExpertsPage() {
  useReveal()

  return (
    <>
      <Header page="experts" />
      <main>
        <section className="noise relative overflow-hidden bg-fundo pb-16 pt-[150px] sm:pt-[190px]">
          <div
            className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[80%]"
            style={{ background: 'radial-gradient(55% 60% at 50% 100%, rgba(30,107,255,0.3), transparent 75%)' }}
            aria-hidden="true"
          />
          <div className="container-x text-center">
            <span className="badge">{expertsPage.badge}</span>
            <h1 className="mx-auto mt-7 max-w-[900px] text-[clamp(2.4rem,5.6vw,4.6rem)] font-semibold leading-[1.08] tracking-[-0.025em]">
              {expertsPage.title}
            </h1>
            <p className="lead mx-auto mt-6 max-w-[640px] text-aco">{expertsPage.body}</p>
          </div>
        </section>

        <section className="bg-fundo pb-24 sm:pb-32">
          <div className="container-x flex flex-col gap-8">
            {experts.map((e, i) => {
              const rows = [
                { k: 'No mercado desde', v: e.since, todo: 'ano' },
                { k: 'Ativos que opera', v: e.markets, todo: 'ativos' },
                { k: 'Na Ultron', v: e.atUltron, todo: 'papel na Ultron' },
              ].filter((r) => r.v || import.meta.env.DEV)

              return (
                <article key={e.name} data-reveal className="card grid overflow-hidden lg:grid-cols-[5fr_7fr]">
                  <img
                    src={e.photo}
                    alt={`${e.name} dando aula com o gráfico projetado ao fundo`}
                    width={960}
                    height={e.height}
                    loading={i === 0 ? 'eager' : 'lazy'}
                    decoding="async"
                    className={`aspect-[4/5] h-full w-full object-cover ${i % 2 === 1 ? 'lg:order-2' : ''}`}
                  />
                  <div className="flex flex-col justify-center p-7 sm:p-12">
                    <span className="badge self-start">{e.area}</span>
                    <h2 className="mt-6 text-[clamp(2rem,4vw,3.4rem)] font-semibold leading-tight">{e.name}</h2>
                    <p className="lead mt-5 text-aco">{e.bio}</p>
                    <Todo className="mt-3 self-start">bio real e confirmação do nome</Todo>

                    <dl className="mt-8 divide-y divide-borda border-y border-borda">
                      {rows.map((r) => (
                        <div key={r.k} className="grid grid-cols-[10rem_1fr] gap-4 py-3.5">
                          <dt className="text-aco">{r.k}</dt>
                          <dd className="text-branco">{r.v ?? <Todo>{r.todo}</Todo>}</dd>
                        </div>
                      ))}
                    </dl>

                    <div className="mt-8">
                      <Button href={links.telegram} target="_blank" rel="noopener noreferrer">
                        {cta.telegram}
                        <ArrowRight size={20} aria-hidden="true" />
                      </Button>
                    </div>
                  </div>
                </article>
              )
            })}
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer page="experts" />
    </>
  )
}
