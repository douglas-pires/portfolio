const reducers: any = {
  LOGIN(state: any, { email, password }: { email: string; password: string }) {
    console.log(state, email, password)
  }
}

export default (state: any, { type }: { type: string }) => {
  return reducers[type]?.(state)
}
