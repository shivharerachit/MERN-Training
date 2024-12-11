import React, { useState } from "react";
import RandomAdviceLS from "./RandomAdviceLS";

function Advice(){
    const [advice, setAdvice] = useState("");
    
    return(
        <>
        <style>

        </style>
        <h1>Advice Generator</h1>
        <RandomAdviceLS onSelectAdvice={setAdvice}/>
        <h2>{advice}</h2>
        </>
    )
}

export default Advice;