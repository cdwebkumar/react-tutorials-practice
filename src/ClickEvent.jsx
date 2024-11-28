

import { Button } from "bootstrap";
import React, { useEffect } from "react";
import { useState } from 'react'


const ClickEvent = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    }

    const decrement = () => {
        if (count >= 1) {
            setCount(count - 1);
        }
    }

    const reset = ()=>{
        setCount(0);
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={increment}>Increase</button>
            <button onClick={decrement}>Decrease</button>
            <button onClick={reset}>Reset</button>
        </div>
    )

}

export default ClickEvent;