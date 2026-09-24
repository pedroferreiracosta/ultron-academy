import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button'
import Todo from './ui/Todo'
import { links, telegramCta } from '../content/site'

interface Expert {
  name: string
  area: string
  bio: string
  since: string | null
  markets: string | null
  atUltron: string | null
  photo: string
}

export default function ExpertProfile({ expert, index }: { expert: Expert; index: number }) {
  const code = String(index + 1).padStart(2, '0')
  const rows = [
    { k: 'Área', v: expert.area, todo: undefined },
    { k: 'No mercado desde', v: expert.since, todo: 'ano' },
    { k: 'Ativos que opera', v: expert.markets, todo: 'ativos' },
    { k: 'Na Ultron', v: expert.atUltron, todo: 'papel na Ultron' },
  ].filter((r) => r.v || import.meta.env.DEV)

  return (
    <article className="border-t">
      <div className="frame">
        <div className="border-b px-4 py-2.5 sm:px-8">
          <p className="label">
            <span className="text-ciano">{code}</span> / Instrutor
          </p>
        </div>
        <div className="grid lg:grid-cols-12">
          <figure className="border-b lg:col-span-5 lg:border-b-0 lg:border-r">
            <img
              src={expert.photo}
              alt={`${expert.name} dando aula com o gráfico projetado ao fundo`}
              width={960}
              height={1200}
              loading={index === 0 ? 'eager' : 'lazy'}
              decoding="async"
              className="block aspect-[4/5] w-full object-cover"
            />
          </figure>

          <div className="flex flex-col px-4 py-10 sm:px-8 lg:col-span-7 lg:py-14">
            <h2 className="text-[clamp(2rem,4vw,3.25rem)] font-extrabold leading-[1.05] tracking-[-0.015em]">
              {expert.name}
            </h2>
            <p className="mt-5 max-w-lg text-base text-prata/85 sm:text-lg">{expert.bio}</p>
            <Todo className="mt-3 self-start">bio real e confirmação do nome</Todo>

            <dl className="mt-8 border-t">
              {rows.map((r) => (
                <div key={r.k} className="grid grid-cols-[9rem_1fr] items-baseline gap-4 border-b py-3">
                  <dt className="label">{r.k}</dt>
                  <dd className="text-sm text-prata">{r.v ?? <Todo>{r.todo}</Todo>}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-8">
              <Button href={links.telegram} target="_blank" rel="noopener noreferrer" variant="secondary">
                {telegramCta}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
