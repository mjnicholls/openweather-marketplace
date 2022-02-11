import React, { useState } from "react";
import { Label, Form, FormGroup, Input, Row } from "reactstrap";

const CheckyBoxHistory = ({
  setFileValue,
  setTemp,
  setPressure,
  setHumidity,
  setClouds,
  setDewPoint,
  setPrecipitation,
  setWind,
}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isChecked5, setIsChecked5] = useState(false);
  const [isChecked6, setIsChecked6] = useState(false);
  const [isChecked7, setIsChecked7] = useState(false);
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
      setPrecipitation("On");
    } else {
      setPrecipitation("Off");
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

  return (
    <>
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
              Precipitation
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

export default CheckyBoxHistory;
