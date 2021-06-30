import React, {useState, useEffect, useRef} from 'react';
import UseEffect from './UseEffect';
import {Button} from 'react-bootstrap';

const FunctionUpdate = () => {
    const[counterValue, setCounterValue] = useState(0);

    const incrementCounter = () => {
        setCounterValue(counterValue => counterValue + 1);
    }
    return (
        <div>

            <UseEffect counter={counterValue}/>
            <h2>{counterValue}</h2>
            <Button variant="secondary" onClick={incrementCounter}>Click Here</Button>
            
        </div>
    )
    
}
export default FunctionUpdate;