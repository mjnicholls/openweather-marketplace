import React from "react";
import { Col, Row } from "reactstrap";
import WeatherParams from "./ParamsWeather";
import UnitsParams from "./ParamsUnits";
import FileParams from "./ParamsFile";
import DownloadParams from "./ParamsDownload";
import PropTypes from "prop-types";

const Parameters = ({
  checkedWeather,
  setCheckedWeather,
  parametersUnits,
  setParametersUnits,
  parametersWeather,
  setparametersWeather,
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
          <WeatherParams
            checkedWeather={checkedWeather}
            setCheckedWeather={setCheckedWeather}
            parametersWeather={parametersWeather}
            setparametersWeather={setparametersWeather}
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

Parameters.propTypes = {
  parameters: PropTypes.object,
  setParameters: PropTypes.func,
};

export default Parameters;
