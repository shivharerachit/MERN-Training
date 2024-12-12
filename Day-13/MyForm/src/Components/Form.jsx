import React, {useState, useEffect} from "react";

function MyForm() {
    const [name, setName] = useState("");

    useEffect(()=>{
        console.log(name);
        if(name==="kaushal") console.log("Hello Kaushal");
    }, [name])

    return (
        <form>
            <label>Enter your name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
        </form>
    )
}

export default MyForm;