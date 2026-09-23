import type { ReactNode } from 'react'
import Reveal from './Reveal'

export default function SectionHeading({
  eyebrow,
  title,
  children,
  align = 'center',
}: {
  eyebrow: string
  title: ReactNode
  children?: ReactNode
  align?: 'center' | 'left'
}) {
  const centered = align === 'center'
  return (
    <Reveal className={centered ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}>
      <span className="text-xs font-medium uppercase tracking-[0.2em] text-ciano">{eyebrow}</span>
      <h2 className="mt-3 text-[clamp(1.75rem,3.6vw,2.5rem)] font-bold leading-tight">{title}</h2>
      {children && <p className="mt-4 text-base text-aco sm:text-lg">{children}</p>}
    </Reveal>
  )
}
