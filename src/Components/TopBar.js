import React from 'react'
import { withStyles } from '@material-ui/core/styles'
import { AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { SearchRounded } from '@material-ui/icons'

import { Link } from 'react-router-dom'

const SearchLink = props => <Link to='/runs/search' {...props} />

const styles = theme => ({
  appBar: {
    top: 'auto'
  },
  toolbar: {
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})

const topBarTitle = () => {
  let currentUrl = window.location.pathname
  if (currentUrl.includes('/runners/')) {
    return 'My Runs'
  } else if (currentUrl === '/runs') {
    return 'Join A Run'
  } else if (currentUrl === '/runs/new') {
    return 'Host A Run'
  } else if (currentUrl === '/runs/search') {
    return 'Join A Run'
  } else if (currentUrl.includes('/runs/')) {
    return 'Run Details'
  } else {
    return 'WeRun'
  }
}

const TopBar = props => {
  const { classes, pageName } = props
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' color='inherit'>
          {topBarTitle()}
        </Typography>
        <IconButton component={SearchLink} color='inherit'>
          <SearchRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(TopBar)

