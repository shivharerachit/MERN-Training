import React,{useState} from "react";

const UseSt = () => {
    const[color,setColor]=useState("NotSet");
    const[bol,setBol]=useState(true);
    const changeRED = () => {
        setColor("RED")
        document.getElementById("h1").style.color="red"
        setBol(false);
    }

    const changeBLUE = () => {
        setColor("BLUE")
        document.getElementById("h1").style.color="BLUE"
        setBol(true);
    }
    const resetColor=()=>{
        setColor("NotSet");
        document.getElementById("h1").style.color=""
    }

   
    return(
        <>
        <h1 id="h1">HELLO IS  {color}</h1>
        <button onClick={() =>{bol ? changeRED() : changeBLUE()}}>Back to Color</button>
        <button onClick={resetColor}>Reset</button>
        </>
    )
}
export default UseSt;