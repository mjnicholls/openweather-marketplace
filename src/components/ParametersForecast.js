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
  isChecked,
  setIsChecked,
  isChecked2,
  setIsChecked2,
  isChecked3,
  setIsChecked3,
  isChecked4,
  setIsChecked4,
  isChecked5,
  setIsChecked5,
  isChecked6,
  setIsChecked6,
  isChecked7,
  setIsChecked7,
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson
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
            isChecked={isChecked}
            setIsChecked={setIsChecked}
            isChecked2={isChecked2}
            setIsChecked2={setIsChecked2}
            isChecked3={isChecked3}
            setIsChecked3={setIsChecked3}
            isChecked4={isChecked4}
            setIsChecked4={setIsChecked4}
            isChecked5={isChecked5}
            setIsChecked5={setIsChecked5}
            isChecked6={isChecked6}
            setIsChecked6={setIsChecked6}
            isChecked7={isChecked7}
            setIsChecked7={setIsChecked7}
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
            fileCheck={fileCheck}
            setFileCheck={setFileCheck}
            fileCheck2={fileCheck2}
            setFileCheck2={setFileCheck2}
            csv={csv}
            setCSV={setCSV}
            json={json}
            setJson={setJson}
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
