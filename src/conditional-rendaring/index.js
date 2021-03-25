import React, { Component } from 'react'
import HomePage from './homePage'
import Loginpage from './loginpage'


 class conditionalRendaring extends Component {

    //constructor
    constructor(props) {
        super(props)
    
        this.state = {
             isLogin : true
        }
    }
    
    render() {
        const {isLogin} =this.state
        if (isLogin){
            return <HomePage />
        }
        else{
            return <Loginpage />
        }
    }
}
//Same work now we do uising ternary
    // render (){
    //     const {islogin2} =this.state
    //     let element;
    //     element = isLogin2 ? <HomePage /> : <Loginpage />  Note:we using directly this line into JSX/return area
    //     return(
    //         <div>
    //             {element}
    //         </div>
// for sort circuit
    //          <div>
    //             {islogin2 && <HomePage />}
     //          </div>
    //     )
    // }

export default conditionalRendaring