const mongoose=require('mongoose');

const databaseSchema=mongoose.Schema({
    email:{type:String, require:true, unique:true},
    
}, {timestamps:true, versionKey: false})

const userModel=mongoose.model("users", databaseSchema);

module.exports=userModel;