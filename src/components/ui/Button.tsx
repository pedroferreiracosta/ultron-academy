import type { AnchorHTMLAttributes } from 'react'

type Variant = 'primary' | 'secondary'

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: Variant
  size?: 'md' | 'lg'
}

const base =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xs font-body font-semibold transition-colors duration-150 min-h-[44px]'

const variants: Record<Variant, string> = {
  // Único elemento em ciano sólido da página: a ação principal
  primary: 'bg-ciano text-preto hover:bg-branco',
  secondary: 'border border-aco/40 text-branco hover:border-ciano hover:text-ciano',
}

const sizes = {
  md: 'px-4 text-sm',
  lg: 'px-6 text-[15px] min-h-[52px]',
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
