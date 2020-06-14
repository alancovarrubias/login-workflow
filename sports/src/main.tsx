import React from 'react'
import {Router} from '@reach/router'
import Header from './header'
import Footer from './footer'
import Home from './home'
import Auth from './auth'

function Main(): JSX.Element {
  return (
    <div>
      <Header />
      <Router>
        <Home default />
        <Auth path="/auth" />
      </Router>
      <Footer />
    </div>
  )
}
export default Main
