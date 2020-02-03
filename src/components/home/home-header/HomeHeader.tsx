import React from 'react'
import DTyped from '../../shared/d-typed/DTyped'
import './HomeHeader.scss'

const typedStrings = [
  'Hey there! 👋',
  'My name is Douglas. Nice to meet you!',
  'But you can call me Doug!',
  'I am a Web Developer... 😃',
  'My specialty is JavaScript',
  'Currently working as Front-end Developer at X-Team',
  `Now I'm gonna repeat so you'll never forget! 👍`
]

const HomeHeader = () => (
  <div className="d-flex home-header__wrapper justify-center align-center">
    <DTyped strings={typedStrings} />
  </div>
)

export default HomeHeader
