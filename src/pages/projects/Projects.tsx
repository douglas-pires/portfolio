import React from 'react'
import DPortrait from '../../components/shared/d-portrait/DPortrait'

const portraits = [
  {
    src: 'https://i.imgur.com/AnGOuJ6.png',
    title: 'This portfolio!',
    to: '/projects/portfolio'
  },
  {
    src: 'https://i.imgur.com/mM3MWLB.png',
    title: "'Juntos Somos Mais' Store",
    to: '/projects/juntos-somos-mais'
  },
  {
    src: 'https://i.imgur.com/alP3xaq.png',
    title: "Loyalty Program 'Mestres do Varejo'",
    to: '/projects/mestres-do-varejo'
  },
  {
    src: 'https://i.imgur.com/EUUOAm6.png',
    title: "Admin Project for 'JSM'",
    to: '/projects/mestres-do-varejo'
  }
]

const renderPortraits = (
  {
    src,
    title,
    to
  }: {
    src: string
    title: string
    to: string
  },
  index: number
) => <DPortrait key={index} src={src} title={title} />

const Projects = () => (
  <div className="d-flex flex-column align-center">
    <h2>Soon, more projects... Really!</h2>
    <div className="d-flex">{portraits.map(renderPortraits)}</div>
  </div>
)

export default Projects
