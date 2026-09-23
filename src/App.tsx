import { MotionConfig } from 'framer-motion'
import IntroOverlay from './components/IntroOverlay'
import Header from './components/Header'
import Hero from './components/Hero'
import AssetTicker from './components/AssetTicker'
import PlatformSection from './components/PlatformSection'
import Steps from './components/Steps'
import Structure from './components/Structure'
import Stats from './components/Stats'
import ResultsProof from './components/ResultsProof'
import Trust from './components/Trust'
import Testimonials from './components/Testimonials'
import FinalCta from './components/FinalCta'
import Faq from './components/Faq'
import Footer from './components/Footer'
import ScrollBackdrop from './components/ui/ScrollBackdrop'
import ScrollProgress from './components/ui/ScrollProgress'

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
          <AssetTicker />
          <PlatformSection />
          <Steps />
          <Structure />
          <Stats />
          <ResultsProof />
          <Trust />
          <Testimonials />
          <FinalCta />
          <Faq />
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}
