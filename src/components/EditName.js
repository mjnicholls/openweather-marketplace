import React, { useState } from "react";

import PropTypes from "prop-types";
import { Col, Row, Input, Button } from "reactstrap";

const EditTrigger = ({ locations, setLocations, location, close }) => {
  const [tempName, setTempName] = useState(location.name);
  const [error, setError] = useState(null);

  const editLocation = (name, index) => {
    setError(null);
    if (!tempName) {
      setError("Cannot be blank");
      return;
    }

    if (location.name !== tempName) {
      location.name = tempName;
    }

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
    console.log("index", index);
    close();
  };

  return (
    <div>
      <br />
      <Row>
        <Col>
          <Input
            value={tempName}
            onChange={(e) => setTempName(e.target.value)}
            type="text"
            name="name"
            className={error ? "danger-border" : ""}
          />
        </Col>
        <div className={`invalid-feedback ${error ? "d-block" : ""}`}>
          {error}
        </div>
      </Row>
      <br />
      <Row className="container-main text-start">
        <Col className="text-end">
          <Button className="button-active" onClick={editLocation}>
            Set
          </Button>
        </Col>
      </Row>
    </div>
  );
};

EditTrigger.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  close: PropTypes.func,
};

export default EditTrigger;
