/**
 * Coluna vertical de candles monocromáticos (decorativo, aria-hidden),
 * para as bordas do hero — referência: gráfico de fundo do moodboard.
 */
const bars = [30, 55, 40, 70, 48, 85, 60, 95]

export default function CandleColumn({ className = '' }: { className?: string }) {
  return (
    <div className={`pointer-events-none flex items-end justify-center gap-1.5 ${className}`} aria-hidden="true">
      {bars.map((h, i) => (
        <div
          key={i}
          className="w-1.5 shrink-0 rounded-[1px] bg-gradient-to-t from-prata/80 to-prata/10"
          style={{ height: `${h}%` }}
        />
      ))}
    </div>
  )
}
