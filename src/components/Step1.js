import React from "react";
import { Col, Form, Label, FormGroup, Input, Row } from "reactstrap";
import Select from "react-select";

import { titles } from "../config";
import PropTypes from "prop-types";

const Step1 = ({
  invoiceSettings,
  setInvoiceSettings,
  error,
  email,
  isNew,
  setEmail
}) => {
  const handleChange = (key, value) => {
    // eslint-disable-next-line
    let newObj = Object.assign({}, invoiceSettings);
    newObj[key] = value;
    setInvoiceSettings(newObj);
  };

  return (
    <div>
      <Col className="bold text-start">
        <h3>Billing Details</h3>
      </Col>
      <Form className="text-start">
        <Label>Legal form: </Label>
        <FormGroup className="mr-4">
        <Label style={{ paddingRight: "20px" }} check>
            <input
              defaultChecked
              id="organisationRadioButton"
              name="legalForm"
              type="radio"
              //checked={invoiceSettings.type === "organisation"}
              onChange={() => handleChange("type", "organisation")}
              disabled={!isNew && invoiceSettings.type === "individual"}
            />
            <span className="form-check-sign" /> Organisation
          </Label>
          <Label check>
            <input
              id="individualRadioButton"
              name="legalForm"
              type="radio"
              checked={invoiceSettings.type === "individual"}
              onChange={() => handleChange("type", "individual")}
              disabled={!isNew && invoiceSettings.type === "organisation"}
            />
            <span className="form-check-sign" /> Individual
          </Label>
        </FormGroup>
      </Form>

      <Form className="form-horizontal text-start">
        {invoiceSettings.type === "individual" ? (
          <>
            <Row>
              <Col>
                <Label>Title</Label>
                <FormGroup>
                  <Select
                    className="react-select info mb-3"
                    classNamePrefix="react-select"
                    onChange={(title) => {
                      handleChange("title", title.code);
                    }}
                    options={titles}
                    getOptionLabel={(option) => option.name}
                    getOptionValue={(option) => option.code}
                    placeholder={
                      invoiceSettings.title
                        ? titles.find(
                            (obj) => obj.code === invoiceSettings.title
                          ).name
                        : ""
                    }
                  />
                </FormGroup>
              </Col>
              <Col>
                <Label>First Name *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange("first_name", e.target.value)}
                    value={invoiceSettings.first_name}
                    className={error.first_name ? "danger-border" : ""}
                  />
                </FormGroup>
                <div
                  className={`invalid-feedback ${
                    error.first_name ? "d-block" : ""
                  }`}
                >
                  {error.first_name}
                </div>
              </Col>
              <Col>
                <Label>Last Name *</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => handleChange("last_name", e.target.value)}
                    value={invoiceSettings.last_name}
                    className={error.last_name ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.last_name ? "d-block" : ""
                    }`}
                  >
                    {error.last_name}
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
                    onChange={(e) => handleChange("phone", e.target.value)}
                    value={invoiceSettings.phone}
                    className={error.phone ? "danger-border" : ""}
                  />
                            <div
                    className={`invalid-feedback ${
                      error.phone ? "d-block" : ""
                    }`}
                  >
                    {error.phone}
                  </div>
                </FormGroup>
               
              </Col>
              <Col>
                <Label>Email *</Label>
                <FormGroup>
                  {email === null ?
                  <>
                  <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={error.email ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.email ? "d-block" : ""
                    }`}
                  >
                    {error.email}
                  </div>
                  </>
                  :
                  <Input
                  type="text"
                  disabled
                  value={email}
                />
                  }
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
                      handleChange("organisation", e.target.value)
                    }
                    value={invoiceSettings.organisation}
                    className={error.organisation ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.organisation ? "d-block" : ""
                    }`}
                  >
                    {error.organisation}
                  </div>
                </FormGroup>
              </Col>
              <Col>
                <Label>VAT ID</Label>
                <FormGroup>
                  <Input
                    type="text"
                    onChange={(e) => {
                      handleChange("vat_id", e.target.value);
                    }}
                    value={invoiceSettings.vat_id}
                    className={error.vat_id ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.vat_id ? "d-block" : ""
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
                    onChange={(e) => handleChange("phone", e.target.value)}
                    value={invoiceSettings.phone}
                    className={error.phone ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.phone ? "d-block" : ""
                    }`}
                  >
                    {error.phone}
                  </div>
                </FormGroup>
              </Col>
              <Col>
                <Label>Email *</Label>
                <FormGroup>
                  {email === null ?
                  <>
                    <Input
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    className={error.email ? "danger-border" : ""}
                  />
                  <div
                    className={`invalid-feedback ${
                      error.email ? "d-block" : ""
                    }`}
                  >
                    {error.email}
                  </div>
                  </>
                  :
                  <Input
                  type="text"
                  disabled
                  value={email}
                />
                  }
                </FormGroup>
              </Col>
            </Row>
          </>
        )}
      </Form>
    </div>
  );
};

Step1.propTypes = {
  error: PropTypes.object,
  isNew: PropTypes.bool,
  invoiceSettings: PropTypes.object,
  setInvoiceSettings: PropTypes.func,
  email: PropTypes.string,
};

export default Step1;
