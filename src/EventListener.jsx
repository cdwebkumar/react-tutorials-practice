

import React from "react";
import { useState, useEffect } from "react";


const EventListener = () => {
    const [screenSize, setScreenSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight,
    });

    const updateScreenSize = () => {
        setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
        });
    };

    useEffect(() => {
        window.addEventListener('resize', updateScreenSize);
        return () => (
            window.removeEventListener('resize', updateScreenSize)
        )
    }, [])

    return (
        <div>
            <p style={{color:"Red"}}>Width: {screenSize.width} px</p>
            <p style={{color:"Blue"}}>Height: {screenSize.height} px</p>
        </div>
    )

}
export default EventListener;