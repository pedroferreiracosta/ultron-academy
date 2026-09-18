import * as React from 'react'
import { useCallback, useEffect, useRef } from 'react'
import { useInView } from 'framer-motion'
import { gsap } from 'gsap'

type Tag = 'h1' | 'h2' | 'h3' | 'span'

type Props = {
  text: string
  tag?: Tag
  className?: string
}

export default function RollingLetters({ text, tag = 'h2', className = '' }: Props) {
  const containerRef = useRef<HTMLElement>(null)
  const inView = useInView(containerRef, { once: true, amount: 0.6 })

  const playAnimation = useCallback(() => {
    if (!containerRef.current) return
    const chars = containerRef.current.querySelectorAll('.char')
    gsap.set(chars, { clearProps: 'transform' })
    gsap.from(chars, {
      yPercent: 120,
      duration: 0.6,
      stagger: { each: 0.05, from: 'center' },
      ease: 'power4.out',
    })
  }, [])

  useEffect(() => {
    if (inView) playAnimation()
  }, [inView, playAnimation])

  return React.createElement(
    tag,
    { ref: containerRef, className, style: { display: 'inline-block', overflow: 'hidden' } },
    text.split('').map((char, index) => (
      <span key={index} className="char" style={{ display: 'inline-block' }}>
        {char === ' ' ? ' ' : char}
      </span>
    ))
  )
}
