import Section from './ui/Section'
import { money } from '../content/site'

export default function Trust() {
  return (
    <Section id="seu-dinheiro" index="05" name="Seu dinheiro" title={money.title} intro={money.body}>
      <div className="grid rounded-xs border md:grid-cols-2">
        <div className="border-b md:border-b-0 md:border-r">
          <p className="label border-b px-5 py-3 text-branco">A Ultron faz</p>
          <ul>
            {money.does.map((d) => (
              <li key={d} className="flex gap-3 border-b px-5 py-4 text-[15px] text-prata last:border-b-0">
                <span className="num text-branco" aria-hidden="true">+</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="label border-b px-5 py-3 text-branco">A Ultron não faz</p>
          <ul>
            {money.doesNot.map((d) => (
              <li key={d} className="flex gap-3 border-b px-5 py-4 text-[15px] text-prata last:border-b-0">
                <span className="num text-aco" aria-hidden="true">−</span>
                {d}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Section>
  )
}
