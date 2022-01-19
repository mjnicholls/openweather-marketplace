import React, { useState }from 'react'
import PropTypes from 'prop-types'
import { Button, Col, Row, Input, Label } from 'reactstrap'

const EditName = ({ location, locations, setLocations, setisEdit, index }) => {

    const [error, setError] = useState()

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

      const addLocation = (e) => {
        if (e.key === "Enter") {
          setLocations(location);
        }
        setisEdit(false);
      };

  return  (
    <div>
    <Row className="container-main text-start">
      <Col>
        <Label> Name </Label>
        <Input
          type="text"
          onChange={(e) => editLocation(e.target.value, index)}
          className={error ? 'danger-border' : ''}
          name="name"
          //value={location.name}
        />
        <div className={`invalid-feedback ${error ? 'd-block' : ''}`}>
          {error}
        </div>
      </Col>

    </Row>

    <br />
    <Row>
      <Col className="text-end">
        <Button
          className="button-active shadow-none"
          data-dismiss="modal"
          type="button"
          onClick={addLocation}
          //disabled={tempStatus === status && name === tempName}
        >
          Update
        </Button>
      </Col>
    </Row>
  </div>
  )
}

EditName.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  status: PropTypes.string,
  close: PropTypes.func,
}

export default EditName
