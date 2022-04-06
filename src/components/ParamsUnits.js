import React, { useState } from 'react'

import PropTypes from 'prop-types'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import { Button, Label, Form, FormGroup, Input, Row, Col } from 'reactstrap'

import { units } from '../config'

const UnitsParams = ({ unitsValue, setUnitsValue }) => {
  const [alert, setAlert] = useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

  const unitAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Units:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="text-start mt-4">
          <Col>
            <Form className="checkbox-radios ml-5">
              <FormGroup
                check
                className="form-check-radio"
                onChange={(e) => {
                  setUnitsValue(e.target.value)
                }}
              >
                {units.map((option, ind) => (
                  <Label check index={ind}>
                    {option.label}
                    <Input
                      id={option.value}
                      name="file"
                      type="radio"
                      value={option.value}
                      defaultChecked={option.value === unitsValue}
                    />
                  </Label>
                ))}
              </FormGroup>
            </Form>
          </Col>
        </Row>
      </ReactBSAlert>,
    )
  }

  return (
    <>
      {alert}
      <Button
        className="button-neutral"
        onClick={unitAlert}
        style={{ fontSize: '11pt' }}
      >
        Units: {unitsValue || 'Metric'}{' '}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  )
}

UnitsParams.propTypes = {
  unitsValue: PropTypes.string,
  setUnitsValue: PropTypes.func,
}

export default UnitsParams
