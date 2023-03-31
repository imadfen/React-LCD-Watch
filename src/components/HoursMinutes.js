import React from 'react'
import ShowNum from './ShowNum';

export default function HoursMinutes() {
  
    const time = () => {
        var date = new Date();
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var ampm = hours >= 12 ? 'PM' : 'AM';
    
        var hoursStr = hours.toString()
        var minutesStr = minutes.toString()
        
        var time = {
                      H: [hoursStr[0], hoursStr[1]],
                      M: [minutesStr[0], minutesStr[1]],
        }
    
        // hours:
        if (ampm == "AM"){
          if (hours == 12) {
            time.H[0] = "0"
            time.H[1] = "0"
          }
        }else{
          if (hours > 12) {
            hours = hours - 12
            hoursStr = hours.toString()
            time.H[0] = "0"
            time.H[1] = hoursStr[0]
          }
        }
    
        time.H[0] = (hours < 10)? "0" : hoursStr[0]
        time.H[1] = (hours < 10)? hoursStr[0] : hoursStr[1];
    
        // minutes:
        time.M[0] = (minutes < 10)? "0" : minutesStr[0]
        time.M[1] = (minutes < 10)? minutesStr[0] : minutesStr[1];

        return time
      }

    const showTime = time()
  
  
    return (
        <div className='HHMM'>
            <ShowNum bit={showTime.H[0]} shorten=""/>
            <ShowNum bit={showTime.H[1]} shorten=""/>
            <ShowNum bit={":"}/>
            <ShowNum bit={showTime.M[0]} shorten=""/>
            <ShowNum bit={showTime.M[1]} shorten=""/>
        </div>
    )
}
