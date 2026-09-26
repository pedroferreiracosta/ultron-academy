import { useState } from 'react'
import { ChevronDown, TriangleAlert } from 'lucide-react'
import { riskNotice } from '../../content/site'

// Aviso obrigatório no rodapé, sempre aberto
export default function RiskNotice({ className = '' }: { className?: string }) {
  return (
    <aside
      aria-label={riskNotice.title}
      className={`rounded-2xl border border-amarelo/50 bg-preto/70 p-5 text-left sm:p-6 ${className}`}
    >
      <p className="flex items-center gap-2.5 font-heading text-sm font-semibold uppercase tracking-wider text-amarelo">
        <TriangleAlert size={18} className="shrink-0" aria-hidden="true" />
        {riskNotice.title}
      </p>
      <p className="mt-3 text-[15px] leading-relaxed text-branco/90">{riskNotice.body}</p>
    </aside>
  )
}

const STORAGE_KEY = 'ultron-aviso-minimizado'

// Mesmo aviso, fixo no canto da tela. Pode ser minimizado, mas nunca some:
// minimizado vira uma pílula que abre de novo. A escolha vale até fechar a aba.
export function RiskPopup() {
  const [minimized, setMinimized] = useState(() => {
    try {
      return sessionStorage.getItem(STORAGE_KEY) === '1'
    } catch {
      return false // storage bloqueado: começa aberto
    }
  })

  const toggle = (value: boolean) => {
    setMinimized(value)
    try {
      sessionStorage.setItem(STORAGE_KEY, value ? '1' : '0')
    } catch {
      // storage bloqueado: só não lembra a escolha
    }
  }

  if (minimized) {
    return (
      <button
        type="button"
        onClick={() => toggle(false)}
        aria-expanded="false"
        className="fixed bottom-3 left-3 z-40 flex min-h-[44px] items-center gap-2 rounded-full border border-amarelo/60 bg-preto/95 px-4 text-[13px] font-semibold text-amarelo shadow-[0_10px_40px_-10px_rgba(0,0,0,0.8)] backdrop-blur-md sm:bottom-6 sm:left-6"
      >
        <TriangleAlert size={16} aria-hidden="true" />
        Aviso: conteúdo educacional
      </button>
    )
  }

  return (
    <aside
      role="note"
      aria-label={riskNotice.title}
      className="fixed inset-x-3 bottom-3 z-40 max-h-[45vh] overflow-y-auto rounded-2xl border border-amarelo/60 bg-preto/95 p-4 text-left shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:max-h-none sm:w-[380px] sm:p-5"
    >
      <div className="flex items-start justify-between gap-3">
        <p className="flex items-center gap-2 font-heading text-[12px] font-semibold uppercase tracking-wider text-amarelo sm:text-[13px]">
          <TriangleAlert size={16} className="shrink-0" aria-hidden="true" />
          {riskNotice.title}
        </p>
        <button
          type="button"
          onClick={() => toggle(true)}
          aria-label="Minimizar aviso"
          aria-expanded="true"
          className="-m-2 flex h-11 w-11 shrink-0 items-center justify-center rounded-lg text-aco transition-colors hover:text-branco"
        >
          <ChevronDown size={20} aria-hidden="true" />
        </button>
      </div>
      <p className="mt-2 text-[13px] leading-relaxed text-branco/90 sm:text-sm">{riskNotice.body}</p>
    </aside>
  )
}
