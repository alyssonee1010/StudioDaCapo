import Piano from './components/Piano';
import Bateria from './components/Bateria';
import Violao from './components/Violao';

import logo from './logo.svg';
import Aulas from './components/Aulas';
import Instrumentos from './components/Instrumentos';

import Exercicios from './components/Exercicios';
import Planos from './components/Planos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';

import { useState } from 'react';
import { BrowserRouter as Router, Route}from 'react-router-dom';
import './App.css';

function App() {
  const [showAulas, setShowAulas] =  useState(false)
  return (
    <Router>
      <Route path='/' render={(props) => (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App"> Studio DaCapo </p>
          </header> 
          <nav>
            <Aulas onAulas= {() => setShowAulas(!showAulas)}/>
            <a className = "btm" href='/plans'> Planos </a>
            <a className = "btm" href='/Exercicios'> Exercícios </a>
            <a className = "btm" href='/contact' > Contato </a>
            <a className = "btm" href='/about'> Sobre </a>
            {showAulas && <Instrumentos /> }
          </nav>
        </>
      )}/>
      <main>
        <Sobre />
        <Contato />
        <Planos />
        <Exercicios />
        <Piano />
      </main>
    </Router>
  );
}

export default App;
