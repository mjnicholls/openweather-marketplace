/* eslint-disable */
import React from "react";
import PropTypes from "prop-types";
import { Col, Row, Button } from "reactstrap";
import { Close } from "react-ikonate";
import EditNameCard from "./EditNameCard";

const LocationListHistory = ({ locations, setLocations, price, setPrice }) => {
  const deleteLocation = (index) => {
    const locationsCopy = [...locations];
    locationsCopy.splice(index, 1);
    setLocations(locationsCopy);
    setPrice(price - 35);
  };

  return (
    <div className="my-3">
      <Row className="w-100 mx-0">
        <Col>
          <Row className="trigger-item bold d-md-flex d-none">
            <Col md="1">#</Col>
            <Col md="3">Name</Col>
            <Col></Col>
            <Col md="3">Latitude</Col>
            <Col md="3">Longitude</Col>
            <Col></Col>
            <Col></Col>
          </Row>

          {locations.length ? (
            locations.map((location, index) => (
              <Row className="trigger-item" key={index}>
                <Col md="1">{index + 1}</Col>

                <Col className="d-md-flex d-lg-none text-end">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                    }}
                    title="Update"
                    className="text-end shadow-none"
                    onClick={() => deleteLocation(index)}
                  >
                    <Close style={{ color: "black" }}></Close>
                  </Button>
                  {"  "}
                  <EditNameCard
                    locations={locations}
                    setLocations={setLocations}
                    location={location}
                  />
                </Col>

                <Col md="3">{location.name}</Col>
                <Col></Col>

                <Col md="3">{parseFloat(location.lat).toFixed(6)}</Col>
                <Col md="3">{parseFloat(location.lon).toFixed(6)}</Col>
                <Col className="d-lg-flex d-none">
                  <Button
                    style={{
                      backgroundColor: "transparent",
                      border: "none",
                      padding: "0px",
                    }}
                    title="Update"
                    className="text-end shadow-none"
                    onClick={() => deleteLocation(index)}
                  >
                    <Close style={{ color: "black" }}></Close>
                  </Button>
                </Col>
                <Col className="d-lg-flex d-none">
                  <EditNameCard
                    locations={locations}
                    setLocations={setLocations}
                    location={location}
                  />
                </Col>
              </Row>
            ))
          ) : (
            <Row className="trigger-item text-start">
              <Col className="text-start">No selected locations.</Col>
            </Row>
          )}
        </Col>
      </Row>
    </div>
  );
};

LocationListHistory.propTypes = {
  locations: PropTypes.array,
  setLocations: PropTypes.func,
  price: PropTypes.number,
  setPrice: PropTypes.func,
};

export default LocationListHistory;