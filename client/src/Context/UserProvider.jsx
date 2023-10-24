import React, {useEffect, useState} from "react";
import axios from "axios";

export const UserContext=React.createContext()
export default function UserProvider({children}){
     
 const [allSauce,setAllSauce] =useState([])
 const [allMerch,setAllMerch] = useState([])
  

 function getAllMerch(){
   axios.get("/merch")
   .then((res)=>{
      setAllMerch(res.data)
   })
   .catch((err)=>console.log(err))
 }
 
 function getAllSauce(){
      axios.get("/sauce")
      .then((res)=>{
         
         setAllSauce(res.data)
      })
      .catch((err)=>console.log(err))
   }
   return(
      <UserContext.Provider
      value={{
         getAllSauce,
         allSauce,
         getAllMerch,
         allMerch,
      }}
      >
         {children}
      </UserContext.Provider>
   )
}