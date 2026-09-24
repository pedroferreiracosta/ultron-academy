import Header from '../components/Header'
import Footer from '../components/Footer'
import ExpertProfile from '../components/ExpertProfile'
import FinalCta from '../components/FinalCta'
import { expertsPage, instructors } from '../content/site'
import mateus from '../assets/speakers/expert-mateus.webp'
import adriana from '../assets/speakers/expert-adriana.webp'

const experts = [
  { ...instructors.mateus, photo: mateus },
  { ...instructors.adriana, photo: adriana },
]

export default function ExpertsPage() {
  return (
    <>
      <Header page="experts" />
      <main>
        <section>
          <div className="frame">
            <div className="border-b px-4 py-2.5 sm:px-8">
              <p className="label">{expertsPage.label}</p>
            </div>
            <div className="grid gap-6 px-4 pb-12 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12">
              <h1 className="text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.06] tracking-[-0.015em] lg:col-span-7">
                {expertsPage.title}
              </h1>
              <p className="text-base text-aco sm:text-lg lg:col-span-5 lg:pt-3">{expertsPage.body}</p>
            </div>
          </div>
        </section>

        {experts.map((expert, i) => (
          <ExpertProfile key={expert.name} expert={expert} index={i} />
        ))}

        <FinalCta />
      </main>
      <Footer page="experts" />
    </>
  )
}
