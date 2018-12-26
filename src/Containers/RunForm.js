import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid, Button, Switch, Typography } from '@material-ui/core'
import {
  AccountCircle,
  Description,
  CalendarToday,
  AddLocation,
  LocationOn,
  CompareArrows
} from '@material-ui/icons'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import API from '../API'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    margin: theme.spacing.unit
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit
  },
  button: {
    justifyContent: 'flex-start'
  },
  dense: {
    marginTop: 16
  },
  menu: {
    width: 200
  }
})

class CreateRunForm extends Component {
  state = {
    name: ``,
    description: ``,
    start: ``,
    end: ``,
    date: new Date(),
    distance: ``,
    is_private: false,
    toRunDetails: false,
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

  handleClick = () => {
    const {
      name,
      description,
      start,
      end,
      date,
      distance,
      is_private
    } = this.state

    const { currentUserId } = this.props

    const run = {
      name: name,
      description: description,
      start_location: start,
      end_location: end,
      distance: parseInt(distance),
      date: date,
      is_private: is_private,
      runner_id: currentUserId
    }

    API.createNewRun(run).then(createdRun => {
    this.setState({createdRun, toRunDetails: true})
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
      <form className={classes.container} noValidate autoComplete='off'>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <AccountCircle fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='name'
              label='Name'
              className={classes.textField}
              value={this.state.name}
              onChange={this.handleChange('name')}
              margin='normal'
              variant='filled'
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <Description fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='description'
              label='Description'
              className={classes.textField}
              value={this.state.description}
              onChange={this.handleChange('description')}
              margin='normal'
              variant='filled'
              multiline
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <CalendarToday fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DateTimePicker
                variant='filled'
                label='Date'
                format='d MMM yyyy | h:mm aa'
                className={classes.textField}
                value={date}
                onChange={this.handleDateChange}
              />
            </MuiPickersUtilsProvider>
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <AddLocation fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='start'
              label='Start Location'
              className={classes.textField}
              value={this.state.start}
              onChange={this.handleChange('start')}
              margin='normal'
              variant='filled'
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <LocationOn fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='end'
              label='End Location'
              className={classes.textField}
              value={this.state.end}
              onChange={this.handleChange('end')}
              margin='normal'
              variant='filled'
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <CompareArrows fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='distance'
              label='Distance'
              className={classes.textField}
              value={this.state.distance}
              onChange={this.handleChange('distance')}
              margin='normal'
              variant='filled'
            />
          </Grid>
        </Grid>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <Typography>Mark as Private?</Typography>
          </Grid>
          <Grid item>
            <Switch
              checked={this.state.is_private}
              onChange={this.handleToggleChange('is_private')}
              value='is_private'
            />
          </Grid>
        </Grid>
        <Grid container className={classes.button}>
          <Grid item>
            <Button
              onClick={this.handleClick}
              size='large'
              variant='contained'
              color='primary'
            >
              CREATE RUN
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
