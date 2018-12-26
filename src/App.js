import React, { Component } from 'react'
import { CssBaseline } from '@material-ui/core'
import { Switch, Route } from 'react-router-dom'

import TopBar from './Components/TopBar'
import BottomBar from './Components/BottomBar'
import RunDetails from './Components/RunDetails'

import HomeTabs from './Containers/HomeTabs'
import RunsContainer from './Containers/RunsContainer'
import RunForm from './Containers/RunForm'
import SearchRunForm from './Containers/SearchRunForm'
import API from './API'

import './App.css'
import Api from './API'

class App extends Component {
  state = {
    runnerDetails: {
      upcomingRuns: [],
      pastRuns: []
    },
    currentUserId: 1,
    allRuns: []
  }

  componentDidMount () {
    const apiCall = new API()
    apiCall
      .getRunnerRuns(this.state.currentUserId)
      .then(runnerDetails => this.setState({ runnerDetails }))
      .then(() =>
        apiCall
          .getAllRuns()
          .then(allRuns => this.setState({ allRuns, revalidate: false }))
      )
  }

  futureRuns = () => {
    return this.state.allRuns.filter(run => new Date(run.date) - new Date() > 0)
  }

  handleRevalidate = createdRun => {
    this.setState({ allRuns: [...this.state.allRuns, createdRun] })
  }

  handleJoinRun = ids => {
    Api.joinARun(ids)
  }

  handleUnjoinRun = ids => {
    Api.unJoinARun(ids)
  }

  render () {
    const { runnerDetails, allRuns, currentUserId } = this.state

    return (
      <>
        <CssBaseline />
        <TopBar position='fixed' />
        <div className='content_container'>
          <Switch>
            <Route
              exact
              path='/runners/:id'
              render={props => (
                <HomeTabs {...props} runnerDetails={runnerDetails} />
              )}
            />
            <Route
              exact
              path='/runs'
              component={props => (
                <RunsContainer
                  {...props}
                  runs={this.futureRuns()}
                  currentUserId={currentUserId}
                />
              )}
            />
            <Route
              exact
              path='/runs/new'
              render={props => (
                <RunForm
                  {...props}
                  currentUserId={currentUserId}
                  handleRevalidate={this.handleRevalidate}
                />
              )}
            />
            <Route exact path='/runs/search' component={SearchRunForm} />
            <Route
              exact
              path='/runs/:id'
              render={props => (
                <RunDetails
                  {...props}
                  runs={allRuns}
                  currentUserId={currentUserId}
                  handleJoinRun={this.handleJoinRun}
                  handleUnjoinRun={this.handleUnjoinRun}
                />
              )}
            />
          </Switch>
        </div>
        <BottomBar />
      </>
    )
  }
}

export default App
