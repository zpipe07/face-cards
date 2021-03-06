import React from 'react'
import PropTypes from 'prop-types'

import Post from '../Post/Post'

import Styles from './PostList.css'

function PostList({ posts, isFetching }) {
  return (
    !isFetching ? (
      posts.length ? (
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
      ) :
      (<p className={Styles.NoPosts}>Click card to view five of their posts.</p>)
    ) :
    (<p className={Styles.NoPosts}>Loading Posts...</p>)
  )
}

PostList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
}

export default PostList
