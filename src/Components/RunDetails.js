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
  Grid,
  IconButton
} from '@material-ui/core'
import {
  DirectionsRun,
  Event,
  LocationOn,
  Directions
} from '@material-ui/icons'
import Api from '../API'

const styles = theme => ({
  root: {
    borderRadius: 0,
    height: '100vh'
  },
  media: {
    objectFit: 'cover'
  },
  button: {
    float: 'right',
    marginRight: theme.spacing.unit * 2
  },
  actions: {
    display: 'flex'
  }
})
class RunDetails extends Component {
  state = {
    run: {},
    runJoined: false
  }

  componentDidMount () {
    Api.getARun(this.props.match.params.id).then(run => {
      this.setState({ run })
      const attendeesIds = this.state.run.attendees.map(attendee => attendee.id)
      if (attendeesIds.includes(this.props.currentUserId)) {
        this.setState({ runJoined: true })
      }
    })
  }

  handleClick = () => {
    let runnerAndRun = {
      run_id: this.state.run.id,
      runner_id: this.props.currentUserId
    }
    if (this.state.runJoined) {
      this.setState({ runJoined: false })
      return this.props.handleUnJoinRun(runnerAndRun)
    } else {
      this.setState({ runJoined: true })
      return this.props.handleJoinRun(runnerAndRun)
    }
  }

  render () {
    const { classes } = this.props
    const { run } = this.state
    const { handleClick } = this
    const buttonLabel = this.state.runJoined ? 'UNJOIN' : 'JOIN'

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    return (
      <Card className={classes.root} elevation={0}>
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
            <CardActions>
              <Grid container spacing={16} alignItems='center'>
                <Grid item className={classes.actions}>
                  <DirectionsRun />
                  <Typography>{run.distance}K</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <Event />
                  <Typography>
                    {new Date(run.date).toLocaleDateString(undefined, options)}
                  </Typography>
                </Grid>
              </Grid>
            </CardActions>
          </div>
          <Divider />
          <div>
            <CardActions>
              <Grid container spacing={16} alignItems='center'>
                <Grid item className={classes.actions}>
                  <LocationOn color='primary' />
                  <Typography>{run.startLocation}</Typography>
                </Grid>
                <Grid item className={classes.actions}>
                  <LocationOn color='secondary' />
                  <Typography>{run.endLocation}</Typography>
                </Grid>
                <Grid item>
                  <IconButton>
                    <Directions />
                  </IconButton>
                </Grid>
              </Grid>
            </CardActions>
          </div>
        </CardContent>
        <CardActions className={classes.button}>
          {new Date(run.date) - new Date() > 0 ? (
            <Button variant='contained' color='primary' onClick={handleClick}>
              {buttonLabel}
            </Button>
          ) : (
            <Button variant='contained' disabled color='primary'>
              Event Has Ended
            </Button>
          )}
        </CardActions>
      </Card>
    )
  }
}

export default withStyles(styles)(RunDetails)
