import React, { Component } from 'react'
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Divider,
  Grid
} from '@material-ui/core'
import { DirectionsRun, Event, LocationOn } from '@material-ui/icons'

const styles = {
  card: {},
  media: {
    objectFit: 'cover'
  },
  button: {
    float: 'right'
  },
  actions: {
    display: 'flex'
  }
}

class RunDetails extends Component {

  render () {
    const { classes, runs } = this.props
    const run = this.props.location.state
      ? this.props.location.state.run
      : runs.find(run => run.id === this.props.match.params.id)
    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    return (
      <Card className={classes.card}>
        <CardMedia
          component='img'
          alt={run.name}
          className={classes.media}
          height='280'
          image='https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/01/22/11/sunrise2201m.jpg'
          title={run.name}
        />
        <CardContent>
          <div>
            <Typography gutterBottom variant='h5' component='h2'>
              {run.name}
            </Typography>
            <Typography component='p'>{run.description}</Typography>
          </div>
          <div>
            <CardActions className={classes.actions} disableActionSpacing>
              <Grid container spacing={8}>
                <Grid item>
                  <Typography>
                    <DirectionsRun />
                    {run.distance}K
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <Event />
                    {new Date(run.date).toLocaleDateString(undefined, options)}
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </div>
          <Divider />
          <div>
            <CardActions className={classes.actions} disableActionSpacing>
              <Grid container spacing={8}>
                <Grid item>
                  <Typography>
                    <LocationOn color='primary' />
                    {run.startLocation}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography>
                    <LocationOn color='secondary' />
                    {run.endLocation}
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </div>
        </CardContent>
        <CardActions className={classes.button}>
          <Button variant='contained' color='primary'>
            Join
          </Button>
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(RunDetails)
