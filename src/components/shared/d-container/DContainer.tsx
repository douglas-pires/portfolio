import React, { ReactChild } from 'react'

const DContainer = ({
  flex = true,
  noPadding = false,
  direction = 'column',
  children = undefined,
  className = '',
  center = false
}: {
  flex?: boolean
  noPadding?: boolean
  direction?: string
  children?: ReactChild[] | string | any
  className?: string
  center?: boolean
}) => (
  <div
    className={`
      flex-${direction}
      ${flex ? 'd-flex' : ''}
      ${!noPadding ? 'pa-2' : ''}
      ${className}
      ${center ? 'justify-center' : ''}
    `}
  >
    {children}
  </div>
)

export default DContainer
