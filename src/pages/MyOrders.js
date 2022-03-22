import React, { useState, useEffect } from "react";
import { STATE_NAMES } from "../config";
import {
  Button,
  Col,
  Row,
  Card,
  CardHeader,
  CardBody,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
} from "reactstrap";
import { getOrders } from "../api/personalAccountAPI";

const MyOrders = () => {
  // const data = [
  //   {
  //      _id:{
  //         $oid:"60cd01c510bf09000c926858"
  //      },
  //      cities: null,
  //      client_id:{
  //         $oid:"5e7497e893e8db0009e5323d"
  //      },
  //      created_at:"2021-06-18T20:27:49.379Z",
  //      deleted_at:null,
  //      file_format:"json",
  //      from:"2018-01-01T00:00:00.000Z",
  //      hbs_response:{
  //         id:"60cd01c510bf09000c926858",
  //         failed:false,
  //         file_path:{
  //            json:"/storage/164047d2ceec69b5561c763f9c78d513.tar.gz"
  //         },
  //         file_server:"http://stage.owm.io:8098",
  //         priority:null
  //      },
  //      locations:[
  //         {
  //            lat:"51.312801",
  //            lon:"9.481544",
  //            name:"Kassel"
  //         },
  //         {
  //            lat:"53.551086",
  //            lon:"9.993682",
  //            name:"Hamburg"
  //         },
  //         {
  //            lat:"48.137154",
  //            lon:"11.576124",
  //            name:"Munich"
  //         }
  //      ],
  //      parameters:[
  //         "temp",
  //         "pressure",
  //         "wind",
  //         "humidity",
  //         "clouds",
  //         "dew_point",
  //         "precipitation"
  //      ],
  //      product_name:"History Forecast Bulk",
  //      retries:0,
  //      saving_mode:"multi",
  //      status:"done",
  //      time_step:"1h",
  //      to:"2021-06-17T23:59:59.000Z",
  //      units:"metric",
  //      updated_at:"2021-06-18T20:34:12.563Z",
  //      user_id:{
  //         $oid:"5e74984493e8db0009e53242"
  //      }
  //   }]

  const [data, setData] = useState([]);

  useEffect(() => {
    getOrders()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  const [showResults, setShowResults] = useState(false)

  const seeMore = () => {
    setShowResults(true)
  }

  const seeLess = () => {
    setShowResults(false)
  }


  return (
    <div className="container">
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
                  style={{ marginBottom: "25px", paddingBottom: "15px", borderBottom:"2px solid rgb(243, 243, 243)" }}
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
                              ).slice(0,2)
                              .join("\r\n")
                          : null}
                           {row.locations.length >= 3 && showResults === false ? 
                            <Button className="seeMore text-start" onClick={seeMore}>&darr; ...</Button>
                            :
                            row.locations.length >=3 && showResults === true ? 
                            <Button className="seeMore text-start" onClick={seeLess}>&uarr;</Button>
                            :
                            null
                            }
                            {showResults === true ? 
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
                              ).slice(2)
                              .join("\r\n")
                          : null}
                            </Row>
                            :
                          null}
                      </Row>
                         
                    )}
                  </Col>
                  <Col style={{ marginRight: "30px" }}>
                  {row.parameters.map(p => p.charAt(0).toUpperCase() + p.replaceAll('_', ' ').slice(1)).join(', ')}
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
                      {row.file_format === "json+csv" ? (
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
                      row.product_name !== "Zip Code Data" ? (
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
                      {row.file_format === "json" ? (
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
                      ) : null}
                      {row.product_name === "Zip Code Data" ? (
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
                    </Col>
                  ) : (
                    <Col className="text-right" style={{ fontSize: "10pt" }}>
                      Not available
                    </Col>
                  )}
                </Row>
              ))}
            </CardBody>
          </Card>
          <>
            {data.map((row) => (
              <Row className="mb-4 d-flex d-lg-none"  style={{ marginBottom: "25px", paddingBottom: "15px", borderBottom:"2px solid rgb(243, 243, 243)" }}>
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
                            .concat(
                              "\r\n",
                              "(" + location.lat.slice(0, 5)
                            )
                            .concat(", ", location.lon.slice(0, 5) + ")")
                        ).slice(0,2)
                        .join("\r\n")
                    : null}
                     {row.locations.length >= 3 && showResults === false ? 
                      <Button className="seeMore text-start" onClick={seeMore}>&darr; ...</Button>
                      :
                      row.locations.length >=3 && showResults === true ? 
                      <Button className="seeMore text-start" onClick={seeLess}>&uarr;</Button>
                      :
                      null
                      }
                      {showResults === true ? 
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
                        ).slice(2)
                        .join("\r\n")
                    : null}
                      </Row>
                      :
                    null}
                </Row>
                )}
                <Row className="text-start mt-2 mb-2">
                {row.parameters.map(p => p.charAt(0).toUpperCase() + p.replaceAll('_', ' ').slice(1)).join(', ')}
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
                    {row.file_format === "json" ? (
                      
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
                    ) : null}
                    {row.file_format === "csv" &&
                    row.product_name !== "Zip Code Data" ? (
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
                   
                    {row.product_name === "Zip Code Data" ? (
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
                    {row.file_format === "json+csv" ? (
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
