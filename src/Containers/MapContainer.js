import React, { Component } from 'react'
import LocationMap from '../Components/LocationMap'

class MapContainer extends Component {
  render () {
    return (
      <LocationMap
        run={this.props.run}
        googleMapURL={'https://blank.org/'}
        loadingElement={
          <div
            style={{
              height: '50vh'
            }}
          />
        }
        containerElement={
          <div
            style={{
              height: '50vh',
              width: '100vw'
            }}
          />
        }
        mapElement={
          <div
            style={{
              height: '50vh'
            }}
          />
        }
      />
    )
  }
}

export default MapContainer
