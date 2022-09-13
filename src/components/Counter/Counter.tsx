import React from 'react';
import classes from './Counter.module.scss';

export const Counter = () => {
    const [counter, setCounter] = React.useState(0);

    const handleClick = () => {
        setCounter(counter + 1);
    }
    return (
        <>
            <h2>{counter}</h2>
            <button onClick={handleClick} className={classes.btn}>click me</button>
        </>
    )
}