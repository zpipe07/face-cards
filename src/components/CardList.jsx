import React from 'react'
import PropTypes from 'prop-types'

import Card from './Card'

function CardList({ users, onCardClick }) {
  return (
    <div>
      {users.map(({ name, email, company, id }) => {
        return (
          <Card
            name={name}
            email={email}
            catchPhrase={company.catchPhrase}
            key={id.toString()}
            onClick={() => onCardClick(id)} />
        )
      })}
    </div>
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
