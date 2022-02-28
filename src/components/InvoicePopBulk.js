import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, Label, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import { getAccountInfo, stripe } from "../api/personalAccountAPI";
import PropTypes from "prop-types";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { validatePhoneNumber, validateVat } from "../utils/validation";
import { noBlankErrorMessage } from "../config";

import Step0Bulk from "./Step0Bulk";
import Step1 from "./Step1";
import Step2 from "./Step2";

const selectInvoice = (state) => state.auth.invoiceInfo;
const selectEmail = (state) => state.auth.email;

const InvoiceSettingsBulk = ({
  startDate,
  endDate,
  country,
  year,
  price,
  importPrice,
  checkedWeather,
  unitsValue,
  fileValue,
  formatValue,
  downloadsValue,
  locations,
  currency,
  temp,
  tempMin,
  tempMax,
  feelsLike,
  pressure,
  humidity,
  clouds,
  weather,
  rain,
  snow,
  dewPoint,
  visibility,
  wind,
  isChecked,
  setIsChecked,
  isChecked2,
  isChecked3,
  isChecked4,
  isChecked5,
  isChecked6,
  isChecked7,
  isChecked8,
  isChecked9,
  isChecked10,
  isChecked11,
  isChecked12,
  isChecked13,
}) => {
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

  console.log("body", invoiceSettings);

  const confirmInvoice = () => {
    setError({});
    const newError = {
      address_line_1: !invoiceSettings.address_line_1.length,
      city: !invoiceSettings.city.length,
      postal_code: !invoiceSettings.postal_code.length,
      email: !email.length,
      country: !invoiceSettings.country.length,
    };

    if (!invoiceSettings.address_line_1) {
      setError({
        address_line_1: noBlankErrorMessage,
      });
      return;
    }
    if (!invoiceSettings.city) {
      setError({
        city: noBlankErrorMessage,
      });
      return;
    }
    if (!invoiceSettings.country) {
      setError({
        country: noBlankErrorMessage,
      });
      return;
    }
    if (!invoiceSettings.country) {
      setError({
        country: "Please select a country",
      });
      return;
    }
    if (!invoiceSettings.postal_code) {
      setError({
        postal_code: noBlankErrorMessage,
      });
      return;
    }

    setError(newError);

    console.log("new error", newError);

    if (Object.values(newError).filter(Boolean).length) {
      console.log("Please fill in required fields");
      return;
    }

    const datas = {
      invoice_info: {
        ...invoiceSettings,
      },
      account: {
        email: email,
      },
      history_bulk: {
        locations: locations,
        from: startDate.toLocaleString(),
        to: endDate.toLocaleString(),
        parameters: {
          temp: temp,
          temp_min: tempMin,
          temp_max: tempMax,
          feels_like: feelsLike,
          pressure: pressure,
          humidity: humidity,
          clouds: clouds,
          weather: weather,
          rain: rain,
          snow: snow,
          dew_point: dewPoint,
          visibility: visibility,
          wind: wind,
        },
        units: unitsValue,
        file_format: formatValue,
        saving_mode: downloadsValue,
      },
    };

    const invoiceDetails = { ...datas };

    console.log("everything", invoiceDetails);

    if (invoiceDetails.type === "individual") {
      delete invoiceDetails.organisation;
      delete invoiceDetails.vat_id;
    } else {
      delete invoiceDetails.title;
      delete invoiceDetails.first_name;
      delete invoiceDetails.last_name;
    }
    invoiceDetails.legal_form = invoiceDetails.type;
    delete invoiceDetails.type;

    axios
      .post("https://marketplace-weather.owm.io/api/history_bulks", datas, {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      })
      .then((res) => {
        loadStripe(res.data.stripe_publishable_key).then((stripe) => {
          stripe.redirectToCheckout({
            sessionId: res.data.stripe_session_id,
          });
        });
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  console.log("vat", invoiceSettings.vat_id);

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
        if (!invoiceSettings.first_name) {
          setError({
            first_name: noBlankErrorMessage,
          });
          return;
        }
        if (!invoiceSettings.last_name) {
          setError({
            last_name: noBlankErrorMessage,
          });
          return;
        }
        
        if (!invoiceSettings.phone) {
          setError({
            phone: noBlankErrorMessage,
          });
          return;
          } 
          
          if (invoiceSettings.phone) {
            const phoneValidation = validatePhoneNumber(invoiceSettings.phone);
          if (phoneValidation) {
            newError.phone = phoneValidation;
          }
        }

        if (!email) {
          setError({
            email: noBlankErrorMessage,
          });
          return;
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
        if (!invoiceSettings.organisation) {
          setError({
            organisation: noBlankErrorMessage,
          });
          return;
        }
        if (!invoiceSettings.phone) {
          setError({
            phone: noBlankErrorMessage,
          });
          return;
          } 
          
          if (invoiceSettings.phone) {
            const phoneValidation = validatePhoneNumber(invoiceSettings.phone);
          if (phoneValidation) {
            newError.phone = phoneValidation;
          }
        }
        if (!email) {
          setError({
            email: noBlankErrorMessage,
          });
          return;
        }
      }
      {
        if (invoiceSettings.vat_id) {
          validateVat(invoiceSettings.vat_id)
            .then(() => {
              invoiceSettings.vat_id = invoiceSettings.vat_id;
            })
            .catch(() => {
              newError.vat_id = "VAT ID is not valid";
            })
            .finally(() => {
              if (Object.keys(newError).length) {
                setError(newError);
                return;
              }
            });
        }
      }
      if (Object.keys(newError).length) {
        setError(newError);
        return;
      } else {
        setStep(2);
      }
    }
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
        <Step0Bulk
          year={year}
          country={country}
          price={price}
          importPrice={importPrice}
          endDate={endDate}
          startDate={startDate}
          checkedWeather={checkedWeather}
          fileValue={fileValue}
          unitsValue={unitsValue}
          downloadsValue={downloadsValue}
          formatValue={formatValue}
          locations={locations}
          currency={currency}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
          isChecked4={isChecked4}
          isChecked5={isChecked5}
          isChecked6={isChecked6}
          isChecked7={isChecked7}
          isChecked8={isChecked8}
          isChecked9={isChecked9}
          isChecked10={isChecked10}
          isChecked11={isChecked11}
          isChecked12={isChecked12}
          isChecked13={isChecked13}
        />
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
                  onClick={confirmInvoice}
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

InvoiceSettingsBulk.propTypes = {
  year: PropTypes.string,
  country: PropTypes.string,
  price: PropTypes.number,
};

export default InvoiceSettingsBulk;
