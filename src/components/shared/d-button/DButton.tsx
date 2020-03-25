import React, { MouseEvent } from 'react'
import './DButton.scss'

const DButton = ({
  children,
  color = 'default',
  onClick
}: {
  children?: ChildNode | Element | ChildNode[] | string
  color?: string
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void
}) => (
  <div className="d-button__wrapper pa-2">
    <button className={`d-button__button pa-2 ${color}`} onClick={onClick}>
      {children}
    </button>
  </div>
)

export default DButton
