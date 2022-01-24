import React, { useState } from "react";

import { useSelector } from "react-redux";

import { Label, Col, Row, FormGroup, Button } from "reactstrap";
import Select from "react-select";
import { statesOfAmerica, years } from "../config";

const selectCurrency = (state) => state.auth.currency;

const DataUSState = () => {
  const currency = useSelector(selectCurrency);

  const [price, setPrice] = useState(0);
  const [country, setCountry] = useState("");
  const [zip, setZip] = useState("");
  const [year, setYear] = useState("");

  const handleChange = (e) => {
    setZip(e.zip);
    setCountry(e.value);
    setPrice(e.price);
  };

  return (
    <div className="container">
      <Row>
        <Col md="7" className="page-padding text-start">
          <div style={{ marginBottom: "50px" }}>
            <h3>Historical Weather Data by State</h3>
            <h6>for all ZIP codes in the US</h6>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="text-start">
          <Label>Select state</Label>
          <FormGroup>
            <Select
              className="react-select info mb-3"
              classNamePrefix="react-select"
              options={statesOfAmerica}
              onChange={(e) => handleChange(e)}
              placeholder="Select US State"
            />
          </FormGroup>
        </Col>
        <Col className="text-start">
          <Label>Select year</Label>
          <FormGroup>
            <Select
              className="react-select info mb-3"
              classNamePrefix="react-select"
              options={years}
              onChange={(e) => setYear(e.value)}
              //value={year}
            />
          </FormGroup>
        </Col>
      </Row>

      <Row className="us-header">
        <Col className="text-start">
          <h4>Details</h4>
        </Col>
      </Row>

      <Row className="us-header-2">
        <Col className="text-start">
          <h6>Weather parameters</h6>
        </Col>
        <Col className="text-start">
          <h6>Units: Standard (Kelvin, hPa, meter/sec, mm/h)</h6>
        </Col>
      </Row>

      <Row className="US-list">
        <Col md="3" className="text-start">
          <ul>
            <li>Temperature</li>
            <li>Min temperature</li>
            <li>Max temperature</li>
            <li>Feels like</li>
            <li>Wind (speed, direction)</li>
            <li>Pressure</li>
          </ul>
        </Col>
        <Col md="3" className="text-start">
          <ul>
            <li>Humidity</li>
            <li>Clouds</li>
            <li>Weather conditions</li>
            <li>Rain</li>
            <li>Snow</li>
          </ul>
        </Col>
        <Col md="6" className="text-start">
          <h6>File Format: CSV</h6>
        </Col>
      </Row>

      <Row className="us-header flex-end price">
        <Col>
          <p style={{ fontSize: "14pt" }}>
            <i>To proceed please fill in the required details</i>
          </p>{" "}
        </Col>
        <Col>
          <p style={{ fontWeight: "bold", fontSize: "18pt" }}>
            Total {price} {currency}
          </p>
        </Col>
        {country && year ? (
          <Col>
            <Button className="button-orange-square">Place Order</Button>
          </Col>
        ) : (
          <Col>
            <Button disabled className="button-neutral-square">
              Don't Place Order
            </Button>
          </Col>
        )}
      </Row>
    </div>
  );
};

export default DataUSState;
