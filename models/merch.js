mongoose =require("mongoose")
const Schema = mongoose.Schema

const merchSchema = new Schema ({
    name: {type: String, required: true},
    description:{type:String, required:true},
    size:{type:String},
    price:{type:String,required:true},
    image:{type:String},
})

module.exports =mongoose.model("Merch",merchSchema)