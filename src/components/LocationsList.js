/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Input, Row } from "reactstrap";
import { Edit, Delete, Ok } from "react-ikonate";

const LocationList = ({ locations, setLocations, price, setPrice }) => {
  const [isEdit, setisEdit] = useState(false);

  //const [rowEdited, setRowEdited] = useState(-1)

  const editLocation = (name, index) => {
    const newLocations = locations.map((el, i) => {
      if (index !== i) {
        return el;
      } else {
        return {
          ...el,
          name,
        };
      }
    });

    setLocations(newLocations);
      console.log('index', index)
    setisEdit(true);
  };

  const deleteLocation = (index) => {
    const locationsCopy = [...locations];
    locationsCopy.splice(index, 1);
    setLocations(locationsCopy);
    setPrice(price - 7);
  };

  const addLocation = (e) => {
    if (e.key === "Enter") {
      setLocations(location);
    }
    setisEdit(false);
  };

  return (
    <div className="my-3">
      <Row className="w-100 mx-0">
        <Col>
          <Row className="trigger-item bold d-md-flex d-none">
            <Col md="1">#</Col>
            <Col md="3">Name</Col>
            {isEdit ? <Col>Set</Col> : <Col></Col>}
            <Col md="3">Latitude</Col>
            <Col md="3">Longitude</Col>
            <Col></Col>
            <Col></Col>
          </Row>

          {locations.length ? (
            locations.map((location, index) => (
              <Row className="trigger-item" key={index}>
                <Col md="1">{index + 1}</Col>

                <Col className="d-sm-flex d-md-none text-end">
                  <Delete onClick={() => deleteLocation(index)}></Delete>
                  {"  "}

                  <Edit onClick={(index) => editLocation(index)}></Edit>
                </Col>

                {isEdit ? (
                  <>
                    <Col md="3">
                      <Input
                        value={location.name}
                        onChange={(e) => editLocation(e.target.value, index)}
                        type="text"
                        name="name"
                      />
                    </Col>
                    <Col className="text-end">
                      <Ok onClick={addLocation}>Set</Ok>
                    </Col>
                  </>
                ) : (
                  <>
                    <Col md="3">{location.name}</Col>
                    <Col></Col>
                  </>
                )}

                <Col md="3">{parseFloat(location.lat).toFixed(6)}</Col>
                <Col md="3">{parseFloat(location.lon).toFixed(6)}</Col>
                <Col className="d-md-flex d-none">
                  <Delete onClick={() => deleteLocation(index)}></Delete>
                </Col>
                <Col className="d-md-flex d-none">
                  <Edit onClick={() => editLocation(index)}></Edit>
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

LocationList.propTypes = {
  locations: PropTypes.func,
  setLocations: PropTypes.bool,
};

export default LocationList;
