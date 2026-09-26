import Header from './components/Header'
import Hero from './components/Hero'
import AssetTicker from './components/AssetTicker'
import Advantages from './components/Advantages'
import Course from './components/Course'
import Steps from './components/Steps'
import Team from './components/Team'
import Stats from './components/Stats'
import Money from './components/Money'
import FinalCta from './components/FinalCta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { useReveal } from './lib/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssetTicker />
        <Advantages />
        <Course />
        <Steps />
        <Team />
        <Stats />
        <Money />
        <FinalCta />
        <Faq />
      </main>
      <Footer />
    </>
  )
}
