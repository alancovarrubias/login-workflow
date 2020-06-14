import React from 'react'
import {Router} from '@reach/router'
import Header from './header'
import Footer from './footer'
import Auth from './auth'
import Home from './home'
import Error from './home'

function Main(): JSX.Element {
  return (
    <div>
      <Header />
      <Router>
        <Home path="/home" />
        <Auth path="/login" />
        <Auth path="/sign-up" />
        <Error path="/error" />
      </Router>
      <Footer />
    </div>
  )
}
export default Main
