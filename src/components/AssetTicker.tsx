import { assets } from '../content/site'

// Faixa estática: os mercados que aparecem nas aulas, sem cotação.
export default function AssetTicker() {
  return (
    <section aria-label="Mercados que aparecem nas aulas" className="border-t bg-grafite/60">
      <div className="frame flex items-stretch">
        <p className="label flex shrink-0 items-center border-r px-4 py-3 sm:px-8">Mercados nas aulas</p>
        <ul className="no-scrollbar flex overflow-x-auto">
          {assets.map((a) => (
            <li key={a.symbol} className="flex shrink-0 items-baseline gap-2 border-r px-4 py-3 last:border-r-0">
              <span className="num text-[13px] font-medium text-branco">{a.symbol}</span>
              <span className="text-xs text-aco">{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
