

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

    const notify = () => toast("Hello" + " " + change);


    return (
        <div>

            <ToastContainer />

            <h2>Hello, {userEnterData}</h2>
            <form onSubmit={userDetails}>
                <input type="text" placeholder='Type here' onChange={userChange} />
                <br />
                <button type='submit'>Submit</button>
                {userEnterData === 'vallabha' &&
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu2pAGXA1ufRM4KRX9I-jhsnS8P5NuyTlhHA&s" alt="" />
                }
                {userEnterData === 'ramesh' &&
                    <img src="https://i.pinimg.com/736x/6d/de/ea/6ddeeac6ff11b5f4f28409cb8385c1be.jpg" alt="" />
                }

                {userEnterData === 'mohan' &&
                    <img src="" alt="" />
                }
                {userEnterData === 'pandu' &&
                    <img src="https://cdn.ishencai.com/gallery/publish/2024/09/30/cbaa00125b664150bd926f1dafce73ce.jpg?x-oss-process=image/resize,w_500,h_500" alt="" />
                }
            </form>

        </div>
    )
}

export default FormChange
