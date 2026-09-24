import Section from './ui/Section'
import { proof } from '../content/site'
import r1 from '../assets/results/result-1.webp'
import r2 from '../assets/results/result-2.webp'
import r3 from '../assets/results/result-3.webp'
import r4 from '../assets/results/result-4.webp'
import r5 from '../assets/results/result-5.webp'
import r6 from '../assets/results/result-6.webp'

// Prints reais enviados por alunos, recortados sem nome, foto de perfil e
// placa de carro. Originais em https://ultronacademy.online/ultron-academy-2/
const shots = [r1, r2, r3, r4, r5, r6]
// Altura de cada recorte (largura 415), para reservar espaço e evitar CLS
const heights = [425, 425, 425, 412, 718, 722]

export default function ResultsProof() {
  return (
    <Section id="resultados" index="04" name="Prints de alunos" title={proof.title} intro={proof.body}>
      <p className="mb-6 border-l-2 border-branco pl-3 text-base font-medium text-branco">{proof.disclaimer}</p>

      <ul className="no-scrollbar -mx-4 flex items-start snap-x snap-mandatory gap-4 overflow-x-auto px-4 sm:mx-0 sm:grid sm:grid-cols-2 sm:items-start sm:overflow-visible sm:px-0 lg:grid-cols-3">
        {shots.map((src, i) => (
          <li key={src} className="w-[82vw] max-w-[360px] shrink-0 snap-start sm:w-auto sm:max-w-none">
            <figure className="rounded-xs border bg-grafite/60">
              <figcaption className="flex items-center justify-between border-b px-3 py-2">
                <span className="label">
                  Print <span className="num text-branco">{String(i + 1).padStart(2, '0')}</span>
                </span>
                <span className="label text-aco/70">{proof.captions[i]}</span>
              </figcaption>
              <a href={src} target="_blank" rel="noopener noreferrer" className="block" aria-label={`Abrir print ${i + 1} em tamanho real`}>
                <img
                  src={src}
                  alt={`Print ${i + 1}: conversa de aluno com o time da Ultron mostrando resultado`}
                  width={415}
                  height={heights[i]}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto max-h-[460px] w-full object-cover object-top sm:max-h-none"
                />
              </a>
            </figure>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-sm text-aco">Toque no print para abrir em tamanho real.</p>
    </Section>
  )
}
