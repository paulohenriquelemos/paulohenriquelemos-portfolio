export function Apresentacao() {
  return (
    <section className="max-w-5xl mx-auto flex flex-col items-start justify-center h-screen min-h-screen">
      <div className="fade-down opacity-0 animation-delay-600">
        <h2 className="text-primary text-base font-mono">Olá, meu nome é</h2>
      </div>
      <div className="mt-7">
        <h3 className="typing text-text-light text-title-40-80 leading-none font-semibold w-0 overflow-hidden whitespace-nowrap border-r-4 border-transparent animate-typing animation-delay-800">
          Paulo Henrique.
        </h3>
      </div>
      <div className="mt-1 fade-down opacity-0 animation-delay-1000">
        <h3 className="text-text-dark text-title-40-80 leading-none font-semibold">
          Sou desenvolvedor web Front-end.
        </h3>
      </div>
      <div className="mt-5 fade-down opacity-0 animation-delay-1200">
        <p className="text-text-dark text-xl">
          Sou engenheiro da computação especializado em desenvolvimento web
          Front-end.
        </p>
      </div>
    </section>
  )
}
