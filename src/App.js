import React, { Component } from 'react'

// import { fetchUsers, fetchPostsForUser } from './actions'

import VisibleCardList from './containers/VisibleCardList'

class App extends Component {
  componentWillMount() {
     // users = fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <VisibleCardList />
      </div>
    );
  }
}

export default App
