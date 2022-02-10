import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import Map from "../components/Map";
import placeMarker from "../utils/placeMarker";
import Location from "../components/Location";
import { useSelector } from "react-redux";
import moment from 'moment-timezone';

const selectCurrency = (state) => state.auth.currency;
const selectInvoice = (state) => state.auth.invoiceInfo;

const NewHistoryBulk = () => {

  const currency = useSelector(selectCurrency);
  const mapRef = useRef(null);
  const searchBoxRef = useRef();
  const invoice = useSelector(selectInvoice);

  moment.tz.setDefault("America/Los_Angeles");

  const [error, setError] = useState({});

  /*eslint-disable-next-line*/
  const [name, setName] = useState("");

  const [location, setLocation] = useState({
    name: "",
    lat: "",
    lon: "",
  });

  const [price, setPrice] = useState(0);

  const [importPrice, setImportPrice] = useState(0);

  const [parameters, setParameters] = useState();

  const [locations, setLocations] = useState([]);

  const [isDropDown, setIsDropDown] = useState(false);

  const [isLocationNameEdited, setIsLocationNameEdited] = useState(false);

  const [tempLocation, setTempLocation] = useState({ ...location });

  const [checkedWeather, setCheckedWeather] = useState([]);

  const [fileValue, setFileValue] = useState(false);

  const [unitsValue, setUnitsValue] = useState("Metric");

  const [downloadsValue, setDownloadsValue] = useState("All locations");

  const [formatValue, setFormatValue] = useState("CSV")

  const [startDate, setStartDate] = useState(new Date());

  const [endDate, setEndDate] = useState(new Date());

  const [checked, setChecked] = useState([]);
  
  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

  const [on, setOn] = useState({})

  const [temp, setTemp] = useState('On');
  const [tempMin, setTempMin] = useState('On');
  const [tempMax, setTempMax] = useState("On");
  const [feelsLike, setFeelsLike] = useState("On");
  const [pressure, setPressure] = useState("On");
  const [humidity, setHumidity] = useState("On");
  const [clouds, setClouds] = useState("On");
  const [weather, setWeather] = useState("On");
  const [rain, setRain] = useState("On");
  const [snow, setSnow] = useState("On");
  const [dewPoint, setDewPoint] = useState("On");
  const [visibility, setVisibility] = useState("On");
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
            <h3>Create New History Bulk</h3>
          </div>
          <Location
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
            setInvoiceSettings={setInvoiceSettings}
            invoiceSettings={invoiceSettings}
            on={on}
            setOn={setOn}
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
          />
        </Col>

        <Col md="5">
          <Map
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

export default NewHistoryBulk;
