import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Contato() {
  return (
    <Router>
      <div>
        <Route path='/contact' component={Contato}>
          <div className='sobre'> 
             Nosso Contato: 55-95555-5555
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Contato;