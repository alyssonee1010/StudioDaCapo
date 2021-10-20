import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Contato() {
  return (
    <Router>
      <div>
        <Route path='/contact' component={Contato}>
         <div id='Principais'>
            <div className='numeros'>
             <h1> Números </h1>
              Studio DaCapo <cont> 67 99191-9080 </cont> <br />
              Alysson (WPP) <cont> 11 95885-0243 </cont><br />
              Diego <cont> 67 99969-3300 </cont><br />
              Luciano <cont> 67 99904-4358 </cont><br />
            </div>
            <div className='email'>
            <h1> E-mails </h1>
              Studio DaCapo <cont> dacapo.studioeloja@gmail.com</cont> <br />
              Alysson <cont>queijos410@gmail.com</cont> <br />
              Diego  <cont>diegosenna1993@gmail.com</cont> <br />
              Luciano <cont>ossunabraza@gmail.com </cont>
            </div>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Contato;