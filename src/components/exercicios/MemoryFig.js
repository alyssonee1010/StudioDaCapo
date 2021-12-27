import { BrowserRouter as Router, Route }from 'react-router-dom';
import { useState } from 'react';

import semibreve from './figures/semibreve.png';
import minima from './figures/minima.png';
import seminima from './figures/seminima.png';
import colcheia1 from './figures/colcheia1.png';
import colcheia2 from './figures/colcheia2.png';
import semicolcheia1 from './figures/semicolcheia1.png';
import semicolcheia2 from './figures/semicolcheia2.png';
import fusa1 from './figures/fusa1.png';
import fusa2 from './figures/fusa2.png';
import semifusa1 from './figures/semifusa1.png';
import semifusa2 from './figures/semifusa2.png';

const Fsemibreve = <img src={semibreve} className='figure' alt="semibreve" />
const Fminima = <img src={minima} className='figure' alt="minima" />
const Fseminima = <img src={seminima} className='figure' alt="seminima" />
const Fcolcheia1 = <img src={colcheia1} className='figure' alt="colcheia" />
const Fcolcheia2 = <img src={colcheia2} className='figure' alt="colcheias" />
const Fsemicolcheia1 = <img src={semicolcheia1} className='figure' alt="semicolcheias" />
const Fsemicolcheia2 = <img src={semicolcheia2} className='figure' alt="semicolcheias" />
const Ffusa1 = <img src={fusa1} className='figure' alt="fusa" />
const Ffusa2 = <img src={fusa2} className='figure' alt="fusas" />
const Fsemifusa1 = <img src={semifusa1} className='figure' alt="semifusa" />
const Fsemifusa2 = <img src={semifusa2} className='figure' alt="semifusas" />

let win = localStorage.getItem('winF') ? JSON.parse(localStorage.getItem('winF')) : false;

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  let Number = getRandomInt(0, 6)

const MemoryFig = () => {
    const [appearing, setAppering] = useState(
        {
          figure: Number,
        })

        const exercicio = (n) => {
            if (n == appearing.figure){
                localStorage.setItem('winF', true)
                document.location.reload()
            }
            else {
                localStorage.setItem('winF', false)
                document.location.reload()
            }
        }
    return (
    <Router>
        <Route path='/MemoryFig' exact component={MemoryFig}>
            <div id='MemoryCont'>
                <div>{appearing.figure == 0 ? Fsemibreve : ""}</div>
                <figure>{appearing.figure == 1 ? Fminima : ""}</figure>
                <figure>{appearing.figure == 2 ? Fseminima : ""}</figure>
                <figure>{appearing.figure == 3 ? Fcolcheia1 : ""}</figure>
                <figure>{appearing.figure == 4 ? Fsemicolcheia1 : ""}</figure>
                <figure>{appearing.figure == 5 ? Ffusa1 : ""}</figure>
                <figure>{appearing.figure == 6 ? Fsemifusa1 : ""}</figure>
            </div>
            <div id="FigsBtnCont">
            <button className='nomeNota' type="button" onClick={()=>exercicio(4)}>Semicolcheia</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(3)}>Colcheia</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(2)}>Seminima</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(1)}>Minima</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(0)}>Semibreve</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(5)}>Fusa</button>
            <button className='nomeNota' type="button" onClick={()=>exercicio(6)}>Semifusa</button>
          </div>
          <div id='FigRWCont'>
              <div className={win ? 'acertou' : "errou"}> Você {win ? 'acertou' : "errou"} </div>
          </div>
        </Route>
    </Router>
    )
}

export default MemoryFig
