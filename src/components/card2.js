import React, {Component} from 'react'

// using class for call component before we know the function for call component

class Card2 extends Component{
     render(){
         return(
             <div className="card">
             <h3 className="card-heading">hellow card 2</h3>
             <h2 className="card-write">{this.props.text}</h2>
             <h3 className="time">{this.props.des}</h3>
             </div>
         )
     }
}

export default Card2;