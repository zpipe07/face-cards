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
          className={Styles.Image}
          src={`https://api.adorable.io/avatars/150/${email}.png`}/>
        <div className={Styles.TextWrapper}>
          <h3 className={Styles.CatchPhrase}>
            <q>{catchPhrase}</q>
          </h3>
          <h2 className={Styles.Name}>{name}</h2>
          <p className={Styles.Link}>{email}</p>
        </div>
      </a>
    </li>
  )
}

Card.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  catchPhrase: PropTypes.string.isRequired,
}

export default Card
