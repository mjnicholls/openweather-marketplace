import React, { useState } from "react";
import { Button, Col, Label, Form, FormGroup, Input, Row } from "reactstrap";

const CheckyBoxFile = ({
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
  close,
}) => {
  const [tempIsChecked, setTempIsChecked] = useState(fileCheck);
  const [tempIsChecked2, setTempIsChecked2] = useState(fileCheck2);

  const [tempCSV, setTempCSV] = useState(csv);
  const [tempJson, setTempJson] = useState(json);

  // const [error, setError] = useState({});

  const handCheck = () => {

    // setError({});
    // const newError = {
    //   csv: !tempCSV.length,
    //   json: !tempJson.length,
    // };

    if (tempCSV === "On") {
      setCSV("On");
    } else setCSV("Off");

    if (tempIsChecked === true) {
      setFileCheck(true);
    } else setFileCheck(false);

    if (tempJson === "On") {
      setJson("On");
    } else setJson("Off");

    if (tempIsChecked2 === true) {
      setFileCheck2(true);
    } else setFileCheck2(false);

    if (tempCSV === "Off" && tempJson === "Off") {
      setError("You must select at least one option");
    }

    // if (tempCSV === "Off" && tempJson === "Off") {
    //   setError({
    //     csv: "You must select at least one option",
    //   });
    //   setCSV("On");
    //   return;
    // }

    // setError(newError);

    close();
  };

  return (
    <>
      <Row className="text-start mt-4">
        <Form className="checkbox-radio-columns ml-5">
          <FormGroup check className="form-check-radio">
            <Label check>
              CSV
              <Input
                type="checkbox"
                checked={tempIsChecked}
                onChange={() => {
                  setTempCSV(tempCSV === "On" ? "Off" : "On");
                  setTempIsChecked(tempCSV === "On" ? false : true);
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>

          <FormGroup check className="form-check-radio">
            <Label check>
              JSON
              <Input
                type="checkbox"
                checked={tempIsChecked2}
                onChange={() => {
                  setTempJson(tempJson === "On" ? "Off" : "On");
                  setTempIsChecked2(tempJson === "On" ? false : true);
                }}
                className="text-right"
              />
            </Label>
          </FormGroup>
        </Form>
        {/* <div className={`invalid-feedback ${error.csv ? "d-block" : ""}`}>
          {error.csv}
        </div> */}
      </Row>
      <Row>
        <Col className="text-end">
          <Button
            onClick={handCheck}
            className="button-active"
            disabled={tempCSV === "Off" && tempJson === "Off" ? true : false}
          >
            Save
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CheckyBoxFile;
