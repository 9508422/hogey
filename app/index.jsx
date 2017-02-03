import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import 'sanitize.css/sanitize.css'
import routes from 'config/routes'

function doRender () {
  render(<AppContainer>{routes}</AppContainer>, document.getElementById('root'))
}

doRender()

if (module.hot) {
  module.hot.accept('pages', () => {
    doRender()
  })
}
