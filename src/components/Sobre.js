import { BrowserRouter as Router, Route }from 'react-router-dom';
import Sobre2 from './Sobre2';
import React, { useState } from "react";
function Sobre() { 
  const [ap, setAp] = useState("StudioDaCapo");
  return (
    <Router>
      <div>
        <Route path='/about' component={Sobre}>
          <div id='SBA'> 
            <bloco className='MVV'>
              <nav id="tituloBotao">
                <button className='tituloBotao'onClick={() => setAp("StudioDaCapo")} > O Studio Da Capo </button> 
                <button className='tituloBotao' onClick={() => setAp("missao")}>✔️Missão</button>  
                <button className='tituloBotao' onClick={() => setAp("visao")}>✔️Visão</button>
                <button className='tituloBotao' onClick={() => setAp("valores")} >✔️Valores</button> 
              </nav>
              {ap === "StudioDaCapo" && <Sobre2 text=" O studio DaCapo é um espaço voltado à aprendizagem musical, direcionado ao público de Guia Lopes da Laguna, Jardim e região. Surgiu do sonho, de um local onde arte possa ser expressada por meio da música, e alcance a maior quantidade de pessoas possível. A música como outras manifestações artísticas: teatro, dança, pintura, desenho, escultura, literatura, cinema etc, amplia o desenvolvimento socioemocional, aumenta a produtividade, o bem estar do indivíduo, e aguça a criatividade. A música está presente no cotidiano das pessoas, em diversos momentos nos relacionamos com expressões musicais, seja cantarolando uma canção, batendo palma marcando a pulsação de uma música, ouvindo rádio, assistindo uma banda ou cantor que gostamos na TV ou em outra plataforma digital, o fato é que a música e as expressões musicais estão envoltas no nosso dia a dia, e somos atravessados por estas expressões a todo momento. Mas e você? já se imaginou fazendo música? tocando um instrumento musical? tocando aquela música que tanto gosta? Nosso espaço está preparado para te receber com toda atenção e recursos necessários, para uma boa aprendizagem musical. Atualmente oferecemos cursos de: Violão, Guitarra, Contrabaixo, Teclado, Piano, Bateria e Gaita de Boca. Além das aulas práticas ofertamos planos de teoria musical.  "/>}           
              {ap === "missao" &&  <Sobre2 text= "Proporcionar serviços na área musical, alicerçados na competência, humanização e valorização do ensino de música, ter impacto na comunidade."/>}
              {ap === "visao" && <Sobre2 text= "Ser reconhecida no município de Guia Lopes da Laguna e região como referência na área de educação musical." />}
              {ap === "valores" && <Sobre2 text= "Prezamos pelo bom relacionamento entre professores, colaboradores e alunos. Relacionamento transparente, baseado em responsabilidade, respeito e confiança entre as partes. Objetivamos o melhor aprendizado musical, sendo o elo entre o desejo de aprender tocar um instrumento musical e a realização deste sonho, bem como exercer o papel cultural e social da arte alcançando a comunidade. "/>}
            </bloco>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Sobre;
