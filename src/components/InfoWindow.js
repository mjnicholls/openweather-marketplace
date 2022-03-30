import React, { useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";
import placeMarker from "../utils/placeMarker";

const InfoWindow = ({
  location,
  showButton,
  setLocations,
  locations,
  errorMap,
  setErrorMap,
  setIsAdded,
  duplicate,
  setDuplicate,
  tempLocation,
}) => {

  const latCheck = tempLocation.lat;
  const lonCheck = tempLocation.lon;

  const check = locations.map((ind) => ind.lat);
  const checkTwo = locations.map((ind) => ind.lon);

  if (check.includes(latCheck) && checkTwo.includes(lonCheck)) {
    setDuplicate(true);
  }

  else setDuplicate(false)

  const onSetLocationClick = (e) => {

    if (duplicate === true) {
      e.stopPropagation();
      setErrorMap(true);
    } 
    
    if (duplicate === false) {
      setLocations([...locations, location]);
      e.stopPropagation();
      setErrorMap(false);
      setIsAdded(true);
      placeMarker(null, null);
    }

  };

  return location.lat && location.lon ? (
    <div className="mapPop text-start">
      <h5>{location.name}</h5>
      <hr />
      <div className="main text-start">
        <div>
          <p style={{ marginBottom: "10px" }}>
            <b style={{ color: "red" }}>
              {errorMap === true ? "Location has already been added." : null}
            </b>
          </p>
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
          {errorMap === false
            ? showButton && (
                <Button
                  type="button"
                  className="button-active shadow-none"
                  onClick={onSetLocationClick}
                >
                  Set location
                </Button>
              )
            : null}
        </div>
      </div>
    </div>
  ) : null;
};

InfoWindow.propTypes = {
  locations: PropTypes.array,
  setLocations: PropTypes.func,
  showButton: PropTypes.bool,
  location: PropTypes.object,
  errorMap: PropTypes.bool,
  setErrorMap: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
  setIsAdded: PropTypes.func,
};

export default InfoWindow;
