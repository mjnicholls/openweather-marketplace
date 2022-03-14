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
  setChecked,
  on,
  setOn,
  temp,
  setTemp,
  tempMin,
  setTempMin,
  tempMax,
  setTempMax,
  feelsLike,
  setFeelsLike,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  weather,
  setWeather,
  rain,
  setRain,
  snow,
  setSnow,
  dewPoint,
  setDewPoint,
  visibility,
  setVisibility,
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
  isChecked8,
  setIsChecked8,
  isChecked9,
  setIsChecked9,
  isChecked10,
  setIsChecked10,
  isChecked11,
  setIsChecked11,
  isChecked12,
  setIsChecked12,
  isChecked13,
  setIsChecked13,
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
}) => {
  return (
    <>
      <Row className="mt-3">
   <Col className="text-start">
          <WeatherParams
            checkedWeather={checkedWeather}
            setCheckedWeather={setCheckedWeather}
            parametersWeather={parametersWeather}
            setparametersWeather={setparametersWeather}
            fileValue={fileValue}
            setFileValue={setFileValue}
            checked={checked}
            setChecked={setChecked}
            on={on}
            setOn={setOn}
            temp={temp}
            setTemp={setTemp}
            tempMin={tempMin}
            setTempMin={setTempMin}
            tempMax={tempMax}
            setTempMax={setTempMax}
            feelsLike={feelsLike}
            setFeelsLike={setFeelsLike}
            pressure={pressure}
            setPressure={setPressure}
            humidity={humidity}
            setHumidity={setHumidity}
            clouds={clouds}
            setClouds={setClouds}
            weather={weather}
            setWeather={setWeather}
            rain={rain}
            setRain={setRain}
            snow={snow}
            setSnow={setSnow}
            dewPoint={dewPoint}
            setDewPoint={setDewPoint}
            visibility={visibility}
            setVisibility={setVisibility}
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
            isChecked8={isChecked8}
            setIsChecked8={setIsChecked8}
            isChecked9={isChecked9}
            setIsChecked9={setIsChecked9}
            isChecked10={isChecked10}
            setIsChecked10={setIsChecked10}
            isChecked11={isChecked11}
            setIsChecked11={setIsChecked11}
            isChecked12={isChecked12}
            setIsChecked12={setIsChecked12}
            isChecked13={isChecked13}
            setIsChecked13={setIsChecked13}
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

Parameters.propTypes = {
  parameters: PropTypes.object,
  setParameters: PropTypes.func,
};

export default Parameters;
