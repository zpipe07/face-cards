import axios from 'axios'
import { ACTION_TYPES } from './constants'
import { getRandomArrayElements } from './utils/utils'
import { setTimeout } from 'timers'

const usersURL = 'https://jsonplaceholder.typicode.com/users'
const postsURL = 'https://jsonplaceholder.typicode.com/posts?userId='

export function fetchUsers() {
  return function(dispatch) {
    dispatch(requestUsers())

    return axios.get(usersURL)
      .then(
        (res) => getRandomArrayElements(res.data, 3),
        (err) => console.log('An error occurred.', err),
      )
      .then((json) => {
        setTimeout(() => {
          return dispatch(receiveUsers(json))
        }, 2000)
      })
  }
}

export function requestUsers() {
  return {
    type: ACTION_TYPES.USERS.REQUEST,
  }
}

export function receiveUsers(users) {
  return {
    type: ACTION_TYPES.USERS.RECEIVE,
    users,
  }
}

export function fetchPostsForUser(userId) {
  return function(dispatch) {
    dispatch(requestPosts())

    return axios.get(`${postsURL}${userId}`)
      .then(
        (res) => getRandomArrayElements(res.data, 5),
        (err) => console.log('An error occurred.', err),
      )
      .then((json) => {
        setTimeout(() => {
          return dispatch(receivePosts(json))
        }, 2000)
      })
  }
}

export function requestPosts() {
  return {
    type: ACTION_TYPES.POSTS.REQUEST,
  }
}

export function receivePosts(posts) {
  return {
    type: ACTION_TYPES.POSTS.RECEIVE,
    posts,
  }
}
