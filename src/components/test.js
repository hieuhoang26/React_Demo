import React, { useState, useCallback } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);

    const increment = useCallback(() => {
        setCount(count + 1);
    }, [count]);

    const decrement = useCallback(() => {
        setCount(count - 1);
    }, [count]);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
        </div>
    );
};
