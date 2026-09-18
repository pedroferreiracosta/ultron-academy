import { MotionConfig } from 'framer-motion'
import IntroOverlay from './components/IntroOverlay'
import Header from './components/Header'
import Hero from './components/Hero'
import KpiBar from './components/KpiBar'
import PainPromise from './components/PainPromise'
import Tracks from './components/Tracks'
import OrbitMethod from './components/OrbitMethod'
import VipRoom from './components/VipRoom'
import ResultsProof from './components/ResultsProof'
import MethodAbout from './components/MethodAbout'
import Pricing from './components/Pricing'
import Guarantee from './components/Guarantee'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'
import ScrollBackdrop from './components/ui/ScrollBackdrop'
import ScrollProgress from './components/ui/ScrollProgress'
import SectionDivider from './components/ui/SectionDivider'

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen">
        <IntroOverlay />
        <ScrollBackdrop />
        <ScrollProgress />
        <Header />
        <main>
          <Hero />
          <KpiBar />
          <PainPromise />
          <Tracks />
          <OrbitMethod />
          <VipRoom />
          <ResultsProof />
          <MethodAbout />
          <SectionDivider />
          <Pricing />
          <Guarantee />
          <Faq />
          <SectionDivider />
          <FinalCta />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
