import React from 'react';


function Input({state}){
    console.log(state);
return(
    <div className="child">
        <h2>Child Component</h2>
        <input type="text" onChange={(e)=>state(e.target.value)}/>
    </div>
)

}
export default Input;