import React, { useState } from "react";
import { Button, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { download } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";

const DownloadParams = ({ downloadsValue, setDownloadsValue }) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const downloadAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Download:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="text-start mt-4">
          <Form className="checkbox-radios ml-5">
            {download.map((option, index) => (
              <FormGroup key={index} check className="form-check-radio">
                <Label check>
                  {option.label}
                  <Input
                    // id="individualRadioButton"
                    id={option.value}
                    name="file"
                    // checked={option.value === downloadsValue}
                    onChange={() => setDownloadsValue(option.value)}
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
      <Button className="button-neutral" onClick={downloadAlert}>
        Downloads: {downloadsValue ? downloadsValue : "All locations"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default DownloadParams;
