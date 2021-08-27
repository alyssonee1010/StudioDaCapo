import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import seminima from './seminima.png';
import claveSol from './clavesol.png';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

let score = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : 0;
let win = localStorage.getItem('win') ? JSON.parse(localStorage.getItem('win')) : false;

const Number = getRandomInt(-3, 11);

function E1 () {
  const [appearing, setAppering] = useState(
  {
    seminima: Number,
  })

  const exercicio = (n) => {
     if (appearing.seminima === -1){
      appearing.seminima = 6
    }
    else if (appearing.seminima === -2){
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
      localStorage.setItem('score', score)
      if (score >= 20){
        win = true
        localStorage.setItem('win', win)
        document.location.reload()
      }
      else {
        document.location.reload()
      }
    }
    else{
      score = 0
      win = false
      localStorage.setItem('score', score)
      localStorage.setItem('win', win)
      document.location.reload()
    }
  }  



   const Nota = <img src={seminima} className={appearing.seminima > 5 ? "notas" : "nota"} alt="seminima" />
   const NotaCA = <img src={seminima} className={appearing.seminima == 11 ? "notaCA" : "notaCA2"} alt="seminima" />
   const NotaCA3= <img src={seminima} className={appearing.seminima <= -2 ? "notaCA3" : "notaCA4"} alt="seminima" />
   let porcentagem= score * 5 + '%'
   const ClaveG = <img src={claveSol} className='Claves' alt= "Clave de Sol" />
  return (
    <Router>
        <Route path='/Leitura-de-partitura/E1' exact component={E1}>
        <div id="pautaCont">
          <div id="pauta">
          {appearing.seminima === -3 ? <ul className='linha-1'>{NotaCA}</ul>: ""}
          {appearing.seminima === -3 ? <ul className='linha0'></ul>: ""}
          {appearing.seminima === -2 ? <ul className='linha0'>{NotaCA3}</ul>: ""}
          {appearing.seminima === -1 ? <ul className='linha0'>{NotaCA}</ul>: ""}
           <ul className='space0'>{appearing.seminima === 0 ? Nota : ""}</ul>
           <ul className='linha1'>{appearing.seminima === 1 ? Nota  : ""} {ClaveG}</ul>
           <ul className='space1'>{appearing.seminima === 2 ? Nota : ""}</ul>
           <ul className='linha2'>{appearing.seminima === 3 ? Nota : ""}</ul>
           <ul className='space2'>{appearing.seminima === 4 ? Nota : ""}</ul>
           <ul className='linha3'>{appearing.seminima === 5 ? Nota : ""}</ul>
           <ul className='space3'>{appearing.seminima === 6 ? Nota : ""}</ul>
           <ul className='linha4'>{appearing.seminima === 7 ? Nota : ""}</ul>
           <ul className='space4'>{appearing.seminima === 8 ? Nota : ""}</ul>
           <ul className='linha5'>{appearing.seminima === 9 ? Nota : ""}</ul>
           <ul className='space5'>{appearing.seminima === 10 ? Nota : ""}</ul>
           {appearing.seminima === 11 ? <ul className='linha6'>{NotaCA}</ul>: ""}
           {appearing.seminima === 12 ? <ul className='linha7'>{NotaCA3}</ul>: ""}
           {appearing.seminima === 13 ? <ul className='linha8'>{NotaCA3}</ul>: ""}
          </div>
        </div>
          <div id="notasBtnCont">
            <button className='nomeNota' onClick={()=>exercicio(4)}>Do</button>
            <button className='nomeNota' onClick={()=>exercicio(3)}>Ré</button>
            <button className='nomeNota' onClick={()=>exercicio(2)}>Mi</button>
            <button className='nomeNota' onClick={()=>exercicio(1)}>Fa</button>
            <button className='nomeNota' onClick={()=>exercicio(7)}>Sol</button>
            <button className='nomeNota' onClick={()=>exercicio(6)}>La</button>
            <button className='nomeNota' onClick={()=>exercicio(5)}>Si</button>
          </div>
          <div id="barraCont">
            <div className='barra' style={{width: porcentagem}}></div>
          </div>
          <div id="winCont">
            <win className='win'>{win ? "Você Ganhou" : 'Faltam:'}</win>
          </div>
        </Route>
    </Router>
  );
}

export default E1;