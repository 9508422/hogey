import React, { Component, PropTypes } from 'react'
import { LeaderboardContainer } from 'containers'

class LeaderboardPage extends Component {
  render () {
    const { sport } = this.props.routeParams
    const sportName = `${sport.charAt(0).toUpperCase()}${sport.substring(1)}`
    return (
      <LeaderboardContainer sport={sportName} />
    )
  }
}

LeaderboardPage.propTypes = {
  routeParams: PropTypes.shape({
    sport: PropTypes.string.isRequired,
  }).isRequired,
}

export default LeaderboardPage
