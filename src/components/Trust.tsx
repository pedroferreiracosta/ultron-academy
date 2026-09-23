import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown, Eye, ShieldCheck } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { trustCards, trustDetails } from '../content/site'

const cardIcons = [ShieldCheck, Eye]

export default function Trust() {
  const [open, setOpen] = useState(false)

  return (
    <section id="transparencia" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading eyebrow="Transparência" title="Confiança se constrói com a tela aberta">
          A Ultron não guarda o seu dinheiro e não opera por você. O que entregamos é método,
          acompanhamento e registro de tudo o que acontece na comunidade.
        </SectionHeading>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.3fr_1fr]">
          <Reveal>
            <div className="glow-card-strong h-full rounded-2xl bg-grafite p-6 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-ciano/30 bg-ciano/10 text-ciano">
                  <ShieldCheck size={20} aria-hidden="true" />
                </span>
                <h3 className="text-lg font-bold">Nossos compromissos</h3>
              </div>

              <ul className="mt-6 divide-y divide-white/5">
                {(open ? trustDetails : trustDetails.slice(0, 2)).map((d) => (
                  <li key={d.title} className="py-4">
                    <p className="font-medium text-branco">{d.title}</p>
                    <p className="mt-1 text-sm text-aco">{d.description}</p>
                  </li>
                ))}
              </ul>

              <AnimatePresence initial={false}>
                {!open && (
                  <motion.button
                    type="button"
                    onClick={() => setOpen(true)}
                    exit={{ opacity: 0 }}
                    aria-expanded={open}
                    className="mt-2 inline-flex min-h-[44px] items-center gap-2 text-sm font-medium text-ciano"
                  >
                    Ver todos os compromissos
                    <ChevronDown size={16} aria-hidden="true" />
                  </motion.button>
                )}
              </AnimatePresence>
            </div>
          </Reveal>

          <div className="flex flex-col gap-5">
            {trustCards.map((c, i) => {
              const Icon = cardIcons[i]
              return (
                <Reveal key={c.title} delay={i * 0.08} className="flex-1">
                  <article className="glow-card h-full rounded-2xl bg-grafite p-6">
                    <Icon size={22} className="text-ciano" aria-hidden="true" />
                    <h3 className="mt-4 text-lg font-bold">{c.title}</h3>
                    <p className="mt-2 text-sm text-aco">{c.description}</p>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
