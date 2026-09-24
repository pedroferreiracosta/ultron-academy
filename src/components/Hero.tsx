import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import Todo from './ui/Todo'
import { brokerCta, ctaNote, facts, hero, heroSpecs, links, riskLine, telegramCta } from '../content/site'

export default function Hero() {
  return (
    <section id="hero">
      <div className="frame">
        <div className="border-b px-4 py-2.5 sm:px-8">
          <p className="label">{hero.label}</p>
        </div>

        <div className="grid lg:grid-cols-12">
          <div className="px-4 pb-12 pt-10 sm:px-8 sm:pt-16 lg:col-span-7 lg:border-r lg:pb-16">
            <h1 className="text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.015em]">
              {hero.title} <span className="text-aco">{hero.titleSecond}</span>
            </h1>

            <p className="mt-6 max-w-[34rem] text-base text-prata/85 sm:text-lg">{hero.body}</p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Button href={links.telegram} target="_blank" rel="noopener noreferrer" size="lg">
                {telegramCta}
                <ArrowUpRight size={18} aria-hidden="true" />
              </Button>
              <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
                {brokerCta}
              </Button>
            </div>

            <p className="mt-4 text-sm text-aco">
              {ctaNote}{' '}
              {facts.accessHow ? `Acesso às aulas: ${facts.accessHow}` : <Todo>como o aluno ganha acesso às aulas</Todo>}
            </p>

            <p className="mt-8 max-w-[34rem] border-l-2 border-aco/40 pl-3 text-[13px] leading-relaxed text-aco">{riskLine}</p>
          </div>

          <div className="border-t lg:col-span-5 lg:border-t-0">
            <div className="flex items-center justify-between border-b px-4 py-2.5 sm:px-8">
              <p className="label">Ficha técnica</p>
            </div>
            <dl>
              {heroSpecs.map((s) =>
                s.value || (import.meta.env.DEV && s.todo) ? (
                  <div key={s.k} className="grid grid-cols-[7.5rem_1fr] items-baseline gap-4 border-b px-4 py-3.5 last:border-b-0 sm:px-8">
                    <dt className="label">{s.k}</dt>
                    <dd className={s.mono ? 'num text-lg font-medium text-branco' : 'text-sm text-prata'}>
                      {s.value}
                      {s.todo && (
                        <>
                          {s.value && ' '}
                          <Todo>{s.todo}</Todo>
                        </>
                      )}
                    </dd>
                  </div>
                ) : null,
              )}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
