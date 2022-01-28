import React, { useState } from "react";
import { Button, Col, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { weathers } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";

const WeatherParams = () => {
  const [alert, setAlert] = useState(null);

  const [fileValue, setFileValue] = useState();

  const hideAlert = () => {
    setAlert(null);
  };

  const weatherAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Weather Parameters:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="text-start mt-4">
          <Col>
            <Form className="checkbox-radios ml-5">
              {weathers
                .map((option) => (
                  <FormGroup check className="form-check-radio">
                    <Label check>
                      {option.label}
                      <Input
                        id={option.value}
                        name="file"
                        onChange={() => setFileValue(option.value)}
                        type="checkbox"
                        value={option.value}
                      />
                    </Label>
                  </FormGroup>
                ))
                .slice(0, 7)}
            </Form>
          </Col>

          <Col>
            <Form className="checkbox-radios ml-5">
              {weathers
                .map((option) => (
                  <FormGroup check className="form-check-radio">
                    <Label check>
                      {option.label}
                      <Input
                        id={option.value}
                        name="file"
                        onChange={() => setFileValue(option.value)}
                        type="checkbox"
                        value={option.value}
                      />
                    </Label>
                  </FormGroup>
                ))
                .slice(7)}
            </Form>
          </Col>
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert}>
        Parameters: {fileValue ? "Custom" : "All"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default WeatherParams;
