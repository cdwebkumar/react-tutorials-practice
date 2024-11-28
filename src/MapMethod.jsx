


import React, { useEffect, useState } from 'react'



// let players = [
//     {
//         cric: 'Anand',
//         tenn: 'Sania',
//         chess: 'Viswa',
//         hockey: 'Singh'
//     }
// ]

const MapMethod = () => {
    const [mapData, setMapData] = useState(null);
    console.log(mapData)
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => setMapData(data));
    }, []);

    return (
        <div>
            {mapData.map((id, item) => {
                return (
                <ul>
                    <li key={id}></li>
                    <li>{item.email}</li>
                    <li>{item.phone}</li>
                    <li>{item.name}</li>
                    <li>{item.website}</li>
                    <li>{item.address.city}</li> 
                    <li>{item.address.geo.lat}</li>
                    <li>{item.address.geo.lng}</li>
                    <li>{item.address.street}</li>
                    <li>{item.address.suite}</li>
                    <li>{item.address.zipcode}</li>
                </ul>
                )
            })

            }

        </div>
    )
}

export default MapMethod
