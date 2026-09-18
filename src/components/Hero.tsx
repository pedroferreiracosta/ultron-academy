import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import Button from './ui/Button'
import ShinyText from './ui/ShinyText'
import WorldMap from './ui/WorldMap'
import CandleColumn from './ui/CandleColumn'
import { links } from '../content/site'
import logo from '../assets/ultron-logo.png'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden bg-preto pt-32 pb-16 sm:pt-36 lg:flex lg:min-h-[720px] lg:items-center lg:pb-20"
    >
      {/* Fundo: mapa-múndi sutil + candles nas bordas + glow radial navy/azul */}
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          maskImage: 'radial-gradient(ellipse 60% 65% at 50% 45%, black 30%, transparent 85%)',
          WebkitMaskImage: 'radial-gradient(ellipse 60% 65% at 50% 45%, black 30%, transparent 85%)',
        }}
      >
        <WorldMap className="h-full w-full" />
      </div>

      <div
        className="pointer-events-none absolute left-1/2 top-[42%] h-[520px] w-[820px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[130px]"
        style={{ background: 'radial-gradient(circle, rgba(10,47,119,0.55) 0%, rgba(30,107,255,0.25) 45%, transparent 75%)' }}
        aria-hidden="true"
      />

      <CandleColumn className="absolute left-1 top-0 hidden h-full w-24 opacity-[0.35] lg:flex" />
      <CandleColumn className="absolute right-1 top-0 hidden h-full w-24 opacity-[0.35] lg:flex" />

      {/* Conteúdo central */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-30 mx-auto flex max-w-2xl flex-col items-center px-4 text-center sm:px-6"
      >
        <img
          src={logo}
          alt="Ultron Academy"
          width={823}
          height={805}
          decoding="async"
          fetchPriority="high"
          className="block h-28 w-auto sm:h-36"
        />

        <h1 className="mt-8 text-[clamp(2.25rem,5.5vw,3.5rem)] font-heading font-extrabold leading-[1.12] text-branco">
          Formando a nova{' '}
          <ShinyText className="font-extrabold">geração de traders</ShinyText>
        </h1>

        <p className="mt-6 max-w-[640px] text-base text-aco sm:text-lg">
          Aprenda com experts do mercado e desenvolva as habilidades necessárias para atuar
          com mais estratégia, confiança e consistência no mercado financeiro, para quem
          está começando do zero e para quem já opera, mas busca consistência.
        </p>

        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg">
            Quero aprender com os experts
            <ArrowRight size={18} aria-hidden="true" />
          </Button>
          <Button href="#metodo" variant="secondary" size="lg">
            Conheça a metodologia
          </Button>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-xs uppercase tracking-[0.2em] text-aco">
          <span>Disciplina</span>
          <span className="text-aco/30">|</span>
          <span>Estratégia</span>
          <span className="text-aco/30">|</span>
          <span>Resultados reais</span>
        </div>

        <p className="mt-8 text-xs uppercase tracking-wider text-aco/60">
          Operar no mercado financeiro envolve risco. Resultados passados não garantem
          resultados futuros. Caráter educacional.
        </p>
      </motion.div>

      {/* Transição para a próxima seção — nunca um corte seco */}
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-40"
        style={{
          background:
            'linear-gradient(to bottom, transparent, rgba(13,13,13,0.6) 60%, #0D0D0D 100%)',
        }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(0,212,255,0.35) 50%, transparent)',
        }}
        aria-hidden="true"
      />
    </section>
  )
}
