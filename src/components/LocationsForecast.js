import React, { useState } from "react";
import PropTypes from "prop-types";
import { coordinatesError } from "../utils/validation";
import AutoCompleteForm from "./LocationAutoComplete";
import CoordinatesSearch from "./LocationCoordinates";
import { Button, Col, Row, Label } from "reactstrap";
import Papa from "papaparse";
import ParametersForecast from "./ParametersForecast";
import ReactBSAlert from "react-bootstrap-sweetalert";
import DatePickerForecast from "./DatePickerForecast";
import LocationListHistory from "./LocationsListHistory";
import { locationConstructor } from "../utils/locationConstructor";
import InvoiceSettingsBulk from "./InvoiceHistoryPopBulk";

const LocationForecast = ({
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
  fileValue,
  setFileValue,
  unitsValue,
  setUnitsValue,
  downloadsValue,
  setDownloadsValue,
  formatValue,
  setFormatValue,
  currency,
  temp,
  setTemp,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  dewPoint,
  setDewPoint,
  precipitation,
  setPrecipitation,
  wind,
  setWind,
  isChecked,
  setIsChecked,
  isChecked2,
  setIsChecked2,
  isChecked3,
  setIsChecked3,
  isChecked4,
  setIsChecked4,
  isChecked5,
  setIsChecked5,
  isChecked6,
  setIsChecked6,
  isChecked7,
  setIsChecked7,
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
  email,
  setEmail,
  setIsAdded, 
  count,
  setCount,
  setErrorMap
}) => {
  const [isSearchByName, setIsSearchByName] = useState(true);
  const [coordsTempLocation, setCoordsTempLocation] = useState(tempLocation);
  const [isImport, setIsImport] = useState(false);


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

    setCount(0);
      
    if (count === 0) {
      setErrorMap(false);
    }
    setIsAdded(false)
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

  const setPricetoZero = () => {
    setImportPrice(0);
    hideAlert();
  };

  const getJson = (e) => {
    hideAlert()
    const files = e.target.files;
    if (files) {
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

            // if (errors.length > 0) {
            //   setImportPrice(
            //     (importPrice = (results.data.length * 35) / errors.length - 35)
            //   );
            // } else {
            //   setImportPrice((importPrice = results.data.length * 35 - 35));
            // }
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
        onConfirm={setPricetoZero}
        onCancel={setPricetoZero}
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

          <label onClick={() => {
                addLocations(locations);
                hideAlert();
              }} className="button-neutral">
              Upload Recognised Locations
            </label>

            <label htmlFor="file-upload" className="button-active">
              Upload New File
            </label>
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={getJson}
              id="file-upload"
            />
            {/*}
            <Button className="button-neutral" 
            onClick={setPricetoZero}>
              Upload New File
            </Button>
            */}
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
    setPrice(price + 35);
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
          startDate={startDate}
          endDate={endDate}
          fileValue={fileValue}
          unitsValue={unitsValue}
          downloadsValue={downloadsValue}
          formatValue={formatValue}
          currency={currency}
          temp={temp}
          setTemp={setTemp}
          pressure={pressure}
          setPressure={setPressure}
          humidity={humidity}
          setHumidity={setHumidity}
          clouds={clouds}
          setClouds={setClouds}
          dewPoint={dewPoint}
          setDewPoint={setDewPoint}
          precipitation={precipitation}
          setPrecipitation={setPrecipitation}
          wind={wind}
          setWind={setWind}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isChecked2={isChecked2}
          setIsChecked2={setIsChecked2}
          isChecked3={isChecked3}
          setIsChecked3={setIsChecked3}
          isChecked4={isChecked4}
          setIsChecked4={setIsChecked4}
          isChecked5={isChecked5}
          setIsChecked5={setIsChecked5}
          isChecked6={isChecked6}
          setIsChecked6={setIsChecked6}
          isChecked7={isChecked7}
          setIsChecked7={setIsChecked7}
          fileCheck={fileCheck}
          setFileCheck={setFileCheck}
          fileCheck2={fileCheck2}
          setFileCheck2={setFileCheck2}
          csv={csv}
          setCSV={setCSV}
          json={json}
          setJson={setJson}
          email={email}
          setEmail={setEmail}
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
        <Row>
          <Col md="6" className="dateLabel">
          {isSearchByName ? (
              <>
                <Label>Search Location</Label>
              <AutoCompleteForm
                mapRef={mapRef}
                setTempLocation={setTempLocation}
                error={error}
                setError={setError}
                setIsDropDown={setIsDropDown}
                count={count}
                setCount={setCount}
                setIsAdded={setIsAdded}
                setErrorMap={setErrorMap}
              />
              </>
            ) : (
              <>
              <Label>Search Coordinates</Label>
              <CoordinatesSearch
                mapRef={mapRef}
                coordsLocation={coordsTempLocation}
                setCoordsLocation={setCoordsTempLocation}
                setIsDropDown={setIsDropDown}
                setCoordinates={setCoordinates}
                error={error}
                setError={setError}
              />
              </>
            )}
          </Col>

          <DatePickerForecast
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
                      <label htmlFor="file-upload" className="button-active">
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

      <ParametersForecast
        setParameters={setParameters}
        parameters={parameters}
        fileValue={fileValue}
        setFileValue={setFileValue}
        unitsValue={unitsValue}
        setUnitsValue={setUnitsValue}
        downloadsValue={downloadsValue}
        setDownloadsValue={setDownloadsValue}
        formatValue={formatValue}
        setFormatValue={setFormatValue}
        temp={temp}
        setTemp={setTemp}
        pressure={pressure}
        setPressure={setPressure}
        humidity={humidity}
        setHumidity={setHumidity}
        clouds={clouds}
        setClouds={setClouds}
        dewPoint={dewPoint}
        setDewPoint={setDewPoint}
        precipitation={precipitation}
        setPrecipitation={setPrecipitation}
        wind={wind}
        setWind={setWind}
        isChecked={isChecked}
        setIsChecked={setIsChecked}
        isChecked2={isChecked2}
        setIsChecked2={setIsChecked2}
        isChecked3={isChecked3}
        setIsChecked3={setIsChecked3}
        isChecked4={isChecked4}
        setIsChecked4={setIsChecked4}
        isChecked5={isChecked5}
        setIsChecked5={setIsChecked5}
        isChecked6={isChecked6}
        setIsChecked6={setIsChecked6}
        isChecked7={isChecked7}
        setIsChecked7={setIsChecked7}
        fileCheck={fileCheck}
        setFileCheck={setFileCheck}
        fileCheck2={fileCheck2}
        setFileCheck2={setFileCheck2}
        csv={csv}
        setCSV={setCSV}
        json={json}
        setJson={setJson}
      />

      <LocationListHistory
        locations={locations}
        setLocations={setLocations}
      />

      {error.lat && <div className="invalid-feedback d-block">{error.lat}</div>}
      {error.lon && <div className="invalid-feedback d-block">{error.lon}</div>}
      {error.location && (
        <div className="invalid-feedback d-block">{error.location}</div>
      )}

      <Row className="mt-4 flex-end price">
        <Col>
        {locations.length >= 1 && startDate >= new Date('01/01/2017') && endDate >= startDate && endDate < new Date() ?
        null
        :
        <p style={{ fontSize: "14pt" }}>
        <i>To proceed please fill in the required details</i>
      </p>
        }
        </Col>
        <Col>
          <p style={{ fontWeight: "bold", fontSize: "18pt" }}>
          Total {locations.length * 35} {currency}
          </p>
        </Col>
        <Col>
        {locations.length >= 1 && startDate >= new Date('01/01/2017') && endDate >= startDate && endDate < new Date() ? (
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

LocationForecast.propTypes = {
  mapRef: PropTypes.object,
  location: PropTypes.object,
  setLocation: PropTypes.func,
  tempLocation: PropTypes.object,
  setTempLocation: PropTypes.func,
  count: PropTypes.number,
  setCount: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
  error: PropTypes.object,
  setError: PropTypes.func,
  setErrorMap: PropTypes.func,
  setIsAdded: PropTypes.func,
  setIsName: PropTypes.func,
  searchBoxRef: PropTypes.object,
  isDropDown: PropTypes.bool,
  setIsDropDown: PropTypes.func,
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  temp: PropTypes.string,
  setTemp: PropTypes.func,
  pressure: PropTypes.string,
  setPressure: PropTypes.func,
  humidity: PropTypes.string,
  setHumidity: PropTypes.func,
  clouds: PropTypes.string,
  setClouds: PropTypes.func,
  dewPoint: PropTypes.string,
  setDewPoint: PropTypes.func,
  precipitation: PropTypes.string,
  setPrecipitation: PropTypes.func,
  wind: PropTypes.string,
  setWind: PropTypes.func,
  close: PropTypes.func,
  startDate: PropTypes.instanceOf(Date),
  setStartDate: PropTypes.func,
  endDate: PropTypes.instanceOf(Date),
  setEndDate: PropTypes.func,
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  setFileCheck: PropTypes.func,
  setFileCheck2: PropTypes.func,
  csv: PropTypes.string,
  setCSV: PropTypes.func,
  json: PropTypes.string,
  setJson: PropTypes.func,
  fileValue: PropTypes.bool,
  setFileValue: PropTypes.func,
  unitsValue: PropTypes.string,
  setUnitsValue: PropTypes.func,
  downloadsValue: PropTypes.string,
  setDownloadsValue: PropTypes.func,
  formatValue: PropTypes.string,
  setFormatValue: PropTypes.func,
};

export default LocationForecast;
