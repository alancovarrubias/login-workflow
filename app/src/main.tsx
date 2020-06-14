import React from 'react'
import {Router} from '@reach/router'
import Header from './header'
import Footer from './footer'
import Auth from './auth'
import Home from './home'
import Error from './error'

const Main: React.FC<{}> = () => {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/home" />
        <Auth path="/login" />
        <Auth path="/register" />
        <Error path="/error" />
      </Router>
      <Footer />
    </div>
  )
}
export default Main
