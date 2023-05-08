import React, { useState, useEffect } from "react";
import "../styles/carousel.css";

function Carousel({images}) {

    const [autPlay, setAutoPlay] = useState(null);
    const [current, setCurrent] = useState(0);

    


    useEffect(() => {
        setTimeout(() => {revolve();}, 2500)
    })


    const revolve = () => {
        if (current === images.length - 1){
            setCurrent(0);
        }
        else{
            setCurrent(current+1);
        }
        
    };
    return <div className="carousel-edit">
        <div className="carusel-wrapper"> 
            {images.map((image, index)=>{
                return (
                    <div key = {index} className = {index === current ? "cards cards-active" : "cards"}>
                        <img className = "school-img" src = {image.image} alt = ""/>
                    </div>
                )
            })}
        </div>
        
    </div>
    
}

export default Carousel;