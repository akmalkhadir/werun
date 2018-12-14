import React, { Component } from 'react'
import TopBar from './Components/TopBar'
import { CssBaseline } from '@material-ui/core'
import BottomBar from './Components/BottomBar'
import HomeTabs from './Components/HomeTabs'

import { BrowserRouter as Switch, Route } from 'react-router-dom'

import './App.css'

class App extends Component {
  render () {
    return (
      <>
        <CssBaseline />
        <TopBar />
        <div className='content_container'>
          <Switch>
            <Route path='/users/:id' component={HomeTabs} />
          </Switch>
        </div>
        <BottomBar />
      </>
    )
  }
}

export default App
