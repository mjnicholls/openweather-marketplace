import React, { useState } from "react";
import { Button, Col, Row } from "reactstrap";
import ReactBSAlert from "react-bootstrap-sweetalert";
import CheckyBoxFile from "./checkBoxFile";
import PropTypes from "prop-types";

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
      <Button className="button-neutral" onClick={fileAlert} style={{fontSize: "11pt"}}>
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

FileParams.propTypes = {
  formatValue: PropTypes.string,
  setFormatValue: PropTypes.func,
  csv: PropTypes.string,
  setCSV: PropTypes.func,
  json: PropTypes.string,
  setJson: PropTypes.func,
  fileCheck: PropTypes.bool,
  fileCheck2: PropTypes.bool,
  setFileCheck: PropTypes.func,
  setFileCheck2: PropTypes.func,
};


export default FileParams;
