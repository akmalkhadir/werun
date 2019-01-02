import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid, Button, Switch, Typography, Paper, InputAdornment } from '@material-ui/core'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers'
import DateFnsUtils from '@date-io/date-fns'
import API from '../API'
import { Redirect } from 'react-router-dom'

const styles = theme => ({
  container: {
    margin: theme.spacing.unit
  },
  form: {
    margin: theme.spacing.unit
  },
  button: {
    justifyContent: 'flex-start'
  },
  toggle: {
    display: 'flex',
    alignItems: 'center'
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
              <TextField
                fullWidth
                id='start'
                label='Start Location'
                value={this.state.start}
                onChange={this.handleChange('start')}
                margin='normal'
                variant='filled'
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                id='end'
                label='End Location'
                value={this.state.end}
                onChange={this.handleChange('end')}
                margin='normal'
                variant='filled'
              />
            </Grid>

            <Grid item>
              <TextField
                fullWidth
                id='distance'
                label='Distance'
                value={this.state.distance}
                onChange={this.handleChange('distance')}
                margin='normal'
                variant='filled'
                InputProps={{
                  endAdornment: <InputAdornment position="end">KM</InputAdornment>,
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
      </Paper>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
