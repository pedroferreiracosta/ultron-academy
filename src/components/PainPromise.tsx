import Reveal from './ui/Reveal'

export default function PainPromise() {
  return (
    <section className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <Reveal>
          <h2 className="text-2xl font-bold sm:text-3xl">
            É mais fácil aprender do jeito certo agora do que perceber depois de já ter
            perdido dinheiro.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 text-base text-aco sm:text-lg">
            A maioria de quem começa a operar perde dinheiro por não entender por que perde.
            O método da Ultron Academy corrige isso na raiz, antes de qualquer estratégia de
            lucro. <span className="text-prata">Consciência gera lucro.</span>
          </p>
        </Reveal>
      </div>
    </section>
  )
}
