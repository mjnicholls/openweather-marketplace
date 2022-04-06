import React, { useState } from 'react'

import PropTypes from 'prop-types'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import { Button, Label, Form, FormGroup, Input, Row } from 'reactstrap'

import { download } from '../config'

const DownloadParams = ({ downloadsValue, setDownloadsValue }) => {
  const [alert, setAlert] = useState(null)

  const hideAlert = () => {
    setAlert(null)
  }

  const downloadAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Download:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="text-start mt-4">
          <Form className="checkbox-radios ml-5">
            {download.map((option, ind) => (
              <FormGroup
                check
                index={ind}
                className="form-check-radio"
                onChange={(e) => {
                  setDownloadsValue(e.target.value)
                }}
              >
                <Label check>
                  {option.label}
                  <Input
                    id={option.value}
                    name="file"
                    type="radio"
                    value={option.value}
                    defaultChecked={option.value === downloadsValue}
                  />
                </Label>
              </FormGroup>
            ))}
          </Form>
        </Row>
      </ReactBSAlert>,
    )
  }

  return (
    <>
      {alert}
      <Button
        className="button-neutral"
        onClick={downloadAlert}
        style={{ fontSize: '11pt' }}
      >
        Downloads: {downloadsValue || 'All locations'}{' '}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  )
}

DownloadParams.propTypes = {
  downloadsValue: PropTypes.string,
  setDownloadsValue: PropTypes.func,
}

export default DownloadParams
