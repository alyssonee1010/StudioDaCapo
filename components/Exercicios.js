import { BrowserRouter as Router, Route }from 'react-router-dom';
import Leituradp  from './exercicios/Leituradp';
import MemoryFig from './exercicios/MemoryFig';

function Exercicios() {
  return (
    <Router>
      <div>
        <Route path='/Exercicios' component={Exercicios}>
          <div> 
            <div id="exerciciosFullCont">
               <a className='exerciciosFull' href='/Exercicios/Leitura-de-partitura'> Leitura de partitura <br/> </a>
               <a className='exerciciosFull' href='/MemoryFig'> Memorização de figuras <br/></a>
            </div>
          </div>
        </Route>
        <Leituradp />
        <MemoryFig />
      </div>
    </Router>
  );
}

export default Exercicios;