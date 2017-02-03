import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import moxios from 'moxios'
import { userInfo } from './mock'
import { creators } from '../users'

const mockStore = configureMockStore([thunk])

describe('testing users thunk', () => {
  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  test('should successfully fetch and handle authed user', () => {
    const data = {
      user: userInfo,
      timestamp: Date.now(),
    }

    moxios.wait(() => {
      moxios.requests.mostRecent().respondWith({
        response: data,
        status: 200,
      })
    })

    const { user, timestamp } = data

    const expectedActions = [
      creators.fetchingUser(),
      creators.fetchingUserSuccess(user, timestamp),
      creators.authenticateUser(user.userId),
    ]

    const store = mockStore({}, expectedActions)

    return store.dispatch(creators.fetchAndHandleAuthedUser())
      .then(() => expect(store.getActions()).toEqual(expectedActions))
  })
})
