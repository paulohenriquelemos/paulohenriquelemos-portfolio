import { ChangeEvent, useState } from 'react'

export function Experiencia() {
  const [work, setWork] = useState('work_01')
  const [displayWork, setDisplayWork] = useState([true, false])
  const [isVisible, setIsVisible] = useState(true)

  function handleChangeWork(event: ChangeEvent<HTMLInputElement>) {
    setWork(event.target.id)

    setIsVisible(!isVisible)

    setTimeout(() => {
      if (event.target.id === 'work_01') {
        setDisplayWork([true, false])
      } else if (event.target.id === 'work_02') {
        setDisplayWork([false, true])
      }
      setIsVisible(!isVisible)
    }, 500)
  }

  return (
    <section
      id="experiencia"
      className="max-w-2xl mx-auto py-24 fade-up animation-duration-500 opacity-0 animation-delay-200"
    >
      <h2 className="flex items-center whitespace-nowrap relative text-text-light text-title-24-32 font-semibold before:content-['02.'] before:mr-2 before:font-normal before:text-title-16-20 before:font-mono before:text-primary after:content-[''] after:block after:w-full md:after:w-48 after:h-[1px] after:ml-5 after:bg-bg-line">
        Onde eu já trabalhei
      </h2>
      <div className="block sm:flex mt-10">
        <div className="relative z-10 w-[calc(100%+3rem)] sm:w-max flex overflow-x-auto pl-6 -ml-6 sm:block sm:overflow-x-visible sm:pl-0 sm:ml-0">
          <input
            type="radio"
            name="works"
            id="work_01"
            className="hidden"
            checked={work === 'work_01'}
            onChange={handleChangeWork}
          />
          <label
            htmlFor="work_01"
            className={`${
              work === 'work_01'
                ? 'text-primary border-primary'
                : 'text-text-dark border-bg-line'
            } relative flex items-center cursor-pointer w-full h-10 px-5 transition-all ease-cubic-bezier hover:text-primary hover:bg-bg-card text-sm font-mono whitespace-nowrap border-b-2 sm:border-b-0 sm:border-l-2`}
          >
            Super 11
          </label>

          <input
            type="radio"
            name="works"
            id="work_02"
            className="hidden"
            checked={work === 'work_02'}
            onChange={handleChangeWork}
          />
          <label
            htmlFor="work_02"
            className={`${
              work === 'work_02'
                ? 'text-primary border-primary'
                : 'text-text-dark border-bg-line'
            } relative flex items-center cursor-pointer w-full h-10 px-5 transition-all ease-cubic-bezier hover:text-primary hover:bg-bg-card text-sm font-mono whitespace-nowrap border-b-2 sm:border-b-0 sm:border-l-2`}
          >
            Freelancer
          </label>
        </div>
        <div className="relative w-full ml-0 sm:ml-5 mt-7 sm:mt-0">
          {/* WORK 01 */}
          <div
            className={`w-full h-auto py-2 px-1 ${
              work === 'work_01'
                ? `animate-displayBlock`
                : `animate-displayHidden`
            } ${displayWork[0] === true ? 'block' : 'hidden'}`}
          >
            <h3 className="text-text-light text-[1.375rem] font-medium">
              <span>Desenvolvedor web Front-end</span>
              <span className="text-primary ml-2 whitespace-nowrap">
                @
                <a
                  href="https://super11.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block ml-1 after:content-[''] after:block after:relative after:w-0 hover:after:w-full after:h-[1px] after:bottom-[0.3125rem] after:bg-primary after:transition-all after:ease-cubic-bezier after:opacity-50"
                >
                  Super 11
                </a>
              </span>
            </h3>
            <p className="text-text-light text-sm font-mono mt-1">
              Agosto 2022 - Janeiro 2023
            </p>
            <ul className="text-lg leading-[1.3] mt-6">
              <li className="relative mb-3 pl-7 text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                A Super 11 é uma Agência de Marketing Digital Full Service. Com
                mais de 15 anos no mercado e clientes em vários estados do país
                e exterior, a agência nasceu em Uberlândia/MG.
              </li>
              <li className="relative mb-3 pl-7 text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                Trabalhei fazendo o front-end de alguns pequenos projetos e
                várias pequenas partes de códigos com animações estilizadas e
                funcionais para ajudar a equipe a desenvolver projetos maiores.
              </li>
              <li className="relative mb-3 pl-7 text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                Algunas tecnologias que trabalhei na Super 11: ReactJS,
                Bootstrap, WordPress, HTML, CSS, JavaScript, API REST, entre
                outros.
              </li>
            </ul>
          </div>
          {/* WORK 02 */}
          <div
            className={`w-full h-auto py-2 px-1 ${
              work === 'work_02'
                ? `animate-displayBlock`
                : `animate-displayHidden`
            } ${displayWork[1] === true ? 'block' : 'hidden'}`}
          >
            <h3 className="text-text-light text-[1.375rem] font-medium">
              <span>Desenvolvedor web Front-end</span>
              <span className="text-primary ml-2 whitespace-nowrap">
                @
                <a
                  // href="#"
                  // target="_blank"
                  // rel="noopener noreferrer"
                  role="button"
                  aria-disabled="true"
                  className="inline-block ml-1 after:content-[''] after:block after:relative after:w-0 hover:after:w-full after:h-[1px] after:bottom-[0.3125rem] after:bg-primary after:transition-all after:ease-cubic-bezier after:opacity-50"
                >
                  Freelancer
                </a>
              </span>
            </h3>
            <p className="text-text-light text-sm font-mono mt-1">
              Dezembro 2021 - Fevereiro 2022
            </p>
            <ul className="text-lg leading-[1.3] mt-6">
              <li className="relative mb-3 pl-7 text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-lg">
                Trabalhei como freelance desenvolvendo o front-end de um site de
                criptomoedas utilizando ReactJS, Styled-Components e Typescript.
                Obs: o site foi desativado pelo cliente.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
