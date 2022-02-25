import React, { useState } from "react";
import { Button, Col, Label, Form, FormGroup, Input, Row } from "reactstrap";
import { weathersHistory } from "../config";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBoxHistory from "./checkBoxHistory";

const WeatherHistoryParams = ({
  checkedWeather,
  setCheckedWeather,
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
            checkedWeather={checkedWeather}
            setCheckedWeather={setCheckedWeather}
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
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert}>
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