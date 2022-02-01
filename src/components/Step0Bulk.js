import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0Bulk = ({
    startDate,
    endDate,
    price,
    checkedWeather,
    unitsValue,
    fileValue,
    formatValue,
    downloadsValue,
    locations,
    currency
}) => {
  return (
    <div>
      <Row className="text-start">
        <Col className="bold">
          <h3>Order Details</h3>
        </Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">From - To:</Col>
        <Col>{new Date(startDate).toISOString().split('T')[0]} - {new Date(endDate).toISOString().split('T')[0]} </Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">Number of Locations:</Col>
        <Col>{locations.length}</Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">Weather Parameters:</Col>
        <Col>
          {checkedWeather}
        </Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">File Formats:</Col>
        <Col>{formatValue ? formatValue : 'CSV'}</Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">Units:</Col>
        <Col>{unitsValue ? unitsValue: 'Metric'}</Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">Download:</Col>
        <Col>{downloadsValue ? downloadsValue : 'All locations'}</Col>
      </Row>

      <Row className="text-start">
        <Col className="bold">Total Price:</Col>
        <Col>{price} {currency}</Col>
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
