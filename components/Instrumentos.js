import { BrowserRouter as Router, Route}from 'react-router-dom';

function Instrumentos(appear) {
  return (
    <>
     <Router>
      <Route path='/' render={(props) => (
        <div className= 'instrumentos'>
            <a href='/piano' className= 'instrumentosB'> Aulas de Piano </a>
            <a href='/Violao' className= 'instrumentosB'> Aulas de violão </a>
            <a href='/Bateria' className= 'instrumentosB'> Aulas de Bateria </a>
            <a href='/Teoria' className= 'instrumentosB'> Aulas de Teoria </a>
        </div>
      )}/>
    </Router>
    </>
     
  );
}

export default Instrumentos;
