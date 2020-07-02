import React from 'react'
import {RouteComponentProps, Link} from '@reach/router'
import {Routes} from '@utils/routes'

const Home: React.FC<RouteComponentProps> = () => {
  return (
    <React.Fragment>
      <Link onClick={() => localStorage.removeItem('user')} to={Routes.Login}>
        Logout
      </Link>
      <h2>Home</h2>
    </React.Fragment>
  )
}

export default Home
