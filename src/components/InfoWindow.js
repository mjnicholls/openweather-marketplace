import React, { useState } from "react";
import { Button } from "reactstrap";
import PropTypes from "prop-types";

const InfoWindow = ({
  location,
  showButton,
  setLocations,
  locations,
  errorMap,
  setErrorMap,
  count,
  setCount,
  isAdded,
  setIsAdded
}) => {

  const onSetLocationClick = (e) => {

  const toFindDuplicates = (locations) => 
  locations.filter((item, index) => 
  locations.indexOf(item) !== index + 1)

  const duplicateElements = toFindDuplicates(locations);

  if (duplicateElements) {
    setCount(counter => counter + 1)
  }

  if (count === 1) {
    setErrorMap(true)
  }

  if (count === 0) {
    setErrorMap(false)
    setLocations([...locations, location]);
    e.stopPropagation();
    setIsAdded(true)
  }

};

  return location.lat && location.lon ? (
    <div className="mapPop text-start">
      <h5>{location.name}</h5>
      <hr />
      <div className="main text-start">
        <div>
       <p style={{marginBottom: "10px"}}>
            <b style={{color:"red"}}>{errorMap === true ? "Location has already been added." : null}</b>
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
          {errorMap === false ? 
          showButton && (
            <Button
              type="button"
              className="button-active shadow-none"
              onClick={
                onSetLocationClick}
            >
              Set location
            </Button>
          )
        :
        null }
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
