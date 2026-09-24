import Header from './components/Header'
import Hero from './components/Hero'
import AssetTicker from './components/AssetTicker'
import Method from './components/Method'
import Steps from './components/Steps'
import VipRoom from './components/VipRoom'
import Stats from './components/Stats'
import ResultsProof from './components/ResultsProof'
import Trust from './components/Trust'
import Faq from './components/Faq'
import FinalCta from './components/FinalCta'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <AssetTicker />
        <Method />
        <Steps />
        <VipRoom />
        <Stats />
        <ResultsProof />
        <Trust />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
