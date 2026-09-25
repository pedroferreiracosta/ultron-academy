import { Radio } from 'lucide-react'
import CandleChart from './ui/CandleChart'
import Todo from './ui/Todo'
import { advantages, lives } from '../content/site'

export default function Advantages() {
  return (
    <section id="vantagens" className="bg-fundo py-24 sm:py-32">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div data-reveal>
          <span className="badge">{advantages.badge}</span>
          <h2 className="h-section mt-6 max-w-[560px]">{advantages.title}</h2>

          {/* Card grande: as 3 lives do dia */}
          <div
            className="relative mt-10 overflow-hidden rounded-3xl border border-borda p-7 sm:p-10"
            style={{ background: 'radial-gradient(90% 70% at 100% 0%, rgba(30,107,255,0.28), transparent 60%), #111722' }}
          >
            <p className="font-heading text-2xl font-semibold sm:text-[28px]">{advantages.livesTitle}</p>
            <p className="mt-3 max-w-md text-aco">{advantages.livesBody}</p>
            <ol className="mt-8 space-y-3">
              {lives.map((l) => (
                <li
                  key={l.name}
                  className="flex items-center gap-4 rounded-xl border border-borda bg-preto/50 px-4 py-4 transition-colors hover:border-ciano/50"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-azul/15 text-ciano">
                    <Radio size={20} aria-hidden="true" />
                  </span>
                  <span className="font-medium">{l.name}</span>
                  <span className="ml-auto text-aco">{l.time ?? <Todo>horário</Todo>}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <div className="flex flex-col lg:pt-24">
          {advantages.items.map((item, i) => (
            <div key={item.title} data-reveal style={{ ['--reveal-delay' as string]: `${i * 80}ms` }} className="border-b border-borda py-8 first:pt-0 last:border-b-0">
              <h3 className="text-[clamp(1.5rem,2.2vw,1.9rem)] font-semibold leading-tight">{item.title}</h3>
              <p className="lead mt-4 text-aco">{item.body}</p>
              {i === 0 && (
                <div className="relative mt-7 overflow-hidden rounded-2xl border border-borda bg-[#07090d] p-3">
                  <span className="absolute right-3 top-3 rounded-full bg-preto/80 px-2.5 py-0.5 text-[11px] text-aco">Ilustração</span>
                  <CandleChart count={46} seed={19} className="h-40 w-full sm:h-48" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
