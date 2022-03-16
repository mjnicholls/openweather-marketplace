import React, { useState, useEffect } from "react";

import { Button, Col, Row } from "reactstrap";
import axios from "axios";

const MyOrders = () => {

const [data, setData] = useState([
  {
     "_id":{
        "$oid":"60cd01c510bf09000c926858"
     },
     "cities":null,
     "client_id":{
        "$oid":"5e7497e893e8db0009e5323d"
     },
     "created_at":"2021-06-18T20:27:49.379Z",
     "deleted_at":null,
     "file_format":"json",
     "from":"2018-01-01T00:00:00.000Z",
     "hbs_response":{
        "id":"60cd01c510bf09000c926858",
        "failed":false,
        "file_path":{
           "json":"/storage/164047d2ceec69b5561c763f9c78d513.tar.gz"
        },
        "file_server":"http://stage.owm.io:8098",
        "priority":null
     },
     "locations":[
        {
           "lat":"51.312801",
           "lon":"9.481544",
           "name":"Kassel"
        },
        {
           "lat":"53.551086",
           "lon":"9.993682",
           "name":"Hamburg"
        },
        {
           "lat":"48.137154",
           "lon":"11.576124",
           "name":"Munich"
        }
     ],
     "parameters":[
        "temp",
        "pressure",
        "wind",
        "humidity",
        "clouds",
        "dew_point",
        "precipitation"
     ],
     "product_name":"History Forecast Bulk",
     "retries":0,
     "saving_mode":"multi",
     "status":"done",
     "time_step":"1h",
     "to":"2021-06-17T23:59:59.000Z",
     "units":"metric",
     "updated_at":"2021-06-18T20:34:12.563Z",
     "user_id":{
        "$oid":"5e74984493e8db0009e53242"
     }
  }])

  axios.get('https://marketplace-weather.owm.io/api/my_orders_list', {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  })
    .then(response => {
      if (response && response.data) {
        setData(response.data)
        console.log('id test', response.data)
        console.log('test 2', data._id)
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
