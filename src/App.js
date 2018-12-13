import React, { Component } from 'react'
import TopBar from './TopBar'
import { CssBaseline } from '@material-ui/core'
import BottomBar from './BottomBar';

class App extends Component {
  render () {
    return (
      <>
        <CssBaseline />
        <TopBar />
        <BottomBar />
      </>
    )
  }
}

export default App
