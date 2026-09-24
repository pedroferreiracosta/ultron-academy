import { Check, GraduationCap, Landmark, Unlink } from 'lucide-react'
import { money } from '../content/site'
import logo from '../assets/ultron-logo-560.webp'

const cardIcons = [Landmark, Unlink, GraduationCap]

export default function Money() {
  return (
    <section id="seu-dinheiro" className="bg-fundo py-24 sm:py-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="badge">{money.badge}</span>
          <h2 className="h-section mt-6">{money.title}</h2>
          <p className="lead mt-5 text-aco">{money.body}</p>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div data-reveal>
            <div className="relative flex items-center justify-center overflow-hidden rounded-3xl py-10">
              <div
                className="pointer-events-none absolute inset-0"
                style={{ background: 'radial-gradient(50% 50% at 50% 50%, rgba(30,107,255,0.22), transparent 70%)' }}
                aria-hidden="true"
              />
              <img src={logo} alt="" width={573} height={560} loading="lazy" decoding="async" className="relative w-[58%] max-w-[300px]" />
            </div>
            <h3 className="mt-6 text-[clamp(1.5rem,2.2vw,1.9rem)] font-semibold">{money.listTitle}</h3>
            <ul className="mt-6 space-y-4">
              {money.list.map((item) => (
                <li key={item} className="flex items-center gap-4 text-lg text-prata">
                  <Check size={22} className="shrink-0 text-ciano" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-6">
            {money.cards.map((c, i) => {
              const Icon = cardIcons[i]
              return (
                <article key={c.title} data-reveal style={{ ['--reveal-delay' as string]: `${i * 90}ms` }} className="card p-4">
                  <div
                    className="flex h-28 items-center justify-center rounded-xl"
                    style={{ background: 'radial-gradient(70% 90% at 20% 0%, rgba(30,107,255,0.45), rgba(10,47,119,0.35) 50%, #0f141d 100%)' }}
                    aria-hidden="true"
                  >
                    <Icon size={40} className="text-branco/90" strokeWidth={1.5} />
                  </div>
                  <div className="px-2 pb-2 pt-5">
                    <h3 className="text-xl font-semibold">{c.title}</h3>
                    <p className="mt-2 text-aco">{c.body}</p>
                  </div>
                </article>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
