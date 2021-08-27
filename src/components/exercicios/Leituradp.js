import { BrowserRouter as Router, Route }from 'react-router-dom';

import E1 from './E1';

function Leituradp () {
  return (
    <Router>
      <Route path='/Exercicios/Leitura-de-partitura' exact component={Leituradp}>
        <div>
           <a href='/Leitura-de-partitura/e1' className='exerciciosNum' > Fazer o exercicio </a>
        </div>
      </Route>
      <E1 />
    </Router>
  );
}

export default Leituradp;