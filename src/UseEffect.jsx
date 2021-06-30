import React, { useState, useEffect, useRef } from 'react';
import { Button } from 'react-bootstrap';

const UseEffect = (props) => {

    const [name, setName] = useState('Snehitha');
    const [id, setId] = useState('51897470');
    const [training, setTraining] = useState('React');
    const [counter, setCounter] = useState(props.counter);
    const domRef = useRef();
    //  useEffect() //  componentDidMount //componentWillUnmount // componentDidUpdate
    // 1: callBack 2: Dependencies
    //If we pass Empty array it will act as componentDidMount
    // If we return a function the it will act as componentWillUnmount
    //Whenever there is change in props or state we need to use componentDidUpdate,dependencies
    useEffect(() => {
        console.log('--componentDidMount--');
        domRef.current.addEventListener('mousemove', handleMouseMove);
        return () => {
            console.log('--ComponentWillUnmount---');
            domRef.current.removeEventListener('mousemove', handleMouseMove);
        }
    }, []);

    //    useEffect(() => {
    //        return () => {
    //            console.log('--ComponentWillUnmount---');
    //            domRef.current.removeEventListener('mousemove', handleMouseMove);
    //        }
    //    }, []);

    useEffect(() => {
        console.log('--Updated---');
        if(props.counter%5 === 0) {
            setCounter(props.counter);
        }
    }, [props.counter]);

    const changeData = () => {
        setName('Snehitha Kodavati');
        setId('7470');
        setTraining('Angular');
    }

    const handleMouseMove = (e) => console.log('--handleMouseMove - Functional Component--');
    return (
        <div ref={domRef}>
            <h2>Functional Components</h2>
            <p>Name: {name}</p>
            <p>Id: {id}</p>
            <p>Training: {training}</p>
            <h2>Value: {counter}</h2>
            <Button variant="secondary" onClick={changeData}>Click</Button>
        </div>
    )
}
export default UseEffect;