import React from 'react'
import PropTypes from 'prop-types'

import Styles from './Post.css'

function Post({title, body}) {
  return (
    <li className={Styles.PostItem}>
      <h2 className={Styles.Title}>{title}</h2>
      <p className={Styles.Body}>{body}</p>
    </li>
  )
}

Post.propTypes = {
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
}

export default Post
