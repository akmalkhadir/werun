import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { AppBar, Tabs, Tab } from '@material-ui/core'
import RunsContainer from './RunsContainer'
import CreateJoinFab from '../Components/CreateJoinFab'

const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper
  }
})

class HomeTabs extends React.Component {
  state = {
    value: 0
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  render () {
    const { classes, theme, runnerDetails } = this.props

    return (
      <div className={classes.root}>
        <AppBar position='static' color='default'>
          <Tabs
            value={this.state.value}
            onChange={this.handleChange}
            indicatorColor='primary'
            textColor='primary'
            fullWidth
          >
            <Tab label='Upcoming' />
            <Tab label='Past' />
          </Tabs>
        </AppBar>
        <SwipeableViews
          axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
          index={this.state.value}
          onChangeIndex={this.handleChangeIndex}
        >
          <RunsContainer dir={theme.direction} runs={runnerDetails.upcomingRuns} >Upcoming Runs</RunsContainer>
          <RunsContainer dir={theme.direction} runs={runnerDetails.pastRuns} >Past Runs</RunsContainer>
         
        </SwipeableViews>
        <CreateJoinFab />
      </div>
    )
  }
}


export default withStyles(styles, { withTheme: true })(HomeTabs)
