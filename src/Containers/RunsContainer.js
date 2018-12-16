import React from 'react'
import RunCard from '../Components/RunCard'
import { Grid, withStyles } from '@material-ui/core'

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 8 * 3
  }
})

function RunsContainer ({ classes, children, dir }) {
  return (
    <div component='div' dir={dir} className={classes.root}>
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
