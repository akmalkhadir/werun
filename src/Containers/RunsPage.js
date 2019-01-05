import React, { Component } from 'react'
import SortInput from '../Components/SortInput'
import RunsContainer from './RunsContainer'
import { Divider } from '@material-ui/core'
import { distance, point } from '@turf/turf'
import { compareAsc } from 'date-fns'
import API from '../API'

class RunsPage extends Component {
  state = {
    runs: [],
    sortBy: 'Nearest Location',
    lat: 51.520338,
    lng: -0.087614
  }

  calculateDistance = (lat, lng) => {
    let from = point([this.state.lat, this.state.lng])
    let to = point([lat, lng])
    let options = { units: 'kilometers' }

    return distance(from, to, options)
  }

  getRunDistance = run => {
    let startLat = parseFloat(run.start_coordinates.lat)
    let startLng = parseFloat(run.start_coordinates.lng)
    return this.calculateDistance(startLat, startLng)
  }

  setSortBy = term => {
    this.setState({ sortBy: term })
  }

  componentDidMount () {
    const { state } = this.props.location
    if (state) {
      this.setState({ lat: state.lat, lng: state.lng })
    }
    API.getAllRuns(runs => this.setState({runs}))
  }

  sortRunsByDistance = () => {
    const runs = this.props.runs.length > 0 ? [...this.props.runs] : [...this.state.runs]
      let sortedRuns = runs.sort(
        (a, b) => this.getRunDistance(a) - this.getRunDistance(b)
      )
      return sortedRuns
  }

  sortRunsByDate = () => {
    if (this.props.runs.length > 0) {
      let sortedRuns = [...this.props.runs].sort((a, b) =>
        compareAsc(a.date, b.date)
      )
      return sortedRuns
    }
  }

  // depending on coordinates set in state, filter this.props runs within 20k radius, then sort by ascending distance, then pass runs, to runs

  render () {
    const { runs, currentUserId } = this.props
    const runsToDisplay = (runs) => {
      switch (this.state.sortBy) {
        case 'Nearest Location':
          return this.sortRunsByDistance()
        case 'Date':
          return this.sortRunsByDate()
        default:
          return runs
      }
    }

    return (
      <div>
        <SortInput setSortBy={this.setSortBy} location={this.props.location.state.address} />
        <Divider />
        <RunsContainer
          runs={runsToDisplay(runs)}
          currentUserId={currentUserId}
        />
      </div>
    )
  }
}

export default RunsPage
