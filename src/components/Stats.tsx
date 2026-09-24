import Todo from './ui/Todo'
import { kpis } from '../content/site'

// Só o que é dado real aparece em produção. Sem contagem animada.
export default function Stats() {
  const items = kpis.filter((k) => k.value || import.meta.env.DEV)

  return (
    <section aria-label="Números da Ultron" className="border-t bg-grafite/60">
      <dl className="frame grid grid-cols-2 lg:grid-cols-4">
        {items.map((k, i) => (
          <div
            key={k.label}
            className={`border-b px-4 py-6 sm:px-8 lg:border-b-0 ${i % 2 === 0 ? 'border-r' : ''} lg:border-r lg:last:border-r-0 ${items.length === 1 ? 'col-span-2 lg:col-span-4' : ''}`}
          >
            <dt className="label">{k.label}</dt>
            <dd className="num mt-2 text-[clamp(2rem,4vw,3rem)] font-medium leading-none text-branco">
              {k.value ?? <Todo>{k.todo}</Todo>}
            </dd>
          </div>
        ))}
      </dl>
    </section>
  )
}
