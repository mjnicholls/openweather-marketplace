import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import MapHistory from "../components/MapHistory";
import placeMarker from "../utils/placeMarker";
import LocationForecast from "../components/LocationsForecast";
import { useSelector } from "react-redux";

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

  const [price, setPrice] = useState(0);

  const [parameters, setParameters] = useState();

  const [locations, setLocations] = useState([]);

  const [isDropDown, setIsDropDown] = useState(false);

  const [isLocationNameEdited, setIsLocationNameEdited] = useState(false);

  const [tempLocation, setTempLocation] = useState({ ...location });

  const [checkedWeather, setCheckedWeather] = useState([]);

  const [fileValue, setFileValue] = useState(false);

  const [unitsValue, setUnitsValue] = useState("Metric");

  const [downloadsValue, setDownloadsValue] = useState("All locations");

  const [formatValue, setFormatValue] = useState("CSV");

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const [checked, setChecked] = useState([]);

  const [importPrice, setImportPrice] = useState(0);

  const [temp, setTemp] = useState("On");
  const [pressure, setPressure] = useState("On");
  const [humidity, setHumidity] = useState("On");
  const [clouds, setClouds] = useState("On");
  const [dewPoint, setDewPoint] = useState("On");
  const [precipitation, setPrecipitation] = useState("On");
  const [wind, setWind] = useState("On");

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
  };

  const handleClickOutsideSearchBox = (e) => {
    if (searchBoxRef.current.contains(e.target)) {
      // inside click
      return;
    }
    setIsDropDown(false);
    // outside click
    // ... do whatever on click outside here ...
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
            parameters={parameters}
            setParameters={setParameters}
            price={price}
            setPrice={setPrice}
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
            setStartDate={setStartDate}
            startDate={startDate}
            setEndDate={setEndDate}
            endDate={endDate}
            currency={currency}
            checked={checked}
            setChecked={setChecked}
            importPrice={importPrice}
            setImportPrice={setImportPrice}
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
          />
        </Col>

        <Col md="5">
          <MapHistory
            mapRef={mapRef}
            mapLocation={tempLocation}
            locations={locations}
            setLocations={setLocations}
            setLocation={setLocationNameAware}
            onClickMap={onClickMap}
            price={price}
            setPrice={setPrice}
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
