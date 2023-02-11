const express=require("express");
const app=express();
const path=require("path");
const hbs=require("hbs");
const collection=require("./mongodb");

const tempelatePath=path.join(__dirname,'../tamplets') // to use the tamplepets in file tamplets

app.use(express.json())
app.set("view engine","hbs")
app.set("views",tempelatePath)
app.use(express.urlencoded({extended:false}))


//to render login.hbs file
app.get("/",(req,res)=>{ 
    res.render("login")
})

//to render signup.hbs file
app.get("/signup",(req,res)=>{ 
    res.render("signup")
})

// async functin


app.post("/signup", async (req,res)=>{
    //get the name and password frm the html file
    const data={
        name:req.body.name,
        password:req.body.password

    }

    // send the data to mongodb
    await collection.insertMany([data])
    res.render("home")

})

app.post("/login", async (req,res)=>{
   
    try{
        const check= await collection.findOne({name:req.body.name})
        if(check.password===req.body.password){
            res.render("home")
        }
        else{
            res.send("wrong password")
        }

    } catch{
        res.send("wrong details")

    }

})

//connect to prt 3000
app.listen(3000,() => {
    console.log("port connected");

})


