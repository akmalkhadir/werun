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

const TopBar = props => {
  const { classes } = props
  return (
    <AppBar className={classes.appBar}>
      <Toolbar className={classes.toolbar}>
        <Typography variant='h6' color='inherit'>
          TopBar
        </Typography>
        <IconButton component={SearchLink} color='inherit'>
          <SearchRounded />
        </IconButton>
      </Toolbar>
    </AppBar>
  )
}

export default withStyles(styles)(TopBar)
