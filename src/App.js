import logo from './logo.svg';
import './App.css';
import HeaderMarket from './components/Header';
import FooterMarket from './components/Footer';
import { Container } from 'reactstrap'

function App() {
  return (
    <div className="App">
      <HeaderMarket />
      <Container fluid="xxl" className="app-content">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </Container>
      <FooterMarket />
    </div>
  );
}

export default App;
