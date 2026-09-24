import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './ui/Button'
import { links, telegramCtaShort } from '../content/site'
import logo from '../assets/ultron-logo-96.webp'

const navLinks = (prefix: string) => [
  { label: 'Conteúdo', href: `${prefix}#metodo` },
  { label: 'Por onde começar', href: `${prefix}#por-onde-comecar` },
  { label: 'Sala VIP', href: `${prefix}#sala-vip` },
  { label: 'Seu dinheiro', href: `${prefix}#seu-dinheiro` },
  { label: 'Experts', href: `${import.meta.env.BASE_URL}experts.html` },
  { label: 'FAQ', href: `${prefix}#faq` },
]

export default function Header({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const [open, setOpen] = useState(false)
  const prefix = page === 'home' ? '' : import.meta.env.BASE_URL

  return (
    <header className="sticky top-0 z-50 border-b bg-preto">
      <div className="frame flex h-14 items-center justify-between gap-4 px-4 sm:px-8">
        <a
          href={page === 'home' ? '#hero' : import.meta.env.BASE_URL}
          aria-label="Ultron Academy, início"
          className="flex shrink-0 items-center gap-3"
        >
          <img src={logo} alt="" width={98} height={96} decoding="async" className="block h-9 w-auto" />
        </a>

        <nav className="hidden items-center gap-6 lg:flex" aria-label="Seções">
          {navLinks(prefix).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[13px] text-aco transition-colors duration-150 hover:text-branco"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={links.broker}
            target="_blank"
            rel="noopener noreferrer"
            title="Cadastro na corretora que usamos nas aulas. Opcional."
            className="hidden text-[13px] text-aco transition-colors duration-150 hover:text-branco md:inline"
          >
            Corretora que usamos
          </a>
          <Button href={links.telegram} target="_blank" rel="noopener noreferrer" className="md:ml-4">
            <span className="sm:hidden">{telegramCtaShort}</span>
            <span className="hidden sm:inline">Entrar no grupo gratuito</span>
          </Button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className="-mr-2 flex h-11 w-11 items-center justify-center text-prata lg:hidden"
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {open && (
        <nav id="menu-mobile" className="border-t lg:hidden" aria-label="Seções">
          <div className="frame flex flex-col">
            {[...navLinks(prefix), { label: 'Corretora que usamos (opcional)', href: links.broker }].map((link, i) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.href.startsWith('http') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                onClick={() => setOpen(false)}
                className="flex min-h-[48px] items-center gap-4 border-b px-4 text-sm text-prata last:border-b-0"
              >
                <span className="num text-[11px] text-aco/60">{String(i + 1).padStart(2, '0')}</span>
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
