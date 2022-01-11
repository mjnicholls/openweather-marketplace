import React, { useState } from 'react'
import { Button } from 'reactstrap'
import { download } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'
import ParamCategories from './ParamsCategory'

const DownloadParams = ({parameters, setParameters}) => {

  const [alert, setAlert] = useState(null)

  const [checked, setCheckBoxChecked] = useState(false);

  const onAddCategory = value => {
    setCheckBoxChecked(value);
    setParameters(value)
  };

  const hideAlert = () => {
    setAlert(null)
  }

  const downloadAlert = () => {
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
        options={download}
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
        onClick={downloadAlert}>
          Download:{' '}
          {checked ? parameters : 'One file'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}

export default DownloadParams