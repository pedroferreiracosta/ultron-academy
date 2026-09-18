import { useRef } from 'react'
import { useInView } from 'framer-motion'
import r1 from '../assets/results/result-1.webp'
import r2 from '../assets/results/result-2.webp'
import r3 from '../assets/results/result-3.webp'
import r4 from '../assets/results/result-4.webp'
import r5 from '../assets/results/result-5.webp'
import r6 from '../assets/results/result-6.webp'

// Prints reais de resultados de alunos, reaproveitados do carrossel
// de https://ultronacademy.online/ultron-academy-2/ a pedido do cliente.
const shots = [r1, r2, r3, r4, r5, r6]
const track = [...shots, ...shots]

export default function ResultsCarousel() {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { margin: '200px', once: false })

  return (
    <div ref={ref} className="edge-fade -mx-4 overflow-hidden sm:-mx-6">
      <div
        className="marquee-track flex w-max animate-marquee gap-5 px-4 sm:px-6"
        style={{ animationPlayState: inView ? 'running' : 'paused' }}
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="glow-card h-72 w-[166px] shrink-0 overflow-hidden rounded-2xl bg-grafite sm:h-80 sm:w-[184px]"
            aria-hidden={i >= shots.length}
          >
            <img
              src={src}
              alt={i < shots.length ? `Print de resultado de aluno ${i + 1}` : ''}
              className="h-full w-full object-cover object-top"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  )
}
