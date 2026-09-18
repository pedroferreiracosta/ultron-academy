import { Check } from 'lucide-react'
import Reveal from './ui/Reveal'
import Button from './ui/Button'
import CurtainReveal from './ui/CurtainReveal'
import { plans } from '../content/site'

export default function Pricing() {
  return (
    <section id="planos" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-medium uppercase tracking-wider text-ciano">Oferta</span>
          <CurtainReveal
            text="Escolha seu ponto de partida"
            tag="h2"
            className="mt-3 text-2xl font-bold sm:text-3xl"
          />
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {plans.map((plan, i) => (
            <Reveal key={plan.name} delay={i * 0.1}>
              <div
                className={`relative flex h-full flex-col rounded-2xl p-8 transition-transform duration-300 hover:-translate-y-1 ${
                  plan.highlight
                    ? 'glow-card-strong bg-gradient-to-b from-navy/40 to-grafite'
                    : 'glow-card bg-grafite'
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-8 rounded-full bg-ciano px-3 py-1 text-xs font-bold text-preto">
                    Mais escolhido
                  </span>
                )}
                <h3 className="font-heading text-xl font-bold text-branco">{plan.name}</h3>
                <p className="mt-1 text-sm text-aco">{plan.tagline}</p>
                <p className="mt-6 font-heading text-3xl font-extrabold text-branco">{plan.price}</p>

                <ul className="mt-6 flex-1 space-y-3">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-prata">
                      <Check size={18} className="mt-0.5 shrink-0 text-ciano" aria-hidden="true" />
                      {f}
                    </li>
                  ))}
                </ul>

                <Button
                  href={plan.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  size="lg"
                  variant={plan.highlight ? 'primary' : 'secondary'}
                  className="mt-8 w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-aco/70">
          {/* TODO: preços reais dos planos ainda não informados pelo cliente */}
          Preços sob consulta. Valores exibidos são placeholders até confirmação do cliente.
        </p>
      </div>
    </section>
  )
}
