import React, { useState } from 'react'
import { Button, Col, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import { weathers } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import ParamCategories from './ParamsCategory'

const WeatherParams = ({parameters, setParameters}) => {

  const [alert, setAlert] = useState(null)

  const [checked, setCheckBoxChecked] = useState(false);

  const onAddCategory = value => {
    setCheckBoxChecked(value);
    setParameters(value)
  };

  const hideAlert = () => {
    setAlert(null)
  }

  const weatherAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Weather"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
              <ParamCategories
        key={"channel.key"}
        options={weathers}
        onChange={value => onAddCategory(value)}
        checked={!checked}
      />
      </ReactBSAlert>,
    )
  }

return (
  <>
  {alert}
        <Button className='button-neutral'
        onClick={weatherAlert}>
          Units:{' '}
          {checked ? 'Custom' : 'All'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}


export default WeatherParams