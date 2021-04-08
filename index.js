const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const bodyparser=require('body-parser').json();
const access=require('./data/access');
require('dotenv/config');
const app=express();
/*
name:
email:
password:
discription
*/

app.use(bodyparser)

app.use(cors())

mongoose.connect(process.env.DB_CONNECT,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},()=>console.log("connected"))

app.use('/access',access)


app.get('/',(req,res)=>{

    res.send("Hello world")

})


app.listen(5000,()=>{})