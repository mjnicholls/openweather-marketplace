/* eslint-disable */
import React from 'react'

import PropTypes from 'prop-types'
import Autocomplete, { usePlacesWidget } from 'react-google-autocomplete'

import placeMarker from '../utils/placeMarker'

const AutoComplete = ({
  mapRef,
  setTempLocation,
  error,
  setError,
  setIsDropDown,
  fixedLocation,
 setFixedLocation
}) => {
  const onPlaceSelected = (place) => {
    if (
      mapRef &&
      mapRef.current &&
      place &&
      place.geometry &&
      place.geometry.location
    ) {
      setTempLocation({
        name: place.formatted_address,
        lat: place.geometry.location.lat(),
        lon: place.geometry.location.lng(),
      })

      placeMarker(
        place.geometry.location,
        // eslint-disable-next-line
        mapRef.current.map_,
      )
    }
  }

  const onStartTyping = () => {
    setError({
      ...error,
      location: null,
    })
  }

  const onFocus = () => {
    setIsDropDown(true)
  }

  const { ref } = usePlacesWidget({
    apiKey: process.env.REACT_APP_GOOGLE_MAP_KEY,
    onPlaceSelected: (place) => onPlaceSelected(place),
  })

  return (
    <Autocomplete
      className={`owm-selector w-100 ${error.location ? 'danger-border' : ''}`}
      onPlaceSelected={(place) => {
        onPlaceSelected(place)
      }}
      onFocus={onFocus}
      onChange={onStartTyping}
      placeholder="Enter location"
      fixedlocation={fixedLocation}
      setfixedlocation={setFixedLocation}
    />
  )
}

AutoComplete.propTypes = {
  setTempLocation: PropTypes.func,
  error: PropTypes.object,
  mapRef: PropTypes.object,
  setError: PropTypes.func,
  setIsDropDown: PropTypes.func,
  fixedLocation: PropTypes.string,
 setFixedLocation: PropTypes.object
}

export default AutoComplete
