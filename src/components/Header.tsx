import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { links } from '../content/site'
import logo from '../assets/ultron-logo.png'

const navLinks = (prefix: string) => [
  { label: 'Como funciona', href: `${prefix}#como-funciona` },
  { label: 'Estrutura', href: `${prefix}#estrutura` },
  { label: 'Transparência', href: `${prefix}#transparencia` },
  { label: 'Experts', href: '/experts.html' },
  { label: 'FAQ', href: `${prefix}#faq` },
]

export default function Header({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const prefix = page === 'home' ? '' : '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4 sm:pt-5">
      <div
        className={`w-full max-w-6xl rounded-2xl border transition-all duration-300 ${
          scrolled || open
            ? 'border-white/10 bg-grafite/85 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md'
            : 'border-white/[0.06] bg-grafite/40 backdrop-blur-sm'
        }`}
      >
        <div className="flex items-center justify-between gap-4 px-4 py-2.5 sm:px-5">
          <a
            href={page === 'home' ? '#hero' : '/'}
            aria-label="Ultron Academy — início"
            className="flex shrink-0 items-center rounded-md"
          >
            <img
              src={logo}
              alt="Ultron Academy"
              width={823}
              height={805}
              decoding="async"
              fetchPriority="high"
              className="block h-10 w-auto sm:h-11"
            />
          </a>

          <nav className="hidden items-center gap-7 lg:flex">
            {navLinks(prefix).map((link) => (
              <a key={link.label} href={link.href} className="text-sm text-aco transition-colors hover:text-branco">
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Button
              href={links.telegram}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              className="hidden sm:inline-flex"
            >
              Comunidade
            </Button>
            <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy">
              Abrir conta
            </Button>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-label={open ? 'Fechar menu' : 'Abrir menu'}
              className="flex h-11 w-11 items-center justify-center rounded-full text-prata lg:hidden"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="flex flex-col border-t border-white/5 px-4 py-3 lg:hidden">
            {navLinks(prefix).map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-2 py-3 text-sm text-prata hover:bg-white/[0.04]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        )}
      </div>
    </header>
  )
}
