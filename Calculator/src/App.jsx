import React from 'react';
import style from './App.module.css';
import Display from './components/Display';
import ButtonContainer from './components/ButtonContainer';
import { useState } from 'react';

function App() {

  const [calVal,setCalVal] = useState('');
  const onButtonClick = (buttonText) =>{
    // console.log("button click",buttonText);
    if(buttonText==='C'){
      setCalVal('');
    }
    else if(buttonText==='='){
      const result = eval(calVal);
      setCalVal(result);
    }
    else{
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  }

  return (
      <div className={style.calculator}>
        <Display displayText={calVal}/>
        <ButtonContainer onButtonClick={onButtonClick}/>
      </div>
  )
}

export default App
