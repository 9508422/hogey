import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Main } from 'pages'

function doRender (Component) {
  render(<AppContainer><Component /></AppContainer>, document.getElementById('root'))
}

doRender(Main)

if (module.hot) {
  module.hot.accept('pages', () => {
    doRender(Main)
  })
}
