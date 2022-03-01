import React, { useState } from "react";
import { Button, Col, Label, Form, FormGroup, Input, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBoxFile from "./checkBoxFile";

const FileParams = ({
  formatValue,
  setFormatValue,
  fileCheck,
  setFileCheck,
  fileCheck2,
  setFileCheck2,
  csv,
  setCSV,
  json,
  setJson,
}) => {

  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const fileAlert = () => {
    setAlert(
      <ReactBSAlert
        title="File Format:"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
          <Row className="text-start mt-4">
          <Col>
            <CheckyBoxFile
               formatValue={formatValue}
               setFormatValue={setFormatValue}
               fileCheck={fileCheck}
               setFileCheck={setFileCheck}
               fileCheck2={fileCheck2}
               setFileCheck2={setFileCheck2}
               csv={csv}
               setCSV={setCSV}
               json={json}
               setJson={setJson}
              close={hideAlert}
            />
            </Col>
            </Row>
      </ReactBSAlert>
    );
  };

  return (
    <>
      {alert}
      <Button className="button-neutral" onClick={fileAlert}>
        File: {csv === "On" && json === "Off" ? "CSV" : ""}{" "} 
        {json === "On" & csv === "Off" ? "JSON" : ""}{" "}
        {json === "On" && csv === "On" ? "CSV, JSON" : ""}{" "}
        <img
          src="https://home.openweathermap.org/assets/icon_down_black.svg"
          alt="icon down"
        />
      </Button>
    </>
  );
};

export default FileParams;
