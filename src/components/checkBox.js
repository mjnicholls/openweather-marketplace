import React, { useState, useEffect } from "react";
import { Button, Label, Form, FormGroup, Input, Row, Col } from "reactstrap";

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
  setCheckedWeather,
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
  // Current: trying to set state of each weather parameter to 'on' if the checkbox is clicked
  // and 'off' when unclicked

  const [tempIsChecked, setTempIsChecked] = useState(isChecked);
  const [tempIsChecked2, setTempIsChecked2] = useState(isChecked2);
  const [tempIsChecked3, setTempIsChecked3] = useState(isChecked3);
  const [tempIsChecked4, setTempIsChecked4] = useState(isChecked4);
  const [tempIsChecked5, setTempIsChecked5] = useState(isChecked5);
  const [tempIsChecked6, setTempIsChecked6] = useState(isChecked6);
  const [tempIsChecked7, setTempIsChecked7] = useState(isChecked7);
  const [tempIsChecked8, setTempIsChecked8] = useState(isChecked8);
  const [tempIsChecked9, setTempIsChecked9] = useState(isChecked9);
  const [tempIsChecked10, setTempIsChecked10] = useState(isChecked10);
  const [tempIsChecked11, setTempIsChecked11] = useState(isChecked11);
  const [tempIsChecked12, setTempIsChecked12] = useState(isChecked12);
  const [tempIsChecked13, setTempIsChecked13] = useState(isChecked13);

  const [tempStatus, setTempStatus] = useState(temp);
  const [tempStatus2, setTempStatus2] = useState(tempMin);
  const [tempStatus3, setTempStatus3] = useState(tempMax);
  const [tempStatus4, setTempStatus4] = useState(feelsLike);
  const [tempStatus5, setTempStatus5] = useState(pressure);
  const [tempStatus6, setTempStatus6] = useState(humidity);
  const [tempStatus7, setTempStatus7] = useState(clouds);
  const [tempStatus8, setTempStatus8] = useState(weather);
  const [tempStatus9, setTempStatus9] = useState(rain);
  const [tempStatus10, setTempStatus10] = useState(snow);
  const [tempStatus11, setTempStatus11] = useState(dewPoint);
  const [tempStatus12, setTempStatus12] = useState(visibility);
  const [tempStatus13, setTempStatus13] = useState(wind);

  const handCheck = () => {
    if (tempStatus === "On") {
      setTemp("On");
    } else setTemp("Off");

    if (tempIsChecked === true) {
      setIsChecked(true);
    } else setIsChecked(false);

    if (tempStatus2 === "On") {
      setTempMin("On");
    } else setTempMin("Off");

    if (tempIsChecked2 === true) {
      setIsChecked2(true);
    } else setIsChecked2(false);

    if (tempStatus3 === "On") {
      setTempMax("On");
    } else setTempMax("Off");

    if (tempIsChecked3 === true) {
      setIsChecked3(true);
    } else setIsChecked3(false);

    if (tempStatus4 === "On") {
      setFeelsLike("On");
    } else setFeelsLike("Off");

    if (tempIsChecked4 === true) {
      setIsChecked4(true);
    } else setIsChecked4(false);

    if (tempStatus5 === "On") {
      setPressure("On");
    } else setPressure("Off");

    if (tempIsChecked5 === true) {
      setIsChecked5(true);
    } else setIsChecked5(false);

    if (tempStatus6 === "On") {
      setHumidity("On");
    } else setHumidity("Off");

    if (tempIsChecked6 === true) {
      setIsChecked6(true);
    } else setIsChecked6(false);

    if (tempStatus7 === "On") {
      setClouds("On");
    } else setClouds("Off");

    if (tempIsChecked7 === true) {
      setIsChecked7(true);
    } else setIsChecked7(false);

    if (tempStatus8 === "On") {
      setWeather("On");
    } else setWeather("Off");

    if (tempIsChecked8 === true) {
      setIsChecked8(true);
    } else setIsChecked8(false);

    if (tempStatus9 === "On") {
      setRain("On");
    } else setRain("Off");

    if (tempIsChecked9 === true) {
      setIsChecked9(true);
    } else setIsChecked9(false);

    if (tempStatus10 === "On") {
      setSnow("On");
    } else setSnow("Off");

    if (tempIsChecked10 === true) {
      setIsChecked10(true);
    } else setIsChecked10(false);

    if (tempStatus11 === "On") {
      setDewPoint("On");
    } else setDewPoint("Off");

    if (tempIsChecked11 === true) {
      setIsChecked11(true);
    } else setIsChecked11(false);

    if (tempStatus12 === "On") {
      setVisibility("On");
    } else setVisibility("Off");

    if (tempIsChecked12 === true) {
      setIsChecked12(true);
    } else setIsChecked12(false);

    if (tempStatus13 === "On") {
      setWind("On");
    } else setWind("Off");

    if (tempIsChecked13 === true) {
      setIsChecked13(true);
    } else setIsChecked13(false);

    close();
    setFileValue(true);
  };

  console.log("ischecked", isChecked);
  console.log("isTempchecked", tempIsChecked);
  //console.log('temp', tempStatus)
  //console.log('tempMin', tempMin)
  // console.log('tempMax', tempMax)
  // console.log('temptest', temp)
  // Original: create an array of weathers when the user selects in checkboxes
  //TODO: Some way of setting weathers in state to "on" or "off"
  /*
  const [checked, setChecked] = useState([]);
  const checkList = weathers;

  const [on, setOn] = useState('')

  const handleCheck = (event) => {
    var updatedList = [...checked];
    if (event.target.checked) {
      updatedList = [...checked, event.target.value];
    } else {
      updatedList.splice(checked.indexOf(event.target.value), 1);
    }
    setChecked(updatedList);
    setCheckedWeather(updatedList)
    setFileValue(true)
  };

  console.log('on', on)
  // Generate string of checked items
  const checkedItems = checked.length
    ? checked.reduce((total, item) => {
        return total + ", " + item;
      })
     
    : "";

    console.log('checked', checkedItems)

  // Return classes based on whether item is checked
  var isChecked = (item) =>
    checked.includes(item) ? "checked-item" : "not-checked-item";
    */

  return (
    <>
      {/* Original: Loops through selected checkboxes and adds or removes from array */}
      {/*
        <Form className="checkbox-radio-columns ml-5">
          {checkList.map((item, index) => (
               <FormGroup check index={index} check className="form-check-radio">
               <Label check>
               <span className={isChecked(item)}>{item}
              <Input value={item} type="checkbox" onChange={handleCheck} />
              </Label>
              <p></p>
            </FormGroup>
          ))}
</Form>
          */}
      <Row className="text-start mt-4">
        <Form className="checkbox-radio-columns ml-5">
          <FormGroup check className="form-check-radio">
            <Label check>
              Temp
              <Input
                type="checkbox"
                checked={tempIsChecked}
                onChange={() => {
                  setTempStatus(tempStatus === "On" ? "Off" : "On");
                  setTempIsChecked(tempStatus === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus2(tempStatus2 === "On" ? "Off" : "On");
                  setTempIsChecked2(tempStatus2 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus3(tempStatus3 === "On" ? "Off" : "On");
                  setTempIsChecked3(tempStatus3 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus4(tempStatus4 === "On" ? "Off" : "On");
                  setTempIsChecked4(tempStatus4 === "On" ? false : true);
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
                checked={tempIsChecked5}
                onChange={() => {
                  setTempStatus5(tempStatus5 === "On" ? "Off" : "On");
                  setTempIsChecked5(tempStatus5 === "On" ? false : true);
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
                checked={tempIsChecked6}
                onChange={() => {
                  setTempStatus6(tempStatus6 === "On" ? "Off" : "On");
                  setTempIsChecked6(tempStatus6 === "On" ? false : true);
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
                checked={tempIsChecked7}
                onChange={() => {
                  setTempStatus7(tempStatus7 === "On" ? "Off" : "On");
                  setTempIsChecked7(tempStatus7 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus8(tempStatus8 === "On" ? "Off" : "On");
                  setTempIsChecked8(tempStatus8 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus9(tempStatus9 === "On" ? "Off" : "On");
                  setTempIsChecked9(tempStatus9 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus10(tempStatus10 === "On" ? "Off" : "On");
                  setTempIsChecked10(tempStatus10 === "On" ? false : true);
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
                checked={tempIsChecked11}
                onChange={() => {
                  setTempStatus11(tempStatus11 === "On" ? "Off" : "On");
                  setTempIsChecked11(tempStatus11 === "On" ? false : true);
                }}
                className="text-right"
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
                  setTempStatus12(tempStatus12 === "On" ? "Off" : "On");
                  setTempIsChecked12(tempStatus12 === "On" ? false : true);
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
                checked={tempIsChecked13}
                onChange={() => {
                  setTempStatus13(tempStatus13 === "On" ? "Off" : "On");
                  setTempIsChecked13(tempStatus13 === "On" ? false : true);
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Col className="text-end">
          <Button onClick={handCheck} 
          className="button-active"
          disabled={
            tempStatus === "Off" && 
            tempStatus2 === "Off" && 
            tempStatus3 === "Off" && 
            tempStatus4 === "Off" && 
            tempStatus5 === "Off" &&
            tempStatus6 === "Off" && 
            tempStatus7 === "Off" && 
            tempStatus8 === "Off" && 
            tempStatus9 === "Off" && 
            tempStatus10 === "Off" &&
            tempStatus11 === "Off" && 
            tempStatus12 === "Off" && 
            tempStatus13 === "Off"
            ? true : false}
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CheckyBox;
