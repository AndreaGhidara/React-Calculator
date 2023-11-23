import React, { useState } from 'react';
import Calculator from './components/Calculator';


function App() {
  const [counter, setCounter] = useState(2);

  const [resultValue, setResultValue] = useState(0);

  function addCount() {
    setCounter(counter + 1);
  };

  function result() {
    const allNumber = document.querySelectorAll('input[type="number"]') as NodeListOf<HTMLInputElement>;
    const allOperation = document.querySelectorAll('select') as NodeListOf<HTMLSelectElement>;

    let total = 0;

    allNumber.forEach((item, index) => {
      const inputValue = Number(item.value);
      const operation = allOperation[index].value;

      if (!isNaN(inputValue)) {
        if (operation === '+') {
          total += inputValue;
        } else if (operation === '-') {
          total -= inputValue;
        }
      }
    });

    setResultValue(total);
  }
  return (
    <div className="App bg-gradient-to-r from-cyan-500 to-blue-500 max-h-screen overflow-auto">
      <div className="flex flex-col justify-start items-center h-screen pt-5">
        <div className="bg-Glass p-5">
          <h1 className=" text-2xl">
            Row Calculator
          </h1>
          <div className='flex justify-start py-2'>
            <button className='btn-blue' onClick={addCount}>
              add row
            </button>
          </div>
          <div className='flex flex-col gap-y-3'>
            {Array.from({ length: counter }).map((_, index) =>
              <Calculator calculate={result} key={index} id={index} />
            )}
          </div>
          <div className='py-2'>
            <p className='text-bold'>
              Result : <span className='bg-emerald-400 rounded px-2 py-0.5'>{resultValue}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
