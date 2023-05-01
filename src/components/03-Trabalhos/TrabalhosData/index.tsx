import imageBlogIsca from '../../../assets/Blog-Isca-e-Cia.png'
import imagePousadaFarol from '../../../assets/pousada-farol-links.png'

export const trabalhosData = [
  {
    id: '001',
    title: 'Links Pousada Farol',
    description:
      'O projeto serve para atender a necessidade da empresa de ter mais de um link na página do Instagram, dessa forma todos os links que a empresa precisa ter estão reunidos em uma única página.',
    image: imagePousadaFarol,
    link: 'https://pousada-farol-links.vercel.app',
    topics: ['HTML', 'CSS'],
    github: '',
  },
  {
    id: '002',
    title: 'Blog Isca e Companhia',
    description:
      'O projeto consistiu em migrar o site existente em html para ReactJS, utilizando o mínimo possível de plugins do WordPress. Foi bastante desafiador, mas muito gratificante finalizar o front-end e ajudar com as requisições via API do WordPress.',
    image: imageBlogIsca,
    link: 'https://blogiscaecompanhia.com.br',
    topics: ['Reactjs', 'WordPress', 'API'],
    github: '',
  },
]
