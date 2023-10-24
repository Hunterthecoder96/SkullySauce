import React,{useContext, useEffect} from "react";
import ProductCard from "./ProductCard";
import { UserContext } from "../Context/UserProvider";

export default function Sauce(){
    const {getAllSauce,allSauce}= useContext(UserContext);

     useEffect (()=>{
        getAllSauce();
    },[])
    console.log(allSauce)
    return(
        <div className="Sauce-container">

            {allSauce.length && allSauce.map((sauce)=>(
                <ProductCard {...sauce} key={sauce._id} product={sauce}/>
            ))}
        </div>
    )
}
