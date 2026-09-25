import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { cta, links, nav } from '../content/site'
import logo from '../assets/ultron-logo-96.webp'

export default function Header({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const base = import.meta.env.BASE_URL
  const prefix = page === 'home' ? '' : base

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = nav.map((n) => ({
    label: n.label,
    href: n.hash === '#experts' && page === 'experts' ? `${base}experts.html` : `${prefix}${n.hash}`,
  }))

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:pt-6">
      <div
        className={`mx-auto max-w-[980px] rounded-2xl border transition-colors duration-300 ${
          scrolled || open ? 'border-borda bg-preto/90 backdrop-blur-md' : 'border-branco/15 bg-preto/40 backdrop-blur-sm'
        }`}
      >
        <div className="flex h-[64px] items-center justify-between gap-4 pl-5 pr-3 sm:h-[72px] sm:pl-7 sm:pr-4">
          <a href={page === 'home' ? '#topo' : base} aria-label="Ultron Academy, início" className="shrink-0">
            <img src={logo} alt="" width={98} height={96} decoding="async" className="h-10 w-auto sm:h-11" />
          </a>

          <nav className="hidden items-center gap-7 lg:flex" aria-label="Seções">
            {items.map((l) => (
              <a key={l.label} href={l.href} className="text-[15px] text-branco/90 transition-colors hover:text-ciano">
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2.5">
            <Button
              href={links.broker}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
              title="Cadastro na corretora que usamos nas lives. Opcional."
              className="hidden md:inline-flex"
            >
              {cta.brokerShort}
            </Button>
            <Button href={links.telegram} target="_blank" rel="noopener noreferrer" size="sm">
              {cta.telegramShort}
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="menu-mobile"
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="flex h-11 w-11 items-center justify-center rounded-lg text-branco lg:hidden"
            >
              {open ? <X size={24} aria-hidden="true" /> : <Menu size={24} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav id="menu-mobile" className="flex flex-col gap-1 border-t border-borda px-4 pb-4 pt-2 lg:hidden" aria-label="Seções">
            {items.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-base text-branco/90 hover:bg-branco/5"
              >
                {l.label}
              </a>
            ))}
            <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="outline" className="mt-2">
              {cta.broker}
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
