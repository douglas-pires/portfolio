import React, { Suspense, lazy } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import DNavbar from './components/shared/d-navbar/DNavbar'

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Projects = lazy(() => import('./pages/projects/Projects'))

const App = () => (
  <div className="App">
    <Router history={createBrowserHistory()}>
      <DNavbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/projects">
          <Projects />
        </Route>
      </Suspense>
    </Router>
  </div>
)

export default App
