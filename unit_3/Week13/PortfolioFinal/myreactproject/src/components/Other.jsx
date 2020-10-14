import React from "react"

export const Other = (props) => {
    
    return (
        <>

        <div> 
        <h1 className = "projectName"> Project Name: {props.name} </h1>
        <div> <h2> Git: <a href = {props.git}>Link To Project</a> </h2></div>
        <div> <h2> Live: <a href = {props.live}>Link To Website</a> </h2> </div>
        <div> <img src = {props.img}></img> </div>
        <div> {props.tools}</div>

        <hr />


        </div>

        </>
    )
}