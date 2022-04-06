import React, { useState } from 'react'

import classnames from 'classnames'
import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { Col, Form, Label, FormGroup, Input, Row } from 'reactstrap'

import { countriesDefault } from '../config'

const selectInvoice = (state) => state.auth.invoiceInfo.country

const Step2 = ({ invoiceSettings, setInvoiceSettings, error }) => {
  const [countries, setCountries] = useState(countriesDefault)

  const invoice = useSelector(selectInvoice)

  const handleChange = (key, value) => {
    // eslint-disable-next-line
    let newObj = Object.assign({}, invoiceSettings);
    newObj[key] = value
    setInvoiceSettings(newObj)

    console.log('set', setCountries)
  }

  console.log('invooce', invoice.length)
  return (
    <div>
      <Col className="bold text-start">
        <h3>Billing Address</h3>
      </Col>
      <Form className="text-start">
        <Row>
          <Col md="12">
            <Label>Address Line 1 *</Label>
            <FormGroup>
              <Input
                type="text"
                onChange={(e) => handleChange('address_line_1', e.target.value)}
                value={invoiceSettings.address_line_1}
                className={
                  !invoiceSettings.address_line_1.length && error.address_line_1
                    ? 'danger-border'
                    : ''
                }
              />
              {!invoiceSettings.address_line_1.length ? (
                <div
                  className={`invalid-feedback ${
                    error.address_line_1 ? 'd-block' : ''
                  }`}
                >
                  {error.address_line_1}
                </div>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="12">
            <Label>Address Line 2</Label>
            <FormGroup>
              <Input
                type="text"
                onChange={(e) => handleChange('address_line_2', e.target.value)}
                value={invoiceSettings.address_line_2}
              />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Label>Country *</Label>
            {invoice.length > 1 ? (
              <FormGroup>
                <Input type="text" value={invoice} disabled></Input>
              </FormGroup>
            ) : (
              <FormGroup>
                <Select
                  className={classnames(
                    'react-select info mb-3',
                    error.country ? 'react-select info mb-3 danger-border' : '',
                  )}
                  classNamePrefix="react-select"
                  onChange={(country) => {
                    handleChange('country', country.code)
                  }}
                  options={countries}
                  placeholder={invoice}
                  // disabled={invoice.length > 1 ? true : false}
                  getOptionLabel={(option) => option.name}
                  getOptionValue={(option) => option.code}
                />
                <div
                  className={`invalid-feedback ${
                    error.country ? 'd-block' : ''
                  }`}
                >
                  {error.country}
                </div>
              </FormGroup>
            )}
          </Col>
          <Col md="6">
            <Label>City *</Label>
            <FormGroup>
              <Input
                type="text"
                onChange={(e) => handleChange('city', e.target.value)}
                value={invoiceSettings.city}
                className={
                  !invoiceSettings.city.length && error.city
                    ? 'danger-border'
                    : ''
                }
              />
              {!invoiceSettings.city.length ? (
                <div
                  className={`invalid-feedback ${error.city ? 'd-block' : ''}`}
                >
                  {error.city}
                </div>
              ) : null}
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Label>Postcode *</Label>
            <FormGroup>
              <Input
                type="text"
                onChange={(e) => handleChange('postal_code', e.target.value)}
                value={invoiceSettings.postal_code}
                className={
                  !invoiceSettings.postal_code.length && error.postal_code
                    ? 'danger-border'
                    : ''
                }
              />
              {!invoiceSettings.postal_code.length ? (
                <div
                  className={`invalid-feedback ${
                    error.postal_code ? 'd-block' : ''
                  }`}
                >
                  {error.postal_code}
                </div>
              ) : null}
            </FormGroup>
          </Col>

          <Col md="6">
            <Label>State</Label>
            <FormGroup>
              <Input
                type="text"
                onChange={(e) => handleChange('state', e.target.value)}
                value={invoiceSettings.state}
              />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </div>
  )
}

Step2.propTypes = {
  error: PropTypes.object,
  invoiceSettings: PropTypes.object,
  setInvoiceSettings: PropTypes.func,
}

export default Step2
