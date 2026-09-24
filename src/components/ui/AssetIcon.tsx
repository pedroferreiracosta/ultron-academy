import btc from '../../assets/icons/btc.svg'
import eth from '../../assets/icons/eth.svg'
import sol from '../../assets/icons/sol.svg'
import xrp from '../../assets/icons/xrp.svg'
import xau from '../../assets/icons/xau.svg'
import eu from '../../assets/icons/flag-eu.svg'
import us from '../../assets/icons/flag-us.svg'
import gb from '../../assets/icons/flag-gb.svg'
import jp from '../../assets/icons/flag-jp.svg'

const icons: Record<string, string> = { btc, eth, sol, xrp, xau, 'flag-eu': eu, 'flag-us': us, 'flag-gb': gb, 'flag-jp': jp }

// Um ícone, ou dois sobrepostos para pares de moeda
export default function AssetIcon({ names }: { names: string[] }) {
  if (names.length === 1) {
    return <img src={icons[names[0]]} alt="" width={36} height={36} className="h-9 w-9 rounded-full" />
  }
  return (
    <span className="relative block h-9 w-9 shrink-0">
      <img src={icons[names[0]]} alt="" width={24} height={24} className="absolute left-0 top-0 h-6 w-6 rounded-full" />
      <img src={icons[names[1]]} alt="" width={24} height={24} className="absolute bottom-0 right-0 h-6 w-6 rounded-full ring-2 ring-fundo" />
    </span>
  )
}
