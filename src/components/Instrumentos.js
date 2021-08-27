import { BrowserRouter as Router, Route}from 'react-router-dom';

function Instrumentos(appear) {
  return (
    <>
     <Router>
      <Route path='/' render={(props) => (
        <div className= 'instrumentos'>
            <a href='/piano' className= 'instrumentosB'> Aulas de Piano </a>
            <a className= 'instrumentosB'> Aulas de violão </a>
            <a className= 'instrumentosB'> Aulas de Bateria </a>
        </div>
      )}/>
    </Router>
    </>
     
  );
}

export default Instrumentos;
