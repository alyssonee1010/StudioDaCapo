import Piano from './components/Piano';
import Bateria from './components/Bateria';
import Violao from './components/Violao';
import Teoria from './components/Teoria';

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

import bateria from './img/bateria.jpg';
import piano from './img/piano.jpg';
import cordas from './img/cordas.jpg';

function App() {
  const bateriaIMG = <img src={bateria} className='teest a' alt="Bateria" />
  const pianoIMG = <img src={piano} className='teest b' alt="Piano" />
  const cordasIMG = <img src={cordas} className='teest c' alt="violão, baixo, guitarra, etc" />
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
            
            <Route path='/' exact render={(props) => (
              <>
              {pianoIMG}
              {bateriaIMG}
              {cordasIMG}
              </>
              )}/>
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
