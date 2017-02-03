import { creators, types } from '../users'
import { error, timestamp, userId, userInfo } from './mock'

describe('testing users action creators', () => {
  it('should create an action to authenticate a user', () => {
    const expectedAction = {
      type: types.AUTHENTICATE_USER,
      userId,
    }

    expect(creators.authenticateUser(userId)).toEqual(expectedAction)
  })

  it('should create an action to unauthenticate a user', () => {
    const expectedAction = {
      type: types.UNAUTHENTICATE_USER,
    }

    expect(creators.unauthenticateUser()).toEqual(expectedAction)
  })

  it('should create an action to fetch a user', () => {
    const expectedAction = {
      type: types.FETCHING_USER,
    }

    expect(creators.fetchingUser()).toEqual(expectedAction)
  })

  it('should create an action to indicate fetching a user failed', () => {
    const expectedAction = {
      type: types.FETCHING_USER_FAILURE,
      error,
    }

    expect(creators.fetchingUserFailure(error)).toEqual(expectedAction)
  })

  it('should create an action to indicate fetching a user succeeded', () => {
    const expectedAction = {
      type: types.FETCHING_USER_SUCCESS,
      userInfo,
      timestamp,
    }

    expect(creators.fetchingUserSuccess(userInfo, timestamp)).toEqual(expectedAction)
  })
})
