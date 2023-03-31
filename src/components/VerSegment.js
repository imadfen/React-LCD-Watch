import React from 'react'
import './Segment.css'

export default function VerSegment(props) {
  return (
    <div className={'ver-segment segment ' + props.which}>
        <div className='ver-triangle1'></div>
        <div className='ver-midle'></div>
        <div className='ver-triangle2'></div>
    </div>
  )
}
