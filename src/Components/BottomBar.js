import React, { Component } from 'react'
import {
  BottomNavigation,
  BottomNavigationAction,
  withStyles
} from '@material-ui/core'
import { Event, People, Person } from '@material-ui/icons'
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

  handleChange = (event, value) => 
    this.setState({ value })
  

 redirectToRuns = (props) => {
   const { currentUserId } =  this.props
     return <Link to={`/runners/${currentUserId}`} {...props} />
 }


  render () {
    const { classes } = this.props
    const { value} = this.state

    return (
      <BottomNavigation
        value={value}
        onChange={this.handleChange}
        className={classes.root}
        showLabels
      >
        <BottomNavigationAction component={this.redirectToRuns} label='My Runs' icon={<Event />} />
        <BottomNavigationAction label='Groups' icon={<People />} />
        <BottomNavigationAction label='Profile' icon={<Person />} />
      </BottomNavigation>
    )
  }
}

export default withStyles(styles)(BottomBar)
