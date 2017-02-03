import React, { PropTypes } from 'react'

export default function Leaderboard ({ sport }) {
  return (
    <div>
      <h2>{sport}</h2>
      <ol>
        <li>{'Rhys'}</li>
        <li>{'Nathan'}</li>
        <li>{'Bohdan'}</li>
        <li>{'Dre'}</li>
        <li>{'Hugh'}</li>
        <li>{'Nicholas X R Mills'}</li>
        <li>{'Leech'}</li>
      </ol>
    </div>
  )
}

Leaderboard.propTypes = {
  sport: PropTypes.string.isRequired,
}
