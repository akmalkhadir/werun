import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import SwipeableViews from 'react-swipeable-views'
import { AppBar, Tabs, Tab, Zoom, Fab, Menu, MenuItem, Fade } from '@material-ui/core'
import RunsContainer from './RunsContainer'
import { Add } from '@material-ui/icons'
import { Link } from 'react-router-dom'

const CreateLink = props => <Link to='/runs/new' {...props} />
const JoinLink = props => <Link to='/runs/search' {...props} />


const styles = theme => ({
  root: {
    backgroundColor: theme.palette.background.paper, 
    height: 'auto'
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing.unit * 10,
    right: theme.spacing.unit * 2
  }
})

class HomeTabs extends React.Component {
  state = {
    value: 0,
    anchorEl: null
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

  handleChangeIndex = index => {
    this.setState({ value: index })
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { classes, theme, runnerDetails } = this.props
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    const transitionDuration = {
      enter: theme.transitions.duration.enteringScreen,
      exit: theme.transitions.duration.leavingScreen
    }

    const fabs = [
      {
        color: 'primary',
        className: classes.fab,
        icon: <Add />
      },
      {
        color: 'primary',
        className: classes.fab,
        icon: <Add />
      }
    ]

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
          <RunsContainer
            dir={theme.direction}
            runs={runnerDetails.upcomingRuns}
          >
            Upcoming Runs
          </RunsContainer>
          <RunsContainer dir={theme.direction} runs={runnerDetails.pastRuns}>
            Past Runs
          </RunsContainer>
        </SwipeableViews>
        {fabs.map((fab, index) => (
          <Zoom
            key={fab.color + index}
            in={this.state.value === index}
            timeout={transitionDuration}
            style={{
              transitionDelay: `${
                this.state.value === index ? transitionDuration.exit : 0
              }ms`
            }}
            unmountOnExit
          >
            <Fab
              className={fab.className}
              color={fab.color}
              onClick={this.handleClick}
            >
              {fab.icon}
            </Fab>
          </Zoom>
        ))}
        <Menu
          id='fade-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem component={CreateLink}>Create a Run</MenuItem>
          <MenuItem component={JoinLink}>Join a Run</MenuItem>
        </Menu>
      </div>
    )
  }
}

export default withStyles(styles, { withTheme: true })(HomeTabs)
