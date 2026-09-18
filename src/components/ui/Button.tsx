import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary' | 'navy'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-body font-medium transition-all duration-300 focus-visible:outline-2 focus-visible:outline-ciano min-h-[44px] px-6 backdrop-blur-md'

const variants: Record<Variant, string> = {
  // Vidro claro — CTA principal do hero e da página
  primary:
    'border border-white/25 bg-white/10 text-branco shadow-[inset_0_1px_0_rgba(255,255,255,0.25),0_8px_24px_-8px_rgba(0,0,0,0.6)] hover:bg-white/[0.16] hover:border-ciano/40 hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.3),0_10px_30px_-6px_rgba(0,212,255,0.35)] active:scale-[0.98]',
  // Vidro contorno — CTA secundário
  secondary:
    'border border-white/15 bg-white/[0.03] text-prata hover:border-ciano/40 hover:text-branco hover:bg-white/[0.06] active:scale-[0.98]',
  // Vidro navy — CTA do navbar
  navy:
    'border border-azul/30 bg-navy/50 text-branco shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-navy/70 hover:border-ciano/40 hover:shadow-[0_8px_24px_-8px_rgba(0,212,255,0.4)] active:scale-[0.98]',
}

const sizes = {
  md: 'text-sm py-2.5',
  lg: 'text-base py-3.5 px-8',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...props
}: ButtonProps) {
  return (
    <a className={`${base} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  )
}
