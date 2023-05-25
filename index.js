const express=require('express');
const mongoose=require('mongoose');
const cors=require('cors')
const bodyparser=require('body-parser').json();
const access=require('./data/access');
require('dotenv/config');
const app=express();
const path=require('path');
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

app.use('/api/access',access)


// if(process.env.NODE_ENV==='production'){

    app.use(express.static('frontend/build'))

    app.get('*',(req,res)=>{

        res.sendFile(path.resolve(__dirname,'frontend','build','index.html'))
    })
// }


app.listen(process.env.PORT|| 5000,()=>{}) 