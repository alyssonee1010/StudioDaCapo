import logo from './logo.svg';
import Aulas from './components/Aulas';
import Instrumentos from './components/Instrumentos';
import Planos from './components/Planos';
import Sobre from './components/Sobre';
import Contato from './components/Contato';
import { useState } from 'react';
import { BrowserRouter as Router, Route, Link}from 'react-router-dom';
import './App.css';

function App() {
  const [showAulas, setShowAulas] =  useState(false)
  return (
    <Router>
      <div>
      <Route path='/' render={(props) => (
        <>
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p className="App"> Studio DaCapo </p>
          </header>
          <Contato />
          <Planos /> 
          <Link className = "btm" to='/about'> Sobre </Link>
          <Link className = "btm" > Contato </Link>
          <Link className = "btm" > Planos </Link>
          <Aulas onAulas= {() => setShowAulas(!showAulas)}/>
          {showAulas && <Instrumentos /> }
        </>
      )}/>
        <Sobre />
      </div>
    </Router>
  );
}

export default App;
