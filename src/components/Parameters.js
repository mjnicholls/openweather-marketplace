import React from 'react'

import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

import DownloadParams from './ParamsDownload'
import FileParams from './ParamsFile'
import UnitsParams from './ParamsUnits'
import WeatherParams from './ParamsWeather'

const Parameters = ({
  downloadsValue,
  setDownloadsValue,
  formatValue,
  setFormatValue,
  fileValue,
  setFileValue,
  unitsValue,
  setUnitsValue,
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
}) => (
  <>
    <Row className="mt-3">
      <Col className="text-start">
        <WeatherParams
          fileValue={fileValue}
          setFileValue={setFileValue}
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

        <UnitsParams unitsValue={unitsValue} setUnitsValue={setUnitsValue} />

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
)

Parameters.propTypes = {
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  isChecked8: PropTypes.bool,
  isChecked9: PropTypes.bool,
  isChecked10: PropTypes.bool,
  isChecked11: PropTypes.bool,
  isChecked12: PropTypes.bool,
  isChecked13: PropTypes.bool,
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  setIsChecked8: PropTypes.func,
  setIsChecked9: PropTypes.func,
  setIsChecked10: PropTypes.func,
  setIsChecked11: PropTypes.func,
  setIsChecked12: PropTypes.func,
  setIsChecked13: PropTypes.func,
  temp: PropTypes.string,
  setTemp: PropTypes.func,
  tempMin: PropTypes.string,
  setTempMin: PropTypes.func,
  tempMax: PropTypes.string,
  setTempMax: PropTypes.func,
  pressure: PropTypes.string,
  setPressure: PropTypes.func,
  humidity: PropTypes.string,
  setHumidity: PropTypes.func,
  feelsLike: PropTypes.string,
  setFeelsLike: PropTypes.func,
  rain: PropTypes.string,
  setRain: PropTypes.func,
  snow: PropTypes.string,
  setSnow: PropTypes.func,
  weather: PropTypes.string,
  setWeather: PropTypes.func,
  clouds: PropTypes.string,
  setClouds: PropTypes.func,
  dewPoint: PropTypes.string,
  setDewPoint: PropTypes.func,
  visibility: PropTypes.string,
  setVisibility: PropTypes.func,
  wind: PropTypes.string,
  setWind: PropTypes.func,
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  setFileCheck: PropTypes.func,
  setFileCheck2: PropTypes.func,
  csv: PropTypes.string,
  setCSV: PropTypes.func,
  json: PropTypes.string,
  setJson: PropTypes.func,
  fileValue: PropTypes.bool,
  setFileValue: PropTypes.func,
  unitsValue: PropTypes.string,
  setUnitsValue: PropTypes.func,
  downloadsValue: PropTypes.string,
  setDownloadsValue: PropTypes.func,
  formatValue: PropTypes.string,
  setFormatValue: PropTypes.func,
}

export default Parameters
