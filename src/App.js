
import './App.css';
//import { Provider } from 'react-redux'
import HeaderMarket from './components/Header';
import FooterMarket from './components/Footer';
import { Container } from 'reactstrap'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import HomeMarket from './components/Home';
import NewHistoryBulk from './components/NewHistoryBulk';
//import store from './store'

function App() {
  return (
  /*  <Provider store={store}> */
    <div className="App">
      <HeaderMarket />
      <Container fluid="xxl" className="app-content">
       
        <NewHistoryBulk />
        {/*}
      <BrowserRouter>
     <Switch>
          <Route path="/marketplace" component={HomeMarket} />
            <Route
              path="/history_bulks/new"
              component={NewHistoryBulk}
            />
            </Switch>
        </BrowserRouter>

  */}
      </Container>
      <FooterMarket />
    </div>
   /*  </Provider> */
  );
}

export default App;
