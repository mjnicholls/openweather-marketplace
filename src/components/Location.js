import React, { useState } from "react";

import PropTypes from "prop-types";

import { coordinatesError } from "../utils/validation";
import AutoCompleteForm from "./LocationAutoComplete";
import CoordinatesSearch from "./LocationCoordinates";
import { Button, Col, Input, Row } from "reactstrap";
import { CSVReader } from "react-papaparse";
import Parameters from "./Parameters";
import { Edit, Delete, Ok} from "react-ikonate";

const Location = ({
  mapRef,
  location,
  setLocation,
  tempLocation,
  setTempLocation,
  error,
  setError,
  searchBoxRef,
  isDropDown,
  setIsDropDown,
  setIsLocationNameEdited,
  locations,
  setLocations,
}) => {
  const [isSearchByName, setIsSearchByName] = useState(true);
  const [coordsTempLocation, setCoordsTempLocation] = useState(tempLocation);
  const [isImport, setIsImport] = useState(false);

  const [isEdit, setisEdit] = useState(false);

  const setCoordinates = () => {
    setError({});
    const coordsError = coordinatesError(
      coordsTempLocation.lat,
      coordsTempLocation.lon
    );
    if (coordsError) {
      setError(coordsError);
      setIsDropDown(false);
      return;
    }
    setTempLocation({
      ...coordsTempLocation,
      name: "Custom location",
    });
    setIsDropDown(false);
  };

  const canSetCoordinates = () =>
    tempLocation.lat !== coordsTempLocation.lat ||
    tempLocation.lon !== coordsTempLocation.lon;

  const setLocationName = (val) => {
    setLocation({ ...location, name: val });
    setIsLocationNameEdited(true);
  };

  const setSearchandImportImport = () => {
    setIsSearchByName(true);
    setIsImport(true);
  };

  const setSearchandImport = () => {
    setIsSearchByName(true);
    setIsImport(false);
  };

  const setSearchNameandImport = () => {
    setIsSearchByName(false);
    setIsImport(false);
  };

  const addLocation = (e) => {
    if (e.key === "Enter") {
      setLocations(location);
    }
    setisEdit(false)
  };



  const editLocation = (name, index) => {
    const newLocations = locations.map((el, i) => {
      if (index !== i) {
        return el;
      } else {
        return {
          ...el,
          name,
        };
      }
    });
    setLocations(newLocations);
    setisEdit(true);
  };

  const deleteLocation = (index) => {
    const locationsCopy = [...locations];
    locationsCopy.splice(index, 1);
    setLocations(locationsCopy);
  };



  return (
    <div className="location">
      <div
        className="flex-grow-1"
        style={{ position: "relative" }}
        ref={searchBoxRef}
      >
        <div className="d-flex align-items-baseline">
          <h5>Location</h5>
        </div>
        {isSearchByName ? (
          <AutoCompleteForm
            mapRef={mapRef}
            setTempLocation={setTempLocation}
            error={error}
            setError={setError}
            setIsDropDown={setIsDropDown}
          />
        ) : (
          <CoordinatesSearch
            mapRef={mapRef}
            coordsLocation={coordsTempLocation}
            setCoordsLocation={setCoordsTempLocation}
            setIsDropDown={setIsDropDown}
            setCoordinates={setCoordinates}
            error={error}
            setError={setError}
          />
        )}
        {isDropDown && (
          <div className="padded search-pop-up d-flex justify-content-between">
            <div>
              <Button
                type="button"
                className={`padded-button ${
                  isSearchByName ? "padded-button-active" : ""
                }`}
                onClick={() => setSearchandImport()}
                aria-pressed="true"
              >
                Location
              </Button>
              <Button
                type="button"
                className={`padded-button ${
                  !isSearchByName ? "padded-button-active" : ""
                }`}
                onClick={() => setSearchNameandImport()}
                aria-pressed="true"
              >
                Coordinates
              </Button>
              <Button
                type="button"
                className={`padded-button ${
                  isImport ? "padded-button-active" : ""
                }`}
                onClick={() => setSearchandImportImport()}
                aria-pressed="true"
              >
                Import
              </Button>
              {isImport ? (
                <>
                  <ul>
                    <li>
                      The only format that is currently accepted for importing
                      is CSV.
                    </li>
                    <li>
                      Make sure your CSV file is using the semi-colon delimiter,
                      not a comma.
                    </li>
                    <li>
                      Your CSV file needs to be encoded as UTF-8 or Unicode.
                    </li>
                    <li>
                      The file should contain columns in the following order:
                      location (string), latitude (float), longitude (float).
                    </li>
                    <li>
                      Coordinates will be rounded to the 6th decimal place.
                    </li>
                    <li>
                      Please refer to the example below.{" "}
                      <a href="https://openweathermap.org/docs/owm_import_samle.csv">
                        Download sample file
                      </a>
                    </li>
                  </ul>
                  <Row className="w-100 mx-0">
                    <Col>
                      <Row className="trigger-item">
                        <Col md="1">1</Col>
                        <Col>London</Col>
                        <Col>51.50735</Col>
                        <Col>0.1277583</Col>
                      </Row>
                      <Row className="trigger-item">
                        <Col md="1">2</Col>
                        <Col>Brighton</Col>
                        <Col>50.82253</Col>
                        <Col>-0.137163</Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row>
                    <Col className="text-end mt-4">
                      <Button
                        type="button"
                        className="padded-button-active"
                        //onClick={() => setSearchNameandImport()}
                        aria-pressed="true"
                      >
                        Import CSV
                      </Button>
                    </Col>
                  </Row>
                </>
              ) : null}
            </div>
            {!isSearchByName && (
              <button
                type="button"
                className={`padded-button ${
                  canSetCoordinates() ? "padded-button-active" : ""
                }`}
                onClick={setCoordinates}
                aria-pressed="true"
                disabled={!canSetCoordinates()}
              >
                Set
              </button>
            )}
          </div>
        )}
      </div>

      <div>
        <Parameters />
      </div>
 

      <div className="my-3">
        <Row className="w-100 mx-0">
          <Col>
            <Row className="trigger-item bold">
              <Col md="1">#</Col>
              <Col md="3">Name</Col>
              <Col md="3">Latitude</Col>
              <Col md="3">Longitude</Col>
              <Col></Col>
              <Col></Col>
            </Row>
            {locations.length ? (
              locations.map((location, index) => (
                <Row className="trigger-item">
                  <Col md="1">{index + 1}</Col>

                  {isEdit ? (
                    <Col md="3" className="text-nowrap">
                      <Input
                        value={location.name}
                        onChange={(e) => editLocation(e.target.value, index)}
                      />
                      <Ok onClick={addLocation}>Set</Ok>
                    </Col>
                  ) : (
                    <Col md="3">{location.name}</Col>
                  )}

                  <Col md="3">{location.lat.toFixed(6)}</Col>
                  <Col md="3">{location.lon.toFixed(6)}</Col>
                  <Col>
                    <Delete onClick={() => deleteLocation(index)}></Delete>
                  </Col>
                  <Col>
                    <Edit onClick={() => editLocation(index)}></Edit>
                  </Col>
                </Row>
              ))
            ) : (
              <Row className="trigger-item text-start">
                <Col className="text-start">
                No selected locations.
                </Col>
              </Row>
            )}
          </Col>
        </Row>
      </div>

      {error.lat && <div className="invalid-feedback d-block">{error.lat}</div>}
      {error.lon && <div className="invalid-feedback d-block">{error.lon}</div>}
      {error.location && (
        <div className="invalid-feedback d-block">{error.location}</div>
      )}
    </div>
  );
};

Location.propTypes = {
  mapRef: PropTypes.object,
  location: PropTypes.object,
  setLocation: PropTypes.func,
  tempLocation: PropTypes.object,
  setTempLocation: PropTypes.func,
  error: PropTypes.object,
  setError: PropTypes.func,
  setIsName: PropTypes.func,
  searchBoxRef: PropTypes.object,
  isDropDown: PropTypes.bool,
  setIsDropDown: PropTypes.func,
  setIsLocationNameEdited: PropTypes.func,
};

export default Location;
