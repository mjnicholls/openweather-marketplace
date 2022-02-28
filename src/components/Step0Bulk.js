import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0Bulk = ({
  startDate,
  endDate,
  price,
  importPrice,
  unitsValue,
  formatValue,
  downloadsValue,
  locations,
  currency,
  isChecked,
  isChecked2,
  isChecked3,
  isChecked4,
  isChecked5,
  isChecked6,
  isChecked7,
  isChecked8,
  isChecked9,
  isChecked10,
  isChecked11,
  isChecked12,
  isChecked13,
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
          {/*}
          {checkedWeather.length === 0 ? 'Temperature, Max Temperature, Pressure, Clouds, Rain, Dew Point, Wind, Min Temp, Feels Like, Humidity, Conditions, Snow, Visibility' : checkedWeather.map((total, item) => {
        return <Col>{total}</Col>
      })}
    */}
          {isChecked === true ? "Temperature, " : ""}{" "}
          {isChecked2 === true ? "Min Temperature, " : ""}
          {isChecked3 === true ? "Max Temperature, " : ""}{" "}
          {isChecked4 === true ? "Feels Like, " : ""}
          {isChecked5 === true ? "Pressure, " : ""}{" "}
          {isChecked6 === true ? "Humidity, " : ""}
          {isChecked7 === true ? "Clouds, " : ""}{" "}
          {isChecked8 === true ? "Weather Conditions, " : ""}
          {isChecked9 === true ? "Rain, " : ""} 
          {isChecked10 === true ? "Snow, " : ""}
          {isChecked11 === true ? "Dew Point, " : ""}{" "}
          {isChecked12 === true ? "Visibility, " : ""}
          {isChecked13 === true ? "Wind (speed, direction, gust) " : ""}
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

Step0Bulk.propTypes = {
  year: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
};

export default Step0Bulk;
