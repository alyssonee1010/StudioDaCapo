import { useState } from 'react';
import { BrowserRouter as Router, Route }from 'react-router-dom';
import seminima from './figures/seminima.png';
import claveSol from './clavesol.png';

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let min = localStorage.getItem('minimo') ? JSON.parse(localStorage.getItem('minimo')) :  4;
let max = localStorage.getItem('maximo') ? JSON.parse(localStorage.getItem('maximo')) :  11;

function niveis(n) {
  if (n === 10){
    localStorage.setItem('minimo', 4)
    localStorage.setItem('maximo', 11)
    let score = 0
    let win = 0
    localStorage.setItem('score', score)
    localStorage.setItem('win', win)
    document.location.reload()
  }
  else if (n === 7){
    let score = 0
    let win = 0
    localStorage.setItem('score', score)
    localStorage.setItem('win', win)
    localStorage.setItem('minimo', 0)
    localStorage.setItem('maximo', 12)
    document.location.reload()
  }
  else if (n === 4){
    localStorage.setItem('minimo', -3)
    localStorage.setItem('maximo', 13)
    let score = 0
    let win = 0
    localStorage.setItem('score', score)
    localStorage.setItem('win', win)
    document.location.reload()
  }
}

const Number = getRandomInt(min, max)
console.log(Number)

let score = localStorage.getItem('score') ? JSON.parse(localStorage.getItem('score')) : 0;
let win = localStorage.getItem('win') ? JSON.parse(localStorage.getItem('win')) : false;


function E1 () {
  const [appearing, setAppering] = useState(
  {
    seminima: Number
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
      localStorage.setItem('score', score)
      if ((score == 10) && (max === 11)){
        win = true
        localStorage.setItem('win', win)
        document.location.reload()
      }
      else if ((score == 15) && (max === 12)){
        win = true
        localStorage.setItem('win', win)
        document.location.reload()
      }
      else if ((score == 20) && (max === 13)){
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
   
   const Nota = <img src={seminima} className={appearing.seminima >= 5 ? "notas" : "nota"} alt="seminima" />
   const NotaCA = <img src={seminima} className={appearing.seminima >= 11 ? "notaCA" : "notaCA2"} alt="seminima" />
   const NotaCA3= <img src={seminima} className={appearing.seminima <= -2 ? "notaCA3" : "notaCA4"} alt="seminima" />
   
   let valor = (min + max) - 5;
   let porcentagem= score * valor + '%';
   const faltamScore =  ((max - 11) * 5);
   const faltam = 'Faltam ' + ((faltamScore + 10) - score);
   
   const ClaveG = <img src={claveSol} className='ClaveG' alt= "Clave de Sol" />
  return (
    <Router>
        <Route path='/Leitura-de-partitura/E1' exact component={E1}>
        <div id='dificuldadeCont'>
          <botton className='dificuldade' onClick={()=>niveis(10)}> F??cil </botton>
          <botton className='dificuldade' onClick={()=>niveis(7)}> M??dio </botton>
          <botton className='dificuldade' onClick={()=>niveis(4)}> D??ficil </botton>
        </div>
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
           {appearing.seminima === 12 ? <ul className='linha6'>{NotaCA3}</ul>: ""}
           {appearing.seminima === 13 ? <ul className='linha6'></ul>: ""}
           {appearing.seminima === 13 ? <ul className='linha7'>{NotaCA}</ul>: ""}
          </div>
        </div>
          <div id="notasBtnCont">
            <button type="button" className='nomeNota' onClick={()=>exercicio(4)}>Do</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(3)}>R??</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(2)}>Mi</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(1)}>Fa</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(7)}>Sol</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(6)}>La</button>
            <button type="button" className='nomeNota' onClick={()=>exercicio(5)}>Si</button>
          </div>
          <div id="barraCont">
            <div className='barra' style={{width: porcentagem}}></div>
          </div>
          <div id="winCont">
            <win className='win'>{win ? "Voc?? Ganhou" : faltam}</win>
          </div>
        </Route>
    </Router>
  );
}

export default E1;