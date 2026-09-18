import { ShieldCheck } from 'lucide-react'
import Reveal from './ui/Reveal'
import RollingLetters from './ui/RollingLetters'

export default function Guarantee() {
  return (
    <section className="relative py-16">
      <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-4 text-center sm:px-6">
        <ShieldCheck size={32} className="text-ciano" aria-hidden="true" />
        <RollingLetters text="Garantia" tag="h2" className="text-xl font-bold sm:text-2xl" />
        <p className="text-sm text-aco">
          {/* TODO: condições reais de garantia a confirmar com o cliente */}
          Condições de garantia sob consulta com o time de suporte no momento da contratação.
        </p>
      </Reveal>
    </section>
  )
}
