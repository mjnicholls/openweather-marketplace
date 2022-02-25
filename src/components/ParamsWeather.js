import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBox from "./checkBox";

const WeatherParams = ({
  on,
  setOn,
  checkedWeather,
  setCheckedWeather,
  fileValue,
  setFileValue,
  checked,
  setChecked,
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

  //const [fileValue, setFileValue] = useState([]);

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
          <Col>
            <CheckyBox
              checkedWeather={checkedWeather}
              setCheckedWeather={setCheckedWeather}
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
              close={hideAlert}
            />
            {/*}
            <Form className="checkbox-radios ml-5">
              {weathers
                  .map((option) => (
                    <FormGroup check className="form-check-radio">
                    <Label check>
                      {option.label}
                      <Input
                          type="checkbox"
                          id={option.value}
                        name="file"
                        onChange={() => setFileValue(option.value)}
                        value={option.value}
                      />
                    </Label>
                  </FormGroup>
                ))
                .slice(0, 7)}
            </Form>
                  */}
          </Col>
          {/*} 
          <Col>
            <Form className="checkbox-radios ml-5">
              {weathers
                .map((option) => (
                  <FormGroup check className="form-check-radio">
                    <Label check>
                      {option.label}
                      <Input
                        id={option.value}
                        name="file"
                        onChange={() => setFileValue(option.value)}
                        type="checkbox"
                        value={option.value}
                      />
                    </Label>
                  </FormGroup>
                ))
                .slice(7)}
            </Form>
          </Col>
        */}
        </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={weatherAlert}>
        Parameters: {fileValue === true ? "Custom" : "All"}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default WeatherParams;
