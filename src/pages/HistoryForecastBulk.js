import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import MapHistory from "../components/MapHistory";
import placeMarker from "../utils/placeMarker";
import LocationForecast from "../components/LocationsForecast";
import { useSelector } from "react-redux";
import moment from "moment";

const selectCurrency = (state) => state.auth.currency;

const HistoryForecastBulk = () => {
  const currency = useSelector(selectCurrency);

  const mapRef = useRef(null);
  const searchBoxRef = useRef();

  const [error, setError] = useState({});

  /*eslint-disable-next-line*/
  const [name, setName] = useState("");

  const [location, setLocation] = useState({
    name: "",
    lat: "",
    lon: "",
  });

  const [isAdded, setIsAdded] = useState(false);

  const yesterday = moment().subtract(1, 'days').toDate();

  const [locations, setLocations] = useState([]);

  const [isDropDown, setIsDropDown] = useState(false);

  const [isLocationNameEdited, setIsLocationNameEdited] = useState(false);

  const [tempLocation, setTempLocation] = useState({ ...location });

  const [fileValue, setFileValue] = useState(false);

  const [unitsValue, setUnitsValue] = useState("Metric");

  const [downloadsValue, setDownloadsValue] = useState("All locations");

  const [formatValue, setFormatValue] = useState("CSV");

  const [startDate, setStartDate] = useState(null);

  const [endDate, setEndDate] = useState(null);

  const [temp, setTemp] = useState("On");
  const [pressure, setPressure] = useState("On");
  const [humidity, setHumidity] = useState("On");
  const [clouds, setClouds] = useState("On");
  const [dewPoint, setDewPoint] = useState("On");
  const [precipitation, setPrecipitation] = useState("On");
  const [wind, setWind] = useState("On");

  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(true);
  const [isChecked6, setIsChecked6] = useState(true);
  const [isChecked7, setIsChecked7] = useState(true);

  const [fileCheck, setFileCheck] = useState(true)
  const [fileCheck2, setFileCheck2] = useState(false)

  const [csv, setCSV] = useState("On")
  const [json, setJson] = useState("Off")

  const [count, setCount] = useState(0)
  
  const [errorMap, setErrorMap] = useState(false)

  const [email, setEmail] = useState()

  useEffect(() => {
    setTempLocation({
      ...tempLocation,
      lat: location.lat,
      lon: location.lon,
    });
    /*eslint-disable-next-line*/
  }, [location]);

  useEffect(() => {
    if (tempLocation.lat && tempLocation.lon) {
      // eslint-disable-next-line
      const position = new google.maps.LatLng(
        tempLocation.lat,
        tempLocation.lon
      );
      // eslint-disable-next-line
      placeMarker(position, mapRef.current.map_);
    }
  }, [tempLocation]);

  useEffect(() => {
    // detect click outside location search box
    document.addEventListener("mousedown", handleClickOutsideSearchBox);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideSearchBox);
    };
  }, []);

  const setLocationNameAware = (val) => {
    setError({
      ...error,
      location: null,
    });
    setLocation({
      ...val,
      name: isLocationNameEdited
        ? location.name
        : `${val.name} (${val.lat.toFixed(2)}, ${val.lat.toFixed(2)})`,
    });
  };

  const onClickMap = ({ lat, lng }) => {
    setTempLocation({
      lat,
      lon: lng,
      name: "Custom location",
    });

    setCount(0)

    if (count === 0) {
      setErrorMap(false)
      }

      setIsAdded(false);
  };

  const handleClickOutsideSearchBox = (e) => {
    if (searchBoxRef.current.contains(e.target)) {
      return;
    }
    setIsDropDown(false);
  };

  const handleChange = (key, value) => {
    const newLocation = { ...location };
    newLocation[key] = value;
    setLocation(newLocation);
  };

  return (
    <div className="container">
      <Row>
        <Col md="7" className="page-padding text-start">
          <div style={{ marginBottom: "100px" }}>
            <h3>Create New History Forecast Bulk</h3>
          </div>
          <LocationForecast
            mapRef={mapRef}
            location={location}
            setLocation={setLocation}
            tempLocation={tempLocation}
            locations={locations}
            setLocations={setLocations}
            setTempLocation={setTempLocation}
            onChange={(e) => handleChange("location", e.target.value)}
            error={error}
            setError={setError}
            name={name}
            searchBoxRef={searchBoxRef}
            isDropDown={isDropDown}
            setIsDropDown={setIsDropDown}
            setIsLocationNameEdited={setIsLocationNameEdited}
            fileValue={fileValue}
            setFileValue={setFileValue}
            unitsValue={unitsValue}
            setUnitsValue={setUnitsValue}
            downloadsValue={downloadsValue}
            setDownloadsValue={setDownloadsValue}
            formatValue={formatValue}
            setFormatValue={setFormatValue}
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
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
            count={count}
            setCount={setCount}
            setIsAdded={setIsAdded}
            setErrorMap={setErrorMap}
          />
        </Col>

        <Col md="5">
          <MapHistory
            isAdded={isAdded}
            setIsAdded={setIsAdded}
            mapRef={mapRef}
            mapLocation={tempLocation}
            locations={locations}
            setLocations={setLocations}
            setLocation={setLocationNameAware}
            onClickMap={onClickMap}
            errorMap={errorMap}
            setErrorMap={setErrorMap}
            count={count}
            setCount={setCount}
            isButtonInfoWindow={
              location.lat !== tempLocation.lat ||
              location.lon !== tempLocation.lon
            }
          />
        </Col>
      </Row>
    </div>
  );
};

export default HistoryForecastBulk;
