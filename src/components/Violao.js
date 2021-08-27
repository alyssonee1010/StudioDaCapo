import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Violao() {
  return (
    <Router>
      <div>
        <Route path='/Violao' component={Violao}>
          <div className='instru'> 
             
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default  Violao;