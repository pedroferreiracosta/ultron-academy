import Section from './ui/Section'
import Todo from './ui/Todo'
import { faq, links } from '../content/site'

export default function Faq() {
  const items = faq.filter((f) => f.a || import.meta.env.DEV)

  return (
    <Section
      id="faq"
      index="06"
      name="Perguntas"
      title="O que perguntam antes de abrir a conta"
      aside={
        <p className="text-sm">
          Não achou a sua?{' '}
          <a href={links.telegram} target="_blank" rel="noopener noreferrer" className="text-ciano underline-offset-4 hover:underline">
            Pergunte no grupo do Telegram
          </a>
          .
        </p>
      }
    >
      <div className="border-t">
        {items.map((item, i) => (
          <details key={item.q} className="group border-b" open={i === 0}>
            <summary className="grid min-h-[56px] cursor-pointer grid-cols-[2.5rem_1fr_1.5rem] items-center gap-2 py-3 transition-colors duration-150 hover:text-branco">
              <span className="num text-[12px] text-aco/70">{String(i + 1).padStart(2, '0')}</span>
              <span className="font-medium text-prata group-open:text-branco">{item.q}</span>
              <span className="num text-right text-aco group-open:text-ciano" aria-hidden="true">
                <span className="group-open:hidden">+</span>
                <span className="hidden group-open:inline">−</span>
              </span>
            </summary>
            <div className="pb-5 pl-12 pr-6 text-[15px] text-aco">{item.a ?? <Todo>{item.todo}</Todo>}</div>
          </details>
        ))}
      </div>
    </Section>
  )
}
