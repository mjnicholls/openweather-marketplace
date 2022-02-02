import React from "react";
import { Col, Row } from "reactstrap";
import WeatherHistoryParams from "./ParamsHistoryWeather";
import UnitsParams from "./ParamsUnits";
import FileParams from "./ParamsFile";
import DownloadParams from "./ParamsDownload";
import PropTypes from "prop-types";

const ParametersForecast = ({   
  checkedWeather,
  setCheckedWeather,
  parametersUnits,
  setParametersUnits,
  downloadsValue,
  setDownloadsValue,
  formatValue,
  setFormatValue,
  fileValue,
  setFileValue,
  unitsValue,
  setUnitsValue,
  checked,
  setChecked
 }) => {
  return (
    <>
      <Row className="mt-3">
        <Col>
          <WeatherHistoryParams
           checkedWeather={checkedWeather}
           setCheckedWeather={setCheckedWeather}
           fileValue={fileValue}
           setFileValue={setFileValue}
           checked={checked}
           setChecked={setChecked}
          />
         <UnitsParams
            parametersUnits={parametersUnits}
            setParametersUnits={setParametersUnits}
            unitsValue={unitsValue}
            setUnitsValue={setUnitsValue}
          />
          <FileParams
            formatValue={formatValue}
            setFormatValue={setFormatValue}
          />
          <DownloadParams
            downloadsValue={downloadsValue}
            setDownloadsValue={setDownloadsValue}
          />
        </Col>
      </Row>
    </>
  );
};

ParametersForecast.propTypes = {
  parameters: PropTypes.object,
  setParameters: PropTypes.object,
};

export default ParametersForecast;
