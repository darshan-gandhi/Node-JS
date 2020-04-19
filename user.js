const router=require("express").Router()
const confirm=require('confirm')
const usermodel = require('../model/usermodel')

const { mobilevalidation } = require('../utils/middleware')
router.get('/',(req,res)=>{
    res.sendFile('/Users/apple/Downloads/mongowalacode/views/index.html')
})

router.post('/',mobilevalidation,async (req,res,next)=>{
    try {
        console.log(req.body)
        const {name ,email ,mobile,city}= req.body

        const user=new usermodel({name,email,mobile,city})

        await user.save()

        res.status(200).json({
            name,email,mobile,city,_id: user._id.toString()
        })

    }

    catch(error){
        next (error)
    }

})



router.post('/findbyid', async (req,res,next)=> {
    try{
        console.log(req.body)
        const username=req.body.name
        console.log(username)
        const user= await usermodel.find({name:username})
        // var m'yJson = {'key':'value', 'key2':'value2'};
        
        res.status(201).json({user})

    }
    catch(error){
        next(error);
    }
})

router.get('/findall',async(req,res,next)=>{
    try{

        const users = await usermodel.find({})
        answer=JSON.stringify(users)
        res.status(201).send(answer)

    }
    catch(error){
        next(error)
    }
})

router.post('/updated', async (req, res, next) => {
    try {
      const username = req.body.name
      console.log(req.body)
      const updatedUser = await usermodel.findOneAndUpdate({"name":username} ,{ "email":req.body.email,"mobile":req.body.mobile,'city':req.body.city}, { new: true })
      res.status(201).json({ user: updatedUser })
    } catch (error) { next(error) }
  })

router.post('/delete',async(req,res,next)=>{
    try{
       

        {console.log(req.body)
        const username=req.body.name
        await usermodel.findOneAndRemove({name:username})
        res.send("the user is deleted")
        res.status(204).end("user is deleted")
        }
       
    }

    catch(error){
            next(error)
    }
})

module.exports=router