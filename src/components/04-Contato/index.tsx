import { FiLinkedin, FiGithub } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'

export function Contato() {
  return (
    <section
      id="contato"
      className="max-w-2xl mx-auto py-24 text-center fade-up animation-duration-500 opacity-0 animation-delay-200"
    >
      <h2 className="flex items-center whitespace-nowrap relative text-text-light text-title-24-32 font-semibold before:content-['04.'] before:mr-2 before:font-normal before:text-title-16-20 before:font-mono before:text-primary after:content-[''] after:block after:w-full md:after:w-48 after:h-[1px] after:ml-5 after:bg-bg-line">
        Contato
      </h2>
      <p className="text-text-dark text-xl mt-4">
        Você pode entrar em contato comigo através das minhas redes sociais. Se
        você tem alguma pergunta ou apenas quer dizer oi, farei o possível para
        entrar em contato com você!
      </p>
      <ul className="mt-10 flex items-center justify-center gap-4">
        <li className="cursor-pointer" title="GitHub">
          <a
            href="https://github.com/paulohenriquelemos"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiGithub
              size={25}
              className="text-text-dark hover:text-primary transition-all ease-cubic-bezier"
            />
          </a>
        </li>
        <li className="cursor-pointer" title="Linkedin">
          <a
            href="https://www.linkedin.com/in/devphlemos"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FiLinkedin
              size={25}
              className="text-text-dark hover:text-primary transition-all ease-cubic-bezier"
            />
          </a>
        </li>
        <li className="cursor-pointer" title="WhatsApp">
          <a
            href="https://api.whatsapp.com/send?phone=5584981252634"
            rel="noopener noreferrer"
            target="_blank"
          >
            <FaWhatsapp
              size={25}
              className="text-text-dark hover:text-primary transition-all ease-cubic-bezier"
            />
          </a>
        </li>
      </ul>
    </section>
  )
}
