import React, { ReactChild, FormEvent } from 'react'
import './DForm.scss'

const submit = (e: FormEvent<HTMLFormElement>) => {
  e.preventDefault()
}

const DForm = ({ children }: { children?: ReactChild[] | string | any }) => (
  <form
    className="d-form__wrapper d-flex align-center justify-center"
    onSubmit={submit}
  >
    {children}
  </form>
)

export default DForm
