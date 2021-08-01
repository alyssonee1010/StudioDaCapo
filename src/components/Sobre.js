import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route }from 'react-router-dom';

function Sobre() { 
  return (
    <Router>
      <div>
        <Route path='/about' component={Sobre}>
          <p> Studio da Capo é um studio mt loco  HAHAHAHHA TEM VARIAS PESSOAS ISSO É UM TEXTO GRANDE
          EU NÃO SEI NEM OQUE EU TO FALANDO AHHAHAHAHAHHAH</p>
        </Route>
      </div>
    </Router>
  );
}

export default Sobre;
