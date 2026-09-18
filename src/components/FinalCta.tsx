import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import LightShaftText from './ui/LightShaftText'
import { links } from '../content/site'
import logo from '../assets/logo-ultron.png'

export default function FinalCta() {
  const shaftRef = useRef<HTMLDivElement>(null)
  // once: true — monta o WebGL uma única vez; o próprio LightShaftText pausa
  // o loop de desenho internamente quando sai da viewport (evita recriar o
  // contexto WebGL repetidas vezes durante o scroll).
  const shaftInView = useInView(shaftRef, { once: true, margin: '200px' })
  const [shaftWidth, setShaftWidth] = useState(0)

  useEffect(() => {
    const el = shaftRef.current
    if (!el) return
    const observer = new ResizeObserver(([entry]) => setShaftWidth(entry.contentRect.width))
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  const fontSize = Math.round(Math.min(220, Math.max(56, shaftWidth * 0.22)))

  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      <div
        ref={shaftRef}
        className="pointer-events-none absolute inset-x-0 top-1/2 z-0 mx-auto h-[220px] w-full max-w-4xl -translate-y-1/2 sm:h-[300px]"
        style={{
          maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 35%, transparent 90%)',
          WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 35%, transparent 90%)',
        }}
        aria-hidden="true"
      >
        {shaftInView && shaftWidth > 0 && (
          <LightShaftText
            text="ULTRON"
            font={{ fontFamily: 'Montserrat', fontWeight: 800, fontSize: `${fontSize}px` }}
            background="#0d0d0d"
            textColor="#0d0d0d"
            lineColor="#00d4ff"
            speed={45}
            interactive
            pointerIntensity={55}
            lines={{ density: 150, width: 26, softness: 85, depth: 14, overshoot: 32, flicker: 90 }}
            style={{ width: '100%', height: '100%', minWidth: 0, minHeight: 0 }}
          />
        )}
      </div>

      <Reveal className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center sm:px-6">
        <img src={logo} alt="" aria-hidden="true" className="h-16 w-16 rounded-xl" />
        <h2 className="text-[clamp(1.75rem,5vw,2.75rem)] font-extrabold leading-tight">
          Consistência constrói autoridade.
        </h2>
        <p className="text-aco">
          Toda peça, do post ao brinde, deve parecer saída da mesma tela do dashboard.
        </p>
        <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg" className="mt-2">
          Abrir minha conta
        </Button>
      </Reveal>
    </section>
  )
}
