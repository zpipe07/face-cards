import { ACTION_TYPES } from '../constants/constants'

const initialState = {
  activeUser: undefined,
  users: {
    isFetching: false,
    items: [],
  },
  posts: {
    isFetching: false,
    items: [],
  },
}

// TODO: split reducers into users and posts
export function rootReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.USERS.REQUEST:
      return Object.assign({}, state, {
        users: {
          isFetching: true,
          items: [],
        },
      })
    case ACTION_TYPES.USERS.RECEIVE:
      return Object.assign({}, state, {
        users: {
          isFetching: false,
          items: action.users,
        },
      })
    case ACTION_TYPES.POSTS.REQUEST:
      return Object.assign({}, state, {
        activeUser: action.userId,
        posts: {
          isFetching: true,
          items: [],
        },
      })
    case ACTION_TYPES.POSTS.RECEIVE:
      return Object.assign({}, state, {
        posts: {
          isFetching: false,
          items: action.posts,
        },
      })
    default:
      return state
  }
}
