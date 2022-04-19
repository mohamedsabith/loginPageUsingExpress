var express = require('express');
var router = express.Router();
 var app=express()
router.get("/",(req,res)=>{ 
  let products=[
    {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      },
      {
        name:"Galexy M52",
        category:"mobile",
        price:48884,
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-e236bzggins/gallery/in-galaxy-f23-4gb-ram-sm-e236bzggins-531512373?$2052_1641_PNG$"
      }
]

res.header('Cache-control','no-cache,private, no-store, must-revalidate,max-stale=0,post-check=0,pre-check=0');

  let user=req.session.user
  let logged=req.session.loggedin
  console.log(user);
  if(req.session.user == undefined){
      res.redirect('/');
  }
  res.render('home',{user,logged,products})
})

router.get('/logout', (req, res) => {
    req.session.destroy()
    res.redirect('/')
    res.clearCookie()
  })
  router.get('/account', (req, res) => {
    res.redirect('/account')
  })

module.exports=router;