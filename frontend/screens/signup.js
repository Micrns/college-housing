import React from "react";
import "../styles/sign-up.css";
import { useEffect, useState } from "react";
import Axios from "axios"

const Signup = () =>{
    
    const [userName, setuserName] = useState("");
    const [passWord, setpassWord] = useState("");

    const register = () =>{
        Axios.post('http://localhost:3001/register', {username: userName, password: passWord}).then((response) =>{
            console.log(response);
        });

    };

    return(
        <div className = "signup">
            <span className = "header">SignUp</span>
            <form>
                <input className = "credentials email-enter" type = "text" placeholder="Enter your school email" name = "usname" onChange={(e)=>{setuserName(e.target.value)}} required></input>
                <input className = "credentials enter-passwrd" type = "text" placeholder = "Enter your password" name = "new-password" required></input> 
                <input className = "credentials reenter-passwrd" type = "text" placeholder = "Re-enter your password" name = "check-password" onChange={(e)=>{setpassWord(e.target.value)}} required></input> 
            </form>
            
            <button type = "submit" className= "btn" onClick={register}>Access</button>
            
            
        </div>
    )
}

export default Signup;
