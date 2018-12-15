import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid } from '@material-ui/core'
import {
  Person,
  AccountCircle,
  Description,
  CalendarToday,
  AddLocation,
  LocationOn,
  CompareArrows
} from '@material-ui/icons'

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
    date: ``,
    distance: ``
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  render () {
    const { classes } = this.props
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
            <TextField
              id='date'
              label='Date'
              className={classes.textField}
              value={this.state.date}
              onChange={this.handleChange('date')}
              margin='normal'
              variant='filled'
            />
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
      </form>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
