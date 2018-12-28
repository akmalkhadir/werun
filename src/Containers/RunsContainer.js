import React from 'react'
import RunCard from '../Components/RunCard'
import { Grid, withStyles, Paper } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 8 * 3
  },
  paper: {
    height: '10vh'
  }
})

function RunsContainer ({ classes, children, dir, runs, currentUserId }) {
  return (
    <>
      <Paper className={classes.paper} elevation={0} />
      <div component='div' dir={dir} className={classes.root}>
        <Grid container spacing={16}>
          {runs.map(run => (
            <Grid item key={run.id}>
              <RunCard run={run} currentUserId={currentUserId} />
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  )
}

export default withStyles(styles)(RunsContainer)
