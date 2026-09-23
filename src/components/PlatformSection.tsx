import { CandlestickChart, TrendingUp, Zap, Send, Radio } from 'lucide-react'
import Reveal from './ui/Reveal'
import SectionHeading from './ui/SectionHeading'
import { CandleChart } from './ui/ChartMockup'
import { accessPoints, platformFeatures } from '../content/site'

const featureIcons = [CandlestickChart, TrendingUp]
const accessIcons = [Zap, Send, Radio]

export default function PlatformSection() {
  return (
    <>
      <section id="plataforma" className="relative py-20 sm:py-28">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <SectionHeading eyebrow="Método Ultron" title="Onde trader sério aprende a operar">
            Nada de teoria solta. Cada aula acontece em cima do gráfico, com o mesmo raciocínio que
            você vai usar na sua conta.
          </SectionHeading>

          <div className="mt-14 grid gap-5 md:grid-cols-2">
            {platformFeatures.map((f, i) => {
              const Icon = featureIcons[i]
              return (
                <Reveal key={f.title} delay={i * 0.08}>
                  <article className="glow-card h-full overflow-hidden rounded-2xl bg-grafite">
                    <div className="relative h-44 border-b border-white/5 bg-preto/60">
                      <div
                        className="pointer-events-none absolute inset-0"
                        style={{
                          background:
                            i === 0
                              ? 'radial-gradient(ellipse at 30% 50%, rgba(10,47,119,0.55), transparent 65%)'
                              : 'radial-gradient(ellipse at 70% 50%, rgba(30,107,255,0.3), transparent 65%)',
                        }}
                      />
                      {i === 0 ? (
                        <CandleChart seed={11} className="relative h-full w-full" />
                      ) : (
                        <div className="relative flex h-full flex-col justify-center gap-3 px-8">
                          {[
                            ['Fundamentos', 100],
                            ['Análise Técnica', 62],
                            ['Leitura de Fluxo', 28],
                          ].map(([name, pct]) => (
                            <div key={name}>
                              <div className="flex justify-between text-xs text-aco">
                                <span>{name}</span>
                                <span className="text-prata">{pct}%</span>
                              </div>
                              <div className="mt-1.5 h-1 rounded-full bg-grafite">
                                <div className="h-1 rounded-full bg-aco" style={{ width: `${pct}%` }} />
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-preto/60 text-ciano">
                          <Icon size={18} aria-hidden="true" />
                        </span>
                        <h3 className="text-lg font-bold">{f.title}</h3>
                      </div>
                      <p className="mt-3 text-sm text-aco">{f.description}</p>
                    </div>
                  </article>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>

      <section className="relative py-16 sm:py-20">
        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-[1fr_1.2fr]">
          <SectionHeading align="left" eyebrow="Acesso" title="Rápido para entrar, sério para ficar">
            Você não espera turma nem liberação manual. Abriu a conta, o caminho inteiro já está
            disponível.
          </SectionHeading>

          <div className="grid gap-4 sm:grid-cols-3">
            {accessPoints.map((p, i) => {
              const Icon = accessIcons[i]
              return (
                <Reveal key={p.title} delay={i * 0.06}>
                  <div className="glow-card h-full rounded-2xl bg-grafite p-5">
                    <Icon size={20} className="text-ciano" aria-hidden="true" />
                    <h3 className="mt-4 text-base font-bold">{p.title}</h3>
                    <p className="mt-2 text-sm text-aco">{p.description}</p>
                  </div>
                </Reveal>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
