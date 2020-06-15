import React from 'react'
import {Router} from '@reach/router'
import Auth from './auth'
import Home from './home'
import Error from './error'

const Main: React.FC<{}> = () => {
  return (
    <Router>
      <Home path="/home" />
      <Auth path="/login" />
      <Auth path="/register" />
      <Error path="/error" />
    </Router>
  )
}
export default Main
