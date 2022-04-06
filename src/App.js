import React from 'react'

import './App.css'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import { Container } from 'reactstrap'

import FooterMarket from './components/Footer'
import HeaderMarket from './components/Header'
import DataUSState from './pages/DataUSState'
import NewHistoryBulkTest from './pages/HistoryBulk'
import HistoryForecastBulk from './pages/HistoryForecastBulk'
import HomeMarket from './pages/Home'
import MyOrders from './pages/MyOrders'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderMarket />
        <Container fluid="xxl" className="app-content">
          <BrowserRouter>
            <Switch>
              <Route path="/marketplace" component={HomeMarket} />
              <Route path="/history_bulks/new" component={NewHistoryBulkTest} />
              <Route
                path="/history_forecast_bulks/new"
                component={HistoryForecastBulk}
              />
              <Route path="/my_orders" component={MyOrders} />
              <Route path="/zip_code_data/new" component={DataUSState} />
            </Switch>
          </BrowserRouter>
        </Container>
        <FooterMarket />
      </div>
    </Provider>
  )
}

export default App
