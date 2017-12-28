import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

import Styles from './PostList.css'

function PostList({ posts }) {
  return (
    <ul className={Styles.PostList}>
      {posts.map(({ title, body, id }) => {
        return (
          <Post
            title={title}
            body={body}
            key={id} />
        )
      })}
    </ul>
  )
}

export default PostList
