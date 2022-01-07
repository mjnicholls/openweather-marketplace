import React from 'react'
import { Col, Label, Form, FormGroup, Input, Row } from 'reactstrap'

const WeatherParams = () => {

return (
  <>
      <Row className='text-start mt-4'>
 <Col md="6">
 <Form className="checkbox-radios ml-5">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Temperature
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Max Temperature
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Pressure
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Clouds
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Rain
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Dew Point
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Wind (speed, direction, gust)
                </Label>
              </FormGroup>
            </Form>
     </Col>
     <Col md="6">
 <Form className="checkbox-radios ml-5">
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                   Min Temperature
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Feels like
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Humidity
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Weather conditions
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Snow
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    Visibility
                </Label>
              </FormGroup>
            </Form>
     </Col>
     </Row>
  </>
)
}

export default WeatherParams