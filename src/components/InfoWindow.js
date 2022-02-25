import React from "react";

import PropTypes from "prop-types";

const InfoWindow = ({
  location,
  showButton,
  setLocations,
  locations,
  price,
  setPrice,
  isAdded,
  setIsAdded,
}) => {
  const onSetLocationClick = (e) => {
    setLocations([...locations, location]);
    setPrice(price + 7);
    e.stopPropagation();
   // setIsAdded(true)
  };

  return location.lat && location.lon ? (
    <div className="mapPop text-start">
      <h5>{location.name}</h5>
      <hr />
      <div className="main text-start">
        <div>
          <p>
            <b>Latitude: </b>
            {location.lat.toFixed(6)}{" "}
          </p>
          <p>
            <b>Longitude: </b>
            {location.lon.toFixed(6)}
          </p>
        </div>
        <div className="text-end">
          {showButton && (
            <button
              type="button"
              className="button-active shadow-none"
              onClick={onSetLocationClick}
            >
              Set location
            </button>
          )}
        </div>
      </div>
    </div>
  ) : null;
};

InfoWindow.propTypes = {
  location: PropTypes.object,
  setLocation: PropTypes.func,
  showButton: PropTypes.bool,
};

export default InfoWindow;
