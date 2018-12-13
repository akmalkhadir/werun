import React from 'react'
import { AppBar, Toolbar, Typography } from '@material-ui/core'

const TopBar = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant='h6' color='inherit'>
          TopBar
        </Typography>
      </Toolbar>
    </AppBar>
  )
}

export default TopBar
