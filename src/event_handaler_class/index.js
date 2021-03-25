import React, { Component } from 'react'

export default class event_handaler_class extends Component {
    //constructor
    constructor(props) {
        super(props)
    
        this.state = {
             changevalue: " "
        }
    }
    
    //This is the area for decleare function
    change = (ee) =>{
        //console.log(ee.target.value)
        this.setState({
            changevalue : ee.target.value
        }, () => {
            console.log(this.state.changevalue)
        })
        
    }
    render() {
        return (
            <div>
                <input type="text" className="heading" onChange = {this.change} />
                <p className="card">{this.state.changevalue}</p>
            </div>
        )
    }
}
