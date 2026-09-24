import { proof } from '../content/site'
import r1 from '../assets/results/result-1.webp'
import r2 from '../assets/results/result-2.webp'
import r3 from '../assets/results/result-3.webp'
import r4 from '../assets/results/result-4.webp'
import r5 from '../assets/results/result-5.webp'
import r6 from '../assets/results/result-6.webp'

// Prints reais enviados por alunos, recortados sem nome, foto de perfil e
// placa de carro. Nenhum depoimento em texto ou nome é inventado.
const shots = [r1, r2, r3, r4, r5, r6]
const track = [...shots, ...shots]
// Altura de cada recorte (largura 415), para reservar espaço e evitar CLS
const heights = [425, 425, 425, 412, 718, 722]

export default function Proof() {
  return (
    <section id="feedbacks" className="overflow-hidden bg-fundo py-24 sm:py-32">
      <div className="container-x text-center" data-reveal>
        <span className="badge">{proof.badge}</span>
        <h2 className="h-section mx-auto mt-6 max-w-3xl">{proof.title}</h2>
        <p className="lead mt-5 text-aco">{proof.body}</p>
      </div>

      <div className="marquee-viewport no-scrollbar mt-14 overflow-hidden">
        <ul className="marquee-track flex w-max animate-marquee-slow items-start gap-6 px-3">
          {track.map((src, i) => {
            const n = i % shots.length
            return (
              <li key={i} aria-hidden={i >= shots.length} className="w-[280px] shrink-0 sm:w-[340px]">
                <a
                  href={src}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={i >= shots.length ? -1 : undefined}
                  className="card block overflow-hidden transition-colors hover:border-ciano/50"
                >
                  <div className="flex items-center justify-between px-5 py-3.5 text-sm">
                    <span className="font-semibold">Print {String(n + 1).padStart(2, '0')}</span>
                    <span className="text-aco">{proof.captions[n]}</span>
                  </div>
                  <img
                    src={src}
                    alt={i < shots.length ? `Print ${n + 1}: conversa de aluno com o time da Ultron mostrando resultado` : ''}
                    width={415}
                    height={heights[n]}
                    loading="lazy"
                    decoding="async"
                    className="block h-auto max-h-[440px] w-full object-cover object-top sm:max-h-none"
                  />
                </a>
              </li>
            )
          })}
        </ul>
      </div>

      <div className="container-x mt-10 text-center">
        <p className="text-base font-medium text-branco">{proof.disclaimer}</p>
        <p className="mt-2 text-sm text-aco">Toque em um print para abrir em tamanho real.</p>
      </div>
    </section>
  )
}
