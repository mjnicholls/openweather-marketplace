import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0HistoryBulk = ({
  startDate,
  endDate,
  unitsValue,
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
  fileCheck,
  fileCheck2
}) => {


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
        {isChecked === true ? <Row style={{paddingLeft: "10px"}}>Temperature</Row> : <Row></Row>}
          {isChecked2 === true ? <Row style={{paddingLeft: "10px"}}>Pressure</Row> : <Row></Row>}
          {isChecked3 === true ? <Row style={{paddingLeft: "10px"}}>Humidity</Row> : <Row></Row>}
          {isChecked4 === true ? <Row style={{paddingLeft: "10px"}}>Clouds</Row> : <Row></Row>}
          {isChecked5 === true ? <Row style={{paddingLeft: "10px"}}>Dew Point</Row> : <Row></Row>}
          {isChecked6 === true ? <Row style={{paddingLeft: "10px"}}>Precipitation</Row> : <Row></Row>}
          {isChecked7 === true ? <Row style={{paddingLeft: "10px"}}>Wind (speed, direction, gust)</Row> : <Row></Row>}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">File Formats:</Col>
        <Col>{fileCheck === true && fileCheck2 === false ? "CSV" : ""}{" "}
        {fileCheck2 === true && fileCheck === false ? "JSON" : ""}{" "}
        {fileCheck2 === true && fileCheck === true ? "CSV, JSON" : ""}{" "}
        </Col>
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
         {locations.length * 35} {currency}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

Step0HistoryBulk.propTypes = {
  locations: PropTypes.array,
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  currency: PropTypes.number,
  unitsValue: PropTypes.string,
  downloadsValue: PropTypes.string,
};

export default Step0HistoryBulk;
