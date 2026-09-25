import { useState } from 'react'
import { ArrowRight, Plus } from 'lucide-react'
import Button from './ui/Button'
import Todo from './ui/Todo'
import { cta, faq, faqSection, links } from '../content/site'

export default function Faq() {
  const [open, setOpen] = useState<number | null>(null)
  const items = faq.filter((f) => f.a || import.meta.env.DEV)

  return (
    <section id="faq" className="bg-fundo py-24 sm:py-32">
      <div className="container-x text-center" data-reveal>
        <span className="badge">{faqSection.badge}</span>
        <h2 className="h-section mt-6">{faqSection.title}</h2>
        <p className="lead mt-5 text-aco">{faqSection.body}</p>
      </div>

      <div className="container-x mt-14">
        <ul className="mx-auto max-w-[768px] space-y-4">
          {items.map((item, i) => {
            const isOpen = open === i
            const id = `faq-${i}`
            return (
              <li key={item.q} className="rounded-xl bg-card">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={id}
                    className="flex w-full items-center justify-between gap-6 px-6 py-5 text-left font-body text-lg font-medium"
                  >
                    {item.q}
                    <Plus
                      size={24}
                      className={`shrink-0 text-ciano transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                      aria-hidden="true"
                    />
                  </button>
                </h3>
                <div
                  id={id}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-[17px] leading-relaxed text-aco">
                      {item.a ?? <Todo>{item.todo}</Todo>}
                    </p>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>

        <div className="mt-16 text-center" data-reveal>
          <h3 className="text-[clamp(1.5rem,2.2vw,1.9rem)] font-semibold">{faqSection.moreTitle}</h3>
          <p className="lead mt-3 text-aco">{faqSection.moreBody}</p>
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer" className="mt-8">
            {cta.telegram}
            <ArrowRight size={20} aria-hidden="true" />
          </Button>
        </div>
      </div>
    </section>
  )
}
