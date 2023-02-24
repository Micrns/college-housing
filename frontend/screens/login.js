import React from "react";
import "../styles/login.css";

import { useState, useEffect } from "react";
import Axios from "axios"



const Login = () =>{

    const [UserName, setUsername] = useState("");
    const [PassWord, setPassword] = useState("");

    const [LoginStatus, setLoginStatus] = useState("");


    Axios.defaults.withCredentials = true;
    const login = () =>{
        
        Axios.post('http://localhost:3001/login', {username: UserName, password: PassWord}).then((response) =>{
            if(response.data.message){
                console.log(response)
                setLoginStatus(response.data.message)
                
            }
            else{
                console.log(response)
                setLoginStatus(response.data[0].email)
            }
        });

    };

    useEffect(()=>{
        Axios.get("http://localhost:3001/login").then((response) => {

            if(response.data.loggedIn === true){
                console.log(response);
                setLoginStatus(response.data.user[0].email);
            }
            console.log(response);
        })
    }, []);

    return(

        <div className="Login">
            <div className="container">

                <span className ="head">Login</span>
            <form> 
                    <input className = "email" type = "text" placeholder="School email" onChange={(e)=>{setUsername(e.target.value)}}></input>
                    <input className = "passwrd" type = "text" placeholder="Password" onChange={(e)=>{setPassword(e.target.value)}}></input>
                   
                </form>
                <button className = "lgin" type = "submit" onClick={login}>Login</button>
            </div>
        
        <h1>{LoginStatus}</h1>

            
              
        </div>
    )
}

export default Login;