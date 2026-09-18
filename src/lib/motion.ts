import type { Variants } from 'framer-motion'

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.7, ease: 'easeOut' } },
}

export const stagger = (delay = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay },
  },
})

export const viewportOnce = { once: true, amount: 0.2 }
