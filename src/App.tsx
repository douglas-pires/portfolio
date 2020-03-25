import React, { Suspense, lazy } from 'react'
import { Router, Route } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import DNavbar from './components/shared/d-navbar/DNavbar'

const Home = lazy(() => import('./pages/home/Home'))
const About = lazy(() => import('./pages/about/About'))
const Projects = lazy(() => import('./pages/projects/Projects'))
const Login = lazy(() => import('./pages/login/Login'))

const App = () => (
  <div className="min-height-100 theme-light">
    <div className="app-container">
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
          <Route exact path="/login">
            <Login />
          </Route>
        </Suspense>
      </Router>
    </div>
  </div>
)

export default App
