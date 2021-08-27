import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Bateria() {
  return (
    <Router>
      <div>
        <Route path='/Bateria' component={Bateria}>
          <div className='instru'> 
            
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Bateria;