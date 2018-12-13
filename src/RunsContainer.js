import React from 'react'
import PropTypes from 'prop-types'
import RunCard from './RunCard'
import { Grid } from '@material-ui/core'

function RunsContainer ({ children, dir }) {
  return (
    <>
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
        <Grid item>
          <RunCard />
        </Grid>
      </Grid>
    </>
  )
}

RunsContainer.propTypes = {
  children: PropTypes.node.isRequired,
  dir: PropTypes.string.isRequired
}

export default RunsContainer
