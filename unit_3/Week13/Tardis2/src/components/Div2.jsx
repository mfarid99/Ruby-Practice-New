import React from "react"
import {Div3} from "./Div3.jsx"


export const Div2 = (props) => {

    
    return (
        <>
                <h1>{props.name}</h1>
        <h1>{props.change}</h1>
        <Div3 />     
        </>
    )
}