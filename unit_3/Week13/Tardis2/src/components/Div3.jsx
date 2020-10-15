import React from "react"


export const Div3 = (props) => {
    const [state, setState] = React.useState(props.tardis);

    const changeIt = () => {
      if (state.tardis.caps) {
        setState({
          tardis: {
            name: state.tardis.name.toLowerCase(),
            caps: false
          }
        });
      } else {
        setState({
          tardis: {
            name: state.tardis.name.toUpperCase(),
            caps: true
          }
        });
      }
    };
  
    return (
      <div>
        <h3 onClick={changeIt}>{state.tardis.name}</h3>
      </div>
    );
  };
  