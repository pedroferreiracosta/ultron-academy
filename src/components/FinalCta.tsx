import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import { brokerCta, finalCta, links, riskLine, telegramCta } from '../content/site'

export default function FinalCta() {
  return (
    <section className="border-t bg-grafite/60">
      <div className="frame grid lg:grid-cols-12">
        <div className="px-4 py-14 sm:px-8 sm:py-20 lg:col-span-7 lg:border-r">
          <p className="label">
            <span className="text-ciano">07</span> / Próximo passo
          </p>
          <h2 className="mt-5 text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.1]">{finalCta.title}</h2>
          <p className="mt-5 max-w-lg text-aco">{finalCta.body}</p>
        </div>
        <div className="flex flex-col justify-center gap-3 border-t px-4 py-10 sm:px-8 lg:col-span-5 lg:border-t-0">
          <Button href={links.broker} target="_blank" rel="noopener noreferrer" size="lg">
            {brokerCta}
            <ArrowUpRight size={18} aria-hidden="true" />
          </Button>
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer" variant="secondary" size="lg">
            {telegramCta}
          </Button>
          <p className="mt-3 text-[13px] leading-relaxed text-aco">{riskLine}</p>
        </div>
      </div>
    </section>
  )
}
