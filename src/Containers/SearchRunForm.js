import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { Grid, Button } from '@material-ui/core'

import { Link } from 'react-router-dom'
import LocationSearch from '../Components/LocationSearch'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    margin: theme.spacing.unit * 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    justifyContent: 'center',
    margin: theme.spacing.unit
  },
  icons: {
    fontSize: '56px',
    marginTop: '5vh'
  },
  polygon: {
    fill: theme.palette.common.white,
    stroke: theme.palette.divider,
    strokeWidth: 1
  }
})

class SearchRunForm extends Component {
  state = {
    date: new Date(),
    address: '',
    lat: 51.520338,
    lng: -0.087614,
    enter: true
  }

  setCoordinates = (lat, lng) => {
    this.setState({ lat, lng })
  }

  setAddress = address => {
    this.setState({ address })
  }

  redirectToRuns = props => (
    <Link
      to={{
        pathname: '/runs',
        state: {
          lat: this.state.lat,
          lng: this.state.lng,
          address: this.state.address
        }
      }}
      {...props}
    />
  )

  render () {
    const { classes } = this.props
    return (
      <div className={classes.root}>
        <LocationSearch
          setCoordinates={this.setCoordinates}
          setAddress={this.setAddress}
        />
        <Grid container className={classes.button}>
          <Grid item>
            <Button
              component={this.redirectToRuns}
              size='large'
              variant='contained'
              color='primary'
            >
              DISCOVER
            </Button>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(SearchRunForm)
