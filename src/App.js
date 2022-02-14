import React from "react";

import "./App.css";
import { Provider } from "react-redux";
import HeaderMarket from "./components/Header";
import FooterMarket from "./components/Footer";
import { Container } from "reactstrap";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeMarket from "./pages/Home";
import NewHistoryBulk from "./pages/NewHistoryBulk";
import HistoryForecastBulk from "./pages/HistoryForecastBulk";
import store from "./store";
import DataUSState from "./pages/DataUSState";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HeaderMarket />
        <Container fluid="xxl" className="app-content">
          <BrowserRouter>
            <Switch>
              <Route path="/marketplace" component={HomeMarket} />
              <Route path="/history_bulks/new" component={NewHistoryBulk} />
              <Route
                path="/history_forecast_bulks/new"
                component={HistoryForecastBulk}
              />
              <Route path="/zip_code_data/new" component={DataUSState} />
            </Switch>
          </BrowserRouter>
        </Container>
        <FooterMarket />
      </div>
    </Provider>
  );
}

export default App;
