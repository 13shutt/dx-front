/* eslint-disable camelcase */
import React from 'react'
import { Route } from 'react-router-dom'
import { observer } from 'mobx-react-lite'
import Layout from './layout'

const App = observer(({ render, ...rest }) => {
  return <Route {...rest} render={matchProps => <Layout>{render(matchProps)}</Layout>} />
})

export default App
