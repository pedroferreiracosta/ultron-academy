import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import Reveal from './ui/Reveal'
import { faq } from '../content/site'

function FaqItem({ q, a, isOpen, onToggle }: { q: string; a: string; isOpen: boolean; onToggle: () => void }) {
  return (
    <div className="glow-card rounded-xl bg-grafite">
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left min-h-[44px]"
      >
        <span className="font-medium text-prata">{q}</span>
        <ChevronDown
          size={20}
          className={`shrink-0 text-aco transition-transform duration-300 ${isOpen ? 'rotate-180 text-ciano' : ''}`}
          aria-hidden="true"
        />
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-4 text-sm text-aco">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section id="faq" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal className="text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">FAQ</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">Perguntas frequentes</h2>
        </Reveal>

        <div className="mt-10 space-y-3">
          {faq.map((item, i) => (
            <Reveal key={item.q} delay={i * 0.04}>
              <FaqItem
                q={item.q}
                a={item.a}
                isOpen={openIndex === i}
                onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
