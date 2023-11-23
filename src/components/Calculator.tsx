import React, { useEffect, useState } from 'react';

interface propsInterface {
    id: number;
    calculate: () => void;
}

const Calculator: React.FC<propsInterface> = ({ id, calculate }) => {

    const [InputDisabled, setInputDisabled] = useState(false);

    const [showDiv, setShowDiv] = useState(true);

    const [valueInput, setValueInput] = useState(0);

    useEffect(() => {
        const numberInput = document.getElementById(`calcolator-${id}`);
        // numberInput esiste ?
        if (numberInput) {
            //impedisco di aggiungere + | - nel input
            numberInput.addEventListener('keydown', (e:KeyboardEvent) => {
                if (e.key === '+' || e.key === '-') {
                    e.preventDefault()
                }
            })
        }
    },[id])

    const removeDiv = () => {
        setShowDiv(false);
    };

    const changeNumberValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = event.target.value;
        const numericValue = parseFloat(inputValue);
        calculate();

        if (!isNaN(numericValue)) {
            setValueInput(numericValue);
            calculate();
        }
    };

    const disableInput = () => {
        setInputDisabled(!InputDisabled);
    };

    useEffect(() => {
        calculate();

    }, [InputDisabled, showDiv]);


    return (
        <>
            {showDiv && (
                <div className='flex'>

                    <select className='p-2 rounded me-2' onChange={calculate} name="addOrMinus" id="select" disabled={InputDisabled}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                    </select>

                    <input className='p-2 rounded' id={`calcolator-${id}`} onChange={changeNumberValue} placeholder={valueInput.toString()} value={!InputDisabled ? valueInput : ''} type="number" min="0" disabled={InputDisabled} />

                    <div className='flex items-center'>
                        <button className='btn-delate' onClick={removeDiv}>
                            delate
                        </button>
                        <button className='btn-disabled ' onClick={disableInput}>
                            disabled
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default Calculator
