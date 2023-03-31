import React from 'react'
import './Segment.css'
import ShowNum from './ShowNum';

export default function AMPM() {
    var date = new Date();
    var ampm = date.getHours() >= 12 ? "PM" : "AM"

    return (
        <div className='AMPM'>
            <ShowNum bit={ampm[0]} shorten=" short-seg"/>
            <ShowNum bit={ampm[1]} shorten=" short-seg m"/>
        </div>
    )
}
