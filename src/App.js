import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [expression, setExpression] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(expression);
        setExpression(result.toString());
      } catch (error) {
        setExpression('Error');
      }
    } else if (value === 'C') {
      setExpression('');
    } else if (value === 'Del') {
      setExpression(expression.slice(0, -1));
    } else {
      setExpression(expression + value);
    }
  };

  return (
    <div className="container mt-5 rounded col-md-3 col-lg-2 col-6" style={{height:"350px"}}>
      <div className='rounded-top d-flex flex-column h-50' style={{backgroundColor:'darkblue'}}>
        <div className='d-flex flex-row'>
          <button type='button' className='btn m-1 col-2 col-md-2 bg-primary text-white m-2' onClick={() => handleClick('C')}>C</button>
          <button type='button' className='btn m-1 col-3 col-md-3 bg-primary text-white m-2' onClick={() => handleClick('Del')}>Del</button>
        </div>
        <textarea type="text" className='bg-transparent text-white border-0 display-5 text-end h-100 text-wrap' value={expression} readOnly></textarea>
      </div>
      <div className="buttons rounded-bottom h-50" style={{backgroundColor:"rgb(0,0,34)"}}>
        <div className="button-row p-2">
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('7')}>7</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('8')}>8</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('9')}>9</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('/')}>/</button>
        </div>
        <div className="button-row p-2">
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('4')}>4</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('5')}>5</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('6')}>6</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('*')}>*</button>
        </div>
        <div className="button-row p-2">
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('1')}>1</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('2')}>2</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('3')}>3</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('-')}>-</button>
        </div>
        <div className="button-row p-2">
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('0')}>0</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('.')}>.</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('=')}>=</button>
          <button className='bg-transparent text-white border-0 col-3' onClick={() => handleClick('+')}>+</button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
