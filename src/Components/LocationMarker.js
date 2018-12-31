import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import { LocationOn } from '@material-ui/icons'

class LocationMarker extends Component {
  render () {
    return <Marker position={this.props.location} path={<LocationOn />} />
  }
}

export default LocationMarker
