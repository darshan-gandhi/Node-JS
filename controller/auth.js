const router = require('express').Router()
const Auth = require('../model/authmodel')
const { authenticated } = require('../utils/middleware')
const bcrypt = require('bcryptjs')



router.get('/',(req,res)=>{
    res.sendFile('/Users/apple/Downloads/file_uploading/views/login.html')
})

router.get('/image',(req,res)=>{
  res.sendFile('/Users/apple/Downloads/file_uploading/uploads/Photo.jpg')
})


router.post('/signUp', async (req, res) => {
  const { username, password } = req.body
  const salt = await bcrypt.genSalt(10)
  const hashedPassword = await bcrypt.hash(password, salt)
  const auth = new Auth({ username, password })
  console.log(hashedPassword)
  try {
    await auth.save()
    res.status(200).json({ username, password, id: auth._id.toString() })
  } catch (err) {
    console.log(err)
  }
})

router.post('/login', async (req, res) => {
  const { username, password } = req.body
  console.log(req.body)
  try {
    const auth = await Auth.findOne({ username })
    // console.log(auth)
    if (auth===null)
    {
       
            res.send("invalid user")
        
    }
    else{
    const hashedPassword = auth.password
    console.log(hashedPassword)
    console.log(password)
    if (password===hashedPassword){
        result= true
    }
    else{
        result=false
    }
    // const result = await bcrypt.compare(password, hashedPassword)
    console.log(result)
    if (result === true) {
      res.cookie('username', username)
    //   res.status(200).json('logged in')
    res.sendFile('/Users/apple/Downloads/file_uploading/views/index.html')
    } else {
      res.status(404).json('not found')
    }
  }} catch (err) {
    console.log(err)
  }
})


router.get('/findAll',async(req,res,next)=>{
    try{

        const users = await Auth.find({})
        answer=JSON.stringify(users)
        res.status(201).send(answer)

    }
    catch(error){
        next(error)
    }
})

// router.get('/getuser', (req, res)=>{ 
//     //shows all the cookies 
//     res.send(req.cookies); 
//     }); 

// router.get('/logout', authenticated, async (req, res) => {
//   try {
//     res.clearCookie('username')
//     res.status(200).json('logged out')
//   } catch (err) {
//     console.log(err)
//   }
// })

module.exports = router