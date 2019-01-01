import React, { Component } from 'react'
import {
  withStyles,
  Card,
  CardActions,
  CardContent,
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
import MapContainer from '../Containers/MapContainer'

const styles = theme => ({
  root: {
    borderRadius: 0,
    height: '55vh'
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
  },
  title: {
    flexDirection: 'column',
    alignItems: 'flex-start'
  }
})
class RunDetails extends Component {
  state = {
    run: {},
    runJoined: false
  }

  // I have all runs, i have the id from this props.match.params.id

  componentDidMount () {
    Api.getARun(this.props.match.params.id).then(run => {
      const attendeesIds = run.attendees.map(attendee => attendee.id)
      if (attendeesIds.includes(this.props.currentUserId)) {
        this.setState({ runJoined: true, run })
      } else {
        this.setState({ run })
      }
    })
  }

  handleClick = () => {
    let runnerAndRun = {
      run_id: this.props.match.params.id,
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

  giveDirections

  render () {
    console.log('bello')

    const { classes } = this.props
    const { handleClick } = this
    const { run } = this.props.location.state
    const buttonLabel = this.state.runJoined ? 'UNJOIN' : 'JOIN'

    const citymapperLink = 'https://citymapper.com/directions?endcoord=51.537060%2C-0.079179&endname=The%20Proud%20Archivist&endaddress=2-10%20Hertford%20Road%2C%20London%2C%20N1%205ET'

    const options = {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    }
    return (
      <>
      <MapContainer run={run} />
      <Card className={classes.root} elevation={0}>
        <CardContent>
          <CardActions className={classes.title}>
            <Typography align='left' gutterBottom variant='h5' component='h2'>
              {run.name}
            </Typography>
            <Typography component='p'>{run.description}</Typography>
          </CardActions>
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
          <Divider />
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
      </>
    )
  }
}

export default withStyles(styles)(RunDetails)
