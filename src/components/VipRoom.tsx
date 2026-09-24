import Section from './ui/Section'
import Todo from './ui/Todo'
import { vip } from '../content/site'

export default function VipRoom() {
  // Sem grade nem print real, a coluna da esquerda não existe em produção
  const hasMedia = Boolean(vip.schedule || vip.playbookImage || import.meta.env.DEV)

  return (
    <Section id="sala-vip" index="03" name="Sala VIP e Playbook" title={vip.title} intro={vip.body}>
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-8">
        {hasMedia && (
        <div className="lg:col-span-7">
          <p className="label mb-3">Grade de sessões</p>
          {vip.schedule ? (
            <div className="-mx-4 overflow-x-auto sm:mx-0">
              <table className="w-full min-w-[480px] border-collapse text-left text-sm">
                <thead>
                  <tr className="border-y">
                    {['Dia', 'Horário', 'Sessão', 'Quem conduz'].map((h) => (
                      <th key={h} scope="col" className="label py-2.5 pr-4 font-medium first:pl-4 sm:first:pl-0">
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {vip.schedule.map((r) => (
                    <tr key={r.day + r.time} className="border-b">
                      <td className="py-3 pl-4 pr-4 text-branco sm:pl-0">{r.day}</td>
                      <td className="num py-3 pr-4 text-branco">{r.time}</td>
                      <td className="py-3 pr-4 text-aco">{r.session}</td>
                      <td className="py-3 pr-4 text-aco">{r.host}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="border-t pt-4">
              <Todo>grade real da Sala VIP: dia, horário, sessão, quem conduz</Todo>
            </div>
          )}
          {vip.playbookImage ? (
            <img src={vip.playbookImage} alt="Ficha de setup do Playbook Ultron" loading="lazy" className="mt-8 w-full rounded-xs border" />
          ) : (
            <Todo className="mt-6">print real da plataforma ou de uma ficha do Playbook</Todo>
          )}
        </div>
        )}

        <div className={hasMedia ? 'lg:col-span-5' : 'lg:col-span-7'}>
          <div className="rounded-xs border bg-grafite/60">
            <div className="border-b px-5 py-3">
              <p className="label text-prata">{vip.playbookTitle}</p>
            </div>
            <dl>
              {vip.playbookFields.map((f) => (
                <div key={f.k} className="grid grid-cols-[5.5rem_1fr] gap-4 border-b px-5 py-3.5 last:border-b-0">
                  <dt className="label pt-0.5 text-branco">{f.k}</dt>
                  <dd className="text-sm text-aco">{f.v}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-4 text-sm text-aco">{vip.playbookBody}</p>
        </div>
      </div>
    </Section>
  )
}
