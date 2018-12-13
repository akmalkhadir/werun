import React, { Component } from 'react'
import TopBar from './TopBar'
import { CssBaseline } from '@material-ui/core'
import BottomBar from './BottomBar'
import HomeTabs from './HomeTabs'
import './App.css'

class App extends Component {
  render () {
    return (
      <>
        <CssBaseline />
        <TopBar />
        <div className='content_container'>
          <HomeTabs />
        </div>
        <BottomBar />
      </>
    )
  }
}

export default App
