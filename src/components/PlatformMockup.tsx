import CandleChart from './ui/CandleChart'
import AssetIcon from './ui/AssetIcon'
import { hero } from '../content/site'
import logoIcon from '../assets/logo-ultron-icon.png'

// TODO: trocar por um print real da plataforma usada nas lives.
// Até lá, é uma recriação com a marca Ultron, marcada como imagem ilustrativa.
const tabs = [
  { label: 'BTC/USD', icons: ['btc'] },
  { label: 'EUR/USD', icons: ['flag-eu', 'flag-us'] },
  { label: 'GBP/USD', icons: ['flag-gb', 'flag-us'] },
  { label: 'ETH/USD', icons: ['eth'] },
]

export default function PlatformMockup() {
  return (
    <div className="relative rounded-[30px] border border-borda bg-card-2 p-2.5 shadow-[0_40px_120px_-30px_rgba(30,107,255,0.45)] sm:p-4">
      <span className="absolute right-5 top-5 z-10 rounded-full border border-branco/20 bg-preto/80 px-3 py-1 text-xs font-medium text-prata backdrop-blur sm:right-8 sm:top-8">
        {hero.mockupLabel}
      </span>
      <div className="overflow-hidden rounded-[20px] border border-borda bg-[#07090d]" aria-hidden="true">
        <div className="flex items-center gap-2 border-b border-borda px-3 py-2.5 sm:gap-3 sm:px-4">
          <img src={logoIcon} alt="" className="mr-1 h-6 w-auto sm:mr-3 sm:h-7" />
          {tabs.map((t, i) => (
            <span
              key={t.label}
              className={`items-center gap-2 rounded-lg px-2 py-1.5 text-[11px] font-semibold sm:px-3 sm:text-xs ${
                i === 0 ? 'flex bg-branco/10 text-branco' : 'hidden text-aco sm:flex'
              }`}
            >
              <span className="-m-2 scale-[0.6]">
                <AssetIcon names={t.icons} />
              </span>
              {t.label}
            </span>
          ))}
          <span className="ml-auto hidden rounded-md border border-borda px-2 py-1 text-[11px] text-aco sm:inline">M1</span>
        </div>
        <div className="flex">
          <div className="hidden w-14 shrink-0 flex-col items-center gap-4 border-r border-borda py-5 sm:flex">
            {[0, 1, 2, 3, 4].map((i) => (
              <span key={i} className={`h-4 w-4 rounded ${i === 0 ? 'bg-ciano/70' : 'bg-branco/10'}`} />
            ))}
          </div>
          <div className="relative flex-1 px-2 py-4 sm:px-4">
            <CandleChart className="h-[220px] w-full sm:h-[380px]" />
          </div>
          <div className="hidden w-48 shrink-0 flex-col gap-3 border-l border-borda p-4 lg:flex">
            <span className="h-3 w-24 rounded bg-branco/10" />
            <span className="h-9 rounded-lg bg-branco/5" />
            <span className="h-9 rounded-lg bg-branco/5" />
            {/* Painel de ferramentas de análise, sem botões de compra e venda */}
            {['Tendência', 'Suporte', 'Resistência'].map((t) => (
              <span key={t} className="flex h-9 items-center gap-2 rounded-lg border border-borda px-3 text-[11px] text-aco">
                <span className="h-0.5 w-4 rounded bg-ciano/70" />
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
