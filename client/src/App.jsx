import React from 'react'
import Shop from "./Components/Shop"
import Contact from './Components/Contact'
import{Routes, Route} from "react-router-dom"
import Header from './Components/Header'
import About from "./Components/About"
import './App.css'
import Home from './Components/Home'
import Merch from './Components/Merch'
import Sauce from './Components/Sauce'

function App() {
 

  return (
    <>
   <Header />
  
   <Routes>

   <Route
    path="/shop" 
    element={<Shop />}
   />
   <Route 
   path="/About"
   element={<About />}
   />
   <Route 
   path="/Contact"
   element={<Contact/>}
   
   />
   <Route 
   path="/"
   element={<Home/>}
   />
   <Route
   path="/merch"
   element={<Merch/>}
   />
   <Route 
   path="/sauce"
   element={<Sauce/>}
   />
   </Routes>
    </>
  )
}

export default App
