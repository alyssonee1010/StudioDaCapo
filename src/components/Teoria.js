import { BrowserRouter as Router, Route }from 'react-router-dom';

function Teoria() {
  return (
    <Router>
      <div>
        <Route path='/Teoria' exact component={Teoria}>
          <div id='SBA'> 
            <div className='SobreAulas'>
            <div className='titulo'>Aulas DaCapo<br /><br /></div>
              As aulas são de 50 minutos a 1 hora de duração. Aula individual 
              é dada com professor e Aluno, aula em grupo pode chegar até 3 alunos além do professor.
              As aulas somente práticas são focadas em como tocar o instrumento em 
              especifico, já as aulas teóricas e praticas ajudam 
              o aluno compreender a música como um todo, existe um limite que o 
              aluno pode chegar sem a teoria. A aula somente teórica é recomendada para alunos que ja tocam
              e buscam melhorar a sua compreenssão da música.
            </div>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Teoria;