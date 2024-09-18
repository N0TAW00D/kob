'use client'

import { useState } from "react"

export default function Page(){
    const [x,setX] = useState(0); //x+0

    const handleClick = () => {
        setX(x+1);
    }

    return (
        <div>
            <button type="button" onClick={() => handleClick()}>
                Click here!
            </button>
 
            <div>x = {x}</div>
        </div>
    )
}