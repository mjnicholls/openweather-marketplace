import React, { useState } from 'react'
import { Button, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import { file } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'

const FileParams = () => {

const [alert, setAlert] = useState(null)

const [fileValue, setFileValue] = useState()

console.log('test', fileValue)

  const hideAlert = () => {
    setAlert(null)
  }

  const fileAlert = () => {
    setAlert(
      <ReactBSAlert
        title="File Format:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
            <Row className='text-start mt-4'>
    <Form className="checkbox-radios ml-5">
        {file.map(option => (
              <FormGroup check className="form-check-radio">
                <Label check>
              {option.label}
              <Input
                id="individualRadioButton"
                name="file"
                checked={option.value === fileValue}
                onChange={() => setFileValue(option.value)}
                type="checkbox"
                value={fileValue}
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
        onClick={fileAlert}>
          File:{' '}
          {fileValue ? fileValue : 'CSV'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}

export default FileParams