const express=require('express');
const Login=require('./module/schema');
const router=express.Router();
const webname=require('./module/webname');
const uuid=require("uniqid");
require('dotenv/config');

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
    host: "educationmandal.com",
    port: 465,
    secure: true,
 auth: {
        user: 'noreply@educationmandal.com',
        pass: process.env.PASS
    }
});

const sendmail=transporter;

// router.get('/',(req,res)=>{
//     webname.find({userid:"606de2f6a970be4e18088d9e"},(err,result)=>{
        
//         res.send(result)
//     })
// })

router.post('/register',(req,res)=>{

    Login.find({email:req.body.email},(err,result)=>{
        if(!err){
            if(result.length)
            {
                res.send({message:"Email already Register!",result:false})
            }
            else{

                let Password=uuid().slice(5)
                
                const registeruser=new Login({
                    name:req.body.name,
                    discription:req.body.discription,
                    email:req.body.email,
                    password:Password,
                    createdweb:false
                }).save();

                registeruser.then((r)=>{
                    res.send({message:"Account Created",result:true,id:r.id})
                })

                const mailOptions = {
                    from: 'noreply@educationmandal.com', 
                    to: req.body.email, 
                    subject: 'Login Pass:-', 
                    html: `<h3>Password:- ${Password}</h3>`
                  };

                sendmail.sendMail(mailOptions, function (err, info) {});
            }
        }
        else{
            res.send({message:"please try after sometime!",err:err,result:false})
        }

    })
})

router.post('/login',(req,res)=>{

    Login.find({email:req.body.email},(err,result)=>{
        if(!err){
            if(result.length)
            {
                Login.find({email:req.body.email,password:req.body.password},(err,check)=>{
                if(!err)
                {
                    if(check.length)
                    { res.send({message:"Login Successful",result:true,id:check[0].id,createdweb:check[0].createdweb})}
                    else
                    {       res.status(200)
                        res.send({message:"Password Not Match",result:false})}
                }
                })
            }
            else{
                res.send({message:"Email not register",result:false})
            }
        }
        else{
            console.log(err)            
            res.send({message:"please try after sometime!",err:err,result:false})
        }

    })
})

router.get('/check/:query',(req,res)=>{

    webname.find({webname:req.params.query},(err,result)=>{

        if(!err)
        {
            if(result.length)
            {
                    res.send({message:'Not Available',result:false})
            }   
            else
            {
                res.send({message:'Available!',result:true})
            }
        }
        else{
            res.send({message:'Try After sometime!',result:false})
        }
    }).catch((err)=>{
        res.send({message:'Try After sometime!',result:false})
    })
})

router.post('/registerwebname',(req,res)=>{

    webname({webname:req.body.name,
        userid:req.body.id
    }).save()
    .then((r)=>{
        Login.findByIdAndUpdate({_id:req.body.id},{createdweb:true},(e,re)=>{})

        res.send({message:"Web Name Register!",result:true})
    })
    .catch((err)=>{
        res.send({message:"Try After Sometime!",result:false})
    })

})


router.get('/getnameofpage/:id',(req,res)=>{

    webname.find({userid:req.params.id},(err,r)=>{
        if(!err)
        {
            res.send(r[0].webname)
        }
        else
        {
            res.send(err)
        }
    })
})

router.post('/Updateapp',(req,res)=>{
    
    webname.findOneAndUpdate({userid:req.body.id},{listid:req.body.datalist},(err,re)=>{
        if(!err)
        {   
            
            res.send({message:"Website Updated!",result:true,re})
        }
        else
        {
            res.send({message:"Try Again After Sometime!",result:false})
        }
    })
    .catch((err)=>{
            res.send(err)
    })
})

router.post('/DisplayApp',(req,res)=>{
    
    webname.find({webname:req.body.name},(err,re)=>{
        if(!err)
        {   
            let data=[]
            if(re.length)
            {
                data=re[0].listid
            }
            
            res.send({message:"Website Updated!",result:true,re:data})
        }
        else
        {
            res.send({message:"Try Again After Sometime!",result:false})
        }
    })
    .catch((err)=>{
            res.send(err)
    })
})



router.post('/dashboardweb',(req,res)=>{
    
    webname.find({userid:req.body.id},(err,re)=>{
        if(!err)
        {   
            let data=[]
            if(re.length)
            {
                data=re[0].listid
            }
            
            res.send({message:"Data display!",result:true,re:data})
        }
        else
        {
            res.send({message:"Try Again After Sometime!",result:false})
        }
    })
    .catch((err)=>{
            res.send(err)
    })
})


router.post('/addcomponent',(req,res)=>{
    
    webname.find({userid:req.body.id},(err,re)=>{
        if(!err)
        {   
            let data=[]
            if(re.length)
            {
                data=re[0].listid
            }

            data.push(req.body.data)

          webname.findOneAndUpdate({userid:req.body.id},{listid:data},(err,re)=>{})
            
            res.send({message:"Component Added!",result:true,re:data})
        }
        else
        {
            res.send({message:"Try Again After Sometime!",result:false})
        }
    })
    .catch((err)=>{
            res.send(err)
    })
})

module.exports=router