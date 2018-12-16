import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import { TextField, Grid, Button } from '@material-ui/core'
import {
  CalendarToday,
  CompareArrows,
  Search
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
  button: {
    justifyContent: 'flex-start',
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
    searchTerm: ``,
    date: ``,
    distance: ``,
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleDateChange = date => {
    this.setState({ selectedDate: date })
  }

  handleToggleChange = name => event => {
    this.setState({ [name]: event.target.checked })
  }

  render () {
    const { classes } = this.props
    return (
      <form className={classes.container} noValidate autoComplete='off'>
        <Grid container spacing={0} alignItems='center'>
          <Grid item>
            <Search fontSize='large' color='action' />
          </Grid>
          <Grid item>
            <TextField
              id='searchTerm'
              label='Search'
              className={classes.textField}
              value={this.state.searchTerm}
              onChange={this.handleChange('searchTerm')}
              margin='normal'
              variant='filled'
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
        <Grid container className={classes.button}>
          <Grid item>
            <Button fullWidth size='large' variant='contained' color='primary'>
              SEARCH
            </Button>
          </Grid>
        </Grid>
      </form>
    )
  }
}

export default withStyles(styles)(CreateRunForm)
