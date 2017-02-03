import React, { PropTypes } from 'react'

export default function Authenticate ({ onAuth }) {
  return (
    <button onClick={onAuth}>{'Authenticate'}</button>
  )
}

Authenticate.propTypes = {
  error: PropTypes.string.isRequired,
  isFetching: PropTypes.bool.isRequired,
  onAuth: PropTypes.func.isRequired,
}
