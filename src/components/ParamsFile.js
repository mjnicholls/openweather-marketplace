import React, { useState } from 'react'
import { Button, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import { file } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import ParamCategories from './ParamsCategory'

const FileParams = ({parameters, setParameters}) => {

  const [alert, setAlert] = useState(null)

  const [checked, setCheckBoxChecked] = useState(false);

  const onAddCategory = value => {
    setCheckBoxChecked(value);
    setParameters(value)
  };

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
              <ParamCategories
        key={"channel.key"}
        options={file}
        onChange={value => onAddCategory(value)}
        checked={checked}
      />
      </ReactBSAlert>,
    )
  }

return (
  <>
  {alert}
        <Button className='button-neutral'
        onClick={fileAlert}>
          File:{' '}
          {checked ? parameters : 'CSV'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}

export default FileParams