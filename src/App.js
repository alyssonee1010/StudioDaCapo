import Teoria from './components/Teoria';

import logo from './logo.svg';

import Exercicios from './components/Exercicios';
import Planos from './components/Planos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';

import { BrowserRouter as Router, Route}from 'react-router-dom';
import './App.css';


function App() {
  return (
    <Router>
      <Route path='/' render={(props) => (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App"> Studio DaCapo </p>
          </header> 
          <nav>
            <a className = "btm" href='/Teoria'> Aulas </a>
            <a className = "btm" href='/plans'> Planos </a>
            <a className = "btm" href='/Exercicios'> Exercícios </a>
            <a className = "btm" href='/contact' > Contato </a>
            <a className = "btm" href='/about'> Sobre </a>
          </nav>
        </>
      )}/>
      <main>
        <Sobre />
        <Contato />
        <Planos />
        <Exercicios />
        <Teoria />
      </main>
    </Router>
  );
}

export default App;
