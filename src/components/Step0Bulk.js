import React from "react";
import { Col, Row } from "reactstrap";

import PropTypes from "prop-types";

const Step0Bulk = ({
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
  isChecked8,
  isChecked9,
  isChecked10,
  isChecked11,
  isChecked12,
  isChecked13,
  fileCheck,
  fileCheck2,
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
  <>
          {isChecked === true ? <Row style={{paddingLeft: "10px"}}>Temperature</Row> : <Row></Row>}
          {isChecked2 === true ? <Row style={{paddingLeft: "10px"}}>Min Temperature</Row> : <Row></Row>}
          {isChecked3 === true ? <Row style={{paddingLeft: "10px"}}>Max Temperature</Row> : <Row></Row>}
          {isChecked4 === true ? <Row style={{paddingLeft: "10px"}}>Feels Like</Row> : <Row></Row>}
          {isChecked5 === true ? <Row style={{paddingLeft: "10px"}}>Pressure</Row> : <Row></Row>}
          {isChecked6 === true ? <Row style={{paddingLeft: "10px"}}>Humidity</Row> : <Row></Row>}
          {isChecked7 === true ? <Row style={{paddingLeft: "10px"}}>Clouds</Row> : <Row></Row>}
          {isChecked8 === true ? <Row style={{paddingLeft: "10px"}}>Weather Conditions</Row> : <Row></Row>}
          {isChecked9 === true ? <Row style={{paddingLeft: "10px"}}>Rain</Row> : <Row></Row> }
          {isChecked10 === true ? <Row style={{paddingLeft: "10px"}}>Snow</Row> : <Row></Row>}
          {isChecked11 === true ? <Row style={{paddingLeft: "10px"}}>Dew Point</Row> : <Row></Row>}
          {isChecked12 === true ? <Row style={{paddingLeft: "10px"}}>Visibility</Row> : <Row></Row>}
          {isChecked13 === true ? <Row style={{paddingLeft: "10px"}}>Wind (speed, direction, gust)</Row> : <Row></Row>}
     </>
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
         {locations.length * 7} {currency}
          </h3>
        </Col>
      </Row>
    </div>
  );
};

Step0Bulk.propTypes = {
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
  isChecked8: PropTypes.bool,
  isChecked9: PropTypes.bool,
  isChecked10: PropTypes.bool,
  isChecked11: PropTypes.bool,
  isChecked12: PropTypes.bool,
  isChecked13: PropTypes.bool,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  currency: PropTypes.number,
  unitsValue: PropTypes.string,
  downloadsValue: PropTypes.string,
};

export default Step0Bulk;
