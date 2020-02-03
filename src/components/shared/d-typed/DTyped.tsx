import React, { useEffect } from 'react'
import Typed from 'typed.js'

const typedText = (
  text: string | undefined = '',
  textArr: string[] = [],
  speed: number
) => {
  if (!textArr.length) textArr.push(text)

  return new Typed('#typed', {
    strings: textArr.filter(Boolean),
    typeSpeed: speed,
    backSpeed: 20,
    backDelay: 1500,
    smartBackspace: true,
    loop: true
  })
}

const DTyped = ({
  speed = 40,
  children,
  strings
}: {
  children?: string
  strings?: string[]
  speed?: number
}) => {
  useEffect(() => {
    typedText(children, strings, speed)
  })

  return <span id="typed"></span>
}

export default DTyped
