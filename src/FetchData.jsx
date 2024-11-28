
import React, { useEffect, useState } from 'react'

const userDetails = 'https://jsonplaceholder.typicode.com/posts';

const FetchData = () => {

    const [users, setUsers] = useState([userDetails])

    const userHandler = async () => {
        const response = await fetch(userDetails)
        const newData = await response.json()
        setUsers(newData)
    }

    useEffect(() => {
        console.log(userHandler())
    }, [])

    console.log(users)
    return (
        <>
            {users.map((items) => {
                return (
                    <div>
                        <ul>
                            <li>{items.id}</li>
                            <li>{items.title}</li>
                            <li>{items.body}</li>
                        </ul>
                    </div>
                )
            })}
        </>
    )
}

export default FetchData
