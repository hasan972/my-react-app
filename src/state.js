import React, { Component } from 'react'

export default class state extends Component {
    //Declear the  using constructor rconst
    constructor(props) {
        super(props)
    
        this.state = {
             count :0
        }
    }
    
    handelIncrement = () =>{
        this.setState({
            count :this.state.count +1
        })
    }
    handeleDecriment = () => {
        this.setState({
            count : this.state.count -1
        })
    }

    render() {
        //Distruc
        const {count} = this.state
        return (
            <div>
            <h1 className="count">Count : {count}</h1>
            <button onClick={this.handelIncrement}>Increment</button>
            <button onClick={this.handeleDecriment} disabled= {count=== 0 ? true : false}>Decriment</button>
            </div>
        )
    }
}
