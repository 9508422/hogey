import { error, timestamp, userId, userInfo } from './mock'
import usersReducer, { creators, initialState } from '../users'

describe('testing users reducer', () => {
  const authedState = initialState.merge({ isAuthed: true, authedId: userId })

  test('should return the initial user state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState)
  })

  test('should handle AUTHENTICATE_USER', () => {
    expect(usersReducer(undefined, creators.authenticateUser(userId)))
      .toEqual(authedState)
  })

  test('should handle UNAUTHENTICATE_USER', () => {
    expect(usersReducer(undefined, creators.unauthenticateUser()))
      .toEqual(authedState.merge({ isAuthed: false, authedId: '' }))
  })

  const fetchingState = initialState.merge({ isFetching: true })

  test('should handle FETCHING_USER', () => {
    expect(usersReducer(undefined, creators.fetchingUser()))
      .toEqual(fetchingState)
  })

  test('should handle FETCHING_USER_FAILURE', () => {
    expect(usersReducer(undefined, creators.fetchingUserFailure(error)))
      .toEqual(fetchingState.merge({ error, isFetching: false }))
  })

  test('should handle FETCHING_USER_SUCCESS', () => {
    expect(usersReducer(undefined, creators.fetchingUserSuccess(userInfo, timestamp)))
      .toEqual(fetchingState.merge({
        error: '',
        isFetching: false,
        [userInfo.userId]: {
          lastUpdated: timestamp,
          info: userInfo,
        },
      }))
  })
})
