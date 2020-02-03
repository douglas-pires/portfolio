import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { createBrowserHistory } from 'history'

const App = () => (
  <div className="App">
    <Router history={createBrowserHistory()}>
      <Route exact path="/">
        <Home />
      </Route>
    </Router>
  </div>
)

export default App
