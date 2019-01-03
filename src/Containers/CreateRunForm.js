import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  TextField,
  Grid,
  Button,
  Switch,
  Typography,
  Paper,
  InputAdornment
} from '@material-ui/core'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import API from '../API'
import { Redirect } from 'react-router-dom'
import LocationInput from '../Components/LocationInput'

const styles = theme => ({
  container: {
    height: 'auto'
  },
  form: {
    padding: theme.spacing.unit * 2
  },
  button: {
    textAlign: 'center',
    marginBottom: '10px'
  },
  toggle: {
    display: 'flex',
    alignItems: 'center'
  }
})

class CreateRunForm extends Component {
  state = {
    name: ``,
    description: ``,
    start_location: ``,
    end_location: ``,
    date: new Date(),
    distance: ``,
    is_private: false,
    toRunDetails: false,
    start_lat: 0,
    start_lng: 0,
    end_lat: 0,
    end_lng: 0,
    createdRun: {}
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleDateChange = date => {
    this.setState({ date })
  }

  handleToggleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  setStartCoordinates = (start_lat, start_lng) => {
    this.setState({ start_lat, start_lng })
  }

  setStartLocation = start_location => {
    this.setState({ start_location })
  }

  setEndCoordinates = (end_lat, end_lng) => {
    this.setState({ end_lat, end_lng })
  }

  setEndLocation = end_location => {
    this.setState({ end_location })
  }

  handleClick = () => {
    const {
      name,
      description,
      start_location,
      end_location,
      date,
      distance,
      is_private,
      start_lat,
      start_lng,
      end_lat,
      end_lng
    } = this.state

    const { currentUserId } = this.props

    const run = {
      name: name,
      description: description,
      start_location: start_location,
      end_location: end_location,
      distance: parseInt(distance),
      date: date,
      is_private: is_private,
      start_lat: start_lat,
      start_lng: start_lng,
      end_lat: end_lat,
      end_lng: end_lng,
      runner_id: currentUserId,
      image_url: 'https://storage.googleapis.com/akmalkhadir.com/run-images/marc-rafanell-lopez-393676-unsplash-min.jpg'
    }

    API.createNewRun(run).then(createdRun => {
      this.props.handleRevalidate(createdRun)
      this.setState({ createdRun, toRunDetails: true })
    })
  }

  render () {
    const { classes } = this.props
    const { date, createdRun } = this.state

    if (this.state.toRunDetails) {
      return (
        <Redirect
          to={{
            pathname: `/runs/${createdRun.id}`,
            state: { run: createdRun }
          }}
        />
      )
    }

    return (
      <Paper className={classes.container} elevation={0}>
        <form noValidate autoComplete='off' className={classes.form}>
          <Grid container direction='column' spacing={0} justify='center'>
            <Grid item>
              <TextField
                required
                id='name'
                label='Name'
                value={this.state.name}
                onChange={this.handleChange('name')}
                margin='normal'
                variant='filled'
                fullWidth
              />
            </Grid>
            <Grid item>
              <TextField
                required
                id='description'
                label='Description'
                value={this.state.description}
                onChange={this.handleChange('description')}
                margin='normal'
                variant='filled'
                multiline
                rows='4'
                fullWidth
              />
            </Grid>

            <Grid item>
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DateTimePicker
                  required
                  fullWidth
                  variant='filled'
                  label='Date'
                  format='d MMM yyyy | h:mm aa'
                  value={date}
                  onChange={this.handleDateChange}
                />
              </MuiPickersUtilsProvider>
            </Grid>

            <Grid item>
              <LocationInput
                required={true}
                id='start'
                label='Start Location'
                value={this.state.start_location}
                setCoordinates={this.setStartCoordinates}
                setAddress={this.setStartLocation}
              />
            </Grid>

            <Grid item>
              <LocationInput
                required={true}
                id='end'
                label='End Location'
                value={this.state.end_location}
                setCoordinates={this.setEndCoordinates}
                setAddress={this.setEndLocation}
              />
            </Grid>

            <Grid item>
              <TextField
                required
                fullWidth
                id='distance'
                label='Distance'
                value={this.state.distance}
                onChange={this.handleChange('distance')}
                margin='normal'
                variant='filled'
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>KM</InputAdornment>
                  )
                }}
              />
            </Grid>
            <Grid item className={classes.toggle}>
              <Typography variant='body2'>Mark as Private?</Typography>
              <Switch
                checked={this.state.is_private}
                onChange={this.handleToggleChange('is_private')}
                value='is_private'
              />
            </Grid>
            <Grid item className={classes.button}>
              <Button
                className={classes.button}
                onClick={this.handleClick}
                size='large'
                variant='contained'
                color='primary'
                fullWidth
              >
                HOST RUN
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
