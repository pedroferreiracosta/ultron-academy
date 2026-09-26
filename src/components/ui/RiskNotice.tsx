import { TriangleAlert } from 'lucide-react'
import { riskNotice } from '../../content/site'

// Aviso obrigatório, sempre logo acima do CTA principal
export default function RiskNotice({ className = '' }: { className?: string }) {
  return (
    <aside
      aria-label={riskNotice.title}
      className={`mx-auto max-w-[760px] rounded-2xl border border-amarelo/50 bg-preto/70 p-5 text-left backdrop-blur sm:p-6 ${className}`}
    >
      <p className="flex items-center gap-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-amarelo">
        <TriangleAlert size={18} className="shrink-0" aria-hidden="true" />
        {riskNotice.title}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-branco/90">{riskNotice.body}</p>
    </aside>
  )
}
