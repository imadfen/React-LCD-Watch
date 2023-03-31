import React from 'react'
import "./Segment.css"

export default function HorSegment(props) {
  return (
    <div className={'hor-segment segment ' + props.which}>
        <div className='hor-triangle1'></div>
        <div className='hor-midle'></div>
        <div className='hor-triangle2'></div>
    </div>
  )
}
