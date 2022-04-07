import React, { useState } from 'react'

import Papa from 'papaparse'
import PropTypes from 'prop-types'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import { Button, Col, Row, Label } from 'reactstrap'

import { locationConstructor } from '../utils/locationConstructor'
import { coordinatesError } from '../utils/validation'
import DatePickerMarket from './DatePicker'
import InvoiceSettingsBulk from './InvoicePopBulk'
import AutoCompleteForm from './LocationAutoComplete'
import CoordinatesSearch from './LocationCoordinates'
import LocationList from './LocationsList'
import Parameters from './Parameters'

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
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  location,
  setLocation,
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
  tempMin,
  setTempMin,
  tempMax,
  setTempMax,
  feelsLike,
  setFeelsLike,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  weather,
  setWeather,
  rain,
  setRain,
  snow,
  setSnow,
  dewPoint,
  setDewPoint,
  visibility,
  setVisibility,
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
  isChecked8,
  setIsChecked8,
  isChecked9,
  setIsChecked9,
  isChecked10,
  setIsChecked10,
  isChecked11,
  setIsChecked11,
  isChecked12,
  setIsChecked12,
  isChecked13,
  setIsChecked13,
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
  setErrorMap,
  duplicate,
}) => {
  const [isSearchByName, setIsSearchByName] = useState(true)
  const [coordsTempLocation, setCoordsTempLocation] = useState(tempLocation)
  const [isImport, setIsImport] = useState(false)

  const setCoordinates = () => {
    setError({})
    const coordsError = coordinatesError(
      coordsTempLocation.lat,
      coordsTempLocation.lon,
    )
    if (coordsError) {
      setError(coordsError)
      setIsDropDown(false)
      return
    }
    setTempLocation({
      ...coordsTempLocation,
      name: 'Custom location',
    })
    setIsDropDown(false)

    setCount(0)

    if (count === 0) {
      setErrorMap(false)
    }
    setIsAdded(false)
  }

  const canSetCoordinates = () =>
    tempLocation.lat !== coordsTempLocation.lat ||
    tempLocation.lon !== coordsTempLocation.lon

  const setSearchandImportImport = () => {
    setIsSearchByName(true)
    setIsImport(true)
  }

  const setSearchandImport = () => {
    setIsSearchByName(true)
    setIsImport(false)
  }

  const setSearchNameandImport = () => {
    setIsSearchByName(false)
    setIsImport(false)
  }

  const getJson = (e) => {
    hideAlert()
    const { files } = e.target
    if (files) {
      Papa.parse(files[0], {
        skipEmptyLines: true,
        complete(results) {
          const importedLocations = []
          const errors = []

          for (let i = 0; i < results.data.length; i += 1) {
            const row = results.data[i]

            const tmp = locationConstructor(row[0], row[1], row[2])
            let error = {}

            if (tmp.error) {
              const keys = Object.keys(tmp.error)
              error = {
                line: i + 1,
                comment: tmp.error[keys[0]],
                value: tmp.error.errorVal,
              }
            } else {
              for (let j = 0; j < importedLocations.length; j += 1) {
                if (
                  importedLocations[j].lat === tmp.location.lat &&
                  importedLocations[j].lon === tmp.location.lon
                ) {
                  error = {
                    line: i + 1,
                    comment: 'Duplicated value.',
                    value: `${row[1]}, ${row[2]}`,
                  }

                  break
                }
              }

              const check = checkCoordinates(tmp.location.lat, tmp.location.lon)
              if (!check) {
                error = {
                  line: i + 1,
                  comment: 'Duplicated value.',
                  value: `${row[1]}, ${row[2]}`,
                }
              }
            }

            if (Object.keys(error).length) {
              errors.push(error)
            } else if (tmp.location) {
              importedLocations.push(tmp.location)
            }
          }

          if (errors.length) {
            jsonAlert(errors, importedLocations)
            return
          }

          if (importedLocations.length) {
            addLocations(importedLocations)
          }
          setIsImport(false)
        },
      })
    }
  }

  const [alert, setAlert] = React.useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

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
        {importErrors.map((adderror) => (
          <React.Fragment key="two">
            <Row className="trigger-item">
              <Col md="1">{adderror.line}</Col>
              <Col>{adderror.comment}</Col>
              <Col>{adderror.value}</Col>
            </Row>
          </React.Fragment>
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
        {locations.map((addLocation, index) => (
          <React.Fragment key="one">
            <Row className="trigger-item">
              <Col md="1">{index + 1}</Col>
              <Col>{addLocation.name}</Col>
              <Col>{addLocation.lat}</Col>
              <Col>{addLocation.lon}</Col>
            </Row>
          </React.Fragment>
        ))}
        <br />
        <Row className="trigger-item">
          <Col className="text-end">
            <Label
              htmlFor="text"
              onClick={() => {
                addLocations(locations)
                hideAlert()
              }}
              className="button-neutral"
            >
              Upload Recognised Locations
            </Label>

            <label htmlFor="file-upload" className="button-active">
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
      </ReactBSAlert>,
    )
  }

  const checkCoordinates = (lat, lon) => {
    for (let i = 0; i < locations.length; i += 1) {
      if (locations[i].lat === lat && locations[i].lon === lon) {
        return false
      }
    }
    return true
  }

  const addLocations = (data) => {
    const newLocations = [...locations, ...data]
    setLocations(newLocations)
  }

  const checkoutAlert = () => {
    setAlert(
      <ReactBSAlert
        customClass="agro-alert"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        title=""
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
          tempMin={tempMin}
          setTempMin={setTempMin}
          tempMax={tempMax}
          setTempMax={setTempMax}
          feelsLike={feelsLike}
          setFeelsLike={setFeelsLike}
          pressure={pressure}
          setPressure={setPressure}
          humidity={humidity}
          setHumidity={setHumidity}
          clouds={clouds}
          setClouds={setClouds}
          weather={weather}
          setWeather={setWeather}
          rain={rain}
          setRain={setRain}
          snow={snow}
          setSnow={setSnow}
          dewPoint={dewPoint}
          setDewPoint={setDewPoint}
          visibility={visibility}
          setVisibility={setVisibility}
          wind={wind}
          setWind={setWind}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
          isChecked4={isChecked4}
          isChecked5={isChecked5}
          isChecked6={isChecked6}
          isChecked7={isChecked7}
          isChecked8={isChecked8}
          isChecked9={isChecked9}
          isChecked10={isChecked10}
          isChecked11={isChecked11}
          isChecked12={isChecked12}
          isChecked13={isChecked13}
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
      </ReactBSAlert>,
    )
  }

  return (
    <div className="location">
      {alert}
      <div
        className="flex-grow-1"
        style={{ position: 'relative' }}
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
                  setIsAdded={setIsAdded}
                  count={count}
                  setCount={setCount}
                  setErrorMap={setErrorMap}
                  duplicate={duplicate}
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

          <DatePickerMarket
            startDate={startDate}
            setStartDate={setStartDate}
            endDate={endDate}
            setEndDate={setEndDate}
          />
        </Row>
        {error.lat && (
          <div className="invalid-feedback d-block">{error.lat}</div>
        )}
        {error.lon && (
          <div className="invalid-feedback d-block">{error.lon}</div>
        )}
        {error.location && (
          <div className="invalid-feedback d-block">{error.location}</div>
        )}
        {isDropDown && (
          <div className="padded search-pop-up d-flex justify-content-between">
            <div>
              <Button
                type="button"
                className={`padded-button ${
                  isSearchByName && !isImport ? 'padded-button-active' : ''
                }`}
                onClick={() => setSearchandImport()}
                aria-pressed="true"
              >
                Location
              </Button>
              <Button
                type="button"
                className={`padded-button ${
                  !isSearchByName ? 'padded-button-active' : ''
                }`}
                onClick={() => setSearchNameandImport()}
                aria-pressed="true"
              >
                Coordinates
              </Button>
              <Button
                type="button"
                className={`padded-button ${
                  isImport ? 'padded-button-active' : ''
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
                      Please refer to the example below.{' '}
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
                  canSetCoordinates() ? 'padded-button-active' : ''
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
        tempMin={tempMin}
        setTempMin={setTempMin}
        tempMax={tempMax}
        setTempMax={setTempMax}
        feelsLike={feelsLike}
        setFeelsLike={setFeelsLike}
        pressure={pressure}
        setPressure={setPressure}
        humidity={humidity}
        setHumidity={setHumidity}
        clouds={clouds}
        setClouds={setClouds}
        weather={weather}
        setWeather={setWeather}
        rain={rain}
        setRain={setRain}
        snow={snow}
        setSnow={setSnow}
        dewPoint={dewPoint}
        setDewPoint={setDewPoint}
        visibility={visibility}
        setVisibility={setVisibility}
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
        isChecked8={isChecked8}
        setIsChecked8={setIsChecked8}
        isChecked9={isChecked9}
        setIsChecked9={setIsChecked9}
        isChecked10={isChecked10}
        setIsChecked10={setIsChecked10}
        isChecked11={isChecked11}
        setIsChecked11={setIsChecked11}
        isChecked12={isChecked12}
        setIsChecked12={setIsChecked12}
        isChecked13={isChecked13}
        setIsChecked13={setIsChecked13}
        fileCheck={fileCheck}
        setFileCheck={setFileCheck}
        fileCheck2={fileCheck2}
        setFileCheck2={setFileCheck2}
        csv={csv}
        setCSV={setCSV}
        json={json}
        setJson={setJson}
      />

      <LocationList
        locations={locations}
        setLocations={setLocations}
        location={location}
        setLocation={setLocation}
      />

      <Row className="mt-4 flex-end price">
        <Col>
          {locations.length >= 1 &&
          startDate >= new Date('01/01/1979') &&
          endDate >= startDate &&
          endDate < new Date() ? null : (
            <p style={{ fontSize: '14pt' }}>
              <i>To proceed please fill in the required details</i>
            </p>
          )}
        </Col>
        <Col>
          <p style={{ fontWeight: 'bold', fontSize: '18pt' }}>
            Total {locations.length * 7} {currency}
          </p>
        </Col>
        <Col>
          {locations.length >= 1 &&
          startDate >= new Date('01/01/1979') &&
          endDate >= startDate &&
          endDate < new Date() ? (
            <Col>
              <Button
                data-dismiss="modal"
                type="button"
                onClick={(e) => {
                  checkoutAlert(false)
                  e.stopPropagation()
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
  )
}

Location.propTypes = {
  mapRef: PropTypes.object,
  location: PropTypes.object,
  locations: PropTypes.array,
  setLocations: PropTypes.func,
  currency: PropTypes.string,
  feelsLike: PropTypes.string,
  setFeelsLike: PropTypes.func,
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
  isChecked8: PropTypes.bool,
  isChecked9: PropTypes.bool,
  isChecked10: PropTypes.bool,
  isChecked11: PropTypes.bool,
  isChecked12: PropTypes.bool,
  isChecked13: PropTypes.bool,
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  setIsChecked8: PropTypes.func,
  setIsChecked9: PropTypes.func,
  setIsChecked10: PropTypes.func,
  setIsChecked11: PropTypes.func,
  setIsChecked12: PropTypes.func,
  setIsChecked13: PropTypes.func,
  temp: PropTypes.string,
  setTemp: PropTypes.func,
  tempMin: PropTypes.string,
  setTempMin: PropTypes.func,
  tempMax: PropTypes.string,
  setTempMax: PropTypes.func,
  pressure: PropTypes.string,
  setPressure: PropTypes.func,
  humidity: PropTypes.string,
  setHumidity: PropTypes.func,
  rain: PropTypes.string,
  setRain: PropTypes.func,
  snow: PropTypes.string,
  setSnow: PropTypes.func,
  weather: PropTypes.string,
  setWeather: PropTypes.func,
  clouds: PropTypes.string,
  setClouds: PropTypes.func,
  dewPoint: PropTypes.string,
  setDewPoint: PropTypes.func,
  visibility: PropTypes.string,
  setVisibility: PropTypes.func,
  wind: PropTypes.string,
  setWind: PropTypes.func,
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
  duplicate: PropTypes.bool,
  map: PropTypes.func,
  length: PropTypes.func,
  lat: PropTypes.func,
  lon: PropTypes.func,
}

export default Location
