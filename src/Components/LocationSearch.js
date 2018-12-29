import React, { Component } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  geocodeByPlaceId,
  getLatLng
} from 'react-places-autocomplete'
import {
  withStyles,
  Paper,
  InputBase,
  IconButton,
  MenuItem,
  Menu,
  ClickAwayListener,
  MenuList,
  Popper,
  Grow
} from '@material-ui/core'
import { LocationSearching } from '@material-ui/icons'

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

class LocationSearch extends Component {
  state = {
    address: '',
    coordinates: {},
    anchorEl: null,
    menuOpen: false
  }

  handleChange = address => {
    this.setState({ address })
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  handleSelect = address => {
    this.setState({ address })
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coordinates => this.setState({ coordinates }))
      .then(coordinates => console.log('Success', coordinates))
      .catch(error => console.log('Error', error))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ menuOpen: false })
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  render () {
    const { handleChange, handleSelect, handleClose, handleClick } = this
    const { address, menuOpen } = this.state
    const { classes } = this.props
    return (
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={500}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <Paper className={classes.root} elevation={1}>
              <InputBase
                {...getInputProps()}
                inputRef={node => {
                  this.anchorEl = node
                }}
                className={classes.input}
                value={this.state.address}
                placeholder='Search Upcoming Runs Near You'
              />
              <IconButton className={classes.iconButton} aria-label='Search'>
                <LocationSearching />
              </IconButton>
            </Paper>
            <Popper
              open={menuOpen}
              anchorEl={this.anchorEl}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  id='menu-list-grow'
                  style={{
                    transformOrigin:
                      placement === 'bottom' ? 'center top' : 'center bottom'
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList>
                        {suggestions.map(suggestion => (
                          <MenuItem {...getSuggestionItemProps(suggestion)}>
                            {suggestion.description}
                          </MenuItem>
                        ))}
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input'
              })}
            />
            <div className='autocomplete-dropdown-container'>
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item'
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' }
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default withStyles(styles)(LocationSearch)
