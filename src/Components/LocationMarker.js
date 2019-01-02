import React, { Component } from 'react'
import { Marker } from 'react-google-maps'

class LocationMarker extends Component {
  render () {
    const { icon } = this.props
    return (
      <Marker position={this.props.location} icon={icon} />
    )
  }
}

export default LocationMarker
