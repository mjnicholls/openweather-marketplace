import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import WeatherParams from "./ParamsWeather";
import UnitsParams from "./ParamsUnits";
import FileParams from "./ParamsFile";
import DownloadParams from "./ParamsDownload";

const Parameters = ({ parameters, setParameters }) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const weatherAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Weather Parameters"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <WeatherParams parameters={parameters} setParameters={setParameters} />
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Row className="mt-2">
        <Col>
          <Button className="button-neutral" onClick={weatherAlert}>
            Weather Parameters: All{" "}
            <img
              src="https://home.openweathermap.org/assets/icon_down_black.svg"
              alt="icon down"
            />
          </Button>
          <UnitsParams parameters={parameters} setParameters={setParameters} />
          <FileParams parameters={parameters} setParameters={setParameters} />
          <DownloadParams
            parameters={parameters}
            setParameters={setParameters}
          />
        </Col>
      </Row>
    </>
  );
};

export default Parameters;
