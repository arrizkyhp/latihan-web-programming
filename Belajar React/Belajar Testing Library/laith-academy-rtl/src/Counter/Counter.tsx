import React, { useState } from 'react'
import './Counter.css'

const Counter = () => {
  const [counterValue, setCounterValue] = useState(0);
  const [inputValue, setInputValue] = useState(1)
  return (
    <div>
        <h1 data-testid="header">My Counter</h1>
        <h2 data-testid="counter">{counterValue}</h2>
        <div className="counter-area">
          <button data-testid="btn-subtract">-</button>
          <input 
            className='counter-input' 
            data-testid="counter-input" 
            type="number" 
            value={inputValue} 
          />
          <button data-testid="btn-add">+</button>
        </div>
    </div>
  )
}

export default Counter