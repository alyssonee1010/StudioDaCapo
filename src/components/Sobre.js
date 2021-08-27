import { BrowserRouter as Router, Route }from 'react-router-dom';

function Sobre() { 
  return (
    <Router>
      <div>
        <Route path='/about' component={Sobre}>
          <div className='sobre'> 
             STUDIO DA CAPO É UMA ESCOLA DE MÚSICA
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Sobre;
