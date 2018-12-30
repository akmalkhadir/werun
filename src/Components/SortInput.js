import React, { Component } from 'react'
import {
  Paper,
  withStyles,
  Typography,
  IconButton,
  Menu,
  MenuItem
} from '@material-ui/core'
import { KeyboardArrowDown } from '@material-ui/icons'

const styles = theme => ({
  paper: {
    backgroundColor: theme.palette.background.paper, 
    height: '8vh',
    padding: theme.spacing.unit,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  }
})

const options = ['Nearest Location', 'Date']

const ITEM_HEIGHT = 48

class SortInput extends Component {
  state = {
    sort: '',
    open: false,
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ open: true, anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ open: false })
  }

  handleMenuClick = (option, e) => {
    this.props.setSortBy(option)
    this.setState({ sort: option, open: false })
  }

  render () {
    const { classes } = this.props
    const { sort, open, anchorEl } = this.state
    const sortLabel = () => {
      switch (sort) {
        case 'Date':
          return 'Date'
        case 'Nearest Location':
          return 'Nearest Location'
        default:
          return ''
      }
    }

    return (
      <>
        <Paper className={classes.paper} elevation={0}>
          <Typography variant='subtitle2'>Sort runs by: {sortLabel()}</Typography>
          <IconButton onClick={this.handleClick}>
            <KeyboardArrowDown />
          </IconButton>
          <Menu
            id='long-menu'
            anchorEl={anchorEl}
            open={open}
            onClose={this.handleClose}
            onChange={this.handleMenuClick}
            PaperProps={{
              style: {
                maxHeight: ITEM_HEIGHT * 4.5,
                width: 200
              }
            }}
          >
            {options.map(option => (
              <MenuItem
                key={option}
                onClick={event => this.handleMenuClick(option, event)}
                onChange={this.handleMenuClick}
              >
                {option}
              </MenuItem>
            ))}
          </Menu>
        </Paper>
      </>
    )
  }
}

export default withStyles(styles)(SortInput)
