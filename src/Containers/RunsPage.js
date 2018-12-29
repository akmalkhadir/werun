import React, { Component } from 'react'
import SortInput from '../Components/SortInput'
import RunsContainer from './RunsContainer'
import { Divider } from '@material-ui/core'

class RunsPage extends Component {

state = {
  sortBy: '',
  coordinates: 0
}

  render () {
    const { runs, currentUserId } = this.props
    return (
      <div>
        <SortInput />
        <Divider />
        <RunsContainer runs={runs} currentUserId={currentUserId} />
      </div>
    )
  }
}

export default RunsPage
