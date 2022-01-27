import React from 'react'
import { Col, Row } from 'reactstrap'

import PropTypes from 'prop-types'

const Step0 = ({ year, country, price }) => {

  return (
    <div>
      <Row className='text-start'>
        <Col className='bold'><h3>Order Details</h3></Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>State:</Col>
        <Col> {country}</Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>Year:</Col>
        <Col> {year}</Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>Weather Parameters:</Col>
        <Col>Temperature, Min temperature, Max temperature, Feels like, Wind (speed, direction), Pressure, Humidity, Clouds, Weather conditions, Rain, Snow</Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>File Formats:</Col>
        <Col>CSV</Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>Units:</Col>
        <Col>Standard (Kelvin, hPa, meter/sec)</Col>
        </Row>

        <Row className='text-start'>
        <Col className='bold'>Total Price:</Col>
        <Col>${price}</Col>
        </Row>


    </div>
  )
}

Step0.propTypes = {
  year: PropTypes.number,
  country: PropTypes.string,
  price: PropTypes.number,
}

export default Step0
