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
  feelsLike, setFeelsLike,
  pressure, setPressure,
  humidity, setHumidity,
  clouds, setClouds,
  weather, setWeather,
  rain, setRain,
  snow, setSnow,
  dewPoint, setDewPoint,
  visibility, setVisibility,
  wind, setWind,
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
