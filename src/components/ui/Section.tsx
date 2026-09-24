import type { ReactNode } from 'react'

/**
 * Seção numerada dentro da coluna central: régua superior, índice mono
 * ("01 / Método") e título alinhado à esquerda.
 */
export default function Section({
  id,
  index,
  name,
  title,
  intro,
  aside,
  children,
}: {
  id?: string
  index: string
  name: string
  title: ReactNode
  intro?: ReactNode
  aside?: ReactNode
  children?: ReactNode
}) {
  return (
    <section id={id} className="border-t">
      <div className="frame">
        <div className="flex items-center justify-between border-b px-4 py-2.5 sm:px-8">
          <p className="label">
            <span className="text-ciano">{index}</span> / {name}
          </p>
          {id && <p className="label hidden text-aco/50 sm:block">#{id}</p>}
        </div>
        <div className="grid gap-6 px-4 pt-10 sm:px-8 sm:pt-14 lg:grid-cols-12 lg:gap-8">
          <h2 className="text-[clamp(1.75rem,3.4vw,2.75rem)] font-bold leading-[1.1] tracking-[-0.01em] lg:col-span-7">
            {title}
          </h2>
          {(intro || aside) && (
            <div className="text-aco lg:col-span-5 lg:pt-2">
              {intro && <p className="max-w-prose text-base sm:text-[17px]">{intro}</p>}
              {aside}
            </div>
          )}
        </div>
        <div className="px-4 pb-14 pt-10 sm:px-8 sm:pb-20">{children}</div>
      </div>
    </section>
  )
}
