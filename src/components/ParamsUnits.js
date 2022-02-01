import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { units } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";

const UnitsParams = ({unitsValue, setUnitsValue }) => {
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
            {units.map((option) => (
              <FormGroup check className="form-check-radio">
                <Label check>
                  {option.label}
                  <Input
                    // id="individualRadioButton"
                    id={option.value}
                    name="file"
                   // checked={option.value === setUnitsValue}
                    onChange={() => setUnitsValue(option.value)}
                    type="radio"
                    value={option.value}
                  />
                </Label>
              </FormGroup>
            ))}
          </Form>
          <p>{unitsValue}</p>
        </Row>
        {/*}
              <ParamCategories
        key={"channel.key"}
        options={file}
        onChange={value => onAddCategory(value)}
        checked={checked}
      />
    */}
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
