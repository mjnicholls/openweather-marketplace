import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, Label, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { confirmVatNumber, getAccountInfo } from "../api/personalAccountAPI";
import PropTypes from "prop-types";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";

const selectInvoice = (state) => state.auth.invoiceInfo;
const selectEmail = (state) => state.auth.email;

const InvoiceSettings = ({ country, year, price }) => {
  const [error, setError] = useState({});
  const [step, setStep] = useState(0);

  const [isNew, setIsNew] = useState(true);

  const invoice = useSelector(selectInvoice);
  const email = useSelector(selectEmail);

  const [alert, setAlert] = React.useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

  const confirmInvoice = () => {
    setError({});
    const newError = {
      address_line_1: !invoiceSettings.address_line_1.length,
      city: !invoiceSettings.city.length,
      postal_code: !invoiceSettings.postal_code.length,
      email: !email.length,
      country: !invoiceSettings.country.length,
      phone: !invoiceSettings.phone.length,
    };

    setError(newError);

    console.log("new error", newError);

    if (Object.values(newError).filter(Boolean).length) {
      console.log("Please fill in required fields");
      return;
    }
    if (
      invoiceSettings.type === "organisation" &&
      invoiceSettings.vat_id.length
    ) {
      confirmVatNumber(invoiceSettings.vat_id)
        .then(() => {
          // eslint-disable-next-line
          isNew ? billingInfoCreate() : billingInfoUpdate();
        })
        .catch(() => {
          console.log("Incorrect VAT number");
        });
    } else {
      // eslint-disable-next-line
      isNew ? billingInfoCreate() : billingInfoUpdate();
    }
  };

  const decrementStep = () => {
    if (step === 2) {
      setStep(1);
    } else {
      console.log("decrement-error-2");
    }
  };

  const decrementStepOne = () => {
    if (step === 1) {
      setStep(0);
    } else {
      console.log("decrement-error-1");
    }
  };

  const firstStep = () => {
    setStep(1);
  };

  const incrementStep = () => {
    setError({});

    if (step === 1) {
      const newError = {};
      if (invoiceSettings.type === "individual") {
        if (
          !invoiceSettings.first_name.length ||
          !invoiceSettings.last_name.length ||
          !invoiceSettings.phone.length ||
          !email.length
        ) {
          newError.first_name = !invoiceSettings.first_name.length;
          newError.last_name = !invoiceSettings.last_name.length;
          newError.phone = !invoiceSettings.phone.length;
          newError.email = !email.length;
        }
      } else {
        // eslint-disable-next-line
        if (
          !invoiceSettings.organisation.length ||
          !invoiceSettings.phone.length ||
          !email.length
        ) {
          newError.organisation = !invoiceSettings.organisation.length;
          newError.phone = !invoiceSettings.phone.length;
          newError.email = !email.length;
        }
      }
      console.log("newError", newError);
      setError(newError);
      if (Object.keys(newError).length) {
        // eslint-disable-next-line
        return;
        // eslint-disable-next-line
      } else {
        setStep(2);
      }
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const refreshData = () => {
    getAccountInfo().then((res) => {
      if (Object.keys(res.invoice_info).length) {
        setInvoiceSettings(res.invoice_info);
        setIsNew(false);
      } else {
        setIsNew(true);
      }
    });
  };

  const errorAndConfirm = () => {
    confirmInvoice();
    sorryAlert();
  };

  const sorryAlert = () => {
    setAlert(
      <ReactBSAlert
        customClass="agro-alert"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
      >
        <div className="text-start">
          <Row className="margin-small">
            <h2 className="high2">Sorry!</h2>
          </Row>

          <Row>
            <Col>
              This feature is not available at the moment. If you wish to make
              use of your service, please make a note of your details below, and
              get in touch with us.
            </Col>
          </Row>
          <br />
          <Row className="margin-small">
            <h4>Order Details</h4>
          </Row>
          <Row>
            <Col>State:</Col>
            <Col>{country}</Col>
          </Row>
          <Row>
            <Col>Year:</Col>
            <Col>{year}</Col>
          </Row>
          <br />
          {invoiceSettings.type === "individual" ? (
            <>
              <Row className="margin-small">
                <h4>Billing Details</h4>
              </Row>
              <Row>
                <Col>Title:</Col>
                <Col>{invoiceSettings.title}</Col>
              </Row>
              <Row>
                <Col>First Name:</Col>
                <Col>{invoiceSettings.first_name}</Col>
              </Row>

              <Row>
                <Col>Surname:</Col>
                <Col>{invoiceSettings.last_name}</Col>
              </Row>
              <Row>
                <Col>Phone No.:</Col>
                <Col>{invoiceSettings.phone}</Col>
              </Row>
              <Row>
                <Col>Email:</Col>
                <Col>{email}</Col>
              </Row>
              <br />
            </>
          ) : (
            <>
              <Row className="margin-small">
                <h4>Billing Details</h4>
              </Row>
              <Row>
                <Col>Organisation:</Col>
                <Col>{invoiceSettings.organisation}</Col>
              </Row>
              <Row>
                <Col>VAT ID:</Col>
                <Col>{invoiceSettings.vat_id}</Col>
              </Row>

              <Row>
                <Col>Phone No.:</Col>
                <Col>{invoiceSettings.phone}</Col>
              </Row>
              <Row>
                <Col>Email:</Col>
                <Col>{email}</Col>
              </Row>
              <br />
            </>
          )}
          <Row className="margin-small">
            <h4>Billing Address</h4>
          </Row>

          <Row>
            <Col>Address Line 1:</Col>
            <Col>{invoiceSettings.address_line_1}</Col>
          </Row>
          <Row>
            <Col>Address Line 2:</Col>
            <Col>{invoiceSettings.address_line_2}</Col>
          </Row>

          <Row>
            <Col>Country:</Col>
            <Col>{invoiceSettings.country}</Col>
          </Row>
          <Row>
            <Col>City:</Col>
            <Col>{invoiceSettings.city}</Col>
          </Row>
          <Row>
            <Col>Postcode:</Col>
            <Col>{invoiceSettings.postal_code}</Col>
          </Row>
          <Row>
            <Col>State:</Col>
            <Col>{invoiceSettings.state}</Col>
          </Row>
          <Row>
            <Col>Phone No:</Col>
            <Col>{invoiceSettings.phone}</Col>
          </Row>
          <br />
          <Row className="text-end">
            <Col>
              <a
                href="mailto:info@openweathermap.org"
                type="button"
                className="button-active"
              >
                Contact Us
              </a>
            </Col>
          </Row>
        </div>
      </ReactBSAlert>
    );
  };

  return (
    <div>
      {alert}
      <Row>
        <Col className={step === 0 ? "step-header" : "step-header-neutral"}>
          1
        </Col>
        <Col>
          <hr className={step >= 1 ? "line-active" : "line-neutral"} />
        </Col>
        <Col className={step === 1 ? "step-header" : "step-header-neutral"}>
          2
        </Col>
        <Col>
          <hr className={step === 2 ? "line-active" : "line-neutral"} />
        </Col>
        <Col className={step === 2 ? "step-header" : "step-header-neutral"}>
          3
        </Col>
      </Row>
      <Row className="small-text text-middle">
        <Col>Order details</Col>
        <Col></Col>
        <Col>Billing details</Col>
        <Col></Col>
        <Col>Billing address</Col>
      </Row>
      <br />
      {step === 0 ? (
        <Step0 year={year} country={country} price={price} />
      ) : null}
      {step === 1 ? (
        <Step1
          invoiceSettings={invoiceSettings}
          setInvoiceSettings={setInvoiceSettings}
          error={error}
          email={email}
          isNew={isNew}
        />
      ) : null}

      {step === 2 ? (
        <Step2
          invoiceSettings={invoiceSettings}
          setInvoiceSettings={setInvoiceSettings}
          error={error}
        />
      ) : null}

      <Form className="form-horizontal">
        <Row>
          <Label md="3" />
          <Col md="12" className="text-right">
            {step === 0 && (
              <Button
                className="button-active"
                color="primary"
                type="button"
                onClick={() => firstStep()}
                style={{
                  float: "right",
                }}
              >
                Next
              </Button>
            )}

            {step === 1 && (
              <>
                <Button
                  className="button-neutral"
                  color="default"
                  type="button"
                  onClick={decrementStepOne}
                  style={{
                    float: "left",
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button-neutral"
                  type="button"
                  onClick={incrementStep}
                  style={{
                    float: "right",
                  }}
                >
                  Next
                </Button>
              </>
            )}

            {step === 2 && (
              <>
                <Button
                  className="button-neutral"
                  color="default"
                  type="button"
                  onClick={decrementStep}
                  style={{
                    float: "left",
                  }}
                >
                  Back
                </Button>
                <Button
                  className="button-active"
                  color="primary"
                  type="button"
                  onClick={errorAndConfirm}
                  style={{
                    float: "right",
                  }}
                >
                   Continue with Stripe
                </Button>
              </>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

InvoiceSettings.propTypes = {
  year: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
};

export default InvoiceSettings;
