import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Planos() {
  return (
     <Router>
      <div>
        <Route path='/plans' component={Planos}>
          <div className='sobre'> 
             NOSSOS PLANOS SÃO VÁRIOS
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Planos;