import React, { useState, useEffect, useRef } from "react";
import { Col, Row } from "reactstrap";
import Map from "../components/Map";
import placeMarker from "../utils/placeMarker";
import Location from "../components/Location";
import { useSelector } from "react-redux";
import { data } from "../api/data";
import { units } from "../config";

const selectCurrency = (state) => state.auth.currency;
const selectInvoice = (state) => state.auth.invoiceInfo;

const NewHistoryBulkTest = () => {
  const currency = useSelector(selectCurrency);
  const mapRef = useRef(null);
  const searchBoxRef = useRef();
  const invoice = useSelector(selectInvoice);

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

  const [formatValue, setFormatValue] = useState("CSV");

  const [startDate, setStartDate] = useState();

  const [endDate, setEndDate] = useState();

  const [checked, setChecked] = useState([]);

  const [errorMap, setErrorMap] = useState(false)

  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

  const [email, setEmail] = useState('')

  console.log('look', email)

  const [on, setOn] = useState({
    news: false,
    product: false,
    system: false,
  });

  const [temp, setTemp] = useState("On");
  const [tempMin, setTempMin] = useState("On");
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
  const [wind, setWind] = useState("On")

  const [isChecked, setIsChecked] = useState(true);
  const [isChecked2, setIsChecked2] = useState(true);
  const [isChecked3, setIsChecked3] = useState(true);
  const [isChecked4, setIsChecked4] = useState(true);
  const [isChecked5, setIsChecked5] = useState(true);
  const [isChecked6, setIsChecked6] = useState(true);
  const [isChecked7, setIsChecked7] = useState(true);
  const [isChecked8, setIsChecked8] = useState(true);
  const [isChecked9, setIsChecked9] = useState(true);
  const [isChecked10, setIsChecked10] = useState(true);
  const [isChecked11, setIsChecked11] = useState(true);
  const [isChecked12, setIsChecked12] = useState(true);
  const [isChecked13, setIsChecked13] = useState(true);

  const [fileCheck, setFileCheck] = useState(true)
  const [fileCheck2, setFileCheck2] = useState(false)

  const [csv, setCSV] = useState("On")
  const [json, setJson] = useState("Off")

  const [unitsChecked, setUnitsChecked] = useState('Metric');
  const [isCheckedUnits, setIsCheckedUnits] = useState(true)

  const [count, setCount] = useState(0)

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
            unitsChecked={unitsChecked}
            setUnitsChecked={setUnitsChecked}
            isCheckedUnits={isCheckedUnits}
            setIsCheckedUnits={setIsCheckedUnits}
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

export default NewHistoryBulkTest;
