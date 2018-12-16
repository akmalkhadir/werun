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
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers';
import DateFnsUtils from '@date-io/date-fns';

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
    private: false
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

  render () {
    const { classes } = this.props
    const { date } = this.state
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
              checked={this.state.private}
              onChange={this.handleToggleChange('private')}
              value='private'
            />
          </Grid>
        </Grid>
        <Grid container className={classes.button}>
          <Grid item>
            <Button size='large' variant='contained' color='primary'>
              CREATE RUN
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
