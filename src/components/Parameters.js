import React from 'react'
import { Button, Col, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import WeatherParams from './ParamsWeather'
import UnitsParams from './ParamsUnits'
import FilesParams from './ParamsFile'
import DownloadParams from './ParamsDownload'

const Parameters = () => {

    const [alert, setAlert] = React.useState(null)

    const hideAlert = () => {
      setAlert(null)
    }
  
    const weatherAlert = () => {
      setAlert(
        <ReactBSAlert
          title="Weather Parameters"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          showConfirm={false}
          showCloseButton
          customClass="bs-alerts"
        >
        <WeatherParams />
        </ReactBSAlert>,
      )
    }
  
    const unitsAlert = () => {
      setAlert(
        <ReactBSAlert
          title="Units"
          onConfirm={() => hideAlert()}
          onCancel={() => hideAlert()}
          showConfirm={false}
          showCloseButton
          customClass="bs-alerts"
        >
        <UnitsParams />
        </ReactBSAlert>,
      )
    }

    const fileAlert = () => {
        setAlert(
          <ReactBSAlert
            title="File Format"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            showConfirm={false}
            showCloseButton
            customClass="bs-alerts"
          >
         <FilesParams />
          </ReactBSAlert>,
        )
      }

      const downloadAlert = () => {
        setAlert(
          <ReactBSAlert
            title="Download"
            onConfirm={() => hideAlert()}
            onCancel={() => hideAlert()}
            showConfirm={false}
            showCloseButton
            customClass="bs-alerts"
          >
         <DownloadParams />
          </ReactBSAlert>,
        )
      }


return (
  <>
  {alert}
      <Row className='mt-2'>
          <Col>
        <Button className='button-neutral'
        onClick={weatherAlert}>
          Weather Parameters: Custom{' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
        <Button className='button-neutral'
        onClick={unitsAlert}>
          Units: Kelvin{' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
        <Button className='button-neutral'
        onClick={fileAlert}>
          File Format: CSV{' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
        <Button className='button-neutral'
        onClick={downloadAlert}>
          Download: One file{' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
        </Col>
        </Row>
  </>
)
}

export default Parameters