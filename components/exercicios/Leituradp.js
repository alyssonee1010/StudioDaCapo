import { BrowserRouter as Router, Route }from 'react-router-dom';

import E1 from './E1';
import E2 from './E2';
import E3 from './E3';
function Leituradp () {
  return (
    <Router>
      <Route path='/Exercicios/Leitura-de-partitura' exact component={Leituradp}>
        <div id='exerciciosPartCont'>
           <a href='/Leitura-de-partitura/e1' className='exerciciosPart' > Clave de Sol </a>
           <a href='/Leitura-de-partitura/e2' className='exerciciosPart' > Clave de Fá </a>
           <a href='/Leitura-de-partitura/e3' className='exerciciosPart' > Clave Ritmíca </a>
        </div>
      </Route>
      <E1 />
      <E2 />
      <E3 />
    </Router>
  );
}

export default Leituradp;