import React from "react";
import Navbar from "./Nav";
import Content from "./Content";

function Home(props){
    return(
        <>
        <Navbar></Navbar>
        <Content car ={props.car.model}></Content>
        <h1 >this is {props.car.model}</h1>
        <h2>{props.bike[1]}</h2>
        </>
    )
}
export default Home;