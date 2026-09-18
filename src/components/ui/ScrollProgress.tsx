import { motion, useScroll, useSpring } from 'framer-motion'

/**
 * Fio contínuo no topo que acompanha o scroll — reforça a leitura de
 * "uma página só", em vez de seções que se sucedem.
 */
export default function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const progress = useSpring(scrollYProgress, { stiffness: 200, damping: 30, mass: 0.2 })

  return (
    <motion.div
      style={{ scaleX: progress }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gradient-to-r from-navy via-azul to-ciano"
      aria-hidden="true"
    />
  )
}
