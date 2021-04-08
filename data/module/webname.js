const mongoose=require('mongoose');

const webname=mongoose.Schema({
    userid:{
        type:String,
        ref:'Register',
        required:true
    },
    webname:{
        type:String,
        unique: true,
        required:true,
    },
    listid:{
        type:Array,
        default:[]
    }
});



module.exports=mongoose.model('webname',webname)