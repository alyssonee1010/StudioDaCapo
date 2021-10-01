import { BrowserRouter as Router, Route }from 'react-router-dom';

function Planos() {
  return (
     <Router>
      <div>
        <Route path='/plans' component={Planos}>
         <div id='Principais2'>   
          <div className='titulo PeV'> Planos e Valores  </div> 
          <div className='Cursos'>
            Pratico I <br /><br />
            Pratico II <br /><br />
            Teorico I <br /><br />
            Teorico II <br /><br />
            <nobr>Completo I</nobr> <br /><br />
            <nobr>Completo II</nobr> <br /><br />
            <nobr>Completo III</nobr> 
          </div>
          <div className='Aulas'>
            <nobr> Prática (3 alunos) </nobr><br /> <br />
            <nobr> Prática (individual) </nobr><br /> <br />
            <nobr> Teórica (3 alunos) </nobr><br /> <br />
            <nobr> Teórica (individual)</nobr> <br /> <br />
            <nobr> Teórica (individual) e prática</nobr> <br /> <br />
            <nobr> Teórica (3 alunos) e prática</nobr> <br /> <br />
            <nobr> Teórica (individual) e prática </nobr>
          </div>
          <div className='AulasMes'>
            <nobr> 4 aulas/mês</nobr> <br /> <br />
            <nobr> 4 aulas/mês</nobr> <br /> <br />
            <nobr> 4 aulas/mês</nobr> <br /> <br />
            <nobr> 4 aulas/mês</nobr> <br /> <br />
            <nobr> 4 aulas/mês</nobr> <br /> <br />
            <nobr> 8 aulas/mês</nobr> <br /> <br />
            <nobr> 8 aulas/mês </nobr>
          </div>
          <div className='Valores'>
            <nobr>  R$ 90,00 </nobr> <br /> <br />
            <nobr>  R$ 150,00 </nobr> <br /> <br />
            <nobr>  R$ 90,00 </nobr> <br /> <br />
            <nobr>  R$ 150,00 </nobr> <br /> <br />
            <nobr>  R$ 200,00 </nobr> <br /> <br />
            <nobr>  R$ 300,00 </nobr> <br /> <br />
            <nobr>  R$ 400,00 </nobr> 
          </div>
          <div className='Matricula'>
          <nobr> R$ 60,00 </nobr>  <br /> <br />
          <nobr>  R$ 100,00 </nobr>  <br /> <br />
          <nobr> R$ 60,00</nobr> <br /> <br />
          <nobr> R$ 100,00</nobr> <br /> <br />
          <nobr> R$ 130,00</nobr>  <br /> <br />
          <nobr> R$ 150,00</nobr> <br /> <br />
          <nobr> R$ 200,00 </nobr> 
          </div>
        </div>
        </Route>
      </div>
    </Router>
  );
}

export default Planos;