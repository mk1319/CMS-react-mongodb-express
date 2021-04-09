const express=require('express');
const Login=require('./module/schema');
const router=express.Router();
const webname=require('./module/webname');

router.get('/',(req,res)=>{
    webname.find({userid:"606de2f6a970be4e18088d9e"},(err,result)=>{

        res.send(result)

        // res.send("hello world!")
    })
})

router.post('/register',(req,res)=>{

    Login.find({email:req.body.email},(err,result)=>{
        if(!err){
            if(result.length)
            {
                res.send({message:"Email already Register!",result:false})
            }
            else{
                
                const registeruser=new Login({
                    name:req.body.name,
                    discription:req.body.discription,
                    email:req.body.email,
                    password:req.body.password,
                    createdweb:false
                }).save();

                registeruser.then((r)=>{

                    res.send({message:"Account Created",result:false,id:r.id})
                })

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
                    {res.send({message:"Login Successful",result:true,id:check[0].id,createdweb:check[0].createdweb})}
                    else
                    {res.send({message:"Password Not Match",result:false})}
                }
                })
            }
            else{
                res.send({message:"Email not register",result:false})
            }
        }
        else{
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

module.exports=router