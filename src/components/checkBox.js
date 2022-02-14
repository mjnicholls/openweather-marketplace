import React, { useState } from "react";
import { Label, Form, FormGroup, Input, Row } from "reactstrap";
import { weathers } from "../config";

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
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked2, setIsChecked2] = useState(false);
  const [isChecked3, setIsChecked3] = useState(false);
  const [isChecked4, setIsChecked4] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
  const [isChecked8, setIsChecked8] = useState(false);
  const [isChecked9, setIsChecked9] = useState(false);
  const [isChecked10, setIsChecked10] = useState(false);
  const [isChecked11, setIsChecked11] = useState(false);
  const [isChecked12, setIsChecked12] = useState(false);
  const [isChecked13, setIsChecked13] = useState(false);

  const handleParameterToggle = () => {
    if (isChecked) {
      setTemp("On");
    } else {
      setTemp("Off");
    }
    handleOnChange();
    setFileValue(true);
  };

  const handleOnChange = () => {
    setIsChecked(!isChecked);
  };

  const handleParameterToggle2 = () => {
    if (isChecked2) {
      setTempMin("On");
    } else {
      setTempMin("Off");
    }
    handleOnChange2();
    setFileValue(true);
  };

  const handleOnChange2 = () => {
    setIsChecked2(!isChecked2);
  };

  const handleParameterToggle3 = () => {
    if (isChecked3) {
      setTempMax("On");
    } else {
      setTempMax("Off");
    }
    handleOnChange3();
    setFileValue(true);
  };

  const handleOnChange3 = () => {
    setIsChecked3(!isChecked3);
  };

  const handleParameterToggle4 = () => {
    if (isChecked4) {
      setFeelsLike("On");
    } else {
      setFeelsLike("Off");
    }
    handleOnChange4();
    setFileValue(true);
  };

  const handleOnChange4 = () => {
    setIsChecked4(!isChecked4);
  };

  const handleParameterToggle5 = () => {
    if (isChecked5) {
      setPressure("On");
    } else {
      setPressure("Off");
    }
    handleOnChange5();
    setFileValue(true);
  };

  const handleOnChange5 = () => {
    setIsChecked5(!isChecked5);
  };

  const handleParameterToggle6 = () => {
    if (isChecked6) {
      setHumidity("On");
    } else {
      setHumidity("Off");
    }
    handleOnChange6();
    setFileValue(true);
  };

  const handleOnChange6 = () => {
    setIsChecked6(!isChecked6);
  };

  const handleParameterToggle7 = () => {
    if (isChecked7) {
      setClouds("On");
    } else {
      setClouds("Off");
    }
    handleOnChange7();
    setFileValue(true);
  };

  const handleOnChange7 = () => {
    setIsChecked7(!isChecked7);
  };

  const handleParameterToggle8 = () => {
    if (isChecked8) {
      setWeather("On");
    } else {
      setWeather("Off");
    }
    handleOnChange8();
    setFileValue(true);
  };

  const handleOnChange8 = () => {
    setIsChecked8(!isChecked8);
  };

  const handleParameterToggle9 = () => {
    if (isChecked9) {
      setRain("On");
    } else {
      setRain("Off");
    }
    handleOnChange9();
    setFileValue(true);
  };

  const handleOnChange9 = () => {
    setIsChecked9(!isChecked9);
  };

  const handleParameterToggle10 = () => {
    if (isChecked10) {
      setSnow("On");
    } else {
      setSnow("Off");
    }
    handleOnChange10();
    setFileValue(true);
  };

  const handleOnChange10 = () => {
    setIsChecked10(!isChecked10);
  };

  const handleParameterToggle11 = () => {
    if (isChecked11) {
      setDewPoint("On");
    } else {
      setDewPoint("Off");
    }
    handleOnChange11();
    setFileValue(true);
  };

  const handleOnChange11 = () => {
    setIsChecked11(!isChecked11);
  };

  const handleParameterToggle12 = () => {
    if (isChecked12) {
      setVisibility("On");
    } else {
      setVisibility("Off");
    }
    handleOnChange12();
    setFileValue(true);
  };

  const handleOnChange12 = () => {
    setIsChecked12(!isChecked12);
  };

  const handleParameterToggle13 = () => {
    if (isChecked13) {
      setWind("On");
    } else {
      setWind("Off");
    }
    handleOnChange13();
    setFileValue(true);
  };

  const handleOnChange13 = () => {
    setIsChecked13(!isChecked13);
  };

  // State with list of all checked item
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
                onChange={handleParameterToggle}
                checked={!isChecked}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Min Temp
              <Input
                type="checkbox"
                onChange={handleParameterToggle2}
                checked={!isChecked2}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Temp Max
              <Input
                type="checkbox"
                onChange={handleParameterToggle3}
                checked={!isChecked3}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Feels Like
              <Input
                type="checkbox"
                onChange={handleParameterToggle4}
                checked={!isChecked4}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Pressure
              <Input
                type="checkbox"
                onChange={handleParameterToggle5}
                checked={!isChecked5}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Humidity
              <Input
                type="checkbox"
                onChange={handleParameterToggle6}
                checked={!isChecked6}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Clouds
              <Input
                type="checkbox"
                onChange={handleParameterToggle7}
                checked={!isChecked7}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Weather
              <Input
                type="checkbox"
                onChange={handleParameterToggle8}
                checked={!isChecked8}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Rain
              <Input
                type="checkbox"
                onChange={handleParameterToggle9}
                checked={!isChecked9}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Snow
              <Input
                type="checkbox"
                onChange={handleParameterToggle10}
                checked={!isChecked10}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Dew Point
              <Input
                type="checkbox"
                onChange={handleParameterToggle11}
                checked={!isChecked11}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Visibility
              <Input
                type="checkbox"
                onChange={handleParameterToggle12}
                checked={!isChecked12}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              Wind
              <Input
                type="checkbox"
                onChange={handleParameterToggle13}
                checked={!isChecked13}
                className="text-right"
              />
            </Label>
          </FormGroup>
        </Form>
      </Row>
    </>
  );
};

export default CheckyBox;
