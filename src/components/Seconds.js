import React from 'react'
import ShowNum from './ShowNum';

export default function Seconds() {

  var date = new Date();
  var seconds = date.getSeconds();
  var secondsStr = seconds.toString()
  const secs = []

  secs[0] = (seconds < 10)? "0" : secondsStr[0]
  secs[1] = (seconds < 10)? secondsStr[0] : secondsStr[1]






  return (
    <div className='SS'>
      <ShowNum bit={secs[0]} shorten=" short-seg"/>
      <ShowNum bit={secs[1]} shorten=" short-seg"/>
    </div>
  )
}
