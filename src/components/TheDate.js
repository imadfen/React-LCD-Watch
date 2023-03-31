import React from 'react'

export default function TheDate() {
    var date = new Date();

    const day = date.toLocaleDateString(undefined, { weekday: 'long' });
    const dayOfMonth = date.getDate()
    const month = date.toLocaleDateString(undefined, { month: 'long' });
    
    return (
        <div className='DATE'>
            <h1>{day + " - " + month + " " + dayOfMonth}</h1>
        </div>
    )
}
