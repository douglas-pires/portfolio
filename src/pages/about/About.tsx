import React from 'react'
import me from '../../assets/images/me.png'
import './About.scss'

const About = () => (
  <div className="d-flex justify-center pa-5 about">
    <div>
      <div className="d-flex justify-center">
        <img src={me} alt="" className="about__me-image d-flex" />
      </div>
      <h1 className="text-center ma-5">Me!</h1>
      <div className="about__presentation">
        <p>
          I'm <strong>Douglas</strong>, nice to meet you! 😀
        </p>
        <br />
        <p>I'm in love and in touch daily with new excited web technlogies</p>
        <p>and I absolutely love what I do.</p>
        <br />
        <p>My specialty is JavaScript</p>
        <br />
        <p>I like to play videogames or watch speedruns ocasionally.</p>
        <p>
          I am also a great fan of music and I like to play whenever possible
        </p>
        <hr className="mt-5 mb-5" />
        <p>
          Currently living in <strong>Brazil</strong>
        </p>
      </div>
    </div>
  </div>
)

export default About
