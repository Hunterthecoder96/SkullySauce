import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Header.css"
import {RiShoppingCart2Fill} from "react-icons/ri"
import SkullyLogo from "/src/assets/SKULLYLOGO2.png"


export default function Header(){

    return(
        <div className="Header-container">
            <Link className="link" to="/">
                <p>Home</p>
            </Link>
            
            <Link className="link"to="/sauce">
            <p>Sauce</p>
            </Link>
            <img src={SkullyLogo}/>
            <Link className="link"to="/merch"> 
            <p>Merch</p>
            </Link>
           <Link className="link" to ="/Contact">
            <p>Contact</p>
            </Link>
            <RiShoppingCart2Fill />
            

        </div>
    )
}