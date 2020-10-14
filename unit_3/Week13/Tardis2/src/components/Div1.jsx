import React from "react";
import {Div2} from "./Div2.jsx"


export const Div1 = (props) => {

  const hello = "Hello Pppl"
  
  const [state, setState] = React.useState({
    tardis:{  
       name: "Time and Relative Dimension in Space",
       caps: false,
  } })

  React.useEffect (()=> {
    console.log("useEffect")
  }, [])
  
  const changeIt = (text) => {
    if (state.tardis.caps) {
      setState({
        tardis: {
          name: text.toLowerCase(),
          caps: false
        }
      })
    } else {
      setState({
        tardis: {
          name: text.toUpperCase(),
          caps: true
        }
      })
    }
  }

  return (
  <>
    
  <div> 
  <h1>{state.tardis.name}</h1>
  <button onClick = {()=>changeIt(state.tardis.name)}>Click</button>
<Div2 name = {state.tardis.name} change = {changeIt}/>


  {/* <Div2    name = {state.tardis.name} change = {changeIt} /> */}

    {/* <Div2  hello = {props.hello} /> */}
   



   </div>
  </>
  );
};