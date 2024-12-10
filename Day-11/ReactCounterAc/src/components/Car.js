import React from "react";

class Car extends React.Component{
    constructor() {
        super();
        this.state = {
            count:1,
            color: "blue"
        };
      }


    render(){
        return(
            <>
            <h1>Car is {this.state.color}</h1>
            </>
        )
    }
    
}
export default Car;