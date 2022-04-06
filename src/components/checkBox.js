import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Button, Label, Form, FormGroup, Input, Row, Col } from 'reactstrap'

const CheckyBox = ({
  temp,
  setTemp,
  tempMin,
  setTempMin,
  tempMax,
  setTempMax,
  feelsLike,
  setFeelsLike,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  weather,
  setWeather,
  rain,
  setRain,
  snow,
  setSnow,
  dewPoint,
  setDewPoint,
  visibility,
  setVisibility,
  wind,
  setWind,
  setFileValue,
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
  isChecked8,
  setIsChecked8,
  isChecked9,
  setIsChecked9,
  isChecked10,
  setIsChecked10,
  isChecked11,
  setIsChecked11,
  isChecked12,
  setIsChecked12,
  isChecked13,
  setIsChecked13,
  close,
}) => {
  const [tempIsChecked, setTempIsChecked] = useState(isChecked)
  const [tempIsChecked2, setTempIsChecked2] = useState(isChecked2)
  const [tempIsChecked3, setTempIsChecked3] = useState(isChecked3)
  const [tempIsChecked4, setTempIsChecked4] = useState(isChecked4)
  const [tempIsChecked5, setTempIsChecked5] = useState(isChecked5)
  const [tempIsChecked6, setTempIsChecked6] = useState(isChecked6)
  const [tempIsChecked7, setTempIsChecked7] = useState(isChecked7)
  const [tempIsChecked8, setTempIsChecked8] = useState(isChecked8)
  const [tempIsChecked9, setTempIsChecked9] = useState(isChecked9)
  const [tempIsChecked10, setTempIsChecked10] = useState(isChecked10)
  const [tempIsChecked11, setTempIsChecked11] = useState(isChecked11)
  const [tempIsChecked12, setTempIsChecked12] = useState(isChecked12)
  const [tempIsChecked13, setTempIsChecked13] = useState(isChecked13)

  const [tempStatus, setTempStatus] = useState(temp)
  const [tempStatus2, setTempStatus2] = useState(tempMin)
  const [tempStatus3, setTempStatus3] = useState(tempMax)
  const [tempStatus4, setTempStatus4] = useState(feelsLike)
  const [tempStatus5, setTempStatus5] = useState(pressure)
  const [tempStatus6, setTempStatus6] = useState(humidity)
  const [tempStatus7, setTempStatus7] = useState(clouds)
  const [tempStatus8, setTempStatus8] = useState(weather)
  const [tempStatus9, setTempStatus9] = useState(rain)
  const [tempStatus10, setTempStatus10] = useState(snow)
  const [tempStatus11, setTempStatus11] = useState(dewPoint)
  const [tempStatus12, setTempStatus12] = useState(visibility)
  const [tempStatus13, setTempStatus13] = useState(wind)

  const [error, setError] = useState(null)

  const handCheck = () => {
    if (tempStatus === 'On') {
      setTemp('On')
    } else {
      setTemp('Off')
    }

    if (tempIsChecked === true) {
      setIsChecked(true)
    } else {
      setIsChecked(false)
    }

    if (tempStatus2 === 'On') {
      setTempMin('On')
    } else {
      setTempMin('Off')
    }

    if (tempIsChecked2 === true) {
      setIsChecked2(true)
    } else {
      setIsChecked2(false)
    }

    if (tempStatus3 === 'On') {
      setTempMax('On')
    } else setTempMax('Off')

    if (tempIsChecked3 === true) {
      setIsChecked3(true)
    } else setIsChecked3(false)

    if (tempStatus4 === 'On') {
      setFeelsLike('On')
    } else setFeelsLike('Off')

    if (tempIsChecked4 === true) {
      setIsChecked4(true)
    } else setIsChecked4(false)

    if (tempStatus5 === 'On') {
      setPressure('On')
    } else setPressure('Off')

    if (tempIsChecked5 === true) {
      setIsChecked5(true)
    } else setIsChecked5(false)

    if (tempStatus6 === 'On') {
      setHumidity('On')
    } else setHumidity('Off')

    if (tempIsChecked6 === true) {
      setIsChecked6(true)
    } else setIsChecked6(false)

    if (tempStatus7 === 'On') {
      setClouds('On')
    } else setClouds('Off')

    if (tempIsChecked7 === true) {
      setIsChecked7(true)
    } else setIsChecked7(false)

    if (tempStatus8 === 'On') {
      setWeather('On')
    } else setWeather('Off')

    if (tempIsChecked8 === true) {
      setIsChecked8(true)
    } else setIsChecked8(false)

    if (tempStatus9 === 'On') {
      setRain('On')
    } else setRain('Off')

    if (tempIsChecked9 === true) {
      setIsChecked9(true)
    } else setIsChecked9(false)

    if (tempStatus10 === 'On') {
      setSnow('On')
    } else setSnow('Off')

    if (tempIsChecked10 === true) {
      setIsChecked10(true)
    } else setIsChecked10(false)

    if (tempStatus11 === 'On') {
      setDewPoint('On')
    } else setDewPoint('Off')

    if (tempIsChecked11 === true) {
      setIsChecked11(true)
    } else setIsChecked11(false)

    if (tempStatus12 === 'On') {
      setVisibility('On')
    } else setVisibility('Off')

    if (tempIsChecked12 === true) {
      setIsChecked12(true)
    } else setIsChecked12(false)

    if (tempStatus13 === 'On') {
      setWind('On')
    } else setWind('Off')

    if (tempIsChecked13 === true) {
      setIsChecked13(true)
    } else setIsChecked13(false)

    setError(null)

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
                disabled={
                  !!(
                    tempIsChecked === true &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Min Temp
              <Input
                type="checkbox"
                checked={tempIsChecked2}
                onChange={() => {
                  setTempStatus2(tempStatus2 === 'On' ? 'Off' : 'On')
                  setTempIsChecked2(tempStatus2 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === true &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Temp Max
              <Input
                type="checkbox"
                checked={tempIsChecked3}
                onChange={() => {
                  setTempStatus3(tempStatus3 === 'On' ? 'Off' : 'On')
                  setTempIsChecked3(tempStatus3 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === true &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Feels Like
              <Input
                type="checkbox"
                checked={tempIsChecked4}
                onChange={() => {
                  setTempStatus4(tempStatus4 === 'On' ? 'Off' : 'On')
                  setTempIsChecked4(tempStatus4 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === true &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Pressure
              <Input
                type="checkbox"
                checked={tempIsChecked5}
                onChange={() => {
                  setTempStatus5(tempStatus5 === 'On' ? 'Off' : 'On')
                  setTempIsChecked5(tempStatus5 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === true &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Humidity
              <Input
                type="checkbox"
                checked={tempIsChecked6}
                onChange={() => {
                  setTempStatus6(tempStatus6 === 'On' ? 'Off' : 'On')
                  setTempIsChecked6(tempStatus6 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === true &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Clouds
              <Input
                type="checkbox"
                checked={tempIsChecked7}
                onChange={() => {
                  setTempStatus7(tempStatus7 === 'On' ? 'Off' : 'On')
                  setTempIsChecked7(tempStatus7 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === true &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Weather
              <Input
                type="checkbox"
                checked={tempIsChecked8}
                onChange={() => {
                  setTempStatus8(tempStatus8 === 'On' ? 'Off' : 'On')
                  setTempIsChecked8(tempStatus8 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === true &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Rain
              <Input
                type="checkbox"
                checked={tempIsChecked9}
                onChange={() => {
                  setTempStatus9(tempStatus9 === 'On' ? 'Off' : 'On')
                  setTempIsChecked9(tempStatus9 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === true &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Snow
              <Input
                type="checkbox"
                checked={tempIsChecked10}
                onChange={() => {
                  setTempStatus10(tempStatus10 === 'On' ? 'Off' : 'On')
                  setTempIsChecked10(tempStatus10 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === true &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Dew Point
              <Input
                type="checkbox"
                checked={tempIsChecked11}
                onChange={() => {
                  setTempStatus11(tempStatus11 === 'On' ? 'Off' : 'On')
                  setTempIsChecked11(tempStatus11 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === true &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Visibility
              <Input
                type="checkbox"
                checked={tempIsChecked12}
                onChange={() => {
                  setTempStatus12(tempStatus12 === 'On' ? 'Off' : 'On')
                  setTempIsChecked12(tempStatus12 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === true &&
                    tempIsChecked13 === false
                  )
                }
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Wind
              <Input
                type="checkbox"
                checked={tempIsChecked13}
                onChange={() => {
                  setTempStatus13(tempStatus13 === 'On' ? 'Off' : 'On')
                  setTempIsChecked13(tempStatus13 !== 'On')
                }}
                className="text-right"
                disabled={
                  !!(
                    tempIsChecked === false &&
                    tempIsChecked2 === false &&
                    tempIsChecked3 === false &&
                    tempIsChecked4 === false &&
                    tempIsChecked5 === false &&
                    tempIsChecked6 === false &&
                    tempIsChecked7 === false &&
                    tempIsChecked8 === false &&
                    tempIsChecked9 === false &&
                    tempIsChecked10 === false &&
                    tempIsChecked11 === false &&
                    tempIsChecked12 === false &&
                    tempIsChecked13 === true
                  )
                }
              />
            </Label>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <div>
          {tempIsChecked === true &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === true &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === true &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === true &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === true &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === true &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === true &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === true &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === true &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === true &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === true &&
          tempIsChecked12 === false &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === true &&
          tempIsChecked13 === false ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
        <div>
          {tempIsChecked === false &&
          tempIsChecked2 === false &&
          tempIsChecked3 === false &&
          tempIsChecked4 === false &&
          tempIsChecked5 === false &&
          tempIsChecked6 === false &&
          tempIsChecked7 === false &&
          tempIsChecked8 === false &&
          tempIsChecked9 === false &&
          tempIsChecked10 === false &&
          tempIsChecked11 === false &&
          tempIsChecked12 === false &&
          tempIsChecked13 === true ? (
            <p className="text-center" style={{ color: 'red' }}>
              Minimum of one value must be selected
            </p>
          ) : null}
        </div>
      </Row>
      <Row>
        <Col className="text-end">
          <Button onClick={handCheck} className="button-active">
            Save
          </Button>
        </Col>
      </Row>
    </>
  )
}

CheckyBox.propTypes = {
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
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  setIsChecked8: PropTypes.func,
  setIsChecked9: PropTypes.func,
  setIsChecked10: PropTypes.func,
  setIsChecked11: PropTypes.func,
  setIsChecked12: PropTypes.func,
  setIsChecked13: PropTypes.func,
  temp: PropTypes.string,
  tempMin: PropTypes.string,
  tempMax: PropTypes.string,
  feelsLike: PropTypes.string,
  pressure: PropTypes.string,
  humidity: PropTypes.string,
  clouds: PropTypes.string,
  weather: PropTypes.string,
  rain: PropTypes.string,
  snow: PropTypes.string,
  dewPoint: PropTypes.string,
  visibility: PropTypes.string,
  wind: PropTypes.string,
  setTemp: PropTypes.func,
  setTempMin: PropTypes.func,
  setTempMax: PropTypes.func,
  setFeelsLike: PropTypes.func,
  setPressure: PropTypes.func,
  setHumidity: PropTypes.func,
  setClouds: PropTypes.func,
  setWeather: PropTypes.func,
  setRain: PropTypes.func,
  setSnow: PropTypes.func,
  setDewPoint: PropTypes.func,
  setVisibility: PropTypes.func,
  setWind: PropTypes.func,
  close: PropTypes.func,
  setFileValue: PropTypes.func,
}

export default CheckyBox
