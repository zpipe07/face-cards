import { connect } from 'react-redux'
import PostList from '../components/PostList/PostList'

const mapStateToProps = (state) => {
  return {
    posts: state.posts.items,
    isFetching: state.posts.isFetching,
  }
}

const VisiblePostList = connect(
  mapStateToProps,
)(PostList)

export default VisiblePostList
