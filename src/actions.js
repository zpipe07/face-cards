import axios from 'axios'
import { ACTION_TYPES } from './constants'

const usersURL = 'https://jsonplaceholder.typicode.com/users'
const postsURL = 'https://jsonplaceholder.typicode.com/posts?userId='

export function fetchUsers() {
  return function(dispatch) {
    dispatch(requestUsers())

    return axios.get(usersURL)
      .then(
        (res) => res.data,
        (err) => console.log('An error occurred.', err),
      )
      .then((json) => {
        return dispatch(receiveUsers(json))
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
        (res) => res.data,
        (err) => console.log('An error occurred.', err),
      )
      .then((json) => {
        return dispatch(receivePosts(json))
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
