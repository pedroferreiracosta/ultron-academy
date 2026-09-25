import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import Counter from './ui/Counter'
import Todo from './ui/Todo'
import { cta, links, stats } from '../content/site'

// Continuação do bloco claro. Só número real aparece em produção.
export default function Stats() {
  const items = stats.items.filter((s) => s.value !== null || import.meta.env.DEV)

  return (
    <section aria-labelledby="numeros" className="noise bg-branco pb-24 pt-28 text-preto sm:pb-28 sm:pt-36">
      <div className="container-x text-center">
        <h2 id="numeros" className="h-section text-preto" data-reveal>
          {stats.title}
        </h2>

        <div
          className={`mx-auto mt-14 grid gap-y-10 ${items.length === 1 ? 'max-w-md grid-cols-1' : items.length === 2 ? 'max-w-3xl grid-cols-2' : 'grid-cols-2 lg:grid-cols-3'}`}
          data-reveal
        >
          {items.map((s, i) => (
            <div key={s.label} className={`px-4 ${i > 0 ? 'lg:border-l lg:border-preto/20' : ''}`}>
              <p className="font-mono text-[clamp(2.8rem,5vw,4rem)] font-medium leading-none tracking-tight [font-variant-numeric:tabular-nums]">
                {s.value !== null ? <Counter value={s.value} suffix={s.suffix} /> : <Todo>{s.todo}</Todo>}
              </p>
              <p className="mt-4 text-lg text-preto/70">{s.label}</p>
            </div>
          ))}
        </div>

        <div className="mt-14" data-reveal>
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer">
            {cta.telegram}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
