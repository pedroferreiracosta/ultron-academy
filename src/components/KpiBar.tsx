import { motion } from 'framer-motion'
import CountUp from './ui/CountUp'
import { kpis } from '../content/site'
import { stagger, fadeUp, viewportOnce } from '../lib/motion'

export default function KpiBar() {
  return (
    <section className="relative py-14">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewportOnce}
        variants={stagger(0.12)}
        className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 sm:px-6 lg:grid-cols-4"
      >
        {kpis.map((kpi) => (
          <motion.div key={kpi.label} variants={fadeUp} className="text-center">
            <div className="font-heading text-[clamp(2rem,5vw,3.25rem)] font-extrabold text-branco">
              <CountUp value={kpi.value} suffix={kpi.suffix} />
            </div>
            <p className="mt-1 text-xs uppercase tracking-wider text-aco sm:text-sm">{kpi.label}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}
