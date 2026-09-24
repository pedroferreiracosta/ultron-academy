import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import Section from './ui/Section'
import Todo from './ui/Todo'
import { brokerCta, links, steps } from '../content/site'

export default function Steps() {
  // Passo sem dado real some em produção; a numeração acompanha
  const items = steps.items.filter((s) => s.body || import.meta.env.DEV)

  return (
    <Section
      id="por-onde-comecar"
      index="02"
      name="Por onde começar"
      title={steps.title}
      aside={
        <Button href={links.broker} target="_blank" rel="noopener noreferrer" className="mt-2">
          {brokerCta}
          <ArrowUpRight size={16} aria-hidden="true" />
        </Button>
      }
    >
      <ol className="border-t">
        {items.map((s, i) => (
          <li key={s.title} className="grid gap-2 border-b py-5 sm:grid-cols-[6rem_minmax(0,18rem)_1fr] sm:gap-8">
            <span className="label pt-1 text-ciano">Passo {String(i + 1).padStart(2, '0')}</span>
            <h3 className="text-lg font-bold leading-snug">{s.title}</h3>
            <p className="text-sm text-aco sm:pt-1">{s.body ?? <Todo>{s.todo}</Todo>}</p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
