import React from "react";
import { Col, Row } from "reactstrap";
import WeatherHistoryParams from "./ParamsHistoryWeather";
import UnitsParams from "./ParamsUnits";
import FileParams from "./ParamsFile";
import DownloadParams from "./ParamsDownload";

const ParametersForecast = ({ parameters, setParameters }) => {
  

  return (
    <>
      <Row className="mt-3">
        <Col>
        <WeatherHistoryParams parameters={parameters} setParameters={setParameters} />
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

export default ParametersForecast;
