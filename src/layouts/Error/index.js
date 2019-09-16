// import external modules
import React from 'react'
import { Route } from 'react-router-dom'

import Layout from './layout'

const Error = ({ render, ...rest }) => (
  <Route {...rest} render={matchProps => <Layout>{render(matchProps)}</Layout>} />
)

export default Error
