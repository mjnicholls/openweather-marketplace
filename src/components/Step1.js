import React from 'react'

import PropTypes from 'prop-types'
import { useSelector } from 'react-redux'
import Select from 'react-select'
import { Col, Form, Label, FormGroup, Input, Row } from 'reactstrap'

import { titles } from '../config'

const selectEmail = (state) => state.auth.email

const Step1 = ({
  invoiceSettings,
  setInvoiceSettings,
  error,
  email,
  isNew,
  setEmail,
}) => {
  const emailFromState = useSelector(selectEmail)

  const handleChange = (key, value) => {
    const newObj = { ...invoiceSettings }
    newObj[key] = value
    setInvoiceSettings(newObj)
  }

  return (
    <div>
      <Col className="bold text-start">
        <h3>Billing Details</h3>
      </Col>
      <Form className="text-start">
        <Label>Legal form: </Label>
        <FormGroup className="mr-4">
          <Label style={{ paddingRight: '20px' }} check>
            <input
              defaultChecked
              id="organisationRadioButton"
              name="legalForm"
              type="radio"
              // checked={invoiceSettings.type === "organisation"}
              onChange={() => handleChange('type', 'organisation')}
              disabled={!isNew && invoiceSettings.type === 'individual'}
            />
            <span className="form-check-sign" /> Organisation
          </Label>
          <Label check>
            <input
              id="individualRadioButton"
              name="legalForm"
              type="radio"
              checked={invoiceSettings.type === 'individual'}
              onChange={() => handleChange('type', 'individual')}
              disabled={!isNew && invoiceSettings.type === 'organisation'}
            />
            <span className="form-check-sign" /> Individual
          </Label>
        </FormGroup>
      </Form>

      <Form className="form-horizontal text-start">
        {invoiceSettings.type === 'individual' ? (
          <>
            <Row>
              <Col>
                <Label>Title</Label>
                <FormGroup>
                  <Select
                    className="react-select info mb-3"
                    classNamePrefix="react-select"
                    onChange={(title) => {
                      handleChange('title', title.code)
                    }}
                    options={titles}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.code}
                    placeholder={
                      invoiceSettings.title
                        ? titles.find(
                            (obj) => obj.code === invoiceSettings.title,
                          ).name
                        : ''
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <Label>First Name *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange('first_name', e.target.value)}
                    value={invoiceSettings.first_name}
                    className={
                      !invoiceSettings.first_name.length && error.first_name
                        ? 'danger-border'
                        : ''
                    }
                  />
                  {!invoiceSettings.first_name.length ? (
                    <div
                      className={`invalid-feedback ${
                        error.first_name ? 'd-block' : ''
                      }`}
                    >
                      {error.first_name}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col>
                <Label>Last Name *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange('last_name', e.target.value)}
                    value={invoiceSettings.last_name}
                    className={
                      !invoiceSettings.last_name.length && error.last_name
                        ? 'danger-border'
                        : ''
                    }
                  />
                  {!invoiceSettings.last_name.length ? (
                    <div
                      className={`invalid-feedback ${
                        error.last_name ? 'd-block' : ''
                      }`}
                    >
                      {error.last_name}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Phone Number *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange('phone', e.target.value)}
                    value={invoiceSettings.phone}
                    className={error.phone ? 'danger-border' : ''}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.phone ? 'd-block' : ''
                    }`}
                  >
                    {error.phone}
                  </div>
                </FormGroup>
              </Col>
              <Col>
                <Label>Email *</Label>
                <FormGroup>
                  <>
                    <Input
                      type="text"
                      onChange={
                        emailFromState !== null
                          ? setEmail(emailFromState)
                          : (e) => setEmail(e.target.value)
                      }
                      value={emailFromState !== null ? emailFromState : email}
                      disabled={emailFromState !== null}
                      className={error.email ? 'danger-border' : ''}
                    />
                    <div
                      className={`invalid-feedback ${
                        error.email ? 'd-block' : ''
                      }`}
                    >
                      {error.email}
                    </div>
                  </>
                </FormGroup>
              </Col>
            </Row>
          </>
        ) : (
          <>
            <Row>
              <Col>
                <Label>Organisation *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) =>
                      handleChange('organisation', e.target.value)
                    }
                    value={invoiceSettings.organisation}
                    className={
                      !invoiceSettings.organisation.length && error.organisation
                        ? 'danger-border'
                        : ''
                    }
                  />
                  {!invoiceSettings.organisation.length ? (
                    <div
                      className={`invalid-feedback ${
                        error.organisation ? 'd-block' : ''
                      }`}
                    >
                      {error.organisation}
                    </div>
                  ) : null}
                </FormGroup>
              </Col>
              <Col>
                <Label>VAT ID</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => {
                      handleChange('vat_id', e.target.value)
                    }}
                    value={invoiceSettings.vat_id}
                    className={error.vat_id ? 'danger-border' : ''}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.vat_id ? 'd-block' : ''
                    }`}
                  >
                    {error.vat_id}
                  </div>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <Label>Phone Number *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange('phone', e.target.value)}
                    value={invoiceSettings.phone}
                    className={error.phone ? 'danger-border' : ''}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.phone ? 'd-block' : ''
                    }`}
                  >
                    {error.phone}
                  </div>
                </FormGroup>
              </Col>
              <Col>
                <Label>Email *</Label>
                <FormGroup>
                  <>
                    <Input
                      type="text"
                      onChange={
                        emailFromState !== null
                          ? setEmail(emailFromState)
                          : (e) => setEmail(e.target.value)
                      }
                      value={emailFromState !== null ? emailFromState : email}
                      disabled={emailFromState !== null}
                      className={
                        !email.length && error.email ? 'danger-border' : ''
                      }
                    />
                    {!email.length ? (
                      <div
                        className={`invalid-feedback ${
                          error.email ? 'd-block' : ''
                        }`}
                      >
                        {error.email}
                      </div>
                    ) : null}
                  </>
                </FormGroup>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </div>
  )
}

Step1.propTypes = {
  error: PropTypes.object,
  isNew: PropTypes.bool,
  invoiceSettings: PropTypes.object,
  setInvoiceSettings: PropTypes.func,
  email: PropTypes.string,
  setEmail: PropTypes.func,
}

export default Step1
