import React, { Component } from 'react'
import LocationMap from '../Components/LocationMap'

class MapContainer extends Component {
  render () {
    return (
      <LocationMap
        run={this.props.run}
        googleMapURL={process.env.REACT_APP_MAPS_API}
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
