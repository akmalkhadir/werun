import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import {
  Grid,
  Button,
  IconButton,
  Paper,
  InputBase,
  Typography,
  Card,
  CardActionArea,
  CardMedia,
  CardContent
} from '@material-ui/core'
import { Search } from '@material-ui/icons'
import icon5k from '../images/icons-5k.svg'
import icon10k from '../images/icons-10k.svg'

import DateFnsUtils from '@date-io/date-fns'
import { MuiPickersUtilsProvider, DateTimePicker } from 'material-ui-pickers'
import { Link } from 'react-router-dom'

const styles = theme => ({
  button: {
    justifyContent: 'space-around',
    margin: theme.spacing.unit
  },
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: 'auto',
    margin: theme.spacing.unit
  },
  box: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  paper: {
    width: '240px',
    margin: theme.spacing.unit
  },
  input: {
    marginLeft: 8,
    flex: 1
  },
  iconButton: {
    padding: 10
  },
  card: {
    maxWidth: 170
  },
  media: {
    height: '100%'
  }
})

class SearchRunForm extends Component {
  state = {
    searchTerm: ``,
    date: new Date(),
    distance: ``
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    })
  }

  handleDateChange = date => {
    this.setState({ date })
  }

  redirectToRuns = props => <Link to='/runs' {...props} />

  render () {
    const { classes } = this.props
    const { date } = this.state
    return (
      <>
        <Paper className={classes.root} elevation={1}>
          <InputBase
            className={classes.input}
            placeholder='Search Upcoming Runs'
          />
          <IconButton className={classes.iconButton} aria-label='Search'>
            <Search />
          </IconButton>
        </Paper>
        <Grid className={classes.box} spacing={16} container>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon5k}
                  title='5K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon10k}
                  title='10K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon5k}
                  title='5K'
                />
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  component='img'
                  className={classes.media}
                  image={icon10k}
                  title='10K'
                />
              </CardActionArea>
            </Card>
          </Grid>
        </Grid>
        <Grid container className={classes.button}>
          <Grid item>
            <Button
              component={this.redirectToRuns}
              size='large'
              variant='contained'
              color='primary'
            >
              VIEW ALL RUNS
            </Button>
          </Grid>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(SearchRunForm)
