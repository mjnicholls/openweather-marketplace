import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { units } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";

const UnitsParams = ({ unitsValue, setUnitsValue }) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

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
          
        <Form className="checkbox-radios ml-5">
              <FormGroup check className="form-check-radio" onChange={(e) => {setUnitsValue(e.target.value)}}>
                {units.map((option, index) => (
                  <Label check key={index}>
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
               

{/* <Form className="checkbox-radios ml-5">
              <FormGroup check className="form-check-radio">
                <Label check>
                Metric (Celsius, hPa, meter/sec, mm/h)
                  <Input
                    name="file"
                    onChange={() => {
                    setUnitsValue("Metric")
                  }}
                    type="radio"
                    checked={unitsValue === "Metric"}
                  />
                </Label>
              </FormGroup>

              <FormGroup check className="form-check-radio">
                <Label check>
                Imperial (Fahrenheit, hPa, miles/hour, mm/h)
                  <Input
                    name="file"
                    onChange={() => {
                    setUnitsValue("Imperial")
                  }}
                    type="radio"
                    checked={unitsValue === "Imperial"}
                  />
                </Label>
              </FormGroup>

              <FormGroup check className="form-check-radio">
                <Label check>
                Standard (Kelvin, hPa, meter/sec, mm/h
                  <Input
                    name="file"
                    onChange={() => {
                    setUnitsValue("Standard")
                  }}
                    type="radio"
                    checked={unitsValue === "Standard"}
                  />
                </Label>
              </FormGroup>

          </Form> */}
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={unitAlert}>
        Units: {unitsValue ? unitsValue : "Metric"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default UnitsParams;
