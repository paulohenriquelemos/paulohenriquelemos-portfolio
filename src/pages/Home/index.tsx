import { useEffect } from 'react'

import { Trabalhos } from '../../components/03-Trabalhos'
import { Projetos } from '../../components/03-Trabalhos/Projetos'
import { Contato } from '../../components/04-Contato'

import { Apresentacao } from '../../components/00-Apresentacao'
import { Sobre } from '../../components/01-Sobre'
import { Experiencia } from '../../components/02-Experiencia'

export function Home() {
  useEffect(() => {
    const options = {
      rootMargin: '0px',
      threshold: 0.25,
    }

    const observerDown = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        intersecting && entry.target.classList.add('animate-fade-in-down')

        // intersecting
        //   ? entry.target.classList.add('animate-fade-in-down')
        //   : entry.target.classList.remove('animate-fade-in-down')
      })
    }, options)

    const observerUp = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        intersecting && entry.target.classList.add('animate-fade-in-up')
      })
    }, options)

    const observerTyping = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        const intersecting = entry.isIntersecting

        intersecting && entry.target.classList.add('animate-typing')
      })
    }, options)

    const elementDown = document.querySelectorAll('.fade-down')
    elementDown.forEach((e) => observerDown.observe(e))

    const elementUp = document.querySelectorAll('.fade-up')
    elementUp.forEach((e) => observerUp.observe(e))

    const elementTyping = document.querySelector('.typing')
    observerTyping.observe(elementTyping!)
  }, [])

  return (
    <main className="px-6 sm:px-12 md:px-16 lg:px-24 mx-auto w-full max-w-7xl min-h-screen">
      <Apresentacao />
      <Sobre />
      <Experiencia />
      <Trabalhos />
      <Projetos />
      <Contato />
    </main>
  )
}
