import { rootReducer } from './rootReducer'
import { ACTION_TYPES } from '../constants/constants'

describe('rootReducer', () => {
  it('should return the initial state', () => {
    expect(rootReducer(undefined, {})).toBeTruthy()
  })

  describe('case ACTION_TYPES.USERS.REQUEST', () => {
    it('should return the state for requesting users', () => {
      const action = {
        type: ACTION_TYPES.USERS.REQUEST,
      }
      const result = rootReducer({}, action)
      const expected = {
        isFetching: true,
        items: [],
      }

      expect(result.users).toMatchObject(expected)
    })
  })

  describe('case ACTION_TYPES.USERS.RECEIVE', () => {
    it('should return the state for receiving users', () => {
      const users = [
        { name: 'Bob', id: 3 },
        { name: 'Sue', id: 5 },
      ]
      const action = {
        type: ACTION_TYPES.USERS.RECEIVE,
        users,
      }
      const result = rootReducer({}, action)
      const expected = {
        isFetching: false,
        items: action.users,
      }

      expect(result.users).toMatchObject(expected)
    })
  })

  describe('case ACTION_TYPES.POSTS.REQUEST', () => {
    it('should return the state for requesting posts', () => {
      const userId = 12345
      const action = {
        type: ACTION_TYPES.POSTS.REQUEST,
        userId,
      }
      const result = rootReducer({}, action)
      const expected = {
        isFetching: true,
        items: [],
      }

      expect(result.posts).toMatchObject(expected)
      expect(result.activeUser).toEqual(userId)
    })
  })

  describe('case ACTION_TYPES.POSTS.RECEIVE', () => {
    it('should return the state for receiving posts', () => {
      const posts = [
        { title: 'foo', body: 'lorem ipsum' },
        { title: 'bar', body: 'ipsum dolores' },
      ]
      const action = {
        type: ACTION_TYPES.POSTS.RECEIVE,
        posts,
      }
      const result = rootReducer({}, action)
      const expected = {
        isFetching: false,
        items: action.posts,
      }

      expect(result.posts).toMatchObject(expected)
    })
  })
})
