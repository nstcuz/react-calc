import React, { useState } from 'react';
import './App.css';
import Buttons from './Buttons';
import Screen from './Screen'

function App() {
  const [displayText, setDisplayText] = useState('0');
  const [operandA, setOperandA] = useState(null);
  const [operandB, setOperandB] = useState(null);
  const [operator, setOperator] = useState(null);

  return (
    <>
      <div style={{ maxWidth: "42rem",
                    border: "2px solid black", 
                    padding: "8px", 
                    borderRadius: "0.25rem", 
                    backgroundColor: "#f9f5f5"}}>

        <Screen  text={displayText}/>
        <Buttons setDisplayText={setDisplayText}
                 setOperandA={setOperandA}
                 operandA={operandA}
                 setOperandB={setOperandB}
                 operandB={operandB}
                 setOperator={setOperator}
                 operator={operator}/>

      </div>
    </>
  )
}

export default App;