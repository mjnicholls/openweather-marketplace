import React from "react";

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
  price,
  setPrice,
  isButtonInfoWindow,
  isAdded,
  setIsAdded,
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
        // onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
      >
        <InfoWindow
        isAdded={isAdded}
        setIsAdded={setIsAdded}
          location={mapLocation}
          setLocation={setLocation}
          showButton={isButtonInfoWindow}
          locations={locations}
          setLocations={setLocations}
          setPrice={setPrice}
          price={price}
        />
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
  price: PropTypes.number,
  setPrice: PropTypes.func,
  locations: PropTypes.array,
  setLocations: PropTypes.func,
};

export default Map;
