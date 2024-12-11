import React,{useState,  useRef} from "react";

var buttonText = "Change to RED";
const UseSt = () => {
    const[color,setColor]=useState("NotSet");
    const[bol,setBol]=useState(true);
    const h1Ref = useRef(null);

    const changeRED = () => {
        setColor("RED")
        if (h1Ref.current) {
            h1Ref.current.style.color = "red";
        }
        setBol(false);
        buttonText = "Change to BLUE";
    }

    const changeBLUE = () => {
        setColor("BLUE")
        if (h1Ref.current) {
            h1Ref.current.style.color = "blue";
        }
        setBol(true);
        buttonText = "Change to RED";
    }
    const resetColor=()=>{
        setColor("NotSet");

        if (h1Ref.current) {
            h1Ref.current.style.color = "";
        }
    }

   
    return(
        <>
        <h1 id="h1" ref={h1Ref}>HELLO IS  {color}</h1>
        <button onClick={() =>{bol ? changeRED() : changeBLUE()}}>{buttonText}</button>
        <button onClick={resetColor}>Reset</button>
        </>
    )
}
export default UseSt;