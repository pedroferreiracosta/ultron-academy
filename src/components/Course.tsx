import { BookOpen } from 'lucide-react'
import Todo from './ui/Todo'
import { course } from '../content/site'

// Descrição da formação: só o que existe hoje (lives gratuitas), sem inventar curso
export default function Course() {
  const details = course.details.filter((d) => d.v || import.meta.env.DEV)

  return (
    <section id="formacao" className="bg-fundo pb-24 sm:pb-32">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center" data-reveal>
          <span className="badge">{course.badge}</span>
          <h2 className="h-section mt-6">{course.title}</h2>
          <p className="lead mt-5 text-aco">{course.body}</p>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div data-reveal className="card p-7 sm:p-10">
            <h3 className="text-[clamp(1.4rem,2vw,1.75rem)] font-semibold">{course.topicsTitle}</h3>
            <ol className="mt-6 space-y-3">
              {course.topics.map((t, i) => (
                <li key={t} className="flex items-center gap-4 rounded-xl border border-borda bg-preto/40 px-4 py-3.5">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-azul/15 font-heading text-sm font-semibold text-ciano">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="font-medium">{t}</span>
                </li>
              ))}
            </ol>
          </div>

          <div data-reveal style={{ ['--reveal-delay' as string]: '100ms' }} className="card flex flex-col p-7 sm:p-10">
            <h3 className="flex items-center gap-3 text-[clamp(1.4rem,2vw,1.75rem)] font-semibold">
              <BookOpen size={24} className="text-ciano" aria-hidden="true" />
              {course.detailsTitle}
            </h3>
            <dl className="mt-6 divide-y divide-borda border-y border-borda">
              {details.map((d) => (
                <div key={d.k} className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-4">
                  <dt className="text-aco">{d.k}</dt>
                  <dd className="font-medium text-branco">{d.v ?? <Todo>{d.todo}</Todo>}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
