var express = require('express')

var router=express.Router()

router.get('/',(req,res)=>{
    if(req.session.user == undefined){
        res.redirect('/');
    }
   var data=req.session.user
   console.log(data);
   res.render('account',{data})
})
router.get('/home',(req,res)=>{
    res.redirect('/home')
})
router.get('/login',(req,res)=>{
    res.redirect('/')
})
module.exports=router