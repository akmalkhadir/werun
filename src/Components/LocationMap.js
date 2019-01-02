import React from 'react'
import { withScriptjs, withGoogleMap, GoogleMap } from 'react-google-maps'
import { distance, point, midpoint, getCoord } from '@turf/turf'
import LocationMarker from './LocationMarker'
import startMarkerIcon from '../images/startMarkerIcon.svg'
import endMarkerIcon from '../images/endMarkerIcon.svg'

const LocationMap = withScriptjs(
  withGoogleMap(({ run: { id, start_coordinates, end_coordinates } }) => {
    let startCoordinates = {
      lat: parseFloat(start_coordinates.lat),
      lng: parseFloat(start_coordinates.lng)
    }

    let endCoordinates = {
      lat: parseFloat(end_coordinates.lat),
      lng: parseFloat(end_coordinates.lng)
    }

    let startPoint = point([
      parseFloat(start_coordinates.lat),
      parseFloat(start_coordinates.lng)
    ])
    let endPoint = point([
      parseFloat(end_coordinates.lat),
      parseFloat(end_coordinates.lng)
    ])

    let markerDistance = distance(startPoint, endPoint)

    let zoomDistance = distance => {
      switch (true) {
        case distance < 1:
          return 15
        case distance < 5:
          return 13.5
        case distance < 10:
          return 12.5
        default:
          return 11
      }
    }

    let markerMidpoint = midpoint(startPoint, endPoint)
    let markerMidpointCoord = getCoord(markerMidpoint)
    console.log(markerDistance)

    const markers = [
      <LocationMarker key={`${id}-startPin`} location={startCoordinates} icon={startMarkerIcon} />,
      <LocationMarker key={`${id}-endPin`} location={endCoordinates} icon={endMarkerIcon} />
    ]

    return (
      <GoogleMap
        zoom={zoomDistance(markerDistance)}
        center={{
          lat: markerMidpointCoord[0],
          lng: markerMidpointCoord[1]
        }}
      >
        {markers}
      </GoogleMap>
    )
  })
)

export default LocationMap
