import { Camera, CirclePlay, Send, MessageCircle } from 'lucide-react'
import { links } from '../content/site'
import logoIcon from '../assets/logo-ultron-icon.png'

const socials = [
  { label: 'Telegram', href: links.telegram, icon: Send },
  { label: 'WhatsApp', href: links.whatsapp, icon: MessageCircle },
  { label: 'Instagram', href: links.instagram, icon: Camera },
  { label: 'YouTube', href: links.youtube, icon: CirclePlay },
]

export default function Footer({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const prefix = page === 'home' ? '' : '/'

  return (
    <footer className="relative border-t border-white/5 bg-preto py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-4 sm:px-6">
        <a href={page === 'home' ? '#hero' : '/'} className="flex items-center gap-2">
          <img src={logoIcon} alt="Ultron Academy" className="h-7 w-auto" />
          <span className="font-heading text-sm font-bold text-branco">
            ULTRON <span className="font-medium text-aco">ACADEMY</span>
          </span>
        </a>

        <nav className="flex flex-wrap justify-center gap-6 text-sm text-aco">
          <a href={`${prefix}#metodo`} className="hover:text-prata">Método</a>
          <a href={`${prefix}#planos`} className="hover:text-prata">Planos</a>
          <a href="/experts.html" className="hover:text-prata">Experts</a>
          <a href={`${prefix}#faq`} className="hover:text-prata">FAQ</a>
          <a href={links.terms} className="hover:text-prata">Termos</a>
          <a href={links.privacy} className="hover:text-prata">Privacidade</a>
        </nav>

        <div className="flex gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-aco transition-colors hover:border-ciano/40 hover:text-ciano"
            >
              <s.icon size={18} aria-hidden="true" />
            </a>
          ))}
        </div>

        <p className="max-w-xl text-center text-xs text-aco/60">
          Operar no mercado financeiro envolve riscos. Resultados passados não garantem
          resultados futuros. A Ultron Academy tem caráter educacional.
        </p>
        <p className="text-xs text-aco/40">&copy; {new Date().getFullYear()} Ultron Academy. Todos os direitos reservados.</p>
      </div>
    </footer>
  )
}
