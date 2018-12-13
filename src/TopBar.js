import React from 'react'
import { AppBar, Toolbar, Typography, withStyles } from '@material-ui/core'

const styles = {
  root: {
    flexGrow: 1
  }
}
const TopBar = (props) => {
  const { classes } = props
  return (
    <div className={classes.root}>
      <AppBar>
        <Toolbar>
          <Typography variant='h6' color='inherit'>
            TopBar
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default withStyles(styles)(TopBar)

//    position: fixed;
// bottom: 0;
// width: 100 %;
