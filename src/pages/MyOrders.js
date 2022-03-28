import React, { useState, useEffect } from "react";
import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import { getOrders } from "../api/personalAccountAPI";
import axios from "axios";
import ReactBSAlert from "react-bootstrap-sweetalert";

const MyOrders = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    refreshData()
  }, [])

  const refreshData = () => {
    getOrders()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }

  const [alert, setAlert] = useState(null);

  const hideAlert = () => {
    setAlert(null);
  };

  const retryAlert = () => {
    setAlert(
      <ReactBSAlert
        title="Retry"
        onConfirm={() => hideAlert()}
        onCancel={() => hideAlert()}
        showConfirm={false}
        showCloseButton
        customClass="bs-alerts"
      >
        <Row className="trigger-item">
          <Col>Request sent.</Col>
        </Row>
        <Row className="trigger-item">
          <Col className="text-end">
            <Button className="button-neutral" onClick={hideAlert}>
              Close
            </Button>
          </Col>
        </Row>
      </ReactBSAlert>
    );
  };

  const first = data
    .filter((x) => x.hbs_response !== null)
    .map((row) => row.hbs_response.id);
  const second = data
    .filter((x) => x.hbs_response !== null)
    .map((row) => row.product_name);
    
  const [retryProduct, setRetryProduct] = useState(first);
  const [retryProduct2, setRetryProduct2] = useState(second);

  const retryButton = () => {
    data
      .filter((x) => x.hbs_response !== null)
      .map((row) => {
        if (row.hbs_response.failed === true)
          setRetryProduct(row.hbs_response.id);
        setRetryProduct2(
          row.product_name === "History Bulk" ? "history_bulk" : 
          row.product_name === "History Forecast Bulk" ? "history_forecast_bulk" : 
          row.product_name === "Zip Code Data" ? "zip_code_data" : 
          null
        );
      });

    console.log("check", retryProduct);
    console.log("check2", retryProduct2);

    axios
      .get(
        `https://marketplace-weather.owm.io/${retryProduct2}/${retryProduct}/retry`
      )
      .then((res) => {
        console.log("res", res);
        refreshData()
        retryAlert();
      })
      .catch((err) => {
        console.log(`Error: ${err.message}`);
      });
  };

  const [showResults, setShowResults] = useState(false);

  const seeMore = () => {
    setShowResults(true);
  };

  const seeLess = () => {
    setShowResults(false);
  };

  return (
    <div className="container">
      {alert}
      <Row className="mt-4 mb-4 text-start">
        <h1>My Orders</h1>
      </Row>
      {data.length === 0 ? (
        <>
          <Row>
            <Col className="mt-2 mb-2">
              <p className="text-start"> You have no orders yet.</p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-2">
              <p className="text-start"> You might be interested in:</p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2">
              <p className="text-start">
                {" "}
                <a style={{ color: "black" }} href="/history_bulks/new">
                  History Bulk
                </a>{" "}
                — a weather data archive for any location that includes 15
                weather parameters, such as temperature, precipitation, wind and
                many more.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mb-2">
              <p className="text-start">
                {" "}
                <a
                  style={{ color: "black" }}
                  href="/history_forecast_bulks/new"
                >
                  History Forecast Bulk
                </a>{" "}
                — an archive of previous forecasts starting from April 6, 2017.
              </p>
            </Col>
          </Row>
          <Row>
            <Col className="mt-2 mb-2">
              <p className="text-start">
                {" "}
                Go to{" "}
                <Button className="btn button-neutral" href="/marketplace">
                  Marketplace
                </Button>
              </p>
            </Col>
          </Row>
        </>
      ) : (
        <>
          <Card className="orders-table">
            <CardHeader className="d-lg-flex d-none card-head">
              <Row className="w-100 mx-0 text-start">
                <Col>Info</Col>
                <Col>Locations</Col>
                <Col style={{ marginRight: "30px" }}>Parameters</Col>
                <Col style={{ marginRight: "30px" }}>Dates</Col>
                <Col md="1">Status</Col>
                <Col>&nbsp;</Col>
              </Row>
            </CardHeader>
            <CardBody className="orders d-none d-lg-block">
              {data.map((row) => (
                <Row
                  className="mx-0 w-100 text-start"
                  style={{
                    marginBottom: "25px",
                    paddingBottom: "15px",
                    borderBottom: "2px solid rgb(243, 243, 243)",
                  }}
                >
                  <Col>
                    <Row className="text-start" style={{ fontWeight: "bold" }}>
                      {row.product_name}
                    </Row>
                    <Row className="text-start">
                      File Format: {row.file_format.toUpperCase()}
                    </Row>
                    <Row className="text-start">
                      Units:{" "}
                      {row.units.charAt(0).toUpperCase() + row.units.slice(1)}
                    </Row>
                  </Col>
                  <Col>
                    {row.state ? (
                      <Row mt="2" mb="2">
                        {row.state === "RI"
                          ? "Rhode Island"
                          : row.state === "DE"
                          ? "Delaware"
                          : row.state === "HI"
                          ? "Hawai`i"
                          : row.state === "WY"
                          ? "Wyoming"
                          : row.state === "NV"
                          ? "Nevada"
                          : row.state === "AK"
                          ? "Alaska"
                          : row.state === "DC"
                          ? "District of Columbia"
                          : row.state === "NH"
                          ? "New Hampshire"
                          : row.state === "VT"
                          ? "Vermont"
                          : row.state === "ID"
                          ? "Idaho"
                          : row.state === "UT"
                          ? "Utah"
                          : row.state === "SD"
                          ? "South Dakota"
                          : row.state === "MT"
                          ? "Montana"
                          : row.state === "ND"
                          ? "North Dakota"
                          : row.state === "NM"
                          ? "New Mexico"
                          : row.state === "CT"
                          ? "Connecticut"
                          : row.state === "OR"
                          ? "Oregon"
                          : row.state === "ME"
                          ? "Maine"
                          : row.state === "AZ"
                          ? "Arizona"
                          : row.state === "MS"
                          ? "Mississippi"
                          : row.state === "SC"
                          ? "South Carolina"
                          : row.state === "MD"
                          ? "Maryland"
                          : row.state === "NE"
                          ? "Nebraska"
                          : row.state === "CO"
                          ? "Colorado"
                          : row.state === "MA"
                          ? "Massachusetts"
                          : row.state === "AR"
                          ? "Arkansas"
                          : row.state === "WA"
                          ? "Washington"
                          : row.state === "LA"
                          ? "Louisiana"
                          : row.state === "NJ"
                          ? "New Jersey"
                          : row.state === "KS"
                          ? "Kansas"
                          : row.state === "OK"
                          ? "Oklahoma"
                          : row.state === "TN"
                          ? "Tennessee"
                          : row.state === "AL"
                          ? "Alabama"
                          : row.state === "WV"
                          ? "West Virginia"
                          : row.state === "WI"
                          ? "Wisconsin"
                          : row.state === "KY"
                          ? "Kentucky"
                          : row.state === "GA"
                          ? "Georgia"
                          : row.state === "IN"
                          ? "Indiana"
                          : row.state === "MN"
                          ? "Minnesota"
                          : row.state === "IA"
                          ? "Iowa"
                          : row.state === "NC"
                          ? "North Carolina"
                          : row.state === "MO"
                          ? "Missouri"
                          : row.state === "MI"
                          ? "Michigan"
                          : row.state === "VA"
                          ? "Virginia"
                          : row.state === "OH"
                          ? "Ohio"
                          : row.state === "FL"
                          ? "Florida"
                          : row.state === "IL"
                          ? "Illinois"
                          : row.state === "NY"
                          ? "New York"
                          : row.state === "PA"
                          ? "Pennsylvania"
                          : row.state === "CA"
                          ? "California"
                          : row.state === "TX"
                          ? "Texas"
                          : null}
                      </Row>
                    ) : (
                      <Row className="locations">
                        {row.locations
                          ? row.locations
                              .map((location) =>
                                location.name
                                  .concat(
                                    "\r\n",
                                    "(" + location.lat.slice(0, 5)
                                  )
                                  .concat(", ", location.lon.slice(0, 5) + ")")
                              )
                              .slice(0, 2)
                              .join("\r\n")
                          : null}
                        {row.locations.length >= 3 && showResults === false ? (
                          <Button
                            className="seeMore text-start"
                            onClick={seeMore}
                          >
                            &darr; ...
                          </Button>
                        ) : row.locations.length >= 3 &&
                          showResults === true ? (
                          <Button
                            className="seeMore text-start"
                            onClick={seeLess}
                          >
                            &uarr;
                          </Button>
                        ) : null}
                        {showResults === true ? (
                          <Row>
                            {row.locations
                              ? row.locations
                                  .map((location) =>
                                    location.name
                                      .concat(
                                        "\r\n",
                                        "(" + location.lat.slice(0, 5)
                                      )
                                      .concat(
                                        ", ",
                                        location.lon.slice(0, 5) + ")"
                                      )
                                  )
                                  .slice(2)
                                  .join("\r\n")
                              : null}
                          </Row>
                        ) : null}
                      </Row>
                    )}
                  </Col>
                  <Col style={{ marginRight: "30px" }}>
                    {row.parameters
                      .map(
                        (p) =>
                          p.charAt(0).toUpperCase() +
                          p.replaceAll("_", " ").slice(1)
                      )
                      .join(", ")}
                  </Col>
                  <Col style={{ marginRight: "30px" }}>
                    {row.product_name !== "Zip Code Data" ? (
                      <Row className="text-start">
                        {new Date(row.from)
                          .toString(Date.parse(row.from))
                          .slice(3, 10)}
                        {", "}
                        {new Date(row.from)
                          .toString(Date.parse(row.from))
                          .slice(10, 15)}
                        {" — "}
                        {new Date(row.to)
                          .toString(Date.parse(row.to))
                          .slice(3, 10)}
                        {", "}
                        {new Date(row.from)
                          .toString(Date.parse(row.from))
                          .slice(10, 15)}
                      </Row>
                    ) : (
                      <Row className="text-start">Year {row.year}</Row>
                    )}
                    <Row className="text-start" style={{ fontSize: "10pt" }}>
                      Created at:
                      {new Date(row.created_at)
                        .toString(Date.parse(row.created_at))
                        .slice(3, 10)}
                      {", "}
                      {new Date(row.created_at)
                        .toString(Date.parse(row.created_at))
                        .slice(10, 15)}
                    </Row>
                  </Col>
                  {row.status === "in_progress" ? (
                    <Col md="1">In progress</Col>
                  ) : row.status === "done" ? (
                    <Col md="1">Done</Col>
                  ) : null}

                  {row.status === "done" ? (
                    <Col>
                      {row.file_format === "json+csv" &&
                      row.hbs_response.failed === false ? (
                        <>
                          <Button
                            className="button-neutral"
                            a
                            href={
                              row.hbs_response.file_server +
                              row.hbs_response.file_path.json
                            }
                          >
                            Download JSON
                          </Button>
                          <Button
                            className="button-neutral"
                            a
                            href={
                              row.hbs_response.file_server +
                              row.hbs_response.file_path.csv
                            }
                          >
                            Download CSV
                          </Button>
                        </>
                      ) : null}
                      {row.file_format === "csv" &&
                      row.product_name !== "Zip Code Data" &&
                      row.hbs_response.failed === false ? (
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path.csv
                          }
                        >
                          Download CSV
                        </Button>
                      ) : null}

                      {row.file_format === "json" &&
                      row.hbs_response.failed === false ? (
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path
                          }
                        >
                          Download JSON
                        </Button>
                      ) : null}

                      {row.product_name === "Zip Code Data" ? (
                        <Col className="text-center" style={{ paddingRight:"60px" }}>
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path
                          }
                        >
                          Download
                        </Button>
                        </Col>
                      ) : null}
                      {row.hbs_response.failed === true ? (
                        <>
                          <Col className="mb-2">Failed processing</Col>
                          {row.product_name === "History Forecast Bulk" ? (
                            <Col className="text-center">
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                            </Col>
                          ) : row.product_name === "History Bulk" ? (
                            <Col className="px-4">
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                            </Col>
                          ) : row.product_name === "Zip Code Data" ? (
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                          ) : null}
                        </>
                      ) : null}
                    </Col>
                  ) : (
                    <Col className="text-center" style={{ fontSize: "10pt", paddingRight:"40px" }}>
                      Not available
                    </Col>
                  )}
                </Row>
              ))}
            </CardBody>
          </Card>
          <>
            {data.map((row) => (
              <Row
                className="mb-4 d-flex d-lg-none"
                style={{
                  marginBottom: "25px",
                  paddingBottom: "15px",
                  borderBottom: "2px solid rgb(243, 243, 243)",
                }}
              >
                <Row style={{ fontWeight: "bold" }}>{row.product_name}</Row>
                <Row> File Format: {row.file_format.toUpperCase()}</Row>
                <Row>
                  {" "}
                  Units:{" "}
                  {row.units.charAt(0).toUpperCase() + row.units.slice(1)}
                </Row>
                {row.state ? (
                  <Row mt="2" mb="2">
                    {row.state === "RI"
                      ? "Rhode Island"
                      : row.state === "DE"
                      ? "Delaware"
                      : row.state === "HI"
                      ? "Hawai`i"
                      : row.state === "WY"
                      ? "Wyoming"
                      : row.state === "NV"
                      ? "Nevada"
                      : row.state === "AK"
                      ? "Alaska"
                      : row.state === "DC"
                      ? "District of Columbia"
                      : row.state === "NH"
                      ? "New Hampshire"
                      : row.state === "VT"
                      ? "Vermont"
                      : row.state === "ID"
                      ? "Idaho"
                      : row.state === "UT"
                      ? "Utah"
                      : row.state === "SD"
                      ? "South Dakota"
                      : row.state === "MT"
                      ? "Montana"
                      : row.state === "ND"
                      ? "North Dakota"
                      : row.state === "NM"
                      ? "New Mexico"
                      : row.state === "CT"
                      ? "Connecticut"
                      : row.state === "OR"
                      ? "Oregon"
                      : row.state === "ME"
                      ? "Maine"
                      : row.state === "AZ"
                      ? "Arizona"
                      : row.state === "MS"
                      ? "Mississippi"
                      : row.state === "SC"
                      ? "South Carolina"
                      : row.state === "MD"
                      ? "Maryland"
                      : row.state === "NE"
                      ? "Nebraska"
                      : row.state === "CO"
                      ? "Colorado"
                      : row.state === "MA"
                      ? "Massachusetts"
                      : row.state === "AR"
                      ? "Arkansas"
                      : row.state === "WA"
                      ? "Washington"
                      : row.state === "LA"
                      ? "Louisiana"
                      : row.state === "NJ"
                      ? "New Jersey"
                      : row.state === "KS"
                      ? "Kansas"
                      : row.state === "OK"
                      ? "Oklahoma"
                      : row.state === "TN"
                      ? "Tennessee"
                      : row.state === "AL"
                      ? "Alabama"
                      : row.state === "WV"
                      ? "West Virginia"
                      : row.state === "WI"
                      ? "Wisconsin"
                      : row.state === "KY"
                      ? "Kentucky"
                      : row.state === "GA"
                      ? "Georgia"
                      : row.state === "IN"
                      ? "Indiana"
                      : row.state === "MN"
                      ? "Minnesota"
                      : row.state === "IA"
                      ? "Iowa"
                      : row.state === "NC"
                      ? "North Carolina"
                      : row.state === "MO"
                      ? "Missouri"
                      : row.state === "MI"
                      ? "Michigan"
                      : row.state === "VA"
                      ? "Virginia"
                      : row.state === "OH"
                      ? "Ohio"
                      : row.state === "FL"
                      ? "Florida"
                      : row.state === "IL"
                      ? "Illinois"
                      : row.state === "NY"
                      ? "New York"
                      : row.state === "PA"
                      ? "Pennsylvania"
                      : row.state === "CA"
                      ? "California"
                      : row.state === "TX"
                      ? "Texas"
                      : null}
                  </Row>
                ) : (
                  <Row className="locations text-start mt-2 md-2">
                    {row.locations
                      ? row.locations
                          .map((location) =>
                            location.name
                              .concat("\r\n", "(" + location.lat.slice(0, 5))
                              .concat(", ", location.lon.slice(0, 5) + ")")
                          )
                          .slice(0, 2)
                          .join("\r\n")
                      : null}
                    {row.locations.length >= 3 && showResults === false ? (
                      <Button className="seeMore text-start" onClick={seeMore}>
                        &darr; ...
                      </Button>
                    ) : row.locations.length >= 3 && showResults === true ? (
                      <Button className="seeMore text-start" onClick={seeLess}>
                        &uarr;
                      </Button>
                    ) : null}
                    {showResults === true ? (
                      <Row>
                        {row.locations
                          ? row.locations
                              .map((location) =>
                                location.name
                                  .concat(
                                    "\r\n",
                                    "(" + location.lat.slice(0, 5)
                                  )
                                  .concat(", ", location.lon.slice(0, 5) + ")")
                              )
                              .slice(2)
                              .join("\r\n")
                          : null}
                      </Row>
                    ) : null}
                  </Row>
                )}
                <Row className="text-start mt-2 mb-2">
                  {row.parameters
                    .map(
                      (p) =>
                        p.charAt(0).toUpperCase() +
                        p.replaceAll("_", " ").slice(1)
                    )
                    .join(", ")}
                </Row>
                <Row>
                  {row.product_name !== "Zip Code Data" ? (
                    <Row className="text-start">
                      {new Date(row.from)
                        .toString(Date.parse(row.from))
                        .slice(3, 10)}
                      {", "}
                      {new Date(row.from)
                        .toString(Date.parse(row.from))
                        .slice(10, 15)}
                      {" — "}
                      {new Date(row.to)
                        .toString(Date.parse(row.to))
                        .slice(3, 10)}
                      {", "}
                      {new Date(row.from)
                        .toString(Date.parse(row.from))
                        .slice(10, 15)}
                    </Row>
                  ) : (
                    <Row className="text-start">Year {row.year}</Row>
                  )}
                </Row>
                {row.status === "in_progress" ? (
                  <Row className="mt-2 mb-2">In progress</Row>
                ) : row.status === "done" ? (
                  <Row className="mt-2 mb-2">Done</Row>
                ) : null}

                {row.status === "done" ? (
                  <Row className="mt-2">
                    <Col className="text-end">
                      {row.file_format === "json" &&
                      row.hbs_response.failed === false ? (
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path
                          }
                        >
                          Download JSON
                        </Button>
                      ) : null}
                      {row.file_format === "csv" &&
                      row.product_name !== "Zip Code Data" &&
                      row.hbs_response.failed === false ? (
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path.csv
                          }
                        >
                          Download CSV
                        </Button>
                      ) : null}

                      {row.product_name === "Zip Code Data" &&
                      row.hbs_response.failed === false ? (
                        <Button
                          className="button-neutral"
                          a
                          href={
                            row.hbs_response.file_server +
                            row.hbs_response.file_path
                          }
                        >
                          Download
                        </Button>
                      ) : null}
                      {row.file_format === "json+csv" &&
                      row.hbs_response.failed === false ? (
                        <>
                          <Button
                            className="button-neutral"
                            a
                            href={
                              row.hbs_response.file_server +
                              row.hbs_response.file_path.json
                            }
                          >
                            Download JSON
                          </Button>
                          <Button
                            className="button-neutral"
                            a
                            href={
                              row.hbs_response.file_server +
                              row.hbs_response.file_path.csv
                            }
                          >
                            Download CSV
                          </Button>
                        </>
                      ) : null}
                      {row.hbs_response.failed === true ? (
                        <>
                          <Col>Failed processing</Col>
                          {row.product_name === "History Forecast Bulk" ? (
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                          ) : row.product_name === "History Bulk" ? (
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                          ) : row.product_name === "Zip Code Data" ? (
                            <Button
                              className="button-neutral"
                              onClick={retryButton}
                            >
                              Retry
                            </Button>
                          ) : null}
                        </>
                      ) : null}
                    </Col>
                  </Row>
                ) : (
                  <Row className="text-start mt-2" style={{ fontSize: "10pt" }}>
                    <Col className="text-end"></Col> Not available
                  </Row>
                )}
              </Row>
            ))}
          </>
        </>
      )}
    </div>
  );
};

export default MyOrders;
