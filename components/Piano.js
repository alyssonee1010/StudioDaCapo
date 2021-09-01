import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Piano() {
  return (
    <Router>
      <div>
        <Route path='/Piano' exact component={Piano}>
          <div className='instru'> 
           Piano:
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Piano;