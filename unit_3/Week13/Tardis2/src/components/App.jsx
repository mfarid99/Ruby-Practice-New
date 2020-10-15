import React from "react"
import {Div1} from "./Div1.jsx"


export const App = (props) => {

  const [state, setState] = React.useState({
    tardis:{  
       name: "Time and Relative Dimension in Space",
       caps: false,
  } })
    
    return (
        <>
        <div>  
        <Div1 tardis={state} />
       

        </div>
        </>
    )
}