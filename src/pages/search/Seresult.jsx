import React from "react";
import "./Search.css";

const Seresult = (props) => {
   
         const img = `https://source.unsplash.com/1920x900/?${props.name}`; 
    
   
    return(
        <>
        <div className="centre">
            <img src={img} alt="photos"/> 
    </div>
        </>
    )
}
export default Seresult;