import { ImageGreen } from '../ImageGreen'

import fotoImg from '../../assets/Foto Paulo 3x4.jpg'

export function Sobre() {
  return (
    <section
      id="sobre"
      className="max-w-4xl mx-auto py-24 fade-up animation-duration-500 opacity-0 animation-delay-200"
    >
      <h2 className="flex items-center whitespace-nowrap relative text-text-light text-title-24-32 font-semibold before:content-['01.'] before:mr-2 before:font-normal before:text-title-16-20 before:font-mono before:text-primary after:content-[''] after:block after:w-full md:after:w-48 after:h-[1px] after:ml-5 after:bg-bg-line">
        Sobre mim
      </h2>
      <div className="block md:grid grid-cols-two-cols gap-12 mt-10">
        <div>
          <div>
            <p className="text-text-dark text-xl">
              Olá! Meu nome é{' '}
              <strong className="text-primary">Paulo Henrique</strong>, sou
              Engenheiro da Computação formado em 2012, desenvolvedor web
              Front-end e gosto de criar layouts que me ajudam a crescer
              profissionalmente. Meu interesse em desenvolvimento web começou no
              início de 2021, quando me foi apresentado essa área e acabei me
              apaixonando por fazer algo visual e com possibilidade de
              automatização.
            </p>
            <p className="text-text-dark text-xl mt-4">
              Comecei meus estudos principalmente através da{' '}
              <span className="text-primary">Rocketseat</span>,{' '}
              <span className="text-primary">Curso em Vídeo</span> e sem deixar
              de consumir conteúdo da internet.
            </p>
            <p className="text-text-dark text-xl mt-4">
              Avançando para hoje, tive o privilégio de trabalhar por seis meses
              na <span className="text-primary">Super 11</span>, uma empresa
              especializada em desenvolvimento web Front-end, Back-end e UX/UI
              Design. Também elaborei um pequeno projeto de um site de
              criptomoeda que já foi desativado.
            </p>
            <p className="text-text-dark text-xl mt-4">
              Aqui estão algumas tecnologias com as quais tenho trabalhado
              recentemente:
            </p>
          </div>
          <ul className="grid grid-cols-list-sobre gap-[0px 10px] mt-5">
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              JavaScript (ES6+)
            </li>
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              React.js
            </li>
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              TypeScript
            </li>
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              TailwindCSS
            </li>
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              Styled-Components
            </li>
            <li className="relative mb-2 pl-5 font-mono text-sm text-text-dark before:content-['▹'] before:absolute before:left-0 before:text-primary before:text-sm">
              GitHub
            </li>
          </ul>
        </div>
        <div className="max-w-[18.75rem] mt-12 mx-auto">
          <ImageGreen image={fotoImg} border={true} />
        </div>
      </div>
    </section>
  )
}
