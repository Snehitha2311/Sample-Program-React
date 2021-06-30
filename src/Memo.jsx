import react, { useState, useRef, useMemo } from 'react';
import { Button } from 'react-bootstrap';
import Counter from './Counter';

const Memo = () => {

    const [counter1, setCounter1] = useState(0);
    const [counter2, setCounter2] = useState(0);
    const [counter3, setCounter3] = useState(0);

    const counters = useMemo(function incrementCounter() {
        return counter2 + 2;
    },
    [counter2]);

    const incrementCounter = () => {
        setCounter1(counter1 => counter1 + 5);
        
    }
    const incrementCounter1 = () => {
        setCounter2(counter2 => counter2 + 10);
    }


    return (
        <div>
            <center>
                <Button variant="secondary" onClick={incrementCounter}>Increment Counter1</Button>
                <Counter value={counter1}>Hi I'm children of counter1</Counter>
                <br />
                <Button variant="secondary" onClick={incrementCounter1}>Increment Counter2</Button>
                <Counter value={counter2}>Hi i'm children of counter2</Counter>
                <h2>{counters}</h2>
            </center>
            <br />
            <br />
        </div>

    )
}
export default Memo;