import React from 'react'
import PropTypes from 'prop-types'
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

function RunDetails (props) {
  const { classes } = props
  return (
    <Card className={classes.card}>
      <CardMedia
        component='img'
        alt='Contemplative Reptile'
        className={classes.media}
        height='280'
        image='https://static.standard.co.uk/s3fs-public/thumbnails/image/2017/01/22/11/sunrise2201m.jpg'
        title='Contemplative Reptile'
      />
      <CardContent>
        <div>
          <Typography gutterBottom variant='h5' component='h2'>
            Chase the Sun
          </Typography>
          <Typography component='p'>
            Run early to catch the sunrise. We'll start at victoria gate Hyde
            Park and finish at Primrose Hill just in time to watch the sunrise.
          </Typography>
        </div>
        <div>
          <CardActions className={classes.actions} disableActionSpacing>
            <Grid container spacing={8}>
              <Grid item>
                <Typography>
                  <DirectionsRun />
                  10K
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <Event />
                  Sunday, 16 Dec 18 | 5:30AM
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
                  Victoria Gate, Hyde Park
                </Typography>
              </Grid>
              <Grid item>
                <Typography>
                  <LocationOn color='secondary' />
                  Primrose Hill
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

RunDetails.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RunDetails)
