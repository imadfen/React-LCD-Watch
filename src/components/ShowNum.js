import React, {useState} from 'react'
import HorSegment from './HorSegment'
import VerSegment from './VerSegment'
import "./Segment.css";
import Dot from './Dot';
import './Dot.css';

export default function ShowNum(props) {
    if(props.bit == ":"){
        return(
            <div className='double-dots'>
                <Dot/>
                <Dot/>
            </div>
        )
    } 
    
    const arrayOfSegs = (bit) => {
        var segs = []
        const a = ["0", "2", "3", "5", "6", "7", "8", "9", "A", "P"]
        const a_1 = ["M"]
        const a_2 = ["M"]
        const b = ["0", "1", "2", "3", "4", "7", "8", "9","A", "P", "M"]
        const b_1 = ["M"]
        const c = ["0", "1", "3", "4", "5", "6", "7", "8", "9", "A", "M"]
        const d = ["0", "2", "3", "5", "6", "8", "9"]
        const e = ["0", "2", "6", "8", "A", "P", "M"]
        const f = ["0", "4", "5", "6", "8", "9", "A", "P", "M"]
        const g = ["2", "3", "4", "5", "6", "8", "9", "A", "P"]
        

        if (a.includes(bit)) {
            segs.push("a")
        }
        if (a_1.includes(bit)) {
            segs.push("a-1")
        }
        if (a_2.includes(bit)) {
            segs.push("a-2")
        }
        if (b.includes(bit)) {
            segs.push("b")
        }
        if (b_1.includes(bit)) {
            segs.push("b-1")
        }
        if (c.includes(bit)) {
            segs.push("c")
        }
        if (d.includes(bit)) {
            segs.push("d")
        }
        if (e.includes(bit)) {
            segs.push("e")
        }
        if (f.includes(bit)) {
            segs.push("f")
        }
        if (g.includes(bit)) {
            segs.push("g")
        }
        
        return segs
    }

    const segs = arrayOfSegs(props.bit)

    return (
        <div className='bitContainer'>
            {segs.map(seg => {
                if(["a", "d", "g", "a-1", "a-2"].includes(seg)){
                    return(
                        <HorSegment  which={seg + props.shorten} key={seg}/>
                )}

                return(
                    <VerSegment which={seg + props.shorten} key={seg}/>
                )
            })}
        </div>
    )
}
