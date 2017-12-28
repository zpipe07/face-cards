import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

import Styles from './CardList.css'

function CardList({ users, isFetching, onCardClick }) {
  return (
    !isFetching ? (
      <ul className={Styles.CardList}>
        {users.map(({ name, email, company, id }) => {
          return (
            <Card
              name={name}
              email={email}
              catchPhrase={company.catchPhrase}
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
  users: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      email: PropTypes.string.isRequired,
      company: PropTypes.shape({
        catchPhrase: PropTypes.string.isRequired,
      }).isRequired
    }).isRequired
  ).isRequired,
  onCardClick: PropTypes.func.isRequired,
}

export default CardList
