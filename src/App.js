import React, { Component } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import TopBar from './Components/TopBar'
import BottomBar from './Components/BottomBar'
import RunDetails from './Components/RunDetails'

import HomeTabs from './Containers/HomeTabs'
import RunsContainer from './Containers/RunsContainer'

import './App.css'

class App extends Component {
  render () {
    return (
      <>
        <CssBaseline />
        <TopBar />
        <div className='content_container'>
          <Switch>
            <Route exact path='/users/:id' component={HomeTabs} />
            <Route exact path='/runs' component={RunsContainer} />
            <Route exact path='/runs/:id' component={RunDetails} />
          </Switch>
        </div>
        <BottomBar />
      </>
    )
  }
}

export default App
