import React from 'react'
import {RouteComponentProps} from '@reach/router'

const Home: React.FC<RouteComponentProps> = ({path}) => {
  return <h2>{path}</h2>
}

export default Home
