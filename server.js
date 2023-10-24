const express =require("express")
const app=express()
require("dotenv").config();
const morgan =require("morgan")
const mongoose = require("mongoose")


app.use(express.json())
app.use(morgan("dev"))

mongoose.connect(
    process.env.SITE_URL,
    ()=>console.log("connected to db")
)
app.use("/sauce", require("./routes/sauceRouter"))
app.use("/merch", require("./routes/merchRouter"))



app.listen(6800, ()=>{
    console.log("server is running on local host 69")
})