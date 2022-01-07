import React from 'react'
import { Label, Form, FormGroup, Input, Row } from 'reactstrap'

const FilesParams = () => {

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
                    CSV
                </Label>
              </FormGroup>
              <FormGroup check>
                <Label check>
                <Input
                    type="checkbox"
                  />
                  <span className="form-check-sign" />
                    JSON
                </Label>
              </FormGroup>
             </Form>
     </Row>
  </>
)
}

export default FilesParams