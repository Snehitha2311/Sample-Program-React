import React, { useState, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import Counter from './Counter';

function Memo1() {
    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);
    
    const incrementCounter = () =>
    {
        setCounter1(counter1 => counter1+1);
    }
    return(
        <div>
        <Button variant="secondary" onClick={incrementCounter}>Increment Counter</Button>
        <br/>
        <Counter value={counter1}>Hi I'm children of counter1</Counter>
        <Counter value={counter2}>Hi i'm children of counter2</Counter>
        <Counter value={counter3}>Hi i'm children of counter3</Counter>
        <br/>
        </div>
    
    )
}

export default Memo1;