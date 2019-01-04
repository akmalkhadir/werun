import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const styles = theme => ({
  appBar: {
    top: 'auto'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const topBarTitle = (runner) => {
  let currentUrl = window.location.pathname
  if (currentUrl.includes('/runners/')) {
    return runner.name
  } else if (currentUrl === '/') {
    return 'MY RUNS'
  } else if (currentUrl === '/runs') {
    return 'JOIN A RUN'
  } else if (currentUrl === '/runs/new') {
    return 'HOST A RUN'
  } else if (currentUrl === '/runs/search') {
    return 'DISCOVER RUNS'
  } else if (currentUrl.includes('/runs/')) {
    return 'RUN DETAILS'
  } else {
    return 'WeRun'
  }
}

const TopBar = props => {
  const { classes, runner } = props
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' color='inherit'>
          {topBarTitle(runner)}
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(TopBar)
