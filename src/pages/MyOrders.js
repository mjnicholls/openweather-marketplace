import React, { useState, useEffect } from "react";

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
          <CardBody className="orders">
            {data.map((row) => (
              <Row
                className="mx-0 w-100 text-start"
                style={{ marginBottom: "25px" }}
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
                    <Row>{row.state}</Row>
                  ) : (
                    <Row className="locations">
                      {row.locations
                        ? row.locations
                            .map((location) =>
                              location.name
                                .concat("\r\n", "(" + location.lat.slice(0, 5))
                                .concat(", ", location.lon.slice(0, 5) + ")")
                            )
                            .join("\r\n")
                        : null}
                    </Row>
                  )}
                </Col>
                <Col style={{ marginRight: "30px" }}>
                  {Object.entries(row.parameters).map(([key, value], i) => (
                    <React.Fragment key={i} value={key}>
                      {value.charAt(0).toUpperCase() +
                        value.replaceAll("_", " ").slice(1)}
                      {", "}
                    </React.Fragment>
                  ))}
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
                    <Button className="button-neutral" a href={row.file_server}>
                      Download {row.file_format.toUpperCase()}
                    </Button>
                  </Col>
                ) : (
                  <Col className="text-center" style={{ fontSize: "10pt" }}>
                    Not available
                  </Col>
                )}
              </Row>
            ))}
          </CardBody>
        </Card>
      )}
    </div>
  );
};

export default MyOrders;
