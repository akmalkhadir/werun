import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { isAfter, isBefore } from 'date-fns'

import TopBar from './Components/TopBar'
import BottomBar from './Components/BottomBar'
import RunDetails from './Components/RunDetails'

import HomeTabs from './Containers/HomeTabs'
import RunsPage from './Containers/RunsPage'
import RunForm from './Containers/CreateRunForm'
import SearchRunForm from './Containers/SearchRunForm'
import API from './API'

import './App.css'
import ProfilePage from './Containers/ProfilePage'
import LocationInput from './Components/LocationInput';

class App extends Component {
  state = {
    runnerDetails: {
      upcomingRuns: [],
      pastRuns: []
    },
    currentUserId: 21,
    allRuns: []
  }

  componentDidMount () {
    this.refreshState()
  }

  refreshState = () => {
    Promise.all([
      API.getRunnerRuns(this.state.currentUserId),
      API.getAllRuns()
    ]).then(([runnerDetails, allRuns]) =>
      this.setState({ runnerDetails, allRuns })
    )
  }

  futureRuns = () => {
    return this.state.allRuns.filter(run => new Date(run.date) - new Date() > 0)
  }

  handleRevalidate = createdRun => {
    this.setState({ allRuns: [...this.state.allRuns, createdRun] })
  }

  handleJoinRun = ids => {
    API.joinARun(ids).then(this.refreshState)
  }

  handleUnJoinRun = ids => {
    API.unJoinARun(ids).then(this.refreshState)
  }

  getUpcomingRuns = () => {
    return this.state.allRuns.filter(run =>
      isAfter(new Date(run.date), new Date())
    )
  }

  getPastRuns = () => {
    return this.state.allRuns.filter(run =>
      isBefore(new Date(run.date), new Date())
    )
  }

  render () {
    const { runnerDetails, allRuns, currentUserId } = this.state

    return (
      <>
        <TopBar runner={runnerDetails} position='fixed' />
        <div className='content_container'>
          <Switch>
            <Route
              exact
              path='/'
              render={props => (
                <HomeTabs {...props} runnerDetails={runnerDetails} />
              )}
            />
            <Route
              exact
              path='/runs'
              component={props => (
                <RunsPage
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
                  handleUnJoinRun={this.handleUnJoinRun}
                />
              )}
            />
            <Route
              exact
              path='/runners/:id'
              render={props => (
                <ProfilePage {...props} runner={runnerDetails} />
              )}
            />
            <Route
              exact
              path='/testpage'
              component={LocationInput}
            />
          </Switch>
        </div>
        <BottomBar currentUserId={currentUserId} />
      </>
    )
  }
}

export default App
