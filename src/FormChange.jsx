

import React, { useState } from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FormChange = () => {
    const [change, setChange] = useState("")
    const [userEnterData, setUserEnterData] = useState();

    const userChange = (event) => {
        // console.log(event.target.value)
        setChange(event.target.value)
    }

    const userDetails = (e) => {
        e.preventDefault();
        setUserEnterData(change);
        notify();
    }

    const notify = () => toast("Hello " + " " + change);


    return (
        <div>

            <ToastContainer />

            <h2>Hello, {userEnterData}</h2>
            <form onSubmit={userDetails}>
                <input type="text" placeholder='Type here' onChange={userChange} />
                <br />
                <button type='submit'>Submit</button>
                {userEnterData === 'krishna' &&
                    <img src="https://resizing.flixster.com/JitTWfpGRpfLmv70sYD5gfsp4eM=/fit-in/352x330/v2/https://resizing.flixster.com/D5UOBLj2Bn8Vf2EzjdvynupFBfk=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzA4ZWQ2ZjhhLTJlYWItNDliYi05YzZjLTVhNTY4YjQ1YjIzNS5qcGc=" alt=""/>
                }
                {userEnterData === 'ramesh' &&
                    <img src="https://i.pinimg.com/736x/6d/de/ea/6ddeeac6ff11b5f4f28409cb8385c1be.jpg" alt=""/>
                }
                
                {userEnterData === 'mohan' &&
                    <img src="data:image/jpeg;base64,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" alt="" />
                }
                {userEnterData === 'pandu' &&
                    <img src="https://cdn.ishencai.com/gallery/publish/2024/09/30/cbaa00125b664150bd926f1dafce73ce.jpg?x-oss-process=image/resize,w_500,h_500" alt="" />
                }
            </form>

        </div>
    )
}

export default FormChange
