import React, { Component, PropTypes } from 'react'
import { Leaderboard } from 'components'

class LeaderboardContainer extends Component {
  render () {
    return (
      <Leaderboard sport={this.props.sport} />
    )
  }
}

LeaderboardContainer.propTypes = {
  sport: PropTypes.string.isRequired,
}

export default LeaderboardContainer
