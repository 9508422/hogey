import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import Layout from 'Layout'
import { Home } from 'pages'

export default (
  <Router history={hashHistory}>
    <Route path='/' component={Layout}>
      <IndexRoute component={Home} header='Home' />
    </Route>
  </Router>
)
