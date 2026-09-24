import type { SVGProps } from 'react'
import Todo from './ui/Todo'
import { disclaimer, facts, links } from '../content/site'
import logo from '../assets/ultron-logo-160.webp'

// lucide-react não tem ícones de marca; logo do TikTok em SVG inline
function TikTok({ size = 16, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.68 5.68 0 0 0-.77-.05 5.69 5.69 0 0 0-5.69 5.69A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z" />
    </svg>
  )
}

type Item = { label: string; href: string | null; external?: boolean; todo?: string }

export default function Footer({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const prefix = page === 'home' ? '' : import.meta.env.BASE_URL

  const columns: { title: string; items: Item[] }[] = [
    {
      title: 'Site',
      items: [
        { label: 'Conteúdo', href: `${prefix}#metodo` },
        { label: 'Por onde começar', href: `${prefix}#por-onde-comecar` },
        { label: 'Sala VIP', href: `${prefix}#sala-vip` },
        { label: 'Experts', href: `${import.meta.env.BASE_URL}experts.html` },
      ],
    },
    {
      title: 'Contato',
      items: [
        { label: 'Grupo no Telegram', href: links.telegram, external: true },
        { label: 'TikTok', href: links.tiktok, external: true },
        { label: 'Perguntas', href: `${prefix}#faq` },
      ],
    },
    {
      title: 'Políticas',
      items: [
        { label: 'Termos de uso', href: links.terms, todo: 'URL dos termos' },
        { label: 'Privacidade', href: links.privacy, todo: 'URL da privacidade' },
        { label: 'Seu dinheiro', href: `${prefix}#seu-dinheiro` },
      ],
    },
  ]

  return (
    <footer className="border-t bg-preto">
      <div className="frame">
        <div className="grid lg:grid-cols-12">
          <div className="border-b px-4 py-10 sm:px-8 lg:col-span-4 lg:border-b-0 lg:border-r">
            <a href={page === 'home' ? '#hero' : import.meta.env.BASE_URL} className="inline-block">
              <img src={logo} alt="Ultron Academy" width={164} height={160} loading="lazy" className="h-16 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-aco">Empresa de educação em trading. Aulas gravadas, Sala VIP e grupo no Telegram.</p>
            <div className="mt-5 flex gap-2">
              <a
                href={links.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok da Ultron Academy"
                className="flex h-11 w-11 items-center justify-center rounded-xs border text-aco transition-colors duration-150 hover:border-ciano hover:text-ciano"
              >
                <TikTok aria-hidden="true" />
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:col-span-8">
            {columns.map((col, ci) => (
              <div key={col.title} className={`border-b px-4 py-8 sm:px-8 lg:border-b-0 ${ci < columns.length - 1 ? 'sm:border-r' : ''} ${ci === 0 ? 'border-r' : ''}`}>
                <p className="label">{col.title}</p>
                <ul className="mt-4 space-y-1">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="inline-flex min-h-[36px] items-center text-sm text-prata/85 transition-colors duration-150 hover:text-ciano"
                        >
                          {item.label}
                        </a>
                      ) : (
                        <Todo>{item.todo}</Todo>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t px-4 py-8 sm:px-8">
          <p className="label mb-3 text-prata">Aviso legal e de risco</p>
          <p className="max-w-4xl text-sm leading-relaxed text-prata/85">
            {disclaimer}
            {facts.cnpj ? ` CNPJ: ${facts.cnpj}.` : ' '}
            {!facts.cnpj && <Todo>CNPJ</Todo>}
          </p>
          <p className="num mt-6 text-xs text-aco">&copy; {new Date().getFullYear()} Ultron Academy</p>
        </div>
      </div>
    </footer>
  )
}
