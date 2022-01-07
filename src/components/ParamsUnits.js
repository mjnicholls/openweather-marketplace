import React from 'react'
import { Label, Form, FormGroup, Input, Row } from 'reactstrap'

const UnitsParams = () => {

return (
  <>
      <Row className='text-start mt-4'>
 <Form className="checkbox-radios ml-5">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Metric (Celsius, hPa, meter/sec, mm/h)
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Imperial (Fahrenheit, hPa, miles/hour, mm/h)
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Standard (Kelvin, hPa, meter/sec, mm/h)
                </Label>
              </FormGroup>
             </Form>
     </Row>
  </>
)
}

export default UnitsParams