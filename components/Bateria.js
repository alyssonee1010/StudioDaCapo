import { BrowserRouter as Router, Route }from 'react-router-dom';

function Bateria() {
  return (
    <Router>
      <div>
        <Route path='/Bateria' component={Bateria}>
        <div id='SBA'> 
          <div className='titulo sba'>Bateria <br /><br /> </div>
            <div className='SobreAulas'>
              Estudos: <br /><br />
              Endecagrama, Pentagrama, Linhas e Espaços Suplementares superiores e inferiores, Notas musicais, Claves Sol, Dó e Fá, Notas na pauta Clave de Sol e Fá. <br />
              Duração: Figura de nota, Pausa ou Silêncio<br />
              Percepção melódica <br />
              COMPASSO Signo de Compasso ou Fórmula de Compasso <br />
              Percepção rítmica e melódica
              Ponto de Aumento, Duplo ponto de Aumento, Triplo ponto de Aumento <br />
              Percepção rítmica e melódica <br />
              Ligadura de Soma ou prolongamento, Ligadura de portamento, Ligadura de Célula, Ligadura de Expressão e a Anacruse. <br />
              Percepção rítmica e melódica <br />
              Fermata ou Coroa <br />
              Valor Simples, Valor Composto, Valor Irregular. <br />
              Percepção rítmica e melódica <br />
              O Tom e o Semitom <br />
              Percepção rítmica e melódica <br />
              Os Tons <br />

           </div>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Bateria;