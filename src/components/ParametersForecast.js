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
  setChecked,
  temp,
  setTemp,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  dewPoint,
  setDewPoint,
  precipitation,
  setPrecipitation,
  wind,
  setWind,
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
            temp={temp}
            setTemp={setTemp}
            pressure={pressure}
            setPressure={setPressure}
            humidity={humidity}
            setHumidity={setHumidity}
            clouds={clouds}
            setClouds={setClouds}
            dewPoint={dewPoint}
            setDewPoint={setDewPoint}
            precipitation={precipitation}
            setPrecipitation={setPrecipitation}
            wind={wind}
            setWind={setWind}
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
  setParameters: PropTypes.func,
};

export default ParametersForecast;
