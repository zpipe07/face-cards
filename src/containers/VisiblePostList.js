import { connect } from 'react-redux'

const mapStateToProps = (state) => {
  return {
    posts: state.users.posts,
  }
}

const VisiblePostList = connect(
  mapStateToProps,
)(CardList)

export default VisiblePostList
