import React from 'react'

import PropTypes from 'prop-types'
import { Col, Row } from 'reactstrap'

import DownloadParams from './ParamsDownload'
import FileParams from './ParamsFile'
import WeatherHistoryParams from './ParamsHistoryWeather'
import UnitsParams from './ParamsUnits'

const ParametersForecast = ({
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
  setJson,
}) => (
  <>
    <Row className="mt-3">
      <Col>
        <WeatherHistoryParams
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

ParametersForecast.propTypes = {
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  setIsChecked: PropTypes.func,
  setIsChecked2: PropTypes.func,
  setIsChecked3: PropTypes.func,
  setIsChecked4: PropTypes.func,
  setIsChecked5: PropTypes.func,
  setIsChecked6: PropTypes.func,
  setIsChecked7: PropTypes.func,
  temp: PropTypes.string,
  setTemp: PropTypes.func,
  pressure: PropTypes.string,
  setPressure: PropTypes.func,
  humidity: PropTypes.string,
  setHumidity: PropTypes.func,
  clouds: PropTypes.string,
  setClouds: PropTypes.func,
  dewPoint: PropTypes.string,
  setDewPoint: PropTypes.func,
  precipitation: PropTypes.string,
  setPrecipitation: PropTypes.func,
  wind: PropTypes.string,
  setWind: PropTypes.func,
  checked: PropTypes.bool,
  setChecked: PropTypes.func,
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

export default ParametersForecast
