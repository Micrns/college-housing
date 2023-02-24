import React from "react";
import "../styles/rent.css";
import "../styles/App.css";
import profileIcon from "../icons/profile-circle-svgrepo-com.svg"
import searchIcon from "../icons/search-svgrepo-com.svg"

import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import UCIIcon from "../university-logo/California-Irvine-Anteaters-Logo.png"

import "../school-data/school-info"
const Rent = () =>{


    const [switchscreen, setswitchscreen] = useState(false);
    const [currenttab, setcurrenttab] = useState("");

    const [university, setUniversity] = useState("");


    const changeUniversity = () => {
        console.log(university)
    }

    if (switchscreen){
        if(currenttab === "login"){
            return <Navigate to = "/login"/>
        }
        else if (currenttab === "signup"){
            return <Navigate to = "/signup"/>
        }
    }
    
    return(
    <div className="rent-page">

        <img className = "school-icon" src={UCIIcon} alt = ""></img>

        <div className="navbar-1">
            <div className="search-housing">
                <input type = "search" placeholder= "Enter your school..." onChange={(e) => {setUniversity(e.target.value)}}></input>
                <img src = {searchIcon} alt = "search" onClick={()=>{changeUniversity()}}/>
            </div>
            <div className="contents">
                <ul>
                    <li><a href="" onClick={() => {
                        setswitchscreen(true);
                        setcurrenttab("")}}>make a listing</a></li>
                    <li><a href="" onClick={() => {
                        setswitchscreen(true);
                        setcurrenttab("signup")}}>Signup</a></li>
                    <li><a href="" onClick={() => {
                        setswitchscreen(true);
                        setcurrenttab("login")}}>login</a></li>
                    <li><img src = {profileIcon} alt = "profile-icon"/></li>
                </ul>

            </div>

        </div>

        <div className="sidemenu">
            <div className="distance-section">
                <span className="Dis">Distance</span>
                <div className="chec-distance">
                    <ul>
                        <li><input type = "checkbox" name = "distance-1"></input>
                            <label for = "distance-1"> 5 mi</label>
                        </li>
                        <li><input type = "checkbox" name = "distance-2"></input>
                            <label for = "distance-2"> 10 mi</label>
                        </li>
                        <li><input type = "checkbox" name = "distance-3"></input>
                            <label for = "distance-3"> 15 mi</label>
                        </li>
                    </ul>
                    
                </div>
            </div>

            <div className="price-measure">

                <span className="Pri">Price</span>
                <span className="label">$400-$1500</span>
                <div className="range-price">
                    <input type= "range" name="price-range" min = "400" max = "1500"  step = "100"></input>
                    
                </div>
             
            </div>


            <div className="room-section">
                <span className="Roo">Rooming Situation</span>
                <div className="chec-room">
                    <ul>
                        <li><input type = "checkbox" name = "room-1"></input>
                            <label for = "room-1"> Singles</label>
                        </li>
                        <li><input type = "checkbox" name = "room-2"></input>
                            <label for = "room-2"> Doubles</label>
                        </li>
                        <li><input type = "checkbox" name = "room-3"></input>
                            <label for = "room-3"> Triples</label>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>

        
       
    </div>
    );
}


export default Rent;