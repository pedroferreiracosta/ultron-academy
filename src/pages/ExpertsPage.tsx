import { MotionConfig } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'
import ExpertProfile from '../components/ExpertProfile'
import Reveal from '../components/ui/Reveal'
import Button from '../components/ui/Button'
import ScrollBackdrop from '../components/ui/ScrollBackdrop'
import ScrollProgress from '../components/ui/ScrollProgress'
import { instructors, links } from '../content/site'
import felipe from '../assets/speakers/speaker-felipe.webp'
import adriana from '../assets/speakers/speaker-adriana.webp'

const experts = [
  { ...instructors.mateus, photo: felipe },
  { ...instructors.adriana, photo: adriana },
]

export default function ExpertsPage() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <ScrollBackdrop />
        <ScrollProgress />
        <Header page="experts" />

        <main>
          <section className="relative overflow-hidden pt-36 pb-16 sm:pt-40">
            <div
              className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/3 rounded-full blur-[130px]"
              style={{ background: 'radial-gradient(circle, rgba(10,47,119,0.5) 0%, rgba(30,107,255,0.22) 45%, transparent 75%)' }}
              aria-hidden="true"
            />
            <Reveal className="relative mx-auto max-w-2xl px-4 text-center sm:px-6">
              <span className="text-xs font-medium uppercase tracking-wider text-ciano">Experts</span>
              <h1 className="mt-3 text-[clamp(2rem,5vw,3rem)] font-heading font-extrabold leading-tight text-branco">
                Quem está por trás do método
              </h1>
              <p className="mt-6 text-base text-aco sm:text-lg">
                Os dois operam no mercado e ensinam, na comunidade da Ultron Academy, as mesmas
                estratégias que usam nas próprias operações.
              </p>
            </Reveal>
          </section>

          <section className="relative py-10 sm:py-16">
            <div className="mx-auto flex max-w-4xl flex-col gap-10 px-4 sm:px-6">
              {experts.map((expert, i) => (
                <ExpertProfile key={expert.name} expert={expert} reverse={i % 2 === 1} />
              ))}
            </div>
          </section>

          <section className="relative overflow-hidden py-20 sm:py-28">
            <Reveal className="mx-auto flex max-w-2xl flex-col items-center gap-6 px-4 text-center sm:px-6">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Pronto para aprender com eles?
              </h2>
              <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg">
                Abrir minha conta
              </Button>
            </Reveal>
          </section>
        </main>

        <Footer page="experts" />
      </div>
    </MotionConfig>
  )
}
