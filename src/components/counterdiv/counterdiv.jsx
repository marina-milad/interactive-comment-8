import { useState } from "react"
import "./counterdiv.css"

function  counterdiv (){ 
    const [counter,setcounter ] =useState(0);

    function Increment (){
setcounter(counter+1);
    }

    function Decrement (){
        if(counter >0 ){
            setcounter(counter - 1);
        }
    }
    return(
        <div id="counterstyle">
        <button onClick={Increment}>+</button>
        <label>{counter} </label>
        <button onClick={Decrement}>-</button>
        </div>
    )
}
export default counterdiv