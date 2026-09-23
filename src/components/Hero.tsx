import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import ShinyText from './ui/ShinyText'
import { DesktopMockup, PhoneMockup } from './ui/ChartMockup'
import { links } from '../content/site'

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden pt-32 pb-12 sm:pt-40 lg:pb-20">
      <div
        className="pointer-events-none absolute left-1/2 top-[30%] h-[520px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(10,47,119,0.6) 0%, rgba(30,107,255,0.25) 45%, transparent 75%)' }}
        aria-hidden="true"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center lg:text-left"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-grafite/70 px-3 py-1 text-xs font-medium text-prata">
            <span className="h-1.5 w-1.5 rounded-full bg-ciano" aria-hidden="true" />
            Agência de formação de traders
          </span>

          <h1 className="mt-6 text-[clamp(2.25rem,5.2vw,3.5rem)] font-heading font-extrabold leading-[1.1] text-branco">
            Aprenda a operar <ShinyText className="font-extrabold">com método e acompanhamento.</ShinyText>
          </h1>

          <p className="mx-auto mt-6 max-w-[560px] text-base text-aco sm:text-lg lg:mx-0">
            A Ultron prepara, acompanha e conecta você à corretora parceira. Trilhas do zero à
            consistência, Sala VIP ao vivo e um time presente na comunidade todos os dias.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4 lg:justify-start">
            <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy" size="lg">
              Abrir minha conta
              <ArrowRight size={18} aria-hidden="true" />
            </Button>
            <Button href={links.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
              Entrar na comunidade
            </Button>
          </div>

          <p className="mt-8 text-xs text-aco/60">
            Operar envolve risco. Resultados passados não garantem resultados futuros. Caráter educacional.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="relative mx-auto w-full max-w-[560px] pb-10 lg:pb-0"
        >
          <DesktopMockup />
          <PhoneMockup className="absolute -bottom-2 -right-2 w-[34%] min-w-[130px] animate-float sm:-right-6 lg:-bottom-10" />
        </motion.div>
      </div>
    </section>
  )
}
