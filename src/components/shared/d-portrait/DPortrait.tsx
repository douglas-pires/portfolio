import React from 'react'
import './DPortrait.scss'

const DPortrait = ({ src, title }: { src: string; title: string }) => (
  <div className="d-portrait__wrapper">
    <div className="d-portrait__overlay d-flex justify-center align-center text-center">
      <p>{title}</p>
    </div>
    <img src={src} alt="Project" />
  </div>
)

export default DPortrait
