import React, { useState } from 'react'
import DContainer from '../../components/shared/d-container/DContainer'
import DInput from '../../components/shared/d-input/DInput'
import DButton from '../../components/shared/d-button/DButton'
import DForm from '../../components/shared/d-form/DForm'
import './Login.scss'
import fetch from '../../api'
import { loader } from 'graphql.macro'

const loginQuery = loader('../../graphql/login.graphql')

const onLogin = async (email: string, password: string) => {
  const {
    login: { token, refreshToken, message }
  } = await fetch({
    query: loginQuery.loc?.source.body,
    variables: { input: { email, password } }
  })

  if (message) return

  localStorage.setItem(process.env.REACT_APP_TOKEN!, token)
  localStorage.setItem(process.env.REACT_APP_REFRESH_TOKEN!, refreshToken)
}
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  return (
    <DContainer className="align-center login-form">
      <DForm>
        <div className="d-flex justify-center flex-column text-center login-form__wrapper">
          <h1>Login</h1>
          <DInput placeholder="email" onInput={e => setEmail(e.target.value)} />
          <DInput
            placeholder="password"
            type="password"
            onInput={e => setPassword(e.target.value)}
          />
          <DButton color="primary" onClick={() => onLogin(email, password)}>
            Login
          </DButton>
          <small>
            Since this is a likely private website, only I, the owner of this
            portfolio, can login. But I am sure you can understand that!
          </small>
        </div>
      </DForm>
    </DContainer>
  )
}

export default Login
