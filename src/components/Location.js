import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { coordinatesError } from "../utils/validation";
import AutoCompleteForm from "./LocationAutoComplete";
import CoordinatesSearch from "./LocationCoordinates";
import { Button, Col, Input, Row, FormGroup, Label } from "reactstrap";
import Papa from "papaparse";
import Parameters from "./Parameters";
import ReactBSAlert from "react-bootstrap-sweetalert";
import DatePickerMarket from "./DatePicker";

import { Edit, Delete, Ok } from "react-ikonate";

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
  parameters,
  setParameters,
  startDate,
  setStartDate,
  endDate,
  setEndDate
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
    setisEdit(false);
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

  const getJson = (e) => {
    const files = e.target.files;
    if (files) {
      console.log(files[0]);
      Papa.parse(files[0], {
        skipEmptyLines: true,
        complete: function (results) {
          let importedLocations = [];
          let errors = [];

          for (let i = 0; i < results.data.length; i++) {
            const row = results.data[i];
            // if (row.length < 3) {
            //   continue
            // }
            console.log("log", row);

            const tmp = locationConstructor(row[0], row[1], row[2]);
            console.log("tmp", tmp);
            let error = {};

            if (tmp.error) {
              let keys = Object.keys(tmp.error);
              error = {
                line: i + 1,
                comment: tmp.error[keys[0]],
                value: tmp.error.errorVal
              };
              
            } else {
              for (let j = 0; j < importedLocations.length; j++) {
                if (
                  importedLocations[j].lat === tmp.location.lat &&
                  importedLocations[j].lon === tmp.location.lon
                ) {
                  error = {
                    line: i + 1,
                    comment: "Duplicated value.",
                    value: row[1] + ", " + row[2],
                  };
                  console.log("temp", importedLocations);
                  break;
                }
              }

              let check = checkCoordinates(tmp.location.lat, tmp.location.lon);
              if (!check) {
                error = {
                  line: i + 1,
                  comment: "Duplicated value.",
                  value: row[1] + ", " + row[2],
                };
              }
            }

            if (Object.keys(error).length) {
              errors.push(error);
            } else if (tmp.location) {
              importedLocations.push(tmp.location);
            }
          }

          console.log("err", errors);
          if (errors.length) {
            jsonAlert(errors, importedLocations);

            return;
          }

          if (importedLocations.length) {
            addLocations(importedLocations);
          }
          setIsImport(false);
        },
      });
    }
  };


  const closeAndReopen = () => {

    hideAlert()
  
  }

  const [alert, setAlert] = React.useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const jsonAlert = (importErrors, locations) => {
    setAlert(
      <ReactBSAlert
        title="Import"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="trigger-item">
          <Col>Failed to recognise locations.</Col>
        </Row>
        {importErrors.map((error) => (
          <>
            <Row className="trigger-item">
              <Col md="1">{error.line}</Col>
              <Col>{error.comment}</Col>
              <Col>{error.value}</Col>
            </Row>
          </>
        ))}

        <br />
        <Row className="trigger-item">
          <Col>Recognised locations</Col>
        </Row>
        <Row className="trigger-item">
          <Col md="1">#</Col>
          <Col>Location</Col>
          <Col>Latitide</Col>
          <Col>Longitude</Col>
        </Row>
        {locations.map((location, index) => (
          <>
            <Row className="trigger-item" key={index}>
              <Col md="1">{index + 1}</Col>
              <Col>{location.name}</Col>
              <Col>{location.lat}</Col>
              <Col>{location.lon}</Col>
            </Row>
          </>
        ))}
        <br/>
        <Row className="trigger-item">
          <Col className="text-end">
            <Button 
            className="button-active"
            onClick={() => {addLocations(locations); hideAlert()}}>
              Upload recognised locations
            </Button>
                    <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onClick={getJson}
        name="file1"
        aria-pressed="false"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button
        variant="contained"
        className="button-neutral"
        component="span"
        onClick={closeAndReopen}
        >
          Upload New File
        </Button>
      </label>
    
          </Col>
        </Row>
      </ReactBSAlert>
    );
  };

  const locationConstructor = (name, lat, lon) => {
    let newError = {};

    const coordPrecision = 6;
    name = name ? name : "Custom location";

    // validate Latitude
    if (!lat) {
      newError = {
        lat: "No value was found for latitude.",
        errorVal: lat
      };
  

    }
    if (isNaN(parseFloat(lat))) {
      newError = {
        lat: "Latitude value should be a number.",
        errorVal: lat
      };
    }

    lat = parseFloat(lat);

    if (lat < -90 || lat > 90) {
      newError = {
        lat: "Latitude should be a number in a range between -90 and 90.",
        errorVal: lat
      };
    }

    lat = parseFloat(lat).toFixed(coordPrecision);

    // validate Longitude
    if (!lon) {
      newError = {
        error: "No value was found for longitude.",
        errorVal: lon
      };
    }
    if (isNaN(parseFloat(lon))) {
      newError = {
        error: "Longitude value should be a number.",
        errorVal: lon
      };
    }

    lon = parseFloat(lon);

    if (lon < -180 || lon > 180) {
      newError = {
        error: "Longitude should be a number in a range between -180 and 180.",
        errorVal: lon
      };
    }

    lon = parseFloat(lon).toFixed(coordPrecision);

    if (Object.keys(newError).length) {
      return { error: newError };
    }
    return {
      location: {
        name,
        lat,
        lon,
      },
    };
  };

  const checkCoordinates = (lat, lon) => {
    for (let i = 0; i < locations.length; i++) {
      if (locations[i].lat === lat && locations[i].lon === lon) {
        return false;
      }
    }
    return true;
  };

  const addLocations = (data) => {
    const newLocations = [...locations, ...data];
    setLocations(newLocations);
  };


  return (
    <div className="location">
      {alert}
      <div
        className="flex-grow-1"
        style={{ position: "relative" }}
        ref={searchBoxRef}
      >
        <div>
          <Row>
            <Col md="7" className="text-start">
          <h5>Location</h5>
          </Col>
          <Col md="2" className="text-start">
         From
          </Col>
          <Col md="2" className="text-center">
         To
          </Col>
          </Row>
        </div>
        <Row>
          <Col md="6">
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
          </Col>
          <Col md="1">
            <img src="../time.png" alt="time" style={{paddingLeft: "15pt", paddingTop:"4pt"}} />
          </Col>
      <DatePickerMarket
      startDate={startDate}
      setStartDate={setStartDate}
      endDate={endDate}
      setEndDate={setEndDate}
      />
        </Row>
        {console.log('start',startDate)}
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
                  <Row className="trigger-item-parse">
                    <Col className="mt-4 text-end">
                    <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={getJson}
        name="file1"
        aria-pressed="true"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" accept=".csv,.xlsx,.xls" className="button-active" component="span" type="file" onClick={getJson}>
                         <input
        type="file"
        accept=".csv,.xlsx,.xls"
        onChange={getJson}
        name="file1"
        aria-pressed="true"
        style={{ display: 'none' }}
        id="contained-button-file"
      />
          Import CSV File
        
        </Button>
      </label>
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
        <Parameters parameters={parameters} setParameters={setParameters} />
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

                  <Col md="3">{location.lat}</Col>
                  <Col md="3">{location.lon}</Col>
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
                <Col className="text-start">No selected locations.</Col>
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
