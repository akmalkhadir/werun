import React, { Component } from 'react'
import { Marker } from 'react-google-maps'
import LocationMarkerIcon from '../images/baseline-location_on-24px.svg'

class LocationMarker extends Component {
  render () {
    console.log(LocationMarkerIcon)
    return (
      <Marker position={this.props.location} icon={LocationMarkerIcon} />
    )
  }
}

export default LocationMarker
