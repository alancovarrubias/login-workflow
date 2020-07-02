import React from 'react'
import {RouteComponentProps, Link} from '@reach/router'
import {Routes} from '@utils/routes'
import {AuthFormApi} from './api'

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <Link
        onClick={() =>
          AuthFormApi.logout(JSON.parse(localStorage.getItem('user')))
        }
        to={Routes.Login}
      >
        Logout
      </Link>
      <h2>Home</h2>
    </React.Fragment>
  )
}

export default Home
