import React from 'react'
import DSpacer from '../d-spacer/DSpacer'
import DContainer from '../d-container/DContainer'

const DNavbar = () => (
  <DContainer flex direction="row" className="pa-5 d-navbar__wrapper">
    <p>Doug</p>
    <DSpacer />
    <p>about myself</p>
    <p>projects</p>
  </DContainer>
)

export default DNavbar
