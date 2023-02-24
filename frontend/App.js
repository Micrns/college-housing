import React from "react";
import Rent from "./screens/rent.js";
import Login from "./screens/login.js"
import SignUp from "./screens/signup.js";
import HomePage from "./screens/homepage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";




// function that will display the main page of the web app
function App(){
    return(
            <div className="App">
                <Router>
                    <Routes>
                        <Route path = "/" element = {<HomePage/>}/>
                        <Route path = "/login" element = {<Login/>}/>
                        <Route path = "/signup" element = {<SignUp/>}/>
                        <Route path = "/rent" element = {<Rent/>}/>
                    </Routes>
                </Router>
            </div>
        );
   
}


export default App;