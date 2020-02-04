import React from 'react'
import { Router, Route } from 'react-router-dom'
import Home from './pages/Home'
import { createBrowserHistory } from 'history'
import About from './pages/about/About'
import DNavbar from './components/shared/d-navbar/DNavbar'
import Projects from './pages/Projects'

const App = () => (
  <div className="App">
    <Router history={createBrowserHistory()}>
      <DNavbar />
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route exact path="/projects">
        <Projects />
      </Route>
    </Router>
  </div>
)

export default App
