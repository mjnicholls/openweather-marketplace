import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button, Col, Form, Label, Row } from "reactstrap";
import {
  validatePhoneNumber,
  validateVat,
  validateEmail,
} from "../utils/validation";
import PropTypes from "prop-types";
import { noBlankErrorMessage } from "../config";
import axios from "axios";
import { loadStripe } from "@stripe/stripe-js";
import Step0HistoryBulk from "./Step0HistoryBulk";
import Step1 from "./Step1";
import Step2 from "./Step2";

const selectEmail = (state) => state.auth.email;
const selectInvoice = (state) => state.auth.invoiceInfo;

const InvoiceSettingsBulk = ({
  startDate,
  endDate,
  country,
  year,
  unitsValue,
  fileValue,
  formatValue,
  downloadsValue,
  locations,
  currency,
  temp,
  setTemp,
  pressure,
  setPressure,
  humidity,
  setHumidity,
  clouds,
  setClouds,
  dewPoint,
  setDewPoint,
  precipitation,
  setPrecipitation,
  wind,
  setWind,
  isChecked,
  setIsChecked,
  isChecked2,
  isChecked3,
  isChecked4,
  isChecked5,
  isChecked6,
  isChecked7,
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

  const [isNew, setIsNew] = useState(true);

  const invoice = useSelector(selectInvoice);
  const emailFromState = useSelector(selectEmail);

  const [alert, setAlert] = React.useState(null);

  const [invoiceSettings, setInvoiceSettings] = useState(invoice);

  const [email, setEmail] = useState("");

  const confirmInvoice = () => {
    setError({});

    const newError = {};

    const mandatoryFields = [
      "address_line_1",
      "city",
      "country",
      "postal_code",
    ];

    for (let i = 0; i < mandatoryFields.length; i += 1) {
      if (!invoiceSettings[mandatoryFields[i]]) {
        newError[mandatoryFields[i]] = noBlankErrorMessage;
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
      history_forecast_bulk: {
        locations: locations,
        from: startDate,
        to: endDate,
        parameters: {
          temp: temp,
          pressure: pressure,
          humidity: humidity,
          clouds: clouds,
          dew_point: dewPoint,
          precipitation: precipitation,
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
      .post(
        "https://marketplace-weather.owm.io/api/history_forecast_bulks",
        datas,
        {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        }
      )
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
      setError({});

      const mandatoryFields = ["phone"];

      if (invoiceSettings.type === "individual") {
        mandatoryFields.push("first_name");
        mandatoryFields.push("last_name");
      } else {
        mandatoryFields.push("organisation");
      }
      for (let i = 0; i < mandatoryFields.length; i += 1) {
        if (!invoiceSettings[mandatoryFields[i]]) {
          newError[mandatoryFields[i]] = noBlankErrorMessage;
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
      setError(newErrors);

      if (email) {
        const emailValidation = validateEmail(email);
        if (emailValidation) {
          newError.email = emailValidation;
        }
      }

      if (invoiceSettings.phone) {
        const phoneValidation = validatePhoneNumber(invoiceSettings.phone);
        if (phoneValidation) {
          newError.phone = phoneValidation;
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
        <Step0HistoryBulk
          year={year}
          country={country}
          endDate={endDate}
          startDate={startDate}
          fileValue={fileValue}
          unitsValue={unitsValue}
          downloadsValue={downloadsValue}
          formatValue={formatValue}
          locations={locations}
          currency={currency}
          temp={temp}
          setTemp={setTemp}
          pressure={pressure}
          setPressure={setPressure}
          humidity={humidity}
          setHumidity={setHumidity}
          clouds={clouds}
          setClouds={setClouds}
          dewPoint={dewPoint}
          setDewPoint={setDewPoint}
          precipitation={precipitation}
          setPrecipitation={setPrecipitation}
          wind={wind}
          setWind={setWind}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
          isChecked2={isChecked2}
          isChecked3={isChecked3}
          isChecked4={isChecked4}
          isChecked5={isChecked5}
          isChecked6={isChecked6}
          isChecked7={isChecked7}
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
          email={email}
          setEmail={setEmail}
          error={error}
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
  isChecked: PropTypes.bool,
  isChecked2: PropTypes.bool,
  isChecked3: PropTypes.bool,
  isChecked4: PropTypes.bool,
  isChecked5: PropTypes.bool,
  isChecked6: PropTypes.bool,
  isChecked7: PropTypes.bool,
  temp: PropTypes.string,
  pressure: PropTypes.string,
  humidity: PropTypes.string,
  clouds: PropTypes.string,
  dewPoint: PropTypes.string,
  precipitation: PropTypes.string,
  wind: PropTypes.string,
  setTemp: PropTypes.func,
  setPressure: PropTypes.func,
  setHumidity: PropTypes.func,
  setClouds: PropTypes.func,
  setDewPoint: PropTypes.func,
  setPrecipitation: PropTypes.func,
  setWind: PropTypes.func,
  close: PropTypes.func,
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  setFileCheck: PropTypes.func,
  setFileCheck2: PropTypes.func,
  csv: PropTypes.string,
  setCSV: PropTypes.func,
  json: PropTypes.string,
  setJson: PropTypes.func,
  unitsValue: PropTypes.string,
  fileValue: PropTypes.bool,
  formatValue: PropTypes.string,
  downloadsValue: PropTypes.string,
  startDate: PropTypes.instanceOf(Date),
  endDate: PropTypes.instanceOf(Date),
  locations: PropTypes.array,
  currency: PropTypes.string,
};

export default InvoiceSettingsBulk;
