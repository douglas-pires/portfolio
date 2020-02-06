import React from 'react'

const skills = [
  ['JavaScript', 'VueJS', 'React', 'TypeScript'],
  ['NodeJS', 'GraphQL', 'MongoDB', 'SASS']
]

const contacts = [
  { href: 'mailto:douglas.pires@live.com', text: 'E-mail' },
  { href: 'https://github.com/douglas-pires', text: 'Github' },
  { href: 'https://www.linkedin.com/in/dpiresvilela/', text: 'LinkedIn' }
]

const renderSkills = (skills: string[], index: number) => (
  <ol key={index}>
    {skills.map(skill => (
      <li className="pa-3" key={skill}>
        {skill}
      </li>
    ))}
  </ol>
)

const renderContacts = (contact: { href: string; text: string }) => (
  <li key={contact.text} className="pa-3 text-center">
    <a href={contact.href} target="_blank" rel="noopener noreferrer">
      {contact.text}
    </a>
  </li>
)

const HomeBody = () => (
  <div className="d-flex flex-column justify-center mt-5">
    <div>
      <h3 className="text-center">Skills on:</h3>
      <div className="d-flex justify-center">{skills.map(renderSkills)}</div>
    </div>
    <div className="mt-5">
      <h3 className="text-center">Contact</h3>
      <div className="d-flex justify-center">
        <ol>{contacts.map(renderContacts)}</ol>
      </div>
    </div>
  </div>
)

export default HomeBody
