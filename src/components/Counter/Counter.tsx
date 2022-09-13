import React from 'react';
import './Counter.scss';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
    return (
        <div>
            <h2>{counter}</h2>
            <button onClick={handleClick}>click me</button>
        </div>
    )
}