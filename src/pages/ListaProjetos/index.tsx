import { useEffect, useState } from 'react'
import { FiGithub } from 'react-icons/fi'
import { BsCardImage } from 'react-icons/bs'
import * as HoverCard from '@radix-ui/react-hover-card'

import { LordIcon } from '../../components/LordIcon'

import { api } from '../../lib/axios'

import { formatYear } from '../../utils/format-year'
import { formatTitle } from '../../utils/format-title'
import { Loader } from '../../components/Loader'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
  created_at: string
  language: string
}

export function ListaProjetos() {
  const [repositories, setRepositories] = useState<Repository[]>()

  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.25,
    }

    const observerDown = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        intersecting && entry.target.classList.add('animate-fade-in-down')
      })
    }, options)

    const observerUp = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        intersecting && entry.target.classList.add('animate-fade-in-up')
      })
    }, options)

    const elementDown = document.querySelectorAll('.fade-down')
    elementDown.forEach((e) => observerDown.observe(e))

    const elementUp = document.querySelectorAll('.fade-up')
    elementUp.forEach((e) => observerUp.observe(e))

    async function loadRepositories() {
      const response = await api.get('/repos?sort=created')

      setRepositories(response.data)
    }

    loadRepositories()
  }, [])

  if (!repositories) {
    return <Loader />
  }

  return (
    <main className="py-48 px-6 sm:px-12 md:px-16 lg:px-24 mx-auto w-full max-w-7xl min-h-screen">
      <div className="text-center sm:text-start">
        <h1 className="text-title-40-80 text-text-light font-semibold">
          Projetos
        </h1>
        <p className="text-primary font-mono text-sm">
          Aqui a lista de todos os meus projetos do GitHub
        </p>
      </div>
      <div className="mt-12 md:mt-24 -mx-2">
        <table className="w-full border-collapse">
          <thead className="cursor-default">
            <tr className="text-text-dark text-xl text-left">
              <th className="p-2">Ano</th>
              <th className="p-2">Nome</th>
              <th className="p-2 hidden md:table-cell">Tecnologias</th>
              <th className="p-2">Link</th>
            </tr>
          </thead>
          <tbody className="cursor-default">
            {repositories.map((repository: Repository) => {
              if (repository.name === 'paulohenriquelemos') return null
              return (
                <tr
                  key={repository.id}
                  className="text-left hover:bg-bg-card transition-all ease-cubic-bezier"
                >
                  <td className="text-primary font-mono text-sm md:text-base p-2 rounded-l">
                    {formatYear(repository.created_at)}
                  </td>
                  <td className="text-text-light font-mono text-lg md:text-xl font-semibold p-2">
                    {formatTitle(repository.name)}
                  </td>
                  <td className="text-text-dark font-mono text-xs p-2 hidden md:table-cell">
                    {repository.topics.map((topic) => {
                      return (
                        <span
                          key={topic}
                          className="leading-6 inline-block after:content-['·'] after:inline-block after:mx-1 last:after:hidden"
                        >
                          {formatTitle(topic)}
                        </span>
                      )
                    })}
                  </td>
                  <td className="text-text-light font-mono text-xs p-2 rounded-r">
                    <div className="flex items-center gap-2">
                      <HoverCard.Root openDelay={100} closeDelay={100}>
                        <HoverCard.Trigger asChild>
                          {repository.language === 'TypeScript' && (
                            <div className="hidden md:block">
                              <BsCardImage
                                size={22}
                                className="text-text-dark hover:text-primary transition-all ease-cubic-bezier cursor-pointer hover:-translate-y-[2px]"
                              />
                            </div>
                          )}
                        </HoverCard.Trigger>
                        <HoverCard.Portal>
                          <HoverCard.Content
                            sideOffset={5}
                            side="left"
                            className="bg-white relative flex items-center justify-center rounded-md p-3 max-w-[500px]"
                          >
                            <img
                              src={`https://raw.githubusercontent.com/paulohenriquelemos/${repository.name}/main/src/assets/layout.png`}
                              alt=""
                              className="max-h-[500px]"
                            />
                            <HoverCard.Arrow className="fill-white" />
                          </HoverCard.Content>
                        </HoverCard.Portal>
                      </HoverCard.Root>
                      <a
                        href={repository.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub do Projeto"
                      >
                        <FiGithub
                          size={22}
                          className="text-text-dark hover:text-primary transition-all ease-cubic-bezier"
                        />
                      </a>
                      {repository.homepage && (
                        <a
                          href={
                            repository.homepage.includes('https://')
                              ? repository.homepage
                              : `https://${repository.homepage}`
                          }
                          target="_blank"
                          rel="noopener noreferrer"
                          className="leading-[0]"
                        >
                          <LordIcon
                            src="udwhdpod.json"
                            trigger="loop-on-hover"
                            stroke={90}
                            width={35}
                            title="Acessar site"
                            colorPrimary="#8892B0"
                          />
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </main>
  )
}
