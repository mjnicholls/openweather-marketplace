import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { file } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";

const FileParams = ({formatValue, setFormatValue}) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const fileAlert = () => {
    setAlert(
      <ReactBSAlert
        title="File Format:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="text-start mt-4">
          <Form className="checkbox-radios ml-5">
            {file.map((option) => (
              <FormGroup check className="form-check-radio">
                <Label check>
                  {option.label}
                  <Input
                    // id="individualRadioButton"
                    id={option.value}
                    name="file"
                    // checked={option.value === formatValue}
                    onChange={() => setFormatValue(option.value)}
                    type="radio"
                    value={option.value}
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
      <Button className="button-neutral" onClick={fileAlert}>
        File: {formatValue ? formatValue : "CSV"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default FileParams;
