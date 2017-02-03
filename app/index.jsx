import React from 'react'
import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { hashHistory } from 'react-router'
import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { routerReducer, syncHistoryWithStore } from 'react-router-redux'
import * as reducers from 'redux/modules'
import 'sanitize.css/sanitize.css'
import getRoutes from 'config/routes'
import { checkIfAuthed } from 'helpers/auth'

const store = createStore(combineReducers({...reducers, routing: routerReducer}), compose(
  applyMiddleware(thunk),
  window.devToolsExtension ? window.devToolsExtension() : f => f
))

const history = syncHistoryWithStore(hashHistory, store)

function checkAuth (nextState, replace) {
  const isAuthed = checkIfAuthed(store)
  const nextPathName = nextState.location.pathname
  if (nextPathName === '/') {
    if (isAuthed) {
      replace('/dashboard')
    }
  } else {
    if (!isAuthed) {
      replace('/')
    }
  }
}

function doRender () {
  render(
    <AppContainer>
      <Provider store={store}>
        {getRoutes(checkAuth, history)}
      </Provider>
    </AppContainer>,
    document.getElementById('root'))
}

doRender()

if (module.hot) {
  module.hot.accept('pages', () => doRender())
}
