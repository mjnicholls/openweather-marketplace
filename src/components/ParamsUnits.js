import React, { useState } from 'react'
import { Button, Label, Form, FormGroup, Input, Row } from 'reactstrap'
import { units } from '../config'
import ReactBSAlert from 'react-bootstrap-sweetalert'

const ParamCategories = props => {
  return (
    
    <Row className='text-start mt-4'>
    <Form className="checkbox-radios ml-5">
        {props.options.map(option => (
              <FormGroup check key={props.key}>
                <Label check>
              {option.label}
              <Input
                className={props.className}
                name="test"
                checked={option.value === props.checked}
                onChange={() => props.onChange(option.value)}
                type="checkbox"
              />
            </Label>
            </FormGroup>
        ))}
    </Form>
    </Row>
  );
};


const UnitsParams = ({parameters, setParameters}) => {

  const [alert, setAlert] = useState(null)

  const [checked, setCheckBoxChecked] = useState(false);

  const onAddCategory = value => {
    setCheckBoxChecked(value);
    setParameters(value)
  };

  const hideAlert = () => {
    setAlert(null)
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
              <ParamCategories
        key={"channel.key"}
        options={units}
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
        onClick={unitsAlert}>
          Units:{' '}
          {checked ? parameters : 'Metric'}
          {' '}
      <img src="https://home.openweathermap.org/assets/icon_down_black.svg" alt="icon down" />
        </Button>
  </>
)
}

export default UnitsParams