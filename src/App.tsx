import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './Router'

import { Header } from './components/Header'
import { Footer } from './components/Footer'
import { Preloader } from './components/Preloader'

import './styles/global.css'

export function App() {
  const [preloader, setPreloader] = useState(true)

  const path = window.location.pathname

  setTimeout(() => {
    setPreloader(false)
  }, 4300)

  if (preloader && path === '/') {
    return <Preloader />
  }

  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  )
}
