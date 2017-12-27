import React from 'react'
import PropTypes from 'prop-types'

import Post from './Post'

function PostList({ posts }) {
  return (
    <div>
      {posts.map(({ title, body, id }) => {
        return (
          <Post
            title={title}
            body={body}
            key={id} />
        )
      })}
    </div>
  )
}

export default PostList
