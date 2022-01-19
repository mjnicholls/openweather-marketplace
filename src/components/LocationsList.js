/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Col, Input, Row } from "reactstrap";
import { Edit, Delete, Ok } from "react-ikonate";

const LocationList = ({ locations, setLocations }) => {
  const [isEdit, setisEdit] = useState(false);

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
    setisEdit(true);
  };

  const deleteLocation = (index) => {
    const locationsCopy = [...locations];
    locationsCopy.splice(index, 1);
    setLocations(locationsCopy);
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
          <Row className="trigger-item bold">
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

                {isEdit ? (
                  <>
                    <Col md="3" className="text-nowrap">
                      <Input
                        value={location.name}
                       onChange={(e) => editLocation(e.target.value, index)}
                        type="text"
                        name="name"
                      />
                    </Col>
                    <Col>
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
                <Col>
                  <Delete onClick={() => deleteLocation(index)}></Delete>
                </Col>
                <Col>

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
