import React, { useState, useEffect } from "react";

import { Button, Col, Row, Card, CardHeader, CardBody } from "reactstrap";
import axios from "axios";
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

  //const data = []

  //const url = window.location.protocol + '//' + window.location.host + '/api/my_orders_list'

  // getOrders()
  //     .then(response => {
  //       if (response && response.data) {
  //         setData(response.data)
  //         console.log('test response', response.data)
  //         console.log('data', data)
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //       })

  useEffect(() => {
    getOrders()
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  }, []);

  console.log("ddddd", data);

  //  useEffect(() => {
  //   getOrders()
  //     .then((res) => {
  //       setData(data)
  //       console.log('data', data)
  //     })
  //     .catch((err) => {
  //       console.log('error', err)
  //     })
  // return;
  // }, [])

  //     const [datas, setDatas] = useState([])

  // useEffect(() => {
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

      <Card className="orders-table">
        <CardHeader className="d-lg-flex d-none card-head">
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
        <CardBody className="orders">
          {Object.entries(data).map(([key, value], i) => (
            <Row key={i} value={key} className="mx-0 w-100 text-start" style={{marginBottom:"25px"}}>
              <Col>
                <Row>
                  <Col>
                    <p className="text-start" style={{ fontWeight: "bold" }}>
                      {value.product_name}
                    </p>
                    <p className="text-start">
                      File Format: {value.file_format.toUpperCase()}
                    </p>
                    <p className="text-start">
                      Units:{" "}
                      {value.units.charAt(0).toUpperCase() +
                        value.units.slice(1)}
                    </p>
                  </Col>
                  
                  
                  
                  
                  //

                  {Object.entries(value.locations).map(([key, values], i) => (
                  <Col key={i} value={key}>
                      { Object.entries(value.name).map(([key,value], i) => 
               <option key={i} value={key}>
                 {value}
                 </option>
                 ) }
                </Col>
                  ))}

                  <Col>
               { Object.entries(value.parameters).map(([key,value], i) => 
               <option key={i} value={key}>
                 {value.charAt(0).toUpperCase() + value.slice(1)}
                 </option>
                 ) }

                </Col>
                  <Col>{value.from} - {value.to}</Col>
                <Col>{value.status}</Col>

                <Col><Button a href = {value.file_server}>Download JSON</Button></Col>
                </Row>
              </Col>
            </Row>
          ))}
          {/* {data.map((test,index) =>
          <Row key = {index} className="mx-0 w-100 text-start">
            <Col>
              <Row>
                <Col>
                  <p className="text-start" style={{fontWeight: "bold"}}>{[test.product_name]}</p>
                  <p className="text-start">File Format: {test.file_format.toUpperCase()}</p>
                  <p className="text-start">Units: {test.units.charAt(0).toUpperCase() + test.units.slice(1)}</p>
                </Col>
                <Col>

{test.locations.map((tests, x) => 
<React.Fragment key = {x}>
   <p> {tests.name} </p>
   <p> {tests.lat.slice(0,5)}, {tests.lon.slice(0,5)} </p>
   </React.Fragment>
  )}

                </Col>
                <Col>
               { Object.entries(test.parameters).map(([key,value],i) => 
               <option key={i} value={key}>
                 {value.charAt(0).toUpperCase() + value.slice(1)}
             
                 </option>
                 ) }

                </Col>
                <Col>{test.from} - {test.to}</Col>
                <Col>{test.status}</Col>

                <Col><Button a href = {test.fileserver}>Download JSON</Button></Col>
              </Row>
            </Col>
          </Row>
           ) } */}
        </CardBody>
      </Card>
    </div>
  );
};

export default MyOrders;
