import React from 'react'
import PropTypes from 'prop-types'

import Card from '../Card/Card'

import Styles from './CardList.css'

function CardList({ activeUser, users, isFetching, onCardClick }) {
  return (
    !isFetching ? (
      <ul className={Styles.CardList}>
        {users.map(({ name, email, company, id }) => {
          return (
            <Card
              name={name}
              email={email}
              catchPhrase={company.catchPhrase}
              isActive={id === activeUser}
              key={id}
              onClick={() => onCardClick(id)} />
          )
        })}
      </ul>
    ) :
    (<p className={Styles.Loading}>Loading Users...</p>)
  )
}

CardList.propTypes = {
  activeUser: PropTypes.number,
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  isFetching: PropTypes.bool.isRequired,
  onCardClick: PropTypes.func.isRequired,
}

export default CardList
