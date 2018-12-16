import React from 'react'
import RunCard from '../Components/RunCard'
import { Grid, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1
  }
})


function RunsContainer ({ classes }) {
  return (
    <div className={classes.root}>
      <Grid container spacing={16}>
        <Grid item>
          <RunCard />
        </Grid>
        <Grid item>
          <RunCard />
        </Grid>
        <Grid item>
          <RunCard />
        </Grid>
      </Grid>
    </div>
  )
}


export default withStyles(styles)(RunsContainer)
