import { combineReducers } from 'redux'
import { ACTION_TYPES } from './constants'

const initialState = {
  users: {
    isFetching: false,
    items: [],
  },
  posts: {
    isFetching: false,
    items: [],
  },
}

// function users(state, action) {
//   switch (action.type) {
//     // case ACTION_TYPES.USERS.FETCH:
//     case ACTION_TYPES.USERS.REQUEST:
//       return Object.assign({}, state, {
//         isFetching: true,
//       })
//     case ACTION_TYPES.USERS.RECEIVE:
//       return Object.assign({}, state, {
//         isFetching: false,
//       })
//     default:
//       return state
//   }
// }

// function posts(state, action) {
//   switch (action.type) {
//     case ACTION_TYPES.POSTS.FETCH_FOR_USER:
//     default:
//       return state
//   }
// }

// export function reducer(state = initialState, action) {
//   switch (action.type) {
//     case ACTION_TYPES.USERS.FETCH:
//       return Object.assign({}, state, {
//         users: action.users,
//       })
//     case ACTION_TYPES.POSTS.FETCH_FOR_USER:
//       return Object.assign({}, state, {
//         activeUser: action.userId,
//         posts: action.posts,
//       })
//     case ACTION_TYPES.POSTS.REQUEST:
//     case ACTION_TYPES.POSTS.RECEIVE:
//     default:
//       return state
//   }
// }

// const rootReducer = combineReducers({
//   users,
//   posts
// })

// export default rootReducer

export function rootReducer(state = initialState, action) {
  switch (action.type) {
    // case ACTION_TYPES.USERS.FETCH:
    case ACTION_TYPES.USERS.REQUEST:
      return Object.assign({}, state, {
        users: {
          isFetching: true,
          items: [],
        }
      })
    case ACTION_TYPES.USERS.RECEIVE:
      return Object.assign({}, state, {
        users: {
          isFetching: false,
          items: action.users,
        }
      })
    case ACTION_TYPES.POSTS.REQUEST:
      return Object.assign({}, state, {
        posts: {
          isFetching: true,
          items: [],
        }
      })
    case ACTION_TYPES.POSTS.RECEIVE:
      return Object.assign({}, state, {
        posts: {
          isFetching: false,
          items: action.posts,
        }
      })
    default:
      return state
  }
}
