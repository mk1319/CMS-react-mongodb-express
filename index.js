const express=require('express');
const mongoose=require('mongoose');
const bodyparser=require('body-parser').json();
require('dotenv/config');
const app=express();
/*
name:
email:
password:
discription
*/

app.use(bodyparser)

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("connected",()=>{
    console.log("connected")
}).on("error",(err)=>{
    console.log("error",err)
})


app.get('/',(req,res)=>{

    res.send("Hello world")

})


app.listen(5000,()=>{})