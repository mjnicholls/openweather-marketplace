import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Button, Col, Label, Form, FormGroup, Input, Row } from 'reactstrap'

const CheckyBoxHistory = ({
  setFileValue,
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
  isChecked,
  setIsChecked,
  isChecked2,
  setIsChecked2,
  isChecked3,
  setIsChecked3,
  isChecked4,
  setIsChecked4,
  isChecked5,
  setIsChecked5,
  isChecked6,
  setIsChecked6,
  isChecked7,
  setIsChecked7,
  close,
}) => {
  const [tempIsChecked, setTempIsChecked] = useState(isChecked)
  const [tempIsChecked2, setTempIsChecked2] = useState(isChecked2)
  const [tempIsChecked3, setTempIsChecked3] = useState(isChecked3)
  const [tempIsChecked4, setTempIsChecked4] = useState(isChecked4)
  const [tempIsChecked5, setTempIsChecked5] = useState(isChecked5)
  const [tempIsChecked6, setTempIsChecked6] = useState(isChecked6)
  const [tempIsChecked7, setTempIsChecked7] = useState(isChecked7)

  const [tempStatus, setTempStatus] = useState(temp)
  const [tempStatus2, setTempStatus2] = useState(pressure)
  const [tempStatus3, setTempStatus3] = useState(humidity)
  const [tempStatus4, setTempStatus4] = useState(clouds)
  const [tempStatus5, setTempStatus5] = useState(dewPoint)
  const [tempStatus6, setTempStatus6] = useState(precipitation)
  const [tempStatus7, setTempStatus7] = useState(wind)

  const handCheck = () => {
    if (tempStatus === 'On') {
      setTemp('On')
    } else setTemp('Off')

    if (tempIsChecked === true) {
      setIsChecked(true)
    } else setIsChecked(false)

    if (tempStatus2 === 'On') {
      setPressure('On')
    } else setPressure('Off')

    if (tempIsChecked2 === true) {
      setIsChecked2(true)
    } else setIsChecked2(false)

    if (tempStatus3 === 'On') {
      setHumidity('On')
    } else setHumidity('Off')

    if (tempIsChecked3 === true) {
      setIsChecked3(true)
    } else setIsChecked3(false)

    if (tempStatus4 === 'On') {
      setClouds('On')
    } else setClouds('Off')

    if (tempIsChecked4 === true) {
      setIsChecked4(true)
    } else setIsChecked4(false)

    if (tempStatus5 === 'On') {
      setDewPoint('On')
    } else setDewPoint('Off')

    if (tempIsChecked5 === true) {
      setIsChecked5(true)
    } else setIsChecked5(false)

    if (tempStatus6 === 'On') {
      setPrecipitation('On')
    } else setPrecipitation('Off')

    if (tempIsChecked6 === true) {
      setIsChecked6(true)
    } else setIsChecked6(false)

    if (tempStatus7 === 'On') {
      setWind('On')
    } else setWind('Off')

    if (tempIsChecked7 === true) {
      setIsChecked7(true)
    } else setIsChecked7(false)

    close()
    setFileValue(true)
  }

  return (
    <>
      <Row className="text-start mt-4">
        <Form className="checkbox-radio-columns ml-5">
          <FormGroup check className="form-check-radio">
            <Label check>
              Temp
              <Input
                type="checkbox"
                checked={tempIsChecked}
                onChange={() => {
                  setTempStatus(tempStatus === 'On' ? 'Off' : 'On')
                  setTempIsChecked(tempStatus !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Pressure
              <Input
                type="checkbox"
                checked={tempIsChecked2}
                onChange={() => {
                  setTempStatus2(tempStatus2 === 'On' ? 'Off' : 'On')
                  setTempIsChecked2(tempStatus2 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Humidity
              <Input
                type="checkbox"
                checked={tempIsChecked3}
                onChange={() => {
                  setTempStatus3(tempStatus3 === 'On' ? 'Off' : 'On')
                  setTempIsChecked3(tempStatus3 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Clouds
              <Input
                type="checkbox"
                checked={tempIsChecked4}
                onChange={() => {
                  setTempStatus4(tempStatus4 === 'On' ? 'Off' : 'On')
                  setTempIsChecked4(tempStatus4 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Dew Point
              <Input
                type="checkbox"
                checked={tempIsChecked5}
                onChange={() => {
                  setTempStatus5(tempStatus5 === 'On' ? 'Off' : 'On')
                  setTempIsChecked5(tempStatus5 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Precipitation
              <Input
                type="checkbox"
                checked={tempIsChecked6}
                onChange={() => {
                  setTempStatus6(tempStatus6 === 'On' ? 'Off' : 'On')
                  setTempIsChecked6(tempStatus6 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Wind
              <Input
                type="checkbox"
                checked={tempIsChecked7}
                onChange={() => {
                  setTempStatus7(tempStatus7 === 'On' ? 'Off' : 'On')
                  setTempIsChecked7(tempStatus7 !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Col className="text-end">
          <Button
            onClick={handCheck}
            className="button-active"
            disabled={
              !!(
                tempStatus === 'Off' &&
                tempStatus2 === 'Off' &&
                tempStatus3 === 'Off' &&
                tempStatus4 === 'Off' &&
                tempStatus5 === 'Off' &&
                tempStatus6 === 'Off' &&
                tempStatus7 === 'Off'
              )
            }
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  )
}

CheckyBoxHistory.propTypes = {
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  temp: PropTypes.string,
  pressure: PropTypes.string,
  humidity: PropTypes.string,
  clouds: PropTypes.string,
  dewPoint: PropTypes.string,
  precipitation: PropTypes.string,
  wind: PropTypes.string,
  setTemp: PropTypes.func,
  setPressure: PropTypes.func,
  setHumidity: PropTypes.func,
  setClouds: PropTypes.func,
  setDewPoint: PropTypes.func,
  setPrecipitation: PropTypes.func,
  setWind: PropTypes.func,
  close: PropTypes.func,
  setFileValue: PropTypes.func,
}

export default CheckyBoxHistory
