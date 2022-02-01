import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBox from "./checkBox";

const WeatherParams = ({checkedWeather, setCheckedWeather, fileValue, setFileValue}) => {
  const [alert, setAlert] = useState(null);

  //const [fileValue, setFileValue] = useState([]);

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
      <CheckyBox checkedWeather={checkedWeather} setCheckedWeather={setCheckedWeather} setFileValue={setFileValue} />
          {/*}
            <Form className="checkbox-radios ml-5">
              {weathers
                  .map((option) => (
                    <FormGroup check className="form-check-radio">
                    <Label check>
                      {option.label}
                      <Input
                          type="checkbox"
                          id={option.value}
                        name="file"
                        onChange={() => setFileValue(option.value)}
                        value={option.value}
                      />
                    </Label>
                  </FormGroup>
                ))
                .slice(0, 7)}
            </Form>
                  */}
          </Col>
                 {/*} 
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
        */}
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert}>
        Parameters: {fileValue === true ? "Custom" : "All"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default WeatherParams;
