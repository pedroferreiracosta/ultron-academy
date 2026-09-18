import { useEffect, useState } from 'react'
import Button from './ui/Button'
import { links } from '../content/site'
import logo from '../assets/ultron-logo.png'

const navLinks = (prefix: string) => [
  { label: 'Método', href: `${prefix}#metodo` },
  { label: 'Sala VIP', href: `${prefix}#vip` },
  { label: 'Planos', href: `${prefix}#planos` },
  { label: 'Experts', href: '/experts.html' },
  { label: 'FAQ', href: `${prefix}#faq` },
]

export default function Header({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const [scrolled, setScrolled] = useState(false)
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
        className={`flex w-full max-w-4xl items-center justify-between rounded-full border transition-all duration-300 ${
          scrolled
            ? 'border-white/10 bg-grafite/80 px-4 py-2 shadow-[0_8px_32px_-8px_rgba(0,0,0,0.6)] backdrop-blur-md'
            : 'border-white/[0.08] bg-grafite/50 px-5 py-3 backdrop-blur-sm'
        }`}
      >
        <a
          href={page === 'home' ? '#hero' : '/'}
          aria-label="Ultron Academy — início"
          className="flex shrink-0 items-center rounded-md focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <img
            src={logo}
            alt="Ultron Academy"
            width={823}
            height={805}
            decoding="async"
            fetchPriority="high"
            className="block h-9 w-auto drop-shadow-[0_1px_4px_rgba(0,0,0,0.5)] sm:h-11"
          />
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {navLinks(prefix).map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-aco transition-colors hover:text-branco"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <Button href={links.broker} target="_blank" rel="noopener noreferrer" variant="navy" size="md">
          Abrir minha conta
        </Button>
      </div>
    </header>
  )
}
