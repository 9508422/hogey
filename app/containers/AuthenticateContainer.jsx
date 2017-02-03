import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { creators as usersActionCreators } from 'redux/modules/users/users'
import { Authenticate } from 'components'

class AuthenticateContainer extends Component {
  handleAuth (event) {
    event.preventDefault()
    this.props.fetchAndHandleAuthedUser().then(() => this.context.router.replace('dashboard'))
  }

  render () {
    const { error, isFetching } = this.props
    return (
      <Authenticate
        onAuth={(event) => this.handleAuth(event)}
        isFetching={isFetching}
        error={error} />
    )
  }
}

AuthenticateContainer.contextTypes = {
  router: PropTypes.shape({
    replace: PropTypes.func.isRequired,
  }).isRequired,
}

AuthenticateContainer.propTypes = {
  error: PropTypes.string.isRequired,
  fetchAndHandleAuthedUser: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators(usersActionCreators, dispatch)
}

function mapStateToProps ({ users }) {
  return { error: users.get('error'), isFetching: users.get('isFetching') }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateContainer)
