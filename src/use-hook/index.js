import React,{useState} from 'react'

export default function UseHook() {

    //handel the setState
    const [count,setCount] = useState(0)
    //function call
    const changeValue = () =>{
        //handel the count value
       setCount(count+1)
    }
    return (
        <div>
            <h1>COUNT: {count} </h1>
            <button className="bt" onClick={changeValue}>On Click</button>
        </div>
    )
}
