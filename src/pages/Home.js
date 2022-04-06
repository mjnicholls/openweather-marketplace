import React from 'react'

import { useSelector } from 'react-redux'
import { Button, Card, CardBody, Col, Row } from 'reactstrap'

const selectCurrency = (state) => state.auth.currency

const HomeMarket = () => {
  const currency = useSelector(selectCurrency)

  return (
    <div className="container">
      <Row className="home-row">
        <h1>Custom Weather Products</h1>
        <Col md="7" className="mt-2 mb-2">
          <p>
            {' '}
            OpenWeatherMap provides access to 40-year historical weather data
            for any location. Get various weather parameters, such as
            temperature, precipitation, wind and many more.
          </p>
        </Col>
      </Row>
      <Row className="home-row d-xl-flex d-none">
        <Col md="5">
          <Card className="card">
            <CardBody className="home">
              <h4>History Bulk</h4>
              <p>
                Download an archive of historical weather data for ANY location
                for up to 40 years back.
              </p>
              <ul>
                <li>Data available from January 1, 1979</li>
                <li>Worldwide availability, any location</li>
                <li>Hourly step</li>
                <li>CSV, JSON formats</li>
              </ul>
              <Row>
                <Col md="4">
                  <h3>7 {currency}</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="https://openweathermap.org/history-bulk"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/history_bulks/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
        <Col md="5">
          <Card>
            <CardBody className="home">
              <h4>History Forecast Bulk</h4>
              <p>
                Get data on previously made 16-day forecasts for any coordinates
                on the globe.
              </p>
              <ul>
                <li>Data available from October 7, 2017</li>
                <li>Worldwide availability, any location</li>
                <li>Archive of 16-days forecasts</li>
                <li>CSV, JSON formats</li>
              </ul>
              <Row>
                <Col md="4">
                  <h3>35 {currency}</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="https://openweathermap.org/api/history-forecast-bulk"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/history_forecast_bulks/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="home-row d-xl-none d-sm-flex">
        <Col>
          <Card className="card">
            <CardBody className="home">
              <h4>History Bulk</h4>
              <p>
                Download an archive of historical weather data for ANY location
                for up to 40 years back.
              </p>
              <ul>
                <li>Data available from January 1, 1979</li>
                <li>Worldwide availability, any location</li>
                <li>Hourly step</li>
                <li>CSV, JSON formats</li>
              </ul>
              <Row>
                <Col md="4">
                  <h3>7 {currency}</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="https://openweathermap.org/history-bulk"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/history_bulks/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="home-row d-xl-none d-sm-flex">
        <Col>
          <Card>
            <CardBody className="home">
              <h4>History Forecast Bulk</h4>
              <p>
                Get data on previously made 16-day forecasts for any coordinates
                on the globe.
              </p>
              <ul>
                <li>Data available from October 7, 2017</li>
                <li>Worldwide availability, any location</li>
                <li>Archive of 16-days forecasts</li>
                <li>CSV, JSON formats</li>
              </ul>
              <Row>
                <Col md="4">
                  <h3>35 GBP</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="https://openweathermap.org/api/history-forecast-bulk"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/history_forecast_bulks/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="home-row d-xl-flex d-none">
        <h1>Historical Data Archives</h1>
        <Col md="6">
          <Card>
            <CardBody className="home">
              <h4>Historical Weather Data by State for all ZIP codes, USA</h4>
              <p>
                Get historical weather data for all the US states (grouped by
                ZIP codes). This archive includes weather data for 1 year that
                you can specify.
              </p>
              <ul>
                <li>Data available from January 1, 2018</li>
                <li>40,000+ ZIP codes in the US</li>
                <li>Hourly step</li>
                <li>CSV format</li>
              </ul>
              <Row>
                <Col md="4" className="text-nowrap">
                  from <h3>$3000</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4" className="text-nowrap">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="http://openweathermap.org/api/history-data-state"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/zip_code_data/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>

      <Row className="home-row d-xl-none d-sm-flex">
        <h1>Historical Data Archives</h1>
        <Col>
          <Card>
            <CardBody className="home">
              <h4>Historical Weather Data by State for all ZIP codes, USA</h4>
              <p>
                Get historical weather data for all the US states (grouped by
                ZIP codes). This archive includes weather data for 1 year that
                you can specify.
              </p>
              <ul>
                <li>Data available from January 1, 2018</li>
                <li>40,000+ ZIP codes in the US</li>
                <li>Hourly step</li>
                <li>CSV format</li>
              </ul>
              <Row>
                <Col md="4" className="text-nowrap">
                  from <h3>$3000</h3>
                </Col>
                <Col md="4"></Col>
              </Row>
              <Row>
                <Col md="4" className="text-nowrap">
                  <h6>per location</h6>
                </Col>
                <Col className="text-end md-8 text-nowrap">
                  <Button
                    className="btn button-neutral"
                    href="http://openweathermap.org/api/history-data-state"
                  >
                    Documentation
                  </Button>
                  <Button
                    className="btn button-active"
                    href="/zip_code_data/new"
                  >
                    Place Order
                  </Button>
                </Col>
              </Row>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default HomeMarket
