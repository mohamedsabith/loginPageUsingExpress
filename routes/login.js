var express = require('express');
var router = express.Router();

const signup = (data) => {
   return new Promise((resolve,reject)=>{
       let status=true;
       const username="sabith"
       const password="12345678"
    //    console.log(data);
       if(data.username==username && data.password==password){
           resolve({status,data})
       }else{
           reject({status:false})
       }
   })
}

router.get('/',(req,res)=>{
    
    res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
   
    if(req.session.loggedin){
        res.redirect('/home')
    }else{
        res.render('login',{ "err": req.session.userLoginErr})
        req.session.userLoginErr = false
    }
    
  })

router.post('/login',(req,res)=>{

    res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');
    
     signup(req.body).then((result)=>{
         req.session.loggedin=true
         req.session.user=result.data
        res.redirect('/home')
     }).catch(()=>{
         console.log("error");
         req.session.userLoginErr = true
         res.redirect('/')
     })
}) 


module.exports = router;