import React, { Component } from 'react'
import { LeaderboardContainer } from 'containers'

class DashboardPage extends Component {
  render () {
    return (
      <div>
        <LeaderboardContainer sport='Pool' />
        <LeaderboardContainer sport='Table Tennis' />
        <LeaderboardContainer sport='Squash' />
      </div>
    )
  }
}

export default DashboardPage
