import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, Label, Row } from "reactstrap";

import {
  getAccountInfo,
  updateBillingDetails,
  confirmVatNumber,
  createBillingDetails,
} from "../api/personalAccountAPI";

import Step0 from "./Step0";
import Step1 from "./Step1";
import Step2 from "./Step2";

const selectInvoice = (state) => state.auth.invoiceInfo;
const selectEmail = (state) => state.auth.email;

const InvoiceSettings = ({ country, year, price }) => {

  const [error, setError] = useState({});
  const [isNew, setIsNew] = useState(true);
  const [step, setStep] = useState(0);

  const invoice = useSelector(selectInvoice);
  const email = useSelector(selectEmail);

  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

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

  const billingInfoCreate = () => {
    createBillingDetails(invoiceSettings)
      .then(() => {
        console.log("Billing details saved");
        refreshData();
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(`Error saving billing details + ${error.message}`);
      });
  };

  const billingInfoUpdate = () => {
    updateBillingDetails(invoiceSettings)
      .then(() => {
        console.log("Billing details updated");
      })
      // eslint-disable-next-line
      .catch((error) => {
        console.log(`Error saving billing details + ${error.message}`);
      });
  };

  const confirmInvoice = () => {
    setError({});
    const newError = {
    county: !country.length,
    year: !year.length,
      country: !invoiceSettings.country.length,
      address_line_1: !invoiceSettings.address_line_1.length,
      address_line_2: !invoiceSettings.address_line_2.length,
      city: !invoiceSettings.address_line_2.length,
      postal_code: !invoiceSettings.postal_code.length,
      phone: !invoiceSettings.phone.length,
    };

    setError(newError);

    console.log('new error', newError)

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
    } 
    else {
      console.log("decrement-error-2");
    }
  };

  const decrementStepOne = () => {
    if (step === 1) {
      setStep(0);
    } 
    else {
      console.log("decrement-error-1");
    }
  };


  const firstStep = () => {
        setStep(1);
  }

  const incrementStep = () => {
    setError({});

    if (step === 1) {
      const newError = {};
      if (invoiceSettings.type === "individual") {
        if (
          !invoiceSettings.first_name.length ||
          !invoiceSettings.last_name.length
        ) {
          newError.first_name = !invoiceSettings.first_name.length;
          newError.last_name = !invoiceSettings.last_name.length;
        }
      } else {
        // eslint-disable-next-line
        if (!invoiceSettings.organisation.length) {
          newError.organisation = true;
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


  return (
    <div>
        <Row>
            <Col className={step === 0 ? "step-header" : "step-header-neutral"}>
            1
            </Col>
          <Col>
            <hr/>
            </Col>
            <Col className={step === 1 ? "step-header" : "step-header-neutral"}>
            2
            </Col>
            <Col>
            <hr/>
            </Col>
            <Col className={step === 2 ? "step-header" : "step-header-neutral"}>
            3
            </Col>
        </Row>
        <Row className="small-text text-middle">
            <Col>
            Order details
            </Col>
            <Col>
            
            </Col>
            <Col>
            Billing details
            </Col>
            <Col>
            
            </Col>
            <Col>
            Billing address
            </Col>
        </Row>
        <br/>
      {step === 0 ? (
        <Step0 year={year} country={country} price={price} />
      ) : null}
      {step === 1 ? (
        <Step1
          invoiceSettings={invoiceSettings}
          setInvoiceSettings={setInvoiceSettings}
          isNew={isNew}
          error={error}
          email={email}
        />
      ) : null}

      {step === 2 ? (
        <Step2
          invoiceSettings={invoiceSettings}
          setInvoiceSettings={setInvoiceSettings}
          isNew={isNew}
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
                  onClick={confirmInvoice}
                  style={{
                    float: "right",
                  }}
                >
                  Subscribe
                </Button>
                </>
            )}
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default InvoiceSettings;
