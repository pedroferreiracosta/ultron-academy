import type { ReactNode } from 'react'

/**
 * Placeholder de dado real que ainda falta. Aparece só em `npm run dev`;
 * no build de produção não renderiza nada.
 */
export default function Todo({ children, className = '' }: { children: ReactNode; className?: string }) {
  if (!import.meta.env.DEV) return null
  return (
    <span
      className={`inline-flex items-center gap-2 border border-dashed border-ciano/60 bg-ciano/5 px-2 py-1 font-mono text-[11px] uppercase tracking-wider text-ciano ${className}`}
    >
      TODO · {children}
    </span>
  )
}
