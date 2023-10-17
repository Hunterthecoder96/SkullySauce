import React from "react";
import { Link } from "react-router-dom";
import SkullyLogo from "/src/assets/SKULLYLOGO2.png"


export default function Header(){

    return(
        <div className="Header-container">
            <Link className="link" to="/"><p>Home</p></Link>
            
            <Link className="link"to="/shop">
            <p>Shop</p>
            </Link>
            <img src={SkullyLogo}/>
            <Link className="link"to="/About"> 
            <p>About</p>
            </Link>
           <Link className="link" to ="/Contact"><p>Contact</p></Link>
            

        </div>
    )
}