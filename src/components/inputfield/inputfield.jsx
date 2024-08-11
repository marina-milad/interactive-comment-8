import { useState } from "react"
import Julio from "../../assets/image-juliusomo.png"
import "./inputfield.css"

const InputSection =(props) => {
    const [inputvalue,setinputvalue] =useState("");

    function handleOnClick (){
        props.addpost(inputvalue);

        setinputvalue("");
    };
    function  handleOnChange (event){
        setinputvalue(event.target.value)
    };
    return(
        <div className="replydiv">
            <img  id="profilepage"  src={Julio}/>
            <input className="inputplace" value={inputvalue} onChange={handleOnChange}></input>
            <button className="sendbtn" onClick={handleOnClick}>send</button>
        </div>
    )
};
export default InputSection