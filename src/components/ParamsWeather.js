import React, { useState } from "react";
import { Button } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBox from "./checkBox";
import PropTypes from "prop-types";

const WeatherParams = ({
  fileValue,
  setFileValue,
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
  setIsChecked13
}) => {
  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const weatherAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Weather Parameters:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
   
            <CheckyBox
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
              close={hideAlert}
            />
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert} style={{fontSize: "11pt"}}>
        Parameters: {fileValue === true ? "Custom" : "All"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

WeatherParams.propTypes = {
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
  tempMin: PropTypes.string,
  setTempMin: PropTypes.func,
  tempMax: PropTypes.string,
  setTempMax: PropTypes.func,
  pressure: PropTypes.string,
  setPressure: PropTypes.func,
  humidity: PropTypes.string,
  setHumidity: PropTypes.func,
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
  fileValue: PropTypes.bool,
  setFileValue: PropTypes.func,
};

export default WeatherParams;
