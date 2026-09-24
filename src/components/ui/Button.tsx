import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'outline' | 'light'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: 'sm' | 'md'
}

const base =
  'inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-lg font-body font-semibold transition-colors duration-200 min-h-[44px]'

const variants: Record<Variant, string> = {
  // Ciano da marca no lugar do laranja da referência
  primary: 'bg-ciano text-preto hover:bg-branco',
  outline: 'border border-branco/50 text-branco hover:border-ciano hover:text-ciano',
  light: 'border border-preto/25 text-preto hover:border-azul hover:text-azul',
}

const sizes = {
  sm: 'px-5 py-2 text-[15px]',
  md: 'px-6 py-3 text-base',
}

export default function Button({ variant = 'primary', size = 'md', className = '', children, ...props }: ButtonProps) {
  // Quem passa `hidden` controla o display pelos breakpoints; tira o inline-flex da base
  const b = className.split(/\s+/).includes('hidden') ? base.replace('inline-flex ', '') : base
  return (
    <a className={`${b} ${variants[variant]} ${sizes[size]} ${className}`} {...props}>
      {children}
    </a>
  )
}
