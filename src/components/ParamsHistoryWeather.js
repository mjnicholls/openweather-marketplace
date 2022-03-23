import React, { useState } from "react";
import { Button, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBoxHistory from "./checkBoxHistory";
import PropTypes from "prop-types";

const WeatherHistoryParams = ({
  fileValue,
  setFileValue,
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
}) => {

  const [alert, setAlert] = useState(null);

  //const [fileValue, setFileValue] = useState();

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
        <Row className="text-start mt-4">
          <CheckyBoxHistory
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
            close={hideAlert}
          />
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert} style={{fontSize: "11pt"}}>
        Parameters: {fileValue ? "Custom" : "All"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default WeatherHistoryParams;
