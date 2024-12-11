import React, {useContext} from "react";
import MyContext from "../MyContext";

const Comp1 = () => {
    const v = useContext(MyContext)
    return(
        <div>Comp1 {v}</div>
    )
}

export default Comp1;