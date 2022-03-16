import React, { useState, useEffect } from "react";

import { Button, Col, Row } from "reactstrap";
import axios from "axios";

const MyOrders = () => {

const [data, setData] = useState([])

  axios.get('https://marketplace-weather.owm.io/api/my_orders_list', {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
    .then(response => {
      if (response && response.data) {
        setData({data: response.data})
        console.log('id test', response.data._id)
        console.log('test', data)
        console.log('length', data.length)
      }
    })
    .catch(err => {
      console.log(err)
      })



      // useEffect(() => {
      //   axios.get("https://marketplace-weather.owm.io/api/my_orders_list")
      //     .then((res) => {
      //       setData({data: res.data})
      //       console.log('data', data)
      //     })
      //     .catch((err) => {
      //       console.log('error', err)
      //     })
      // }, [])

  // useEffect(() => {
  //   // GET request using axios inside useEffect React hook
  //   axios
  //     .get("https://marketplace-weather.owm.io/api/my_orders_list")
  //     .then((res) => {
  //       const datas = res.data;
  //       setDatas({ datas });
  //     });
  //   console.log("ddd", datas);
  // }, []);

  return (
    <div className="container">
      <Row className="mt-4 mb-4 text-start">
        <h1>My Orders</h1>
      </Row>
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
            - a weather data archive for any location that includes 15 weather
            parameters, such as temperature, precipitation, wind and many more.
          </p>
        </Col>
      </Row>
      <Row>
        <Col className="mb-2">
          <p className="text-start">
            {" "}
            <a style={{ color: "black" }} href="/history_forecast_bulks/new">
              History Forecast Bulk
            </a>{" "}
            - an archive of previous forecasts starting from April 6, 2017.
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
      <Row>
   {data.length}
        {/* {data._id.map((option, index) => (
<p key={index}>{option}</p>
))} */}
        
      </Row>

      {/* <Card className="orders-table">
        <CardHeader
          className="d-lg-flex d-none card-head"
        >
          <Row className="w-100 mx-0 text-start">
            <Col>
              <Row>
                <Col>Info</Col>
                <Col>Locations</Col>
                <Col>Parameters</Col>
                <Col>Dates</Col>
                <Col>Status</Col>
                <Col>&nbsp;</Col>
              </Row>
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <Row className="mx-0 w-100 text-start">
            <Col>
              <Row>
                <Col>
                  <p className="text-start" style={{fontWeight: "bold"}}>History Bulk</p>
                  <p className="text-start">File Format:</p>
                  <p className="text-start">Units:</p>
                </Col>
                <Col>
                  <b>test</b>
                </Col>
                <Col>test</Col>
                <Col>test</Col>
                <Col>test</Col>

                <Col>test</Col>
              </Row>
            </Col>
          </Row>
        </CardBody>
      </Card> */}
    </div>
  );
};

export default MyOrders;
