import React, {useContext,useEffect} from "react";
import ProductCard from "./ProductCard";
import "../Styles/Merch.css"
import{UserContext} from "../Context/UserProvider"
export default function Merch(){
    const {getAllMerch,allMerch}=useContext(UserContext)

    useEffect(()=>{
        getAllMerch()
    },[])

    return(
        <div>
            {allMerch.length && allMerch.map((merch)=>(
                <ProductCard {...merch} key={merch._id} product={merch}/>
            ))}
        </div>
      
    )
}