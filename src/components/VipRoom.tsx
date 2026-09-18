import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Radio, Users, NotebookPen } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import OrbGyro from './ui/OrbGyro'
import LiveChat from './ui/LiveChat'
import { links } from '../content/site'
import { stagger, fadeUp, viewportOnce } from '../lib/motion'

const items = [
  { icon: Radio, title: 'Lives de operação', desc: 'Sessões ao vivo operando no mercado, com decisões em tempo real.' },
  { icon: Users, title: 'Sala VIP', desc: 'Acesso direto aos traders da sala, sem intermediários.' },
  { icon: NotebookPen, title: 'Playbook validado', desc: 'Setups e estratégias documentados, prontos para replicar.' },
]

// Orbe decorativo: só monta quando entra na viewport pela primeira vez —
// evita montar/desmontar o canvas repetidamente durante o scroll.
function VipOrb() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '100px' })
  return (
    <div ref={ref} className="mx-auto h-[170px] w-[170px] sm:mx-0" aria-hidden="true">
      {inView && (
        <OrbGyro
          dotColor="#9aa3ad"
          accentColor="#00d4ff"
          density={170}
          dotSize={105}
          speed={42}
          ball={{ spread: 100, tilt: 12, turn: 0 }}
        />
      )}
    </div>
  )
}

export default function VipRoom() {
  return (
    <section id="vip" className="relative overflow-hidden py-20 sm:py-28">
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">Sala VIP</span>
          <h2 className="mt-3 text-2xl font-bold sm:text-3xl">O diferencial de quem quer ir além</h2>
          <p className="mt-4 text-aco">
            A Sala VIP coloca você lado a lado com quem já opera capital de verdade, além do
            que o plano Aluno oferece.
          </p>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger(0.1)}
          className="mt-14 grid gap-5 sm:grid-cols-3"
        >
          {items.map((item) => (
            <motion.div
              key={item.title}
              variants={fadeUp}
              className="glow-card-strong flex h-full flex-col rounded-2xl bg-grafite/80 p-6 transition-transform duration-300 hover:-translate-y-1"
            >
              <item.icon size={24} strokeWidth={1.75} className="text-ciano" aria-hidden="true" />
              <h3 className="mt-4 text-lg font-bold text-branco">{item.title}</h3>
              <p className="mt-2 text-sm text-aco">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-16">
          <div className="mx-auto grid max-w-4xl items-center gap-10 sm:grid-cols-2">
            <div className="text-center sm:text-left">
              <VipOrb />
              <p className="mt-5 text-sm text-aco">
                O ritmo real da Sala VIP: sinais, gestão de risco e replays trocados em
                tempo real, direto com os traders.
              </p>
            </div>
            <LiveChat />
          </div>
        </Reveal>

        <Reveal delay={0.3} className="mt-12 text-center">
          <Button href={links.vip} target="_blank" rel="noopener noreferrer" size="lg">
            Conhecer a Sala VIP
          </Button>
        </Reveal>
      </div>
    </section>
  )
}
