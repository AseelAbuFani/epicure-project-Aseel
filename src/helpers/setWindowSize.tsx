import { useEffect, useState } from "react"

export default function SetWindowSize(){
    const [windowSize,SetWindowSize] =useState(window.innerWidth)

    useEffect(()=>{
        function handleResSize(){
            SetWindowSize(window.innerWidth)
        }

        window.addEventListener("resize", handleResSize);
    })
    return windowSize;
}