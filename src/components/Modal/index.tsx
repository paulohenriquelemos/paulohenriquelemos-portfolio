import { useEffect, useState } from 'react'
import { HashLink } from 'react-router-hash-link'
import { IoMdClose } from 'react-icons/io'
import * as Dialog from '@radix-ui/react-dialog'

import curriculo from '../../assets/curriculo-paulo.pdf'

export function Modal() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    function listenerResize() {
      if (window.innerWidth > 768) {
        setOpen(false)
      }
    }

    window.addEventListener('resize', listenerResize)

    return () => window.removeEventListener('resize', listenerResize)
  }, [])

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <button type="button" className="relative w-9 h-9 md:hidden">
          <span className="absolute top-2 right-0 w-full h-[2px] rounded bg-primary transition-all duration-250 ease-cubic-bezier"></span>
          <span className="absolute top-1/2 -translate-y-1/2 right-0 w-3/4 h-[2px] rounded bg-primary transition-all duration-250 ease-cubic-bezier"></span>
          <span className="absolute bottom-2 right-0 w-1/2 h-[2px] rounded bg-primary transition-all duration-250 ease-cubic-bezier"></span>
        </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-overlay fixed inset-0 z-40 transition-all ease-cubic-bezier" />
        <Dialog.Content className="bg-bg-card fixed right-0 top-0 bottom-0 w-[min(75vw,400px)] z-50 flex items-center justify-center p-3 data-[state=open]:animate-modalFadeIn data-[state=closed]:animate-modalFadeOut">
          <nav className="flex flex-col items-center w-full font-mono">
            <ol className="w-full text-text-light text-center flex flex-col gap-5">
              <Dialog.Close asChild>
                <li className="flex flex-col mx-auto text-title-14-18 before:content-['01.'] before:text-primary before:text-sm">
                  <HashLink to="/#sobre" className="block p-3">
                    Sobre
                  </HashLink>
                </li>
              </Dialog.Close>
              <li className="flex flex-col mx-auto text-title-14-18 before:content-['02.'] before:text-primary before:text-sm">
                <Dialog.Close asChild>
                  <HashLink to="/#experiencia" className="block p-3">
                    Experiência
                  </HashLink>
                </Dialog.Close>
              </li>
              <li className="flex flex-col mx-auto text-title-14-18 before:content-['03.'] before:text-primary before:text-sm">
                <Dialog.Close asChild>
                  <HashLink to="/#trabalhos" className="block p-3">
                    Trabalhos
                  </HashLink>
                </Dialog.Close>
              </li>
              <li className="flex flex-col mx-auto text-title-14-18 before:content-['04.'] before:text-primary before:text-sm">
                <Dialog.Close asChild>
                  <HashLink to="/#contato" className="block p-3">
                    Contato
                  </HashLink>
                </Dialog.Close>
              </li>
            </ol>
            <a
              href={curriculo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary text-sm rounded bg-transparent hover:bg-primaryHover transition duration-200 border border-primary py-3 px-4 mt-9"
            >
              Currículo
            </a>
          </nav>
          <Dialog.Close asChild className="absolute top-6 right-6">
            <button aria-label="Close">
              <IoMdClose
                size={25}
                className="text-text-light hover:brightness-75"
                title="Fechar menu"
              />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
