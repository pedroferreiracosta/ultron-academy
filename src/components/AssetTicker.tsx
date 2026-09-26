import AssetIcon from './ui/AssetIcon'
import { assets } from '../content/site'

const track = [...assets, ...assets]

// Ativos usados como exemplo de análise nas lives, rolando. Sem cotação.
export default function AssetTicker() {
  return (
    <section aria-label="Ativos usados como exemplo nas lives (contexto educacional)" className="relative border-y border-borda bg-fundo">
      <div className="marquee-viewport edge-fade no-scrollbar overflow-hidden">
        <ul className="marquee-track flex w-max animate-marquee items-center gap-14 py-6 pr-14">
          {track.map((a, i) => (
            <li key={i} aria-hidden={i >= assets.length} className="flex shrink-0 items-center gap-3.5">
              <AssetIcon names={a.icons} />
              <span className="leading-tight">
                <span className="block font-heading text-[17px] font-semibold uppercase text-branco">{a.name}</span>
                <span className="block text-sm text-aco">{a.symbol}</span>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
