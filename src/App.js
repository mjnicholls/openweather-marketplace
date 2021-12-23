import logo from './logo.svg';
import './App.css';
import HeaderMarket from './components/Header';
import FooterMarket from './components/Footer';
import { Container } from 'reactstrap'
import HomeMarket from './components/Home';

function App() {
  return (
    <div className="App">
      <HeaderMarket />
      <Container fluid="xxl" className="app-content">
      <HomeMarket />
      </Container>
      <FooterMarket />
    </div>
  );
}

export default App;
