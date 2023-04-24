import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'

import { Modal } from '../Modal'

export function Header() {
  const [scrollSitation, setScrollSituation] = useState(true)
  const [shadowScroll, setShadowScroll] = useState('')

  useEffect(() => {
    let lastScrollTop = 0
    window.onscroll = () => {
      if (window.scrollY === 0) {
        setShadowScroll('')
      } else {
        setShadowScroll('shadow-md shadow-shadow')
      }
      if (
        document.body.getBoundingClientRect().top > lastScrollTop ||
        window.scrollY === 0
      ) {
        setScrollSituation(true)
      } else {
        setScrollSituation(false)
      }
      lastScrollTop = document.body.getBoundingClientRect().top
    }
  }, [])

  return (
    <header
      className={`flex items-center justify-between fixed top-0 z-30 w-full px-6 sm:px-12 md:px-16 lg:px-24 h-[6.25rem] bg-bg-header backdrop-blur-md transition-all duration-250 ease-cubic-bezier ${shadowScroll} ${
        !scrollSitation && '-translate-y-[100px]'
      }`}
    >
      <nav className="flex items-center justify-between relative w-full font-mono">
        <div className="flex items-center justify-between ww-[43px]">
          <a href="/" className=" w-[42px] relative group">
            <span className="text-primary text-2xl absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              PH
            </span>
            <svg
              id="logo"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              viewBox="0 0 84 96"
            >
              <title>Logo</title>
              <g transform="translate(-8.000000, -2.000000)">
                <g transform="translate(11.000000, 5.000000)">
                  <polygon
                    id="Shape"
                    stroke="#64FFDA"
                    fill="none"
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    points="39 0 0 22 0 67 39 90 78 68 78 23"
                    className="group-hover:fill-primaryHover"
                  ></polygon>
                </g>
              </g>
            </svg>
          </a>
        </div>
        <div className="hidden md:flex items-center justify-center">
          <ol className="flex items-center justify-between gap-2 list-none">
            <li className="fade-down opacity-0">
              <HashLink
                to="/#sobre"
                className="text-text-light hover:text-primary transition duration-200 p-2 text-sm before:content-['01.'] before:mr-1 before:text-sm before:text-primary"
              >
                Sobre
              </HashLink>
            </li>
            <li className="fade-down opacity-0 animation-delay-100">
              <HashLink
                to="/#experiencia"
                className="text-text-light hover:text-primary transition duration-200 p-2 text-sm before:content-['02.'] before:mr-1 before:text-sm before:text-primary"
              >
                Experiência
              </HashLink>
            </li>
            <li className="fade-down opacity-0 animation-delay-200">
              <HashLink
                to="/#trabalhos"
                className="text-text-light hover:text-primary transition duration-200 p-2 text-sm before:content-['03.'] before:mr-1 before:text-sm before:text-primary"
              >
                Trabalhos
              </HashLink>
            </li>
            <li className="fade-down opacity-0 animation-delay-300">
              <HashLink
                to="/#contato"
                className="text-text-light hover:text-primary transition duration-200 p-2 text-sm before:content-['04.'] before:mr-1 before:text-sm before:text-primary"
              >
                Contato
              </HashLink>
            </li>
          </ol>
          <div className="fade-down opacity-0 animation-delay-400">
            <a
              href="/src/assets/curriculo-paulo.pdf"
              target="_blank"
              className="text-primary text-sm rounded bg-transparent hover:bg-primaryHover transition duration-200 border border-primary py-3 px-4 ml-4"
            >
              Currículo
            </a>
          </div>
        </div>
        <Modal />
      </nav>
    </header>
  )
}
