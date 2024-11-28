
import React from 'react';
import { useState, useEffect } from 'react';


const StateManage = () => {

    const [state, setState] = useState("Vizag");
    console.log(state, 'state....');



    useEffect(() => {
        if (state === 'Vizag') {
            setState('Hyderabad')
        }
    }, [])

    return (
        <div>
            {state}
        </div>
    )
}

export default StateManage;
