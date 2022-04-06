import React from 'react'

import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

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
  fileCheck2,
}) => {
  const check = isChecked === true ? 'Temperature' : null
  const check2 = isChecked2 === true ? 'Pressure' : null
  const check3 = isChecked3 === true ? 'Humidity' : null
  const check4 = isChecked4 === true ? 'Clouds' : null
  const check5 = isChecked5 === true ? 'Dew Point' : null
  const check6 = isChecked6 === true ? 'Precipitation' : null
  const check7 = isChecked7 === true ? 'Wind (direction, speed)' : null

  const checks = [check, check2, check3, check4, check5, check6, check7]

  const convertDate = (inputFormat) => {
    function pad(s) {
      return s < 10 ? `0${s}` : s
    }
    const d = new Date(inputFormat)
    return [pad(d.getDate()), pad(d.getMonth() + 1), d.getFullYear()].join('-')
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
          {startDateFormatted} - {endDateFormatted}{' '}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Number of Locations:</Col>
        <Col>{locations.length}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Weather Parameters:</Col>
        <Col>
          {checks
            .map((p) => p)
            .filter(Boolean)
            .join(', ')}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">File Formats:</Col>
        <Col>
          {fileCheck === true && fileCheck2 === false ? 'CSV' : ''}{' '}
          {fileCheck2 === true && fileCheck === false ? 'JSON' : ''}{' '}
          {fileCheck2 === true && fileCheck === true ? 'CSV, JSON' : ''}{' '}
        </Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Units:</Col>
        <Col>{unitsValue || 'Metric'}</Col>
      </Row>

      <Row className="text-start step-bulk">
        <Col className="bold">Download:</Col>
        <Col>{downloadsValue || 'All locations'}</Col>
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
  )
}

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
  currency: PropTypes.string,
  unitsValue: PropTypes.string,
  downloadsValue: PropTypes.string,
}

export default Step0HistoryBulk
