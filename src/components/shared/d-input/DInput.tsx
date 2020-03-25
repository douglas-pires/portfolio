import React from 'react'
import './DInput.scss'

const DInput = ({
  type,
  placeholder = '',
  onInput
}: {
  type?: string
  placeholder?: string
  onInput?: (e: React.ChangeEvent<HTMLInputElement>) => void
}) => (
  <div className="d-input__wrapper d-flex">
    <input
      className="d-input__input"
      type={type}
      placeholder={placeholder}
      onInput={onInput}
    />
  </div>
)

export default DInput
