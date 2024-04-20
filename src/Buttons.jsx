import React from 'react';
import './scss/buttons.scss';
import { calculatorButtons } from './globals/calculator-button-data';


const Buttons = ({ displayText, setDisplayText, operandA, setOperandA, setOperandB, operandB, setOperator, operator }) => {  

  function handleButtonClick(buttonInfo){
    switch(buttonInfo.type){
      case 'number':
        doNumbers(buttonInfo.value)
        break;
      case 'operator':
        doOperators(buttonInfo.text)
        break;
      case 'enter':
        doResult();
        break;
      case'':
    }
  }

  function doOperators(value) {
    if(!operator){
      setOperator(value)
    }
    // when operandB has NO VALUE and you want to add an opertor
    if(operandA && !operandB && !operator){
    console.log('operator set');
    }
    setDisplayText(value)
  }

  function doNumbers(value){
    // if no value has been set, update operandA
   if(!operandA && !operator && !operandB){
    setOperandA(value);
    setDisplayText(value);
    return;
   }
  //  if operandA has a value but operator doesnt,
  //  append digits until an operator has a value
   if(operandA && !operandB && !operator){
    let previousOperandA = operandA; 
    let newOperandA = `${operandA}${value}`; 
    console.log(`old value: ${previousOperandA}, updated value: ${newOperandA}`);
    setOperandA(newOperandA); 
    setDisplayText(newOperandA); 
  }
// if operandA and a operator has been selected start operandB
  if(operandA && !operandB && operator){
    setOperandB(value);
    setDisplayText(value);
    return;
  }

  // if opA opB and the operator ALL HAVE A Value, append opB
  if(operandA && operandB && operator){
    let previousOperandB = operandB; 
    let newOperandB = `${operandB}${value}`; 
    console.log(`old value: ${previousOperandB}, updated value: ${newOperandB}`);
    setOperandB(newOperandB); 
    setDisplayText(newOperandB); 
  }

  // if display is 0 dont allow more 0s
  // if(displayText == 0 && operandA === null){
  //   return this.state.value;
  // }
    // setDisplayText(value);
    // setOperandB(value);
  // }
}

    function whichOperator(operandA, operandB, operator){
    const numA = parseFloat(operandA);
    const numB = parseFloat(operandB);
    console.log(operandA, operator, operandB)
    switch(operator){
      case '+':
        console.log("A and B have been added")
        return numA + numB;
      case '-':
        console.log("A and B have been subtracted")
        return numA - numB;
      case '\u00d7':
        console.log("A and B have been multiplied")
        return numA * numB;
      case'\u00f7':
        console.log("A and B have been divided")
        return numA / numB;
      default:
        // could handle errors here too :eyes:
        return 0;
    }
  }
  
  function doResult(){
    if(operandA && operandB && operator){
      const answer = whichOperator(operandA, operandB, operator);
      setDisplayText(parseFloat(answer));
      setOperandA(answer);
      setOperandB(null);
      setOperator(null);
      console.log(answer);
    }
  }

  return (
    <div className='button-container'>
      {calculatorButtons.map((button) => (
        <button 
          className={button.className} 
          type={button.type}
          onClick={() => handleButtonClick(button)}
          key={button.value}>
          
          {button.text}
        </button>
      ))}
    </div>
  )
}

export default Buttons;