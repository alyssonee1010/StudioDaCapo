import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import Leituradp  from './exercicios/Leituradp';

function Exercicios() {
  return (
    <Router>
      <div>
        <Route path='/Exercicios' component={Exercicios}>
          <div> 
            <div>
               <a className='num' href='/Exercicios/Leitura-de-partitura'> Leitura de partitura <br/> </a>
               <a className='num'> Percepção Ritmica <br/> </a>
               <a className='num'> Percepção Melódica <br/> </a>
               <a className='num'> Notas no Piano <br/> </a>
               <a className='num'> Notas no Violão <br/> </a>
               <a className='num'> Memorização de figuras <br/></a>
               <a className='num'> Teoria </a>
            </div>
          </div>
        </Route>
        <Leituradp />
      </div>
    </Router>
  );
}

export default Exercicios;