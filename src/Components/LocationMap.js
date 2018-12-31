import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import LocationMarker from './LocationMarker'

const LocationMap = withScriptjs(
  withGoogleMap(({ run: { id, start_coordinates, end_coordinates } }) => {
    const markers = [
      <LocationMarker
        key={`${id}-startPin`}
        location={{
          lat: parseFloat(start_coordinates.lat),
          lng: parseFloat(start_coordinates.lng)
        }}
      />,
      <LocationMarker
        key={`${id}-endPin`}
        location={{
          lat: parseFloat(end_coordinates.lat),
          lng: parseFloat(end_coordinates.lng)
        }}
      />
    ]

    return (
      <GoogleMap
        defaultZoom={14}
        center={{
          lat: parseFloat(start_coordinates.lat),
          lng: parseFloat(start_coordinates.lng)
        }}
      >
        {markers}
      </GoogleMap>
    )
  })
)

export default LocationMap
