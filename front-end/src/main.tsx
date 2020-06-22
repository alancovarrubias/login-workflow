import React from 'react'
import {Router} from '@reach/router'
import AuthForm from './auth-form'
import Home from './home'
import Error from './error'

const Main: React.FC<{}> = () => {
  return (
    <Router>
      <AuthForm path="/login" default />
      <AuthForm path="/register" />
      <Home path="/home" />
      <Error path="/error" />
    </Router>
  )
}
export default Main
