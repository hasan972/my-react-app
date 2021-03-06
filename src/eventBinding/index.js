import React, { Component } from 'react'

export default class EventBinding extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             count : 0
        }
        this.handel = this.handel.bind(this)
    }
    handel(){
        this.setState({
            count : this.state.count +1
        })
    }
    
    render() {
        const {count} = this.state
        return (
            <div>
            <h1>{count}</h1>
            <button onClick={this.handel}>increment</button>
            </div>
        )
    }
}
