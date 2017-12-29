import * as actions from './actions'
import { ACTION_TYPES } from '../constants/constants'

describe('actions', () => {
  describe('requestUsers', () => {
    it('should create an action to request users', () => {
      const expected = {
        type: ACTION_TYPES.USERS.REQUEST,
      }

      expect(actions.requestUsers()).toEqual(expected)
    })
  })

  describe('receiveUsers', () => {
    it('should create an action to receive users', () => {
      const users = [
        { name: 'John', id: 1 },
        { name: 'Mary', id: 2 },
      ]
      const expected = {
        type: ACTION_TYPES.USERS.RECEIVE,
        users,
      }

      expect(actions.receiveUsers(users)).toEqual(expected)
    })
  })

  describe('requestPosts', () => {
    it('should create an action to request posts', () => {
      const userId = 123
      const expected = {
        type: ACTION_TYPES.POSTS.REQUEST,
        userId,
      }

      expect(actions.requestPosts(userId)).toEqual(expected)
    })
  })

  describe('receivePosts', () => {
    it('should create an action to receive posts', () => {
      const posts = [
        { title: 'foo', body: 'lorem ipsum' },
        { title: 'bar', body: 'ipsum dolores' },
      ]
      const expected = {
        type: ACTION_TYPES.POSTS.RECEIVE,
        posts,
      }

      expect(actions.receivePosts(posts)).toEqual(expected)
    })
  })
})
