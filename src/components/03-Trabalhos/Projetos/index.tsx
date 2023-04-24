import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { RiGitRepositoryLine } from 'react-icons/ri'
import { FiGithub } from 'react-icons/fi'

import { api } from '../../../lib/axios'

import { formatTitle } from '../../../utils/format-title'
import { LordIcon } from '../../LordIcon'

interface Repository {
  id: number
  name: string
  description: string
  html_url: string
  homepage: string
  topics: string[]
}

export function Projetos() {
  const [repositories, setRepositories] = useState([])

  useEffect(() => {
    async function loadRepositories() {
      const response = await api.get('/repos?sort=created')

      setRepositories(response.data)
    }
    loadRepositories()
  }, [])

  if (!repositories) {
    return <div>Espere</div>
  }

  return (
    <section className="max-w-5xl mx-auto py-24 flex flex-col items-center">
      <h2 className="flex items-center relative text-text-light text-3xl font-semibold fade-up animation-duration-500 opacity-0 animation-delay-200">
        Outros projetos
      </h2>
      <Link
        to="/projetos"
        className="text-primary text-sm font-mono inline-block mt-2 after:content-[''] after:block after:relative after:w-0 hover:after:w-full after:h-[1px] after:bottom-[0.125rem] after:bg-primary after:transition-all after:duration-250 after:ease-cubic-bezier after:opacity-50 fade-up animation-duration-500 opacity-0 animation-delay-200"
      >
        <RiGitRepositoryLine className="inline mr-2" />
        Ver todos os projetos
      </Link>
      <ul className="mt-12 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 fade-up animation-duration-500 opacity-0 animation-delay-200">
        {repositories.slice(0, 6).map((repository: Repository) => {
          return (
            <li
              key={repository.id}
              className="group bg-bg-card h-full rounded shadow-md shadow-shadow transition-all duration-250 ease-cubic-bezier hover:-translate-y-2"
            >
              <div className="flex h-full flex-col justify-between items-start py-8 px-7">
                <header className="w-full">
                  <div className="flex items-center justify-between">
                    <LordIcon
                      src="bbnkwdur.json"
                      trigger="morph"
                      stroke={90}
                      width={40}
                      colorPrimary="#64ffda"
                    />
                    <div className="flex items-center justify-center gap-2">
                      <a
                        href={repository.html_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        title="GitHub do Projeto"
                      >
                        <FiGithub
                          size={22}
                          className="text-text-light hover:text-primary transition-all ease-cubic-bezier"
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
                          />
                        </a>
                      )}
                    </div>
                  </div>
                  <a
                    href={repository.html_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <h3 className="mt-9 mb-0 text-text-light group-hover:text-primary text-xl font-semibold leading-tight">
                      {formatTitle(repository.name)}
                    </h3>
                  </a>
                  <p className="mt-3 text-text-dark-light text-base">
                    {repository.description}
                  </p>
                </header>
                <footer className="mt-5">
                  <ul className="flex flex-wrap items-end gap-4 font-mono text-xs text-text-dark">
                    {repository.topics.map((topic) => {
                      return <li key={topic}>{formatTitle(topic)}</li>
                    })}
                  </ul>
                </footer>
              </div>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
