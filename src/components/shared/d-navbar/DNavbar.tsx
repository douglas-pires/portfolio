import React from 'react'
import DSpacer from '../d-spacer/DSpacer'
import DContainer from '../d-container/DContainer'
import { Link } from 'react-router-dom'

const DNavbar = () => (
  <DContainer flex direction="row" className="pa-5">
    <Link to="/">DOUG</Link>
    <DSpacer />
    <Link to="/about" className="pl-5">
      about myself
    </Link>
    <Link to="/projects" className="pl-5">
      projects
    </Link>
  </DContainer>
)

export default DNavbar
