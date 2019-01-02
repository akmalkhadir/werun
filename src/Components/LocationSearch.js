/* global google */

import React, { Component } from 'react'
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from 'react-places-autocomplete'
import {
  withStyles,
  Paper,
  InputBase,
  IconButton,
  MenuItem,
  ClickAwayListener,
  MenuList,
  Popper,
  Grow,
  RootRef
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
    maxWidth: '90vw',
    marginRight: theme.spacing.unit * 2,
    marginLeft: theme.spacing.unit
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
    lat: 0,
    lng: 0,
    anchorEl: null,
    menuOpen: false
  }

  handleChange = address => {
    this.setState({ address })
    this.setState(state => ({ menuOpen: !state.menuOpen }))
  }

  handleSelect = address => {
    this.setState({ address })
    this.props.setAddress(address)
    geocodeByAddress(address)
      .then(results => getLatLng(results[0]))
      .then(coordinates => {
        this.props.setCoordinates(coordinates.lat, coordinates.lng)
        this.setState({ lat: coordinates.lat, lng: coordinates.lng })
      })
      .catch(error => console.log('Error', error))
  }

  handleClose = event => {
    if (this.anchorEl.contains(event.target)) {
      return
    }

    this.setState({ menuOpen: false })
  }

  render () {
    const { handleChange, handleSelect, handleClose } = this
    const { address, menuOpen } = this.state
    const { classes } = this.props

    const searchOptions = {
      location: new google.maps.LatLng(51.5061101, -0.1263883),
      radius: 20000
    }

    return (
      <PlacesAutocomplete
        value={address}
        onChange={handleChange}
        onSelect={handleSelect}
        debounce={500}
        searchOptions={searchOptions}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <>
            <RootRef rootRef={React.createRef()}>
              <Paper
                className={classes.root}
                elevation={1}
              >
                <InputBase
                  {...getInputProps()}
                  className={classes.input}
                  value={this.state.address}
                  placeholder='Search Upcoming Runs Near You'
                  inputRef={node => {
                    this.anchorEl = node
                  }}
                />
                <IconButton className={classes.iconButton} aria-label='Search'>
                  <LocationSearching />
                </IconButton>
              </Paper>
            </RootRef>

            <Popper
              open={menuOpen}
              anchorEl={this.anchorEl}
              transition
              disablePortal={false}
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: 'bottom'
                  }}
                >
                  <Paper className={classes.paper}>
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
          </>
        )}
      </PlacesAutocomplete>
    )
  }
}

export default withStyles(styles)(LocationSearch)
