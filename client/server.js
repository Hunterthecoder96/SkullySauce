const express =require("express")
const app=express()
require("dotenv").config()
const morgan =require("morgan")
const mongoose = require("mongoose")
const{expressjwt} =require("express-jwt")


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect