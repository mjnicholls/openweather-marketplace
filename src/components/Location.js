import React, { useState } from "react";
import PropTypes from "prop-types";
import { coordinatesError } from "../utils/validation";
import AutoCompleteForm from "./LocationAutoComplete";
import CoordinatesSearch from "./LocationCoordinates";
import { Button, Col, Row, Label } from "reactstrap";
import Papa from "papaparse";
import Parameters from "./Parameters";
import ReactBSAlert from "react-bootstrap-sweetalert";
import DatePickerMarket from "./DatePicker";
import LocationList from "./LocationsList";
import { locationConstructor } from "../utils/locationConstructor";
import InvoiceSettingsBulk from "./InvoicePopBulk";

const Location = ({
  mapRef,
  tempLocation,
  setTempLocation,
  error,
  setError,
  searchBoxRef,
  isDropDown,
  setIsDropDown,
  locations,
  setLocations,
  parameters,
  setParameters,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  price,
  setPrice,
  location,
  setLocation,
  checkedWeather,
  setCheckedWeather,
  fileValue,
  setFileValue,
  unitsValue,
  setUnitsValue,
  downloadsValue,
  setDownloadsValue,
  formatValue,
  setFormatValue,
  currency,
  checked,
  setChecked,
  importPrice,
  setImportPrice,
  body,
  setBody,
  on,
  setOn
}) => {
  const [isSearchByName, setIsSearchByName] = useState(true);
  const [coordsTempLocation, setCoordsTempLocation] = useState(tempLocation);
  const [isImport, setIsImport] = useState(false);
  //const [fileValue, setFileValue] = useState([]);

  const total = price + importPrice

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

            const tmp = locationConstructor(row[0], row[1], row[2]);
            let error = {};

            if (tmp.error) {
              let keys = Object.keys(tmp.error);
              error = {
                line: i + 1,
                comment: tmp.error[keys[0]],
                value: tmp.error.errorVal,
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

            if (errors.length > 0) {
              setImportPrice(importPrice = (results.data.length * 7) / errors.length - 7);

            } else {
              setImportPrice(importPrice = results.data.length * 7 - 7);
 
            }
          }

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
        <Row className="trigger-item">
          <Col md="1">#</Col>
          <Col>Error</Col>
          <Col>Value</Col>
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
        <br />
        <Row className="trigger-item">
          <Col className="text-end">
            <Button
              className="button-active"
              onClick={() => {
                addLocations(locations);
                hideAlert();
              }}
            >
              Upload recognised locations
            </Button>

            <label for="file-upload" className="button-neutral-input">
              Upload New File
            </label>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={getJson}
              id="file-upload"
            />
          </Col>
        </Row>
      </ReactBSAlert>
    );
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
    setPrice(price + 7);
  };


  const checkoutAlert = () => {
    setAlert(
      <ReactBSAlert
        customClass="agro-alert"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
      >
        <InvoiceSettingsBulk
          close={hideAlert}
          locations={locations}
          price={price}
          startDate={startDate}
          importPrice={importPrice}
          setImportPrice={setImportPrice}
          endDate={endDate}
          checkedWeather={checkedWeather}
          fileValue={fileValue}
          unitsValue={unitsValue}
          downloadsValue={downloadsValue}
          formatValue={formatValue}
          currency={currency}
          checked={checked}
          setChecked={setChecked}
          body={body}
          setBody={setBody}
          on={on}
          setOn={setOn}
        />
      </ReactBSAlert>
    );
  };

  return (
    <div className="location">
      {alert}
      <div
        className="flex-grow-1"
        style={{ position: "relative" }}
        ref={searchBoxRef}
      >
        <div className="location">
          <Row mb="4">
            <Col md="7" className="text-start">
              <h5>Location</h5>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md="6" className="dateLabel">
            <Label>Search</Label>
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

          <DatePickerMarket
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </Row>
        {isDropDown && (
          <div className="padded search-pop-up d-flex justify-content-between">
            <div>
              <Button
                type="button"
                className={`padded-button ${
                  isSearchByName && !isImport ? "padded-button-active" : ""
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
                      <label for="file-upload" className="button-active">
                        Import CSV File
                      </label>
                      <input
                        type="file"
                        accept=".csv,.xlsx,.xls"
                        onChange={getJson}
                        id="file-upload"
                      />
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

      <Parameters
        parameters={parameters}
        setParameters={setParameters}
        checkedWeather={checkedWeather}
        setCheckedWeather={setCheckedWeather}
        fileValue={fileValue}
        setFileValue={setFileValue}
        unitsValue={unitsValue}
        setUnitsValue={setUnitsValue}
        downloadsValue={downloadsValue}
        setDownloadsValue={setDownloadsValue}
        formatValue={formatValue}
        setFormatValue={setFormatValue}
        checked={checked}
        setChecked={setChecked}
        on={on}
        setOn={setOn}
      />

      <LocationList
        locations={locations}
        setLocations={setLocations}
        price={price}
        setPrice={setPrice}
        location={location}
        setLocation={setLocation}
      />

      {error.lat && <div className="invalid-feedback d-block">{error.lat}</div>}
      {error.lon && <div className="invalid-feedback d-block">{error.lon}</div>}
      {error.location && (
        <div className="invalid-feedback d-block">{error.location}</div>
      )}

      <Row className="mt-4 flex-end price">
        <Col>
          <p style={{ fontSize: "14pt" }}>
            <i>To proceed please fill in the required details</i>
          </p>{" "}
        </Col>
        <Col>
          <p style={{ fontWeight: "bold", fontSize: "18pt" }}>
            Total {total} {currency}
          </p>
        </Col>
        <Col>
          {locations.length >= 1 && startDate && endDate ? (
            <Col>
              <Button
                data-dismiss="modal"
                type="button"
                onClick={(e) => {
                  checkoutAlert(false);
                  e.stopPropagation();
                }}
                className="button-orange-square"
              >
                Place Order
              </Button>
            </Col>
          ) : (
            <Col>
              <Button disabled className="button-neutral-square">
                Place Order
              </Button>
            </Col>
          )}
        </Col>
      </Row>
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
