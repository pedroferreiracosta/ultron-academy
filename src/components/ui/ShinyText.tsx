import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

/**
 * Título com brilho metálico prata -> grafite -> prata, varrendo o texto.
 * Equivalente local ao "Shiny Text" do React Bits (MCP indisponível neste ambiente).
 */
export default function ShinyText({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <motion.span
      className={`inline-block bg-clip-text text-transparent ${className}`}
      style={{
        backgroundImage:
          'linear-gradient(100deg, #E5E7EB 20%, #9AA3AD 40%, #FFFFFF 50%, #9AA3AD 60%, #E5E7EB 80%)',
        backgroundSize: '200% 100%',
      }}
      animate={{ backgroundPosition: ['200% 0%', '-200% 0%'] }}
      transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
    >
      {children}
    </motion.span>
  )
}
