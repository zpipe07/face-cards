import React, { Component } from 'react'

import VisibleCardList from './containers/VisibleCardList'
import VisiblePostList from './containers/VisiblePostList'

class App extends Component {
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
