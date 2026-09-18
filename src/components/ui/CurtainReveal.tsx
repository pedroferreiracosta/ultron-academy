import { useRef } from 'react'
import { useInView } from 'framer-motion'

type Direction = 'center-horizontal' | 'left-to-right' | 'right-to-left' | 'top-to-bottom' | 'bottom-to-top'

const INSET_MAP: Record<Direction, string> = {
  'center-horizontal': 'inset(0% 50% 0% 50%)',
  'left-to-right': 'inset(0% 100% 0% 0%)',
  'right-to-left': 'inset(0% 0% 0% 100%)',
  'top-to-bottom': 'inset(0% 0% 100% 0%)',
  'bottom-to-top': 'inset(100% 0% 0% 0%)',
}

type Props = {
  text: string
  tag?: 'h1' | 'h2' | 'h3' | 'span'
  className?: string
  direction?: Direction
}

export default function CurtainReveal({ text, tag: Tag = 'h2', className = '', direction = 'center-horizontal' }: Props) {
  const ref = useRef<HTMLHeadingElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const startClip = INSET_MAP[direction]

  return (
    <Tag
      ref={ref}
      className={`inline-block ${className}`}
      style={{
        clipPath: inView ? 'inset(0% 0% 0% 0%)' : startClip,
        transition: 'clip-path 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'clip-path',
      }}
    >
      {text}
    </Tag>
  )
}
