import Section from './ui/Section'
import Todo from './ui/Todo'
import { method, tracks } from '../content/site'

const dev = import.meta.env.DEV

export default function Method() {
  // Colunas de aulas/duração só aparecem quando há dado (ou em dev, como TODO)
  const showLessons = dev || tracks.some((t) => t.lessons !== null)
  const showHours = dev || tracks.some((t) => t.hours !== null)

  return (
    <Section id="metodo" index="01" name="Conteúdo" title={method.title} intro={method.body}>
      <div className="-mx-4 overflow-x-auto sm:mx-0">
        <table className="w-full min-w-[560px] border-collapse text-left">
          <thead>
            <tr className="border-y">
              <th scope="col" className="label w-16 py-2.5 pl-4 font-medium sm:pl-0">Cód.</th>
              <th scope="col" className="label py-2.5 pr-4 font-medium">Trilha</th>
              <th scope="col" className="label py-2.5 pr-4 font-medium">O que você vê</th>
              {showLessons && <th scope="col" className="label py-2.5 pr-4 text-right font-medium">Aulas</th>}
              {showHours && <th scope="col" className="label py-2.5 pr-4 text-right font-medium sm:pr-0">Duração</th>}
            </tr>
          </thead>
          <tbody>
            {tracks.map((t) => (
              <tr key={t.code} className="border-b transition-colors duration-150 hover:bg-grafite/70">
                <td className="num py-4 pl-4 align-top text-[13px] text-aco sm:pl-0">{t.code}</td>
                <th scope="row" className="py-4 pr-4 align-top font-heading text-[15px] font-bold text-branco">
                  {t.name}
                </th>
                <td className="py-4 pr-4 align-top text-sm text-aco">{t.content}</td>
                {showLessons && (
                  <td className="num py-4 pr-4 text-right align-top text-sm text-branco">
                    {t.lessons ?? <Todo>nº</Todo>}
                  </td>
                )}
                {showHours && (
                  <td className="num py-4 pr-4 text-right align-top text-sm text-branco sm:pr-0">
                    {t.hours ?? <Todo>h</Todo>}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="mt-6 flex flex-wrap items-center gap-3">
        <p className="text-sm text-prata">{method.note}</p>
        <Todo>ementa completa: README cita 7 trilhas, 5 confirmadas</Todo>
      </div>
    </Section>
  )
}
