import React, { Component, PropTypes } from 'react'
import { NavigationContainer } from 'containers'

class LayoutPage extends Component {
  render () {
    return (
      <div>
        <NavigationContainer />
        {this.props.children}
      </div>
    )
  }
}

LayoutPage.propTypes = {
  children: PropTypes.node.isRequired,
}

export default LayoutPage
