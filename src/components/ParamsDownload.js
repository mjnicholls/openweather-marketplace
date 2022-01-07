import React from 'react'
import { Label, Form, FormGroup, Input, Row } from 'reactstrap'

const DownloadParams = () => {

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
                    All locations in a single file
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    One file per location
                </Label>
              </FormGroup>
             </Form>
     </Row>
  </>
)
}

export default DownloadParams