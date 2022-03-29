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

  const check = isChecked === true ? "Temperature" : null;
  const check2 = isChecked2 === true ? "Min Temperature" : null;
  const check3 = isChecked3 === true ? "Max Temperature" : null;
  const check4 = isChecked4 === true ? "Feels Like" : null;
  const check5 = isChecked5 === true ? "Pressure" : null;
  const check6 = isChecked6 === true ? "Humidity" : null;
  const check7 = isChecked7 === true ? "Clouds" : null;
  const check8 = isChecked8 === true ? "Weather Conditions" : null;
  const check9 = isChecked9 === true ? "Rain" : null;
  const check10 = isChecked10 === true ? "Snow" : null;
  const check11 = isChecked11 === true ? "Dew Point" : null;
  const check12 = isChecked12 === true ? "Visibility" : null;
  const check13 = isChecked13 === true ? "Wind (speed, direction, gust)" : null;

  const checks = [
    check,
    check2,
    check3,
    check4,
    check5,
    check6,
    check7,
    check8,
    check9,
    check10,
    check11,
    check12,
    check13,
  ];

  const convertDate = (inputFormat) => {
    function pad(s) { return (s < 10) ? '0' + s : s; }
    var d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth()+1), d.getFullYear()].join('-')
  }
  
  const startDateFormatted = convertDate(startDate)
  const endDateFormatted = convertDate(endDate)


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
        {startDateFormatted} -{" "}
         {endDateFormatted}{" "}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Number of Locations:</Col>
        <Col>{locations.length}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Weather Parameters:</Col>
        <Col>
          {checks.map(
              (p) => 
              p 
            ).filter(Boolean).join(", ")}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">File Formats:</Col>
        <Col>
          {fileCheck === true && fileCheck2 === false ? "CSV" : ""}{" "}
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
