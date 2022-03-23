import React, { useState } from "react";

import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

import { mapStyles } from "../assets/mapStyles";
import { mapStyle } from "../utils/styles";
import InfoWindow from "./InfoWindow";

const Map = ({
  mapRef,
  mapLocation,
  setLocation,
  onClickMap,
  locations,
  setLocations,
  isButtonInfoWindow,
  isAdded,
  setIsAdded,
  errorMap,
  setErrorMap,
  count, 
  setCount,
  isDraggable = true,
}) => {



  const defaultCenter = {
    lat: 51.509865,
    lng: -0.118092,
  };


  return (
    <div id="map" style={mapStyle}>
      <GoogleMapReact
        ref={mapRef}
        center={{
          lat: mapLocation.lat ? mapLocation.lat : defaultCenter.lat,
          lng: mapLocation.lon ? mapLocation.lon : defaultCenter.lng,
        }}
        defaultZoom={9}
        yesIWantToUseGoogleMapApiInternals
        options={{
          scrollwheel: false,
          styles: mapStyles.styles,
          draggable: isDraggable,
        }}
        onClick={onClickMap}
      >
        {isAdded === false ? 
        <InfoWindow
        isAdded={isAdded}
        setIsAdded={setIsAdded}
          location={mapLocation}
          setLocation={setLocation}
          showButton={isButtonInfoWindow}
          locations={locations}
          setLocations={setLocations}
          onClick={onClickMap}
          errorMap={errorMap}
          setErrorMap={setErrorMap}
          count={count}
          setCount={setCount}
        /> 
        :null}
      </GoogleMapReact>
    </div>
  );
};

Map.propTypes = {
  mapRef: PropTypes.object,
  mapLocation: PropTypes.object,
  setLocation: PropTypes.func,
  onClickMap: PropTypes.func,
  isButtonInfoWindow: PropTypes.bool,
  isDraggable: PropTypes.bool,
  locations: PropTypes.array,
  setLocations: PropTypes.func,
  isAdded: PropTypes.bool,
  setIsAdded: PropTypes.func,
  errorMap: PropTypes.bool,
  setErrorMap: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
};

export default Map;
