import type { SVGProps } from 'react'
import { Send } from 'lucide-react'
import Todo from './ui/Todo'
import RiskNotice, { RiskPopup } from './ui/RiskNotice'
import { disclaimer, facts, footer, links, nav } from '../content/site'
import logo from '../assets/ultron-logo-160.webp'

// lucide-react não tem ícones de marca; logo do TikTok em SVG inline
function TikTok({ size = 18, ...props }: { size?: number } & SVGProps<SVGSVGElement>) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" {...props}>
      <path d="M16.6 5.82A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5 2.6 2.6 0 0 1-2.6-2.6 2.6 2.6 0 0 1 3.37-2.48V9.66a5.68 5.68 0 0 0-.77-.05 5.69 5.69 0 0 0-5.69 5.69A5.69 5.69 0 0 0 9.86 21a5.69 5.69 0 0 0 5.69-5.69V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.3 4.3 0 0 1-3.25-1.48Z" />
    </svg>
  )
}

type Item = { label: string; href: string | null; external?: boolean; todo?: string }

export default function Footer({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const base = import.meta.env.BASE_URL
  const prefix = page === 'home' ? '' : base

  const columns: { title: string; items: Item[] }[] = [
    {
      title: 'Site',
      items: nav.map((n) => ({
        label: n.label,
        href: n.hash === '#experts' ? `${base}experts.html` : `${prefix}${n.hash}`,
      })),
    },
    {
      title: 'Comunidade',
      items: [
        { label: 'Lives gratuitas no Telegram', href: links.telegram, external: true },
        { label: 'TikTok', href: links.tiktok, external: true },
        { label: 'Corretora usada nas lives (opcional)', href: links.broker, external: true },
      ],
    },
    {
      title: 'Políticas',
      items: [
        { label: 'Termos de uso', href: links.terms, todo: 'URL dos termos' },
        { label: 'Política de privacidade', href: links.privacy, todo: 'URL da privacidade' },
        { label: 'Política de reembolso', href: links.refund, todo: 'URL do reembolso' },
      ],
    },
  ]

  const socials = [
    { label: 'Telegram', href: links.telegram, icon: <Send size={18} aria-hidden="true" /> },
    { label: 'TikTok', href: links.tiktok, icon: <TikTok aria-hidden="true" /> },
  ]

  return (
    <footer className="relative overflow-hidden bg-fundo pt-24">
      <RiskPopup />
      <div className="container-x">
        <div className="grid gap-14 lg:grid-cols-[1.1fr_1.6fr]">
          <div>
            <a href={page === 'home' ? '#topo' : base} className="inline-block">
              <img src={logo} alt="Ultron Academy" width={164} height={160} loading="lazy" className="h-16 w-auto" />
            </a>
            <p className="mt-6 max-w-sm text-[17px] leading-relaxed text-aco">{footer.about}</p>
            <div className="mt-6 flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${s.label} da Ultron Academy`}
                  className="flex h-11 w-11 items-center justify-center rounded-lg border border-ciano/25 bg-card text-branco transition-colors hover:text-ciano"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {columns
              .filter((col) => import.meta.env.DEV || col.items.some((i) => i.href))
              .map((col) => (
              <div key={col.title}>
                <p className="font-heading text-lg font-semibold">{col.title}</p>
                <ul className="mt-5 space-y-2">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                          className="inline-flex min-h-[36px] items-center text-[15px] text-aco transition-colors hover:text-branco"
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

        <div className="mt-16 border-t border-borda pt-10">
          {/* Informações institucionais */}
          <p className="font-heading text-sm font-semibold uppercase tracking-wider text-branco">{footer.institutionalTitle}</p>
          <p className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-prata/85">
            {facts.companyName ? <span>{facts.companyName}</span> : <Todo>razão social</Todo>}
            {facts.cnpj ? <span>CNPJ: {facts.cnpj}</span> : <Todo>CNPJ</Todo>}
          </p>

          <RiskNotice className="mt-8 max-w-5xl" />

          <p className="mt-8 font-heading text-sm font-semibold uppercase tracking-wider text-prata">Aviso legal e de risco</p>
          <p className="mt-4 max-w-5xl text-sm leading-relaxed text-prata/85">{disclaimer}</p>
          <p className="mt-8 text-sm text-branco">&copy; {new Date().getFullYear()} Ultron Academy. Todos os direitos reservados.</p>
        </div>
      </div>

      {/* Wordmark gigante no fim da página */}
      <div className="relative mt-10" aria-hidden="true">
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-full"
          style={{ background: 'radial-gradient(60% 100% at 50% 100%, rgba(30,107,255,0.35), transparent 70%)' }}
        />
        <p className="container-x relative select-none bg-gradient-to-b from-branco to-branco/10 bg-clip-text font-heading text-center text-[clamp(4rem,17.5vw,16.5rem)] font-extrabold leading-[0.8] tracking-[-0.03em] text-transparent">
          ULTRON
        </p>
      </div>
    </footer>
  )
}
