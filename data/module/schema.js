const mongoose=require('mongoose');

const Login=mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    discription:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        unique: true,
        required: true,
    },
    password:{
        type:String
    },
    createdweb:{
        type:Boolean,
    },
    date:{
        type: Date,
        default:Date.now
    }
});



module.exports=mongoose.model('Register',Login)