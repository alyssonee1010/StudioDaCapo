import { BrowserRouter as Router, Route }from 'react-router-dom';

function Violao() {
  return (
    <Router>
      <div>
        <Route path='/Violao' component={Violao}>
        <div id='SBA'> 
          <div className='titulo sba'> Violão <br /><br /> </div>
            <div className='SobreAulas'>
            Primeiras aulas o aluno irá estudar a postura no instrumento (posicionamento da mão e corpo), e a localização das teclas no piano e teclado de acordo com a partitura. 
            Com exercícios, iremos trabalhar a dinâmica nos instrumentos (aprofundando ao passar das aulas). As leituras (partituras) serão praticadas em todas as aulas, estudando mão direita, esquerda e a execução de partitura com as mãos juntas.  
            O aluno aprenderá escalas, solfejo das partituras e elementos do instrumento escolhido. As aulas apesar de terem semelhança e estudos em comum (Piano e Teclado), serão direcionadas a utilização de cada instrumento na estrutura musical, e quanto ao estilo de música e repertório escolhido pelo professor/aluno. 
            As aulas de teclado, a leitura da partitura será focada mais na mão direita, e a esquerda nos acordes (trabalhando apenas no teclado a prática “Play along”). Escalas são extremamente importantes nas músicas, e sempre serão trabalhadas, existem diversos tipos de escalas (diatônica, cromática, arpejada, jazz...), e a ordem do ensino delas podem variar dependendo do objetivo do aluno. 
            Exercícios de velocidade irão trabalhar a técnica do aluno quanto a velocidade e dinâmica, podendo variar o livro a ser utilizado. Contra ponto, trinado, acentuação são diversas as técnicas musicais que existem no piano e teclado, e serão trabalhadas em exercícios, peças e músicas nas aulas.                 
            </div>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default  Violao;