import React from "react";

import { Button, Col, Row } from "reactstrap";


const MyOrders = () => {

  return (
    <div className="container">
      <Row className="mt-4 mb-4 text-start">
        <h1>My Orders</h1>
        </Row>
        <Row>
        <Col className="mt-2 mb-2">
          <p className="text-start">
            {" "}
            You have no orders yet.
          </p>
        </Col>
      </Row>
      <Row>
      <Col className="mt-2 mb-2">
        <p className="text-start">
            {" "}
            You might be interested in:
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2">
        <p className="text-start">
            {" "}
            <a style={{color:"black"}} href = "/history_bulks/new">History Bulk</a> - a weather data archive for any location that includes 15 weather parameters, such as temperature, precipitation, wind and many more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">
        <p className="text-start">
            {" "}
            <a style={{color:"black"}}  href = "/history_forecast_bulks/new">History Forecast Bulk</a> - an archive of previous forecasts starting from April 6, 2017.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mt-2 mb-2">
        <p className="text-start">
            {" "}
            Go to <Button
                    className="btn button-neutral"
                    href="/marketplace"
                  >
                    Marketplace
                  </Button>
          </p>
        </Col>
      </Row>

    </div>
  );
};

export default MyOrders;
