import React,{useState} from 'react'
import style from "./from_module.css";

export default function Ffrom() {
    //useState
    const[Name, setName] = useState("");
    const[Email, setEmail] = useState("");
    const[Password, setPassword] = useState("");

    //call the onClick event using function
    const handelNameChange = (e) =>{
        setName(e.target.value);

    };
    const handelEmailChange = (e) =>{
        setEmail(e.target.value);
    };
    const handelPasswordChange = (e) =>{
        setPassword(e.target.value);

    };
    const handelSubmit = (e) =>{
        console.log("from is called");
        //pass the value into the element
        let userInfo ={
            name : Name,
            email : Email,
            password : Password,

        };
        console.log(userInfo);
        e.preventDefault();

    };

    return (
        <div>
            <h1>REGISTER</h1>
            <form action="" onSubmit={handelSubmit}>
                <div className="card">
                    <label htmlFor="name" >NAME:</label>
                    <input type="text" name="name" id="name" placeholder="Enter Name" value={Name} onChange={handelNameChange}  required></input>
                </div>
                <br></br>
                <div className="card">
                    <lable htmlFor="email">EMAIL:</lable>
                    <input type="text" name="eamil" id="email" placeholder="Enter Email" value={Email} onChange={handelEmailChange} required></input>
                </div>
                <br></br>
                <div className="card">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" name="password" placeholder="password" value={Password} onChange={handelPasswordChange} required></input>
                </div>
                <div>
                    <lable htmlFor="comfirmPassword">Confirm Password</lable>
                    <input type="pass" name="pass" placeholder="Confirm Password"></input>
                </div>
                <div>
                    <button type="submit">SUBMIT</button>
                </div>
            </form>
        </div>
    )
}
