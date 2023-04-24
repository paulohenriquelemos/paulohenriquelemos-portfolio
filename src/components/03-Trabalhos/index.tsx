import { FiGithub } from 'react-icons/fi'

import { ImageGreen } from '../ImageGreen'
import { LordIcon } from '../LordIcon'

import { trabalhosData } from '../03-Trabalhos/TrabalhosData'

export function Trabalhos() {
  return (
    <section id="trabalhos" className="max-w-5xl mx-auto py-24">
      <h2 className="flex items-center whitespace-nowrap relative text-text-light text-title-24-32 font-semibold before:content-['03.'] before:mr-2 before:font-normal before:text-title-16-20 before:font-mono before:text-primary after:content-[''] after:block after:w-full md:after:w-48 after:h-[1px] after:ml-5 after:bg-bg-line">
        Alguns trabalhos que eu fiz
      </h2>
      <ul className="mt-10 flex flex-col gap-24">
        {trabalhosData
          .slice(0)
          .reverse()
          .map((work) => {
            return (
              <li
                key={work.id}
                className="group grid gap-2 grid-cols-12 items-center fade-up animation-duration-500 opacity-0 animation-delay-200"
              >
                <div className="col-start-1 h-full col-end-13 md:col-1-8 md:group-even:col-[6_/_13] row-[1_/_-1] md:z-10">
                  <a
                    href={work.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    title={work.title}
                    className="block h-full"
                  >
                    <ImageGreen image={work.image} border={false} />
                  </a>
                </div>
                <div className="relative h-full flex flex-col justify-center col-start-1 col-end-13 md:col-5--1 md:group-even:col-[1_/_8] md:group-odd:text-right row-[1_/_-1] p-10 md:p-0">
                  <h6 className="text-primary font-mono text-sm mt-2">
                    Projeto em Destaque
                  </h6>
                  <a
                    href={work.link}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="mt-2 inline-block text-text-light text-[1.75rem] font-semibold transition-all ease-cubic-bezier hover:text-primary"
                  >
                    {work.title}
                  </a>
                  <div className="relative z-10 mt-5 md:shadow-md md:shadow-shadow md:hover:shadow-lg md:hover:shadow-shadow transition-shadow ease-cubic-bezier md:bg-bg-card text-text-light text-lg py-5 md:p-6 rounded">
                    <p>{work.description}</p>
                  </div>
                  <ul className="relative z-10 mt-6 inline-flex flex-wrap justify-end md:group-even:justify-start gap-5">
                    {work.topics.map((topic) => {
                      return (
                        <li
                          key={topic}
                          className="text-text-light text-sm font-mono whitespace-nowrap"
                        >
                          {topic}
                        </li>
                      )
                    })}
                  </ul>
                  <div className="mt-2 flex items-center justify-end md:group-even:justify-start gap-2 leading-[0]">
                    {work.github && (
                      <a
                        href={work.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub do Projeto"
                      >
                        <FiGithub
                          size={24}
                          className="text-text-light hover:text-primary transition-all ease-cubic-bezier"
                        />
                      </a>
                    )}
                    <a
                      href={work.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <LordIcon
                        src="udwhdpod.json"
                        trigger="loop-on-hover"
                        stroke={90}
                        width={35}
                        title="Acessar site"
                      />
                    </a>
                  </div>
                </div>
              </li>
            )
          })}
      </ul>
    </section>
  )
}
