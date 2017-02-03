import { Map } from 'immutable'
import auth, { saveUser } from 'helpers/auth'
import { formatUserInfo } from 'helpers/utils'

const AUTHENTICATE_USER = 'AUTHENTICATE_USER'
const FETCHING_USER = 'FETCHING_USER'
const FETCHING_USER_FAILURE = 'FETCHING_USER_FAILURE'
const FETCHING_USER_SUCCESS = 'FETCHING_USER_SUCCESS'
const UNAUTHENTICATE_USER = 'UNAUTHENTICATE_USER'

function authenticateUser (userId) {
  return {
    type: AUTHENTICATE_USER,
    userId,
  }
}

function unauthenticateUser () {
  return {
    type: UNAUTHENTICATE_USER,
  }
}

function fetchingUser () {
  return {
    type: FETCHING_USER,
  }
}

function fetchingUserFailure (error) {
  return {
    type: FETCHING_USER_FAILURE,
    error,
  }
}

function fetchingUserSuccess (userInfo, timestamp) {
  return {
    type: FETCHING_USER_SUCCESS,
    userInfo,
    timestamp,
  }
}

function fetchAndHandleAuthedUser () {
  return (dispatch) => {
    dispatch(fetchingUser())

    return auth()
      .then(({ user, credential }) => {
        const userData = user.providerData[0]
        const userInfo = formatUserInfo(userData.displayName, userData.photoURL, user.uid)
        return dispatch(fetchingUserSuccess(userInfo, Date.now()))
      })
      .then(({ userInfo }) => saveUser(userInfo))
      .then(userInfo => dispatch(authenticateUser(userInfo.userId)))
      .catch(error => dispatch(fetchingUserFailure(error)))
  }
}

export const creators = {
  authenticateUser,
  fetchAndHandleAuthedUser,
  fetchingUser,
  fetchingUserFailure,
  fetchingUserSuccess,
  unauthenticateUser,
}

export const types = {
  AUTHENTICATE_USER,
  FETCHING_USER,
  FETCHING_USER_FAILURE,
  FETCHING_USER_SUCCESS,
  UNAUTHENTICATE_USER,
}

const initialUserState = Map({
  lastUpdated: 0,
  info: {
    userId: '',
    name: '',
    avatar: '',
  },
})

function user (state = initialUserState, action) {
  switch (action.type) {
    case FETCHING_USER_SUCCESS:
      return initialUserState.merge({
        lastUpdated: action.timestamp,
        info: action.userInfo,
      })
  }
}

export const initialState = Map({
  isAuthed: false,
  isFetching: false,
  error: '',
  authedId: '',
})

export default function users (state = initialState, action) {
  switch (action.type) {
    case AUTHENTICATE_USER:
      return state.merge({ isAuthed: true, authedId: action.userId })
    case FETCHING_USER:
      return state.merge({ isFetching: true })
    case FETCHING_USER_FAILURE:
      return state.merge({ error: action.error, isFetching: false })
    case FETCHING_USER_SUCCESS:
      return state.merge({
        error: '',
        isFetching: false,
        [action.userInfo.userId]: user(state[action.userInfo.userId], action),
      })
    default:
      return state
  }
}
