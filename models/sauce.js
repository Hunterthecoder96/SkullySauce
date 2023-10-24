mongoose= require("mongoose")
const Schema = mongoose.Schema;

const sauceSchema = new Schema({
    name: {type: String, required: true},
    description:{type:String, required:true},
    heat:{type:Number},
    price:{type:String,required:true},
    image:{type:String},
})

module.exports = mongoose.model("Sauce", sauceSchema);

