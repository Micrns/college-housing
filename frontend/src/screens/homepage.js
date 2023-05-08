import React from "react";
import { useEffect, useState } from "react";
import "../styles/App.css";
import profileIcon from "../icons/profile-circle-svgrepo-com.svg"
import searchIcon from "../icons/search-svgrepo-com.svg"
import Carousel from "../components/carousel";
import { schools } from "../components/data";
import {Navigate} from "react-router-dom"
const HomePage = () =>{


    const [switchScreen, setScreen] = React.useState(false);
    const [currenttab, settab] = React.useState("");
    
    if (switchScreen){
        if (currenttab === "signup"){
            return <Navigate to="/signup"/>;
        }
        else if(currenttab==="login"){
            return <Navigate to="/login"/>;
        }
        
    }

    return(
        <div className= "main-page">
            <div className="navbar">
                <ul>
                    <li><a href="" onClick={() => {setScreen(true);}}>Make a Listing</a></li>
                    <li><a href="" onClick={() => {setScreen(true); settab("signup");}}>Signup</a></li>
                    <li><a href="" onClick={() => {setScreen(true); settab("login");}}>Login</a></li>
                    <li><img src = {profileIcon} alt = "profile-icon"/></li>
                    
                </ul>
                
            </div>
            <div className="search-bar">
                <input placeholder="Search your school...."></input>
                <img src = {searchIcon} alt = "search-icon"/>
            </div>

            <div className="caoursel">
                <Carousel images = {schools}/>
                
            </div>
            <span id = "header">Find a place to rent near your school, easily!!</span>
        </div>

    );
}

export default HomePage;