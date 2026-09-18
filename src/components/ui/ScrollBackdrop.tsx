import { motion, useScroll, useTransform } from 'framer-motion'

/**
 * Fundo único e fixo para a página inteira: grid técnico + glows radiais
 * que se deslocam com o scroll. Substitui fundos por seção para eliminar
 * a sensação de blocos separados — a página inteira lê como uma única
 * superfície contínua.
 */
export default function ScrollBackdrop() {
  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 420])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -320])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 260])

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-preto" aria-hidden="true">
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #E5E7EB 1px, transparent 1px), linear-gradient(to bottom, #E5E7EB 1px, transparent 1px)',
          backgroundSize: '48px 48px',
        }}
      />

      <motion.div
        style={{ y: y1, background: 'radial-gradient(circle, rgba(10,47,119,0.55) 0%, transparent 70%)' }}
        className="absolute left-[6%] top-[0%] h-[560px] w-[560px] rounded-full blur-[140px]"
      />
      <motion.div
        style={{ y: y2, background: 'radial-gradient(circle, rgba(30,107,255,0.35) 0%, transparent 70%)' }}
        className="absolute right-[2%] top-[30%] h-[480px] w-[480px] rounded-full blur-[130px]"
      />
      <motion.div
        style={{ y: y3, background: 'radial-gradient(circle, rgba(0,212,255,0.28) 0%, transparent 70%)' }}
        className="absolute left-1/2 top-[65%] h-[420px] w-[720px] -translate-x-1/2 rounded-full blur-[130px]"
      />
    </div>
  )
}
