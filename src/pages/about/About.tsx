import React from 'react'
import me from '../../assets/images/me.png'
import './About.scss'

const About = () => (
  <div className="d-flex justify-center pa-5 about">
    <div>
      <div className="d-flex justify-center">
        <img src={me} alt="Douglas Pires" className="about__me-image d-flex" />
      </div>
      <h1 className="text-center ma-5">Me!</h1>
      <div className="about__presentation text-justify">
        <p>
          I'm <strong>Douglas</strong>, nice to meet you! 😀
        </p>
        <br />
        <p>
          I'm in touch with new exciting web technologies on a daily basis and I
          absolutely love what I do.
        </p>
        <br />
        <p>My specialty is JavaScript.</p>
        <p>Currently learning Go.</p>
        <br />
        <p>I like to play videogames or watch speedruns occasionally.</p>
        <br />
        <p>
          I am also a great fan of music and I like to play my guitar whenever
          possible.
        </p>
        <hr className="mt-5 mb-5" />
        <p>
          Currently living in <strong>Brazil</strong>.
        </p>
      </div>
    </div>
  </div>
)

export default About
