
import React, { useEffect, useState } from 'react'

const userDetails = 'https://jsonplaceholder.typicode.com/posts';

const FetchData = () => {
    const [user, setUser] = useState(userDetails)

    const userHandler = async () => {
        const response = await fetch(userDetails)
        const newData = await response.json()
        setUser(newData)
    }

    useEffect(() => {
        console.log(userHandler())
    }, [])

    console.log(user)
    return (
        <div>
            {user.map((items) => {
                return (
                    <ul>
                        <li>{items.userID}</li>
                    </ul>
                )
            })}
        </div>
    )
}

export default FetchData
