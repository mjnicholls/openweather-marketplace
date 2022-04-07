import React, { useState } from 'react'

import PropTypes from 'prop-types'
import { Button, Col, Label, Form, FormGroup, Input, Row } from 'reactstrap'

const CheckyBoxFile = ({
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
  close,
}) => {
  const [tempIsChecked, setTempIsChecked] = useState(fileCheck)
  const [tempIsChecked2, setTempIsChecked2] = useState(fileCheck2)

  const [tempCSV, setTempCSV] = useState(csv)
  const [tempJson, setTempJson] = useState(json)

  const handCheck = () => {
    if (tempCSV === 'On') {
      setCSV('On')
    } else setCSV('Off')

    if (tempIsChecked === true) {
      setFileCheck(true)
    } else setFileCheck(false)

    if (tempJson === 'On') {
      setJson('On')
    } else setJson('Off')

    if (tempIsChecked2 === true) {
      setFileCheck2(true)
    } else setFileCheck2(false)

    close()
  }

  return (
    <>
      <Row className="text-start mt-4">
        <Form className="checkbox-radio-columns ml-5">
          <FormGroup check className="form-check-radio">
            <Label check>
              CSV
              <Input
                type="checkbox"
                checked={tempIsChecked}
                onChange={() => {
                  setTempCSV(tempCSV === 'On' ? 'Off' : 'On')
                  setTempIsChecked(tempCSV !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              JSON
              <Input
                type="checkbox"
                checked={tempIsChecked2}
                onChange={() => {
                  setTempJson(tempJson === 'On' ? 'Off' : 'On')
                  setTempIsChecked2(tempJson !== 'On')
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>
        </Form>
      </Row>
      <Row>
        <Col className="text-end">
          <Button
            onClick={handCheck}
            className="button-active"
            disabled={!!(tempCSV === 'Off' && tempJson === 'Off')}
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  )
}

CheckyBoxFile.propTypes = {
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  setFileCheck: PropTypes.func,
  setFileCheck2: PropTypes.func,
  csv: PropTypes.string,
  setCSV: PropTypes.func,
  json: PropTypes.string,
  setJson: PropTypes.func,
  close: PropTypes.func,
}

export default CheckyBoxFile
