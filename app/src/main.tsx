import React from 'react'
import {Router} from '@reach/router'
import AuthForm from './auth-form'
import Home from './home'
import Error from './error'

const Main: React.FC<{}> = () => {
  return (
    <Router>
      <Home path="/home" />
      <AuthForm path="/login" />
      <AuthForm path="/register" />
      <Error path="/error" />
    </Router>
  )
}
export default Main
