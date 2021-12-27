import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import seminima from './figures/seminima.png';
import claveF from './claveF.png';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = localStorage.getItem('minimoF') ? JSON.parse(localStorage.getItem('minimoF')) :  4;
let max = localStorage.getItem('maximoF') ? JSON.parse(localStorage.getItem('maximoF')) :  11;

function niveis(n) {
  if (n === 10){
    localStorage.setItem('minimoF', 4)
    localStorage.setItem('maximoF', 11)
    let score = 0
    let win = 0
    localStorage.setItem('scoreF', score)
    localStorage.setItem('winF', win)
    document.location.reload()
  }
  else if (n === 7){
    let score = 0
    let win = 0
    localStorage.setItem('scoreF', score)
    localStorage.setItem('winF', win)
    localStorage.setItem('minimoF', 0)
    localStorage.setItem('maximoF', 12)
    document.location.reload()
  }
  else if (n === 4){
    localStorage.setItem('minimoF', -3)
    localStorage.setItem('maximoF', 13)
    let score = 0
    let win = 0
    localStorage.setItem('scoreF', score)
    localStorage.setItem('winF', win)
    document.location.reload()
  }
}

const Number = getRandomInt(min, max)
console.log(Number)

let score = localStorage.getItem('scoreF') ? JSON.parse(localStorage.getItem('scoreF')) : 0;
let win = localStorage.getItem('winF') ? JSON.parse(localStorage.getItem('winF')) : false;


function E2 () {
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
      if ((score == 10) && (max === 11)){
        win = true
        localStorage.setItem('winF', win)
        document.location.reload()
      }
      else if ((score == 15) && (max === 12)){
        win = true
        localStorage.setItem('winF', win)
        document.location.reload()
      }
      else if ((score == 20) && (max === 13)){
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
   const NotaCA3= <img src={seminima} className={appearing.seminima <= -2 ? "notaCA3" : "notaCA4"} alt="seminima" />
   
   let valor = (min + max) - 5;
   let porcentagem= score * valor + '%';
   const faltamScore =  ((max - 11) * 5);
   const faltam = 'Faltam ' + ((faltamScore + 10) - score);
   
   const ClaveF = <img src={claveF} className='ClaveF' alt= "Clave de Fá" />
  return (
    <Router>
        <Route path='/Leitura-de-partitura/E2' exact component={E2}>
        <div id='dificuldadeCont'>
          <botton className='dificuldade' onClick={()=>niveis(10)}> Fácil </botton>
          <botton className='dificuldade' onClick={()=>niveis(7)}> Médio </botton>
          <botton className='dificuldade' onClick={()=>niveis(4)}> Díficil </botton>
        </div>
        <div id="pautaCont">
          <div id="pauta">
          {appearing.seminima === -3 ? <ul className='linha-1'>{NotaCA}</ul>: ""}
          {appearing.seminima === -3 ? <ul className='linha0'></ul>: ""}
          {appearing.seminima === -2 ? <ul className='linha0'>{NotaCA3}</ul>: ""}
          {appearing.seminima === -1 ? <ul className='linha0'>{NotaCA}</ul>: ""}
           <ul className='space0'>{appearing.seminima === 0 ? Nota : ""}</ul>
           <ul className='linha1'>{appearing.seminima === 1 ? Nota  : ""} {ClaveF}</ul>
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
           {appearing.seminima === 12 ? <ul className='linha6'>{NotaCA3}</ul>: ""}
           {appearing.seminima === 13 ? <ul className='linha6'></ul>: ""}
           {appearing.seminima === 13 ? <ul className='linha7'>{NotaCA}</ul>: ""}
          </div>
        </div>
          <div id="notasBtnCont">
            <button className='nomeNota' type="button" onClick={()=>exercicio(6)}>Do</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(5)}>Ré</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(4)}>Mi</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(3)}>Fa</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(2)}>Sol</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(1)}>La</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(7)}>Si</button>
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

export default E2;