import React, { Component } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles
} from '@material-ui/core'
import { Event, Person, Search } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const styles = {
  root: {
    position: 'fixed',
    bottom: 0,
    width: '100%'
  }
}

class BottomBar extends Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => this.setState({ value })

  redirectToRuns = props => {
    return <Link to={`/`} {...props} />
  }

  redirectToDiscover = props => {
    return <Link to='/runs/search' {...props} />
  }

  redirectToProfile = (props) => {
    const { currentUserId } = this.props
    return <Link to={`/runners/${currentUserId}`} {...props} />
  }

  render () {
    const { classes } = this.props
    const { value } = this.state
    const { redirectToDiscover, redirectToRuns, redirectToProfile } = this

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction
          component={redirectToRuns}
          label='My Runs'
          icon={<Event />}
        />
        <BottomNavigationAction
          component={redirectToDiscover}
          label='Discover'
          icon={<Search />}
        />
        <BottomNavigationAction
          component={redirectToProfile}
          label='Profile'
          icon={<Person />}
        />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(BottomBar)
