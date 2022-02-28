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
            {units.map((option, index) => (
              <FormGroup key={index} check className="form-check-radio">
                <Label check>
                  {option.label}
                  <Input
                    id={option.value}
                    name="file"
                    onChange={() => {
                    setUnitsValue(option.value)
                  }}
                    type="radio"
                    checked={unitsValue === option.value ? true : false}
                  />
                </Label>
              </FormGroup>
            ))}
          </Form>
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
