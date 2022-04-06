import React, { useState } from 'react'

import ReactBSAlert from 'react-bootstrap-sweetalert'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { Label, Col, Row, FormGroup, Button } from 'reactstrap'

import { statesOfAmerica, years } from '../config'

const selectCurrency = (state) => state.auth.currency

const DataUSState = () => {
  const currency = useSelector(selectCurrency)

  const [price, setPrice] = useState(0)
  const [country, setCountry] = useState('')
  const [year, setYear] = useState('')

  const handleChange = (e) => {
    setCountry(e.value)
    setPrice(e.price)
  }

  const [alert, setAlert] = React.useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

  const htmlAlert = () => {
    setAlert(
      <ReactBSAlert
        customClass="agro-alert"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
      >
        <div className="text-start">
          <Row className="margin-small">
            <h2 className="high2">Sorry!</h2>
          </Row>

          <Row>
            <Col>
              This service is not available at the moment. If you wish to make
              use of this service, please get in touch with us.
            </Col>
          </Row>
          <br />
          <Row className="text-end">
            <Col>
              <a
                href="mailto:info@openweathermap.org"
                type="button"
                className="button-active"
              >
                Contact Us
              </a>
            </Col>
          </Row>
        </div>
        {/* <InvoiceSettings
          close={hideAlert}
          year={year}
          country={country}
          price={price}
          email={email}
          setEmail={setEmail}
        /> */}
      </ReactBSAlert>,
    )
  }

  return (
    <div className="container">
      {alert}
      <Row>
        <Col md="7" className="page-padding text-start">
          <div style={{ marginBottom: '50px' }}>
            <h3>Historical Weather Data by State</h3>
            <h6>for all ZIP codes in the US</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <Label>Select state</Label>
          <FormGroup>
            <Select
              className="react-select info mb-3"
              classNamePrefix="react-select"
              options={statesOfAmerica}
              onChange={(e) => handleChange(e)}
              placeholder="Select US State"
            />
          </FormGroup>
        </Col>
        <Col className="text-start">
          <Label>Select year</Label>
          <FormGroup>
            <Select
              className="react-select info mb-3"
              classNamePrefix="react-select"
              options={years}
              onChange={(e) => setYear(e.value)}
              // value={year}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="us-header">
        <Col className="text-start">
          <h4>Details</h4>
        </Col>
      </Row>

      <Row className="us-header-2">
        <Col className="text-start">
          <h6>Weather parameters</h6>
        </Col>
        <Col className="text-start">
          <h6>Units: Standard (Kelvin, hPa, meter/sec, mm/h)</h6>
        </Col>
      </Row>

      <Row className="US-list">
        <Col md="3" className="text-start">
          <ul>
            <li>Temperature</li>
            <li>Min temperature</li>
            <li>Max temperature</li>
            <li>Feels like</li>
            <li>Wind (speed, direction)</li>
            <li>Pressure</li>
          </ul>
        </Col>
        <Col md="3" className="text-start">
          <ul>
            <li>Humidity</li>
            <li>Clouds</li>
            <li>Weather conditions</li>
            <li>Rain</li>
            <li>Snow</li>
          </ul>
        </Col>
        <Col md="6" className="text-start">
          <h6>File Format: CSV</h6>
        </Col>
      </Row>

      <Row className="us-header flex-end price">
        <Col>
          {country && year ? null : (
            <p style={{ fontSize: '14pt' }}>
              <i>To proceed please fill in the required details</i>
            </p>
          )}
        </Col>
        <Col>
          <p style={{ fontWeight: 'bold', fontSize: '18pt' }}>
            Total {price} {currency}
          </p>
        </Col>
        {country && year ? (
          <Col>
            <Button
              data-dismiss="modal"
              type="button"
              onClick={(e) => {
                htmlAlert(false)
                e.stopPropagation()
              }}
              className="button-orange-square"
            >
              Place Order
            </Button>
          </Col>
        ) : (
          <Col>
            <Button disabled className="button-neutral-square">
              Place Order
            </Button>
          </Col>
        )}
      </Row>
    </div>
  )
}

export default DataUSState
