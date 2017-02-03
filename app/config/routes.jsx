import React from 'react'
import { hashHistory, IndexRoute, Route, Router } from 'react-router'
import LayoutPage from 'LayoutPage'
import { ChallengePage, DashboardPage, HomePage, LeaderboardPage, LogoutPage } from 'pages'

export default function getRoutes (checkAuth) {
  return (
    <Router history={hashHistory}>
      <Route path='/' component={LayoutPage}>
        <IndexRoute component={HomePage} header='Home' onEnter={checkAuth} />
        <Route
          path='challenge/:sport'
          component={ChallengePage}
          header='Challenge'
          onEnter={checkAuth} />
        <Route path='dashboard' component={DashboardPage} header='Dashboard' onEnter={checkAuth} />
        <Route
          path='leaderboard/:sport'
          component={LeaderboardPage}
          header='Leaderboard'
          onEnter={checkAuth} />
        <Route path='logout' component={LogoutPage} header='Logout' />
      </Route>
    </Router>
  )
}
