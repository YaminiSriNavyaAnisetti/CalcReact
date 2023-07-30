import React,{useState} from 'react'
import './Calc.css'
function Calc() {
  const[result,setResult]=useState("");
  const handleButton=e=>{
    setResult(result.concat(e.target.name));
  }
  const evaluate=() =>{
    try{
      setResult(eval(result).toString());
    }
    catch(err){
      setResult("ERROR");
    }
  }
  const reset=()=>{
    setResult(" ")
  }
  const clear=()=>{
    setResult(result.slice(0,-1))
  }
  return (
    <div className="Main">
        <div className="Container">
        <form >
            <input type="text" value={result}></input>
        </form>
        </div>
        <div className="keypad">
            <button id="Aclear" onClick={reset}>AllClear</button>
            <button id="clear" onClick={clear}>Clear</button>
            <button onClick={handleButton} name="/">/</button>
            <button onClick={handleButton} name="7">7</button>
            <button onClick={handleButton}  name="8">8</button>
            <button onClick={handleButton}  name="9">9</button>
            <button onClick={handleButton}  name="*">x</button>
            <button onClick={handleButton}  name="4">4</button>
            <button onClick={handleButton} name="5">5</button>
            <button onClick={handleButton}  name="6">6</button>
            <button onClick={handleButton} name="-">-</button>
            <button onClick={handleButton} name="1">1</button>
            <button onClick={handleButton} name="2">2</button>
            <button onClick={handleButton} name="3">3</button>
            <button onClick={handleButton} name="+">+</button>
            <button onClick={handleButton} name="0">0</button>
            <button onClick={handleButton} name=".">.</button>
            <button id="equal" onClick={evaluate}>=</button>
        </div>
    </div>
  )
}

export default Calc