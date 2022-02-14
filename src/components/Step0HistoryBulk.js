import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0HistoryBulk = ({
  startDate,
  endDate,
  price,
  checkedWeather,
  unitsValue,
  formatValue,
  downloadsValue,
  locations,
  currency,
  importPrice,
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
}) => {
  const totalPrice = price + importPrice;

  return (
    <div>
      <Row className="text-start step-bulk">
        <Col className="bold">
          <h3>Order Details</h3>
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">From - To:</Col>
        <Col>
          {new Date(startDate).toISOString().split("T")[0]} -{" "}
          {new Date(endDate).toISOString().split("T")[0]}{" "}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Number of Locations:</Col>
        <Col>{locations.length}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Weather Parameters:</Col>
        <Col>
          {temp === "On" ? "Temperature, " : ""}{" "}
          {pressure === "On" ? "Pressure, " : ""}{" "}
          {humidity === "On" ? "Humidity, " : ""}
          {clouds === "On" ? "Clouds, " : ""}{" "}
          {dewPoint === "On" ? "Dew Point, " : ""}{" "}
          {precipitation === "On" ? "Precipitation, " : ""}
          {wind === "On" ? "Wind (speed, direction) " : ""}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">File Formats:</Col>
        <Col>{formatValue ? formatValue : "CSV"}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Units:</Col>
        <Col>{unitsValue ? unitsValue : "Metric"}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Download:</Col>
        <Col>{downloadsValue ? downloadsValue : "All locations"}</Col>
      </Row>

      <hr />
      <Row className="text-start step-bulk">
        <Col className="bold">
          <h3>Total Price:</h3>
        </Col>
        <Col>
          <h3>
            {totalPrice} {currency}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

Step0HistoryBulk.propTypes = {
  year: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
};

export default Step0HistoryBulk;
