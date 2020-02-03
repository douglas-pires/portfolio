import React, { ReactChild } from 'react'

const DContainer = ({
  flex = true,
  noPadding = false,
  direction = 'column',
  children = undefined,
  className
}: {
  flex?: boolean
  noPadding?: boolean
  direction?: string
  children?: ReactChild[] | string | any
  className?: string
}) => (
  <div
    className={`
      flex-${direction} ${flex ? 'd-flex' : ''} ${
      !noPadding ? 'pa-2' : ''
    } ${className}
    `}
  >
    {children}
  </div>
)

export default DContainer
