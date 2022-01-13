import React, { useState } from 'react'
import { Button, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import { download } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'

const DownloadParams = () => {

const [alert, setAlert] = useState(null)

const [fileValue, setFileValue] = useState()

console.log('test', fileValue)

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
            <Row className='text-start mt-4'>
    <Form className="checkbox-radios ml-5">
        {download.map(option => (
              <FormGroup check className="form-check-radio">
                <Label check>
              {option.label}
            <Input
                    // id="individualRadioButton"
                    id={option.value}
                    name="file"
                    // checked={option.value === fileValue}
                    onChange={() => setFileValue(option.value)}
                    type="radio"
                    value={option.value}
                  />
            </Label>
            </FormGroup>
        ))}
    </Form>
    </Row>
        {/*}
              <ParamCategories
        key={"channel.key"}
        options={file}
        onChange={value => onAddCategory(value)}
        checked={checked}
      />
    */}

      </ReactBSAlert>,
    )
  }

return (
  <>
  {alert}
        <Button className='button-neutral'
        onClick={downloadAlert}>
          Downloads:{' '}
          {fileValue ? fileValue : 'All locations'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}

export default DownloadParams