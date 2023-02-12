const mongoose=require("mongoose");


//make the data base
mongoose.set("strictQuery",true);
mongoose.connect("mongodb://localhost:27017/loginData")

// console if cnnected or not
.then(()=>{
    console.log("mngodb connected");
})
.catch(()=>{
    console.log("failed to connect mongodb");
})
// making the database schema for login information 
const LogInSchema=new mongoose.Schema({
    name : {
        type:String,
        required:true
    },
    password :{
        type:String,
        required:true
    }

});

// collection 
const collection = new mongoose.model("Collection1",LogInSchema)
module.exports=collection
