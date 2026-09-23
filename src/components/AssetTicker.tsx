import { assets } from '../content/site'

const track = [...assets, ...assets]

export default function AssetTicker() {
  return (
    <section aria-label="Mercados trabalhados no método" className="relative border-y border-white/5 bg-grafite/40 py-5">
      <div className="edge-fade overflow-hidden">
        <ul className="marquee-track flex w-max animate-marquee gap-4">
          {track.map((a, i) => (
            <li
              key={i}
              aria-hidden={i >= assets.length}
              className="flex shrink-0 items-center gap-3 rounded-full border border-white/[0.06] bg-preto/60 py-2 pl-2 pr-5"
            >
              <span className="flex h-8 min-w-8 items-center justify-center rounded-full bg-navy px-2 font-heading text-[10px] font-extrabold text-branco">
                {a.symbol.split('/')[0]}
              </span>
              <span className="font-heading text-sm font-bold text-branco">{a.symbol}</span>
              <span className="text-xs text-aco">{a.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
