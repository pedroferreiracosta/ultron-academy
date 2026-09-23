import { Camera, CirclePlay, Send, MessageCircle } from 'lucide-react'
import { links } from '../content/site'
import logo from '../assets/ultron-logo.png'

const socials = [
  { label: 'Telegram', href: links.telegram, icon: Send },
  { label: 'WhatsApp', href: links.whatsapp, icon: MessageCircle },
  { label: 'Instagram', href: links.instagram, icon: Camera },
  { label: 'YouTube', href: links.youtube, icon: CirclePlay },
]

export default function Footer({ page = 'home' }: { page?: 'home' | 'experts' }) {
  const prefix = page === 'home' ? '' : '/'

  const columns = [
    {
      title: 'Ultron',
      items: [
        { label: 'Como funciona', href: `${prefix}#como-funciona` },
        { label: 'Estrutura', href: `${prefix}#estrutura` },
        { label: 'Experts', href: '/experts.html' },
      ],
    },
    {
      title: 'Comece',
      items: [
        { label: 'Abrir conta', href: links.broker, external: true },
        { label: 'Comunidade', href: links.telegram, external: true },
        { label: 'Sala VIP', href: links.vip, external: true },
      ],
    },
    {
      title: 'Políticas',
      items: [
        { label: 'Termos de uso', href: links.terms },
        { label: 'Privacidade', href: links.privacy },
        { label: 'Transparência', href: `${prefix}#transparencia` },
      ],
    },
    {
      title: 'Ajuda',
      items: [
        { label: 'Perguntas frequentes', href: `${prefix}#faq` },
        { label: 'Suporte', href: links.telegram, external: true },
      ],
    },
  ]

  return (
    <footer className="relative border-t border-white/5 bg-preto pt-16 pb-10">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
          <div>
            <a href={page === 'home' ? '#hero' : '/'} className="inline-block">
              <img src={logo} alt="Ultron Academy" className="h-20 w-auto" />
            </a>
            <p className="mt-4 max-w-xs text-sm text-aco">
              Agência de formação e acompanhamento de traders. Método, comunidade e Sala VIP.
            </p>
            <div className="mt-6 flex gap-3">
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
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            {columns.map((col) => (
              <div key={col.title}>
                <p className="font-heading text-sm font-bold text-branco">{col.title}</p>
                <ul className="mt-4 space-y-3">
                  {col.items.map((item) => (
                    <li key={item.label}>
                      <a
                        href={item.href}
                        {...('external' in item && item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                        className="text-sm text-aco transition-colors hover:text-prata"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-14 space-y-3 border-t border-white/5 pt-8 text-xs text-aco/60">
          <p>
            A Ultron Academy é uma agência de caráter educacional e não é instituição financeira nem
            corretora. Não realizamos gestão de recursos, não recebemos depósitos e não operamos em
            nome de alunos. As operações são feitas pelo próprio aluno, em conta aberta na corretora
            parceira, sujeita aos termos dela.
          </p>
          <p>
            Operar no mercado financeiro envolve risco de perda do capital investido. Resultados passados
            não garantem resultados futuros.
          </p>
          <p className="pt-2 text-aco/40">
            &copy; {new Date().getFullYear()} Ultron Academy. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
