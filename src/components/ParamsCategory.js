import React from 'react'
import { Label, Form, FormGroup, Input, Row } from 'reactstrap'

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

export default ParamCategories