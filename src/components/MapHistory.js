import React from "react";

import GoogleMapReact from "google-map-react";
import PropTypes from "prop-types";

import { mapStyles } from "../assets/mapStyles";
import { mapStyle } from "../utils/styles";
import InfoWindowHistory from "./InfoWindowHistory";

const MapHistory = ({
  mapRef,
  mapLocation,
  setLocation,
  onClickMap,
  locations,
  setLocations,
  isButtonInfoWindow,
  errorMap,
  setErrorMap,
  count, 
  setCount,
  isAdded,
  setIsAdded,
  tempLocation,
  duplicate,
  setDuplicate,
  duplicates,
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
        <InfoWindowHistory
          location={mapLocation}
          setLocation={setLocation}
          showButton={isButtonInfoWindow}
          locations={locations}
          setLocations={setLocations}
          errorMap={errorMap}
          setErrorMap={setErrorMap}
          count={count}
          setCount={setCount}
          isAdded={isAdded}
          setIsAdded={setIsAdded}
          tempLocation={tempLocation}
          duplicate={duplicate}
          setDuplicate={setDuplicate}
          duplictes={duplicates}
        />
        : null}
      </GoogleMapReact>
    </div>
  );
};

MapHistory.propTypes = {
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

export default MapHistory;
