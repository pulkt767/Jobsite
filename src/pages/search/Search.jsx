import React, { useState } from "react";
import "./Search.css";
import Seresult from "./Seresult";
import { Link } from "react-router-dom";

const Search = () => {
    const [img, setImg] = useState("");
    const inputEvent = (event) => {
        const data = event.target.value;
        setImg(data);

    };
    return (
        <>

            <div className="topbarContainer">
                <div className="topbarLeft">
                    <Link to="/" style={{ textDecoration: "none" }}>
                    <img src={require('./insta.png').default} />
                    </Link>
                </div>
                <div className="searchbarr">

                    <input type='text'
                        placeholder="search anything"
                        value={img}
                        onChange={inputEvent} />
                </div>
                
            </div>
                <div className="centre"> 
                    {img === "" ? null : <Seresult name={img} />}

                </div>


        </>

    );

};
export default Search;