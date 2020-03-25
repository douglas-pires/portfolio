import fetch from 'cross-fetch'

export default ({ query, variables }: { query: any; variables: any }) =>
  fetch([process.env.REACT_APP_API_ADDRESS, 'graphql'].join('/'), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
    .then(result => {
      if (result.status >= 400) {
        throw new Error(
          'Bad response from server: ' + result.status + ' ' + result.statusText
        )
      }
      return result.json()
    })
    .then(json => {
      if (json.errors) {
        return json.errors[0].message
      }

      return json.data
    })
