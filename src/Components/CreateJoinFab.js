import React from 'react'

import { Fab, Menu, MenuItem, Fade } from '@material-ui/core'
import { Add } from '@material-ui/icons'

class CreateJoinFab extends React.Component {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { anchorEl } = this.state
    const open = Boolean(anchorEl)

    return (
      <>
        <Fab color='primary' onClick={this.handleClick}>
          <Add />
        </Fab>
        <Menu
          id='fade-menu'
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          TransitionComponent={Fade}
        >
          <MenuItem onClick={this.handleClose}>Create a Run</MenuItem>
          <MenuItem onClick={this.handleClose}>Join a Run</MenuItem>
        </Menu>
      </>
    )
  }
}

export default CreateJoinFab
