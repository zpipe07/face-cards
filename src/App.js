import React, { Component } from 'react'

import VisibleCardList from './containers/VisibleCardList'
import VisiblePostList from './containers/VisiblePostList'

class App extends Component {
  componentWillMount() {
     // users = fetchUsers()
  }

  render() {
    return (
      <div className="App">
        <VisibleCardList />
        <VisiblePostList />
      </div>
    );
  }
}

export default App
