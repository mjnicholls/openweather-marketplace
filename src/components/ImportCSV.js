/* eslint-disable */
import React, { useState } from "react";
import PropTypes from "prop-types";
import { Button, Col, Row } from "reactstrap";


const ImportCsv = ({setLocations}) => {

    const [isImport, setIsImport] = useState(false);
    const [isSearchByName, setIsSearchByName] = useState(true);
  
    const setSearchandImportImport = () => {
        setIsSearchByName(true);
        setIsImport(true);
      };
    
      const setSearchandImport = () => {
        setIsSearchByName(true);
        setIsImport(false);
      };
    
      const setSearchNameandImport = () => {
        setIsSearchByName(false);
        setIsImport(false);
      };

      const getJson = (e) => {
        const files = e.target.files;
        if (files) {
          console.log(files[0]);
          Papa.parse(files[0], {
            skipEmptyLines: true,
            complete: function (results) {
              let importedLocations = [];
              let errors = [];
    
              for (let i = 0; i < results.data.length; i++) {
                const row = results.data[i];
                console.log("log", row);
    
                const tmp = locationConstructor(row[0], row[1], row[2]);
                console.log("tmp", tmp);
                let error = {};
    
                if (tmp.error) {
                  let keys = Object.keys(tmp.error);
                  error = {
                    line: i + 1,
                    comment: tmp.error[keys[0]],
                    value: tmp.error.errorVal,
                  };
                } else {
                  for (let j = 0; j < importedLocations.length; j++) {
                    if (
                      importedLocations[j].lat === tmp.location.lat &&
                      importedLocations[j].lon === tmp.location.lon
                    ) {
                      error = {
                        line: i + 1,
                        comment: "Duplicated value.",
                        value: row[1] + ", " + row[2],
                      };
                      console.log("temp", importedLocations);
                      break;
                    }
                  }
    
                  let check = checkCoordinates(tmp.location.lat, tmp.location.lon);
                  if (!check) {
                    error = {
                      line: i + 1,
                      comment: "Duplicated value.",
                      value: row[1] + ", " + row[2],
                    };
                  }
                }
    
                if (Object.keys(error).length) {
                  errors.push(error);
                } else if (tmp.location) {
                  importedLocations.push(tmp.location);
                }
              }
    
              console.log("err", errors);
              if (errors.length) {
                jsonAlert(errors, importedLocations);
    
                return;
              }
    
              if (importedLocations.length) {
                addLocations(importedLocations);
              }
              setIsImport(false);
            },
          });
        }
      };
      
      const checkCoordinates = (lat, lon) => {
        for (let i = 0; i < locations.length; i++) {
          if (locations[i].lat === lat && locations[i].lon === lon) {
            return false;
          }
        }
        return true;
      };

      const addLocations = (data) => {
        const newLocations = [...locations, ...data];
        setLocations(newLocations);
      };

  return (
    <div>
    <Button
      type="button"
      className={`padded-button ${
        isSearchByName && !isImport ? "padded-button-active" : ""
      }`}
      onClick={() => setSearchandImport()}
      aria-pressed="true"
    >
      Location
    </Button>
    <Button
      type="button"
      className={`padded-button ${
        !isSearchByName ? "padded-button-active" : ""
        
      }`}
      onClick={() => setSearchNameandImport()}
      aria-pressed="true"
    >
      Coordinates
    </Button>
    <Button
      type="button"
      className={`padded-button ${
        isImport ? "padded-button-active" : ""
      }`}
      onClick={() => setSearchandImportImport()}
      aria-pressed="true"
    >
      Import
    </Button>
    {isImport ? (
      <>
        <ul>
          <li>
            The only format that is currently accepted for importing
            is CSV.
          </li>
          <li>
            Make sure your CSV file is using the semi-colon delimiter,
            not a comma.
          </li>
          <li>
            Your CSV file needs to be encoded as UTF-8 or Unicode.
          </li>
          <li>
            The file should contain columns in the following order:
            location (string), latitude (float), longitude (float).
          </li>
          <li>
            Coordinates will be rounded to the 6th decimal place.
          </li>
          <li>
            Please refer to the example below.{" "}
            <a href="https://openweathermap.org/docs/owm_import_samle.csv">
              Download sample file
            </a>
          </li>
        </ul>
        <Row className="w-100 mx-0">
          <Col>
            <Row className="trigger-item">
              <Col md="1">1</Col>
              <Col>London</Col>
              <Col>51.50735</Col>
              <Col>0.1277583</Col>
            </Row>
            <Row className="trigger-item">
              <Col md="1">2</Col>
              <Col>Brighton</Col>
              <Col>50.82253</Col>
              <Col>-0.137163</Col>
            </Row>
          </Col>
        </Row>
        <Row className="trigger-item-parse">
          <Col className="mt-4 text-end">
            <input
              type="file"
              accept=".csv,.xlsx,.xls"
              onChange={getJson}
              name="file1"
              aria-pressed="true"
              style={{ display: "none" }}
              id="contained-button-file"
            />
            <label htmlFor="contained-button-file">
              <Button
                variant="contained"
                accept=".csv,.xlsx,.xls"
                className="button-active"
                component="span"
                type="file"

                //onClick={buttonInput}
              >
                <input
                  type="file"
                  accept=".csv,.xlsx,.xls"
                  onChange={getJson}
                  name="file1"
                  aria-pressed="true"
                  style={{ display: "none" }}
                  id="contained-button-file"
                />
                Import CSV File
              </Button>
            </label>
          </Col>
        </Row>
      </>
    ) : null}
  </div>
  );
};

ImportCsv.propTypes = {
  locations: PropTypes.func,
  setLocations: PropTypes.bool,
};

export default ImportCsv;
