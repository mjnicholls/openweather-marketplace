import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0Bulk = ({
    startDate,
    endDate,
    price,
    importPrice,
    checkedWeather,
    unitsValue,
    formatValue,
    downloadsValue,
    locations,
    currency,
    temp, 
    setTemp,
    tempMin,
    setTempMin,
    tempMax,
    setTempMax,
    feelsLike, setFeelsLike,
    pressure, setPressure,
    humidity, setHumidity,
    clouds, setClouds,
    weather, setWeather,
    rain, setRain,
    snow, setSnow,
    dewPoint, setDewPoint,
    visibility, setVisibility,
    wind, setWind,
}) => {

  const totalPrice = price + importPrice

  return (
    <div>
      <Row className="text-start step-bulk">
        <Col className="bold">
          <h3>Order Details</h3>
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">From - To:</Col>
        <Col>{new Date(startDate).toISOString().split('T')[0]} - {new Date(endDate).toISOString().split('T')[0]} </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Number of Locations:</Col>
        <Col>{locations.length}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Weather Parameters:</Col>
        <Col>
        {/*}
          {checkedWeather.length === 0 ? 'Temperature, Max Temperature, Pressure, Clouds, Rain, Dew Point, Wind, Min Temp, Feels Like, Humidity, Conditions, Snow, Visibility' : checkedWeather.map((total, item) => {
        return <Col>{total}</Col>
      })}
    */}
    {temp === 'On' ? 'Temperature, ' : ''} {tempMin === 'On' ? 'Min Temperature, ' : ''} 
    {tempMax === 'On' ? 'Max Temperature, ' : ''} {feelsLike === 'On' ? 'Feels Like, ' : ''}
    {pressure === 'On' ? 'Pressure, ' : ''} {humidity === 'On' ? 'Humidity, ' : ''}
    {clouds === 'On' ? 'Clouds, ' : ''} {weather === 'On' ? 'Weather Conditions, ' : ''}
    {rain === 'On' ? 'Rain, ' : ''} {snow === 'On' ? 'Snow, ' : ''} 
    {dewPoint === 'On' ? 'Dew Point, ' : ''} {visibility === 'On' ? 'Visibility, ' : ''}
    {wind === 'On' ? 'Wind (speed, direction, gust) ' : ''}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">File Formats:</Col>
        <Col>{formatValue ? formatValue : 'CSV'}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Units:</Col>
        <Col>{unitsValue ? unitsValue: 'Metric'}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Download:</Col>
        <Col>{downloadsValue ? downloadsValue : 'All locations'}</Col>
      </Row>

<hr/>
      <Row className="text-start step-bulk">
        <Col className="bold"><h3>Total Price:</h3></Col>
        <Col><h3>{totalPrice} {currency}</h3></Col>
      </Row>
    </div>
  );
};

Step0Bulk.propTypes = {
  year: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
};

export default Step0Bulk;
