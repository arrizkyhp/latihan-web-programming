import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [counterValue, setCounterValue] = useState<number>(0);
  const [inputValue, setInputValue] = useState<number>(1)

  const subtractCounter = () => {
    setCounterValue(counterValue - inputValue)
  }

  const addCounter = () => {
    setCounterValue(counterValue + inputValue)
  }


  return (
    <div>
        <h1 data-testid="header">My Counter</h1>
        <h2 
          data-testid="counter" 
          className={`${counterValue >= 100 ? "counter--green" : ""}${counterValue <= -100 ? "counter--red" : ""}`}
        >
          {counterValue}
        </h2>
        <div className="counter-area">
          <button 
            data-testid="btn-subtract"
            onClick={subtractCounter}
          >-</button>
          <input 
            className='counter-input' 
            data-testid="counter-input" 
            type="number" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.valueAsNumber)}
          />
          <button 
            data-testid="btn-add"
            onClick={addCounter}
          >+</button>
        </div>
    </div>
  )
}

export default Counter