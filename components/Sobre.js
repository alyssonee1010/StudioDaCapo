import { BrowserRouter as Router, Route }from 'react-router-dom';

function Sobre() { 
  return (
    <Router>
      <div>
        <Route path='/about' component={Sobre}>
          <div id='SBA'> 
            <bloco className='MVV'>
            <titulo className='titulo'> O Studio Da Capo </titulo>é um espaço voltado à aprendizagem musical, direcionado ao público de Guia Lopes da Laguna, Jardim e região. Surgiu do sonho, de um local onde arte possa ser expressada por meio da música, e alcance a maior quantidade de pessoas possível. A música como outras manifestações artísticas: teatro, dança, pintura, desenho, escultura, literatura, cinema etc, amplia o desenvolvimento socioemocional, aumenta a produtividade, o bem estar do indivíduo, e aguça a criatividade. <br/><br/>

            <titulo className='titulo'> A música </titulo>está presente no cotidiano das pessoas, em diversos momentos nos relacionamos com expressões musicais, seja cantarolando uma canção, batendo palma marcando a pulsação de uma música, ouvindo rádio, assistindo uma banda ou cantor que gostamos na TV ou em outra plataforma digital, o fato é que a música e as expressões musicais estão envoltas no nosso dia a dia, e somos atravessados por estas expressões a todo momento. <br/><br/>

            <titulo className='titulo'> Mas e você? </titulo>já se imaginou fazendo música? tocando um instrumento musical? tocando aquela música que tanto gosta? Nosso espaço está preparado para te receber com toda atenção e recursos necessários, para uma boa aprendizagem musical. Atualmente oferecemos cursos de: Violão, Guitarra, Contrabaixo, Teclado, Piano, Bateria e Gaita de Boca. Além das aulas práticas ofertamos planos de teoria musical. <br/><br/>

            <titulo className='titulo'> Entre em contato conosco </titulo> e aprenda o instrumento que mais gosta 😄 <br/><br/>

            <titulo className='titulo'>✔️Missão:</titulo> Proporcionar serviços na área musical, alicerçados na competência, humanização e valorização do ensino de música, ter impacto na comunidade. <br/><br/>

            <titulo className='titulo'>✔️Visão:</titulo> Ser reconhecida no município de Guia Lopes da Laguna e região como referência na área de educação musical. <br/><br/>

            <titulo className='titulo'>✔️Valores:</titulo> Prezamos pelo bom relacionamento entre professores, colaboradores e alunos. Relacionamento transparente, baseado em responsabilidade, respeito e confiança entre as partes. Objetivamos o melhor aprendizado musical, sendo o elo entre o desejo de aprender tocar um instrumento musical e a realização deste sonho, bem como exercer o papel cultural e social da arte alcançando a comunidade. <br/><br/>
            </bloco>
          </div>
        </Route>
      </div>
    </Router>
  );
}

export default Sobre;
