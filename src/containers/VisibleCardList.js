import { connect } from 'react-redux'
import { fetchPostsForUser } from '../actions'
import CardList from '../components/CardList'

const mapStateToProps = (state) => {
  return {
    activeUser: state.activeUser,
    users: state.users.items,
    isFetching: state.users.isFetching,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onCardClick: (userId) => {
      dispatch(fetchPostsForUser(userId))
    },
  }
}

const VisibleCardList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardList)

export default VisibleCardList
