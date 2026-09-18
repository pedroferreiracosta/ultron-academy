/**
 * Transição "disfarçada" entre seções: linha neon sutil com glow,
 * para nunca cortar de forma seca. Puramente decorativo.
 */
export default function SectionDivider() {
  return (
    <div className="relative mx-auto h-px w-full max-w-4xl" aria-hidden="true">
      <div
        className="absolute inset-x-0 top-0 h-px"
        style={{ background: 'linear-gradient(to right, transparent, rgba(0,212,255,0.4) 50%, transparent)' }}
      />
      <div
        className="absolute left-1/2 top-0 h-16 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full blur-2xl"
        style={{ background: 'radial-gradient(circle, rgba(0,212,255,0.25) 0%, transparent 70%)' }}
      />
    </div>
  )
}
