import * as types from '../constants'

export const login = ({
  email,
  password
}: {
  email: string
  password: string
}) => ({ type: types.LOGIN, email, password })
