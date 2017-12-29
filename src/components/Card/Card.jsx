import React from 'react'
import PropTypes from 'prop-types'

import Styles from './Card.css'

function Card ({name, email, catchPhrase, isActive, onClick}) {
  const CardClass = isActive ? Styles.ActiveCard : Styles.Card

  return (
    <li className={Styles.CardItem}>
      <a
        href="#"
        className={CardClass}
        onClick={(e) => {
          e.preventDefault()
          onClick()
        }}>
        <img
          className={Styles.Avatar}
          src={`https://api.adorable.io/avatars/150/${email}.png`}/>
        <div>
          <h3 className={Styles.CatchPhrase}>
            <q>{catchPhrase}</q>
          </h3>
          <h2 className={Styles.Name}>{name}</h2>
          <p className={Styles.Email}>{email}</p>
        </div>
      </a>
    </li>
  )
}

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Card
