import React from 'react'

const Props1 = (props) => {
     let data = props.name;

    //  Props Destructuring
    const { name, email, mob, city, des } = data
    // console.log(props.name, 'kumar');
    return (
        <div>
            {/* Main process */}
            {/* <h2>{props.name.city}</h2>
            <span>{props.name.name}</span>
            <h3>{props.name.mob}</h3>
            <h4>{props.name.email}</h4> */}


            {/* Destructering */}

            <h2>{name}</h2>
            <h3>Email is {email}</h3>
            <h4>Mobile no : {mob}</h4>
            <h5>City {city}</h5>
            <h2>Designation {des}</h2>



        </div>
    )
}

export default Props1
