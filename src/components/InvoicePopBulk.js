import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, Label, Row } from "reactstrap";

import PropTypes from "prop-types";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import { validatePhoneNumber, validateVat, validateEmail } from "../utils/validation";
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
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
}) => {
  const [error, setError] = useState({});
  const [step, setStep] = useState(0);

  const [isEmailActive, setIsEmailActive] = useState(false);

  const [isNew, setIsNew] = useState(true);

  const invoice = useSelector(selectInvoice);
  const emailFromState = useSelector(selectEmail);

  const [alert, setAlert] = React.useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

  const [email, setEmail] = useState('')

  const confirmInvoice = () => {
    setError({});

    const newError = {};

    const mandatoryFields = [
      'address_line_1',
      'city',
      'country',
      'postal_code'
    ]

    for (let i = 0; i < mandatoryFields.length; i += 1) {
      if (!invoiceSettings[mandatoryFields[i]]) {
        newError[mandatoryFields[i]] = noBlankErrorMessage
      }
    }

    if (Object.keys(newError).length) {
      setError(newError);
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
        file_format: {
          csv: csv,
          json: json,
        },
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

    if (step === 1) {

      const newError = {};
      setError({})

      const mandatoryFields = [
        'phone',
      ]

      if (invoiceSettings.type === 'individual') {
        mandatoryFields.push('first_name')
        mandatoryFields.push('last_name')
      } else {
        mandatoryFields.push('organisation')
      }
      for (let i = 0; i < mandatoryFields.length; i += 1) {
        if (!invoiceSettings[mandatoryFields[i]]) {
          newError[mandatoryFields[i]] = noBlankErrorMessage
        }
      }

  const newErrors = {};

  if (email === !emailFromState) {
    if (!email) {
      setError({
        email: noBlankErrorMessage,
      });
      return;
    }
  }
    setError(newErrors)

      if (email) {
        const emailValidation = validateEmail(email)
        if (emailValidation){
          newError.email = emailValidation
        }
      }
    

      if (invoiceSettings.phone) {
        const phoneValidation = validatePhoneNumber(invoiceSettings.phone)
        if (phoneValidation) {
          newError.phone = phoneValidation
        }
      }   
      
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
          fileCheck={fileCheck}
          setFileCheck={setFileCheck}
          fileCheck2={fileCheck2}
          setFileCheck2={setFileCheck2}
          csv={csv}
          setCSV={setCSV}
          json={json}
          setJson={setJson}
        />
      ) : null}
      {step === 1 ? (
        <Step1
          invoiceSettings={invoiceSettings}
          setInvoiceSettings={setInvoiceSettings}
          error={error}
          email={email}
          setEmail={setEmail}
          isNew={isNew}
          isEmailActive={isEmailActive}
          setIsEmailActive={setIsEmailActive}
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
