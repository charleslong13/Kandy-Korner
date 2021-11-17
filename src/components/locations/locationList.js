import React, { useEffect, useState } from "react"

export const LocationList = () => {
    //declaring state variables, sets up a place to store state 
    //LocationList would  be called a component because its end results is html
    const [locations, assignLocations] = useState([])

    useEffect(
        () => {
            fetch("http://localhost:8088/locations")
                .then(loc => loc.json())
                .then((data) => {
                    assignLocations(data)
                })
        },
        []
    )
    return (
        //need to convert locations to a string in react for it to work 
        <>
           
            {
                locations.map(
                    (locationObj) => {
                        return <p key={`location--${locationObj.id}`}>{locationObj.name}</p>
                    }
                )
            }
        </>
    )
}