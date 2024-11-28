

import React, { useState } from 'react'

const PostMethod = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [role, setRole] = useState("")
    const [dept, setDept] = useState("")

    const empDetails = { name, email, role, dept }

    const empHandler = (e)=>{
        e.preventDefault()
        console.log(empDetails)
    }

    return (
        <div>
            <form onSubmit={empHandler}>
                <label>Name</label>
                <input type="text" name='name' onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email</label>
                <input type="email" name='email' onChange={(e) => setEmail(e.target.value)} />
                <br />
                <label>Role</label>
                <input type="text" name='role' onChange={(e) => setRole(e.target.value)} />
                <br />
                <label>Department</label>
                <input type="text" name='dept' onChange={(e) => setDept(e.target.value)} />
                <input type="submit" name='submit' value="Submit" />
            </form>
        </div>
    )
}

export default PostMethod
