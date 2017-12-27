import React from 'react'
import PropTypes from 'prop-types'

import Styles from './Card.css'

function Card ({name, email, catchPhrase, onClick}) {
  return (
    <div
      className={Styles.Card}
      onClick={onClick}>
      <img src='https://api.adorable.io/avatars/150/{email}.png'/>
      <span>{catchPhrase}</span>
      <span>{name}</span>
      <span>{email}</span>
    </div>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
}

export default Card
