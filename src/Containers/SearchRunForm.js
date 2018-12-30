import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
  Card,
  CardActionArea,
  CardMedia
} from '@material-ui/core'
import icon5k from '../images/icons-5k.svg'
import icon10k from '../images/icons-10k.svg'

import { Link } from 'react-router-dom'
import LocationSearch from '../Components/LocationSearch'

const styles = theme => ({
  button: {
    justifyContent: 'space-around',
    margin: theme.spacing.unit
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    margin: theme.spacing.unit
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '240px',
    margin: theme.spacing.unit
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  card: {
    maxWidth: 170
  },
  media: {
    height: '100%'
  }
})

class SearchRunForm extends Component {
  state = {
    date: new Date(),
    address: '',
    lat: 0,
    lng: 0
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
        state: { lat: this.state.lat, lng: this.state.lng }
      }}
      {...props}
    />
  )

  render () {
    const { classes } = this.props
    return (
      <>
        <LocationSearch
          setCoordinates={this.setCoordinates}
          setAddress={this.setAddress}
        />
        <Grid className={classes.box} spacing={16} container>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon5k}
                  title='5K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon10k}
                  title='10K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon5k}
                  title='5K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon10k}
                  title='10K'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
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
      </>
    )
  }
}

export default withStyles(styles)(SearchRunForm)
