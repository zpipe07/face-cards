import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

function PostList({ posts }) {
  return (
    <div>
      {posts.map(({ title, body }) => {
        return (
          <Post
            title={title}
            body={body} />
        )
      })}
    </div>
  )
}

export default PostList
