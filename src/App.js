import React, { Component } from 'react'
import './App.css'
import TopBar from './TopBar'
import { CssBaseline } from '@material-ui/core'

class App extends Component {
  render () {
    return (
      <>
        <CssBaseline />
        <TopBar />
      </>
    )
  }
}

export default App
