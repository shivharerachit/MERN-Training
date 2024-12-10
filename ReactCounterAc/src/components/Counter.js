import React from "react";

class Counter extends React.Component{
    constructor(){
        super();
        this.state={
            count : 0
        }
    }
    increment =()=>{
        this.setState({
            count: this.state.count +1
            } )
    }
    decrement =()=>{
        this.setState({
            count: this.state.count -1
            } )
    }
    reset = ()=>{
        this.setState({
            count:0
        })
    }
    render(){
        return(
            <>
            <div style={styles.container}>
                <h2>Counter App</h2>
            <h1>{this.state.count}</h1>
            <button style={styles.buttond} onClick={this.decrement}>decrease</button>
            <button onClick={this.reset}>reset</button>
            <button style={styles.buttoni} onClick={this.increment} >increase</button>
            </div>
            </>
            
        );
    }

}
const styles = {
    container: {
      textAlign: 'center',
      marginTop: '50px'
    },
    buttond: {
      margin: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      color :'red'
    },
    buttoni:{
        margin: '5px',
      padding: '10px 20px',
      fontSize: '16px',
      color :'blue'
    }
  };

export default Counter;