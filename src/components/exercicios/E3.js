import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import seminima from './figures/seminima.png';
import seminima2 from './seminima.png';
import claveR from './claveR.png';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Number = getRandomInt(0, 8)
console.log(Number)

let score = localStorage.getItem('scoreF') ? JSON.parse(localStorage.getItem('scoreF')) : 0;
let win = localStorage.getItem('winF') ? JSON.parse(localStorage.getItem('winF')) : false;


function E3 () {
  const [appearing, setAppering] = useState(
  {
    seminima: Number,
  })

  const exercicio = (n) => {
     if ((appearing.seminima === -1) || (appearing.seminima === 13)){
      appearing.seminima = 6
    }
    else if ((appearing.seminima === -2) || (appearing.seminima === 12)){
      appearing.seminima = 5
    }
    else if (appearing.seminima === 8){
      appearing.seminima = 1
    }
    else if (appearing.seminima === 9){
      appearing.seminima = 2
    }
    else if (appearing.seminima === 10){
      appearing.seminima = 3
    }
    else if ((appearing.seminima === 11) || (appearing.seminima === -3)){
      appearing.seminima = 4
    }
    else if (appearing.seminima === 0){
      appearing.seminima = 7
    }
    if (appearing.seminima === n){
      score += 1
      localStorage.setItem('scoreF', score)
      if (score == 10){
        win = true
        localStorage.setItem('winF', win)
        document.location.reload()
      }
      else {
        document.location.reload()
      }
    }
    else{
      score = 0
      win = false
      localStorage.setItem('scoreF', score)
      localStorage.setItem('winF', win)
      document.location.reload()
    }
  }  
   
   const Nota = <img src={seminima} className={appearing.seminima >= 5 ? "notas" : "nota"} alt="seminima" />
   const NotaCA = <img src={seminima} className={appearing.seminima >= 11 ? "notaCA" : "notaCA2"} alt="seminima" />
   const Nota2= <img src={seminima2} className={appearing.seminima < 3 ? "notaCA2" : "notaCA"} alt="seminima" />
   
   let porcentagem= score * 3 + '%';
   const faltam = 'Faltam ' + (10 - score);
   
   const ClaveR = <img src={claveR} className='ClaveR' alt= "Clave de Fá" />
  return (
    <Router>
        <Route path='/Leitura-de-partitura/E3' exact component={E3}>
        <div id="pautaCont">
          <div id="pauta">
          {appearing.seminima === 0 ? <ul className='linha0'>{Nota2}</ul>: ""}
           <ul className='space0'>{appearing.seminima === 1 ? Nota2 : ""}</ul>
           <ul className='linha1'>{appearing.seminima === 2 ? Nota2 : ""} {ClaveR}</ul>
           <ul className='space1'>{appearing.seminima === 3 ? Nota : ""}</ul>
           <ul className='linha2'>{appearing.seminima === 4 ? Nota : ""}</ul>
           <ul className='space2'>{appearing.seminima === 5 ? Nota : ""}</ul>
           <ul className='linha3'></ul>
           <ul className='space3'>{appearing.seminima === 6 ? Nota : ""}</ul>
           <ul className='linha4'></ul>
           <ul className='space4'>{appearing.seminima === 7 ? Nota : ""}</ul>
           <ul className='linha5'></ul>
           <ul className='space5'>{appearing.seminima === 8 ? Nota2 : ""}</ul>
          </div>
        </div>
          <div id="notasBtnCont">
            <button className='nomeNota2' type="button" onClick={()=>exercicio(5)}>Caixa</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(7)}>Bumbo</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(3)}>Ton 1</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(4)}>Ton 2</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(6)}>Surdo</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(0)}>Prato de Ataque</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(1)}>Chimbal</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(8)}>Chimbal com pé</button>
            <button className='nomeNota2' type="button" onClick={()=>exercicio(2)}>Prato de condução</button>
          </div>
          <div id="barraCont">
            <div className='barra' style={{width: porcentagem}}></div>
          </div>
          <div id="winCont">
            <win className='win'>{win ? "Você Ganhou" : faltam}</win>
          </div>
        </Route>
    </Router>
  );
}

export default E3;