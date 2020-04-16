const router=require('express').Router()

const multer= require('multer')

const upload = multer({dest: 'uploads/'})

const path = require('path')

router.get('/uploadfile', (req,res)=>{
    res.sendFile('/Users/apple/Downloads/file_uploading/views/index.html')
})


router.post('/uploadSingle',upload.single('file_single_upload'), async (req,res)=>{
    const path_of_file =path.join(__dirname,"..",req.file.path)
    res.send('the file has been uploaded to'+path_of_file)
})

router.post('/uploadMultiple',upload.array('allfiles',10), (req,res)=>{
    const files=req.files
    res.send(files)
    res.status(200).send('files have been uploaded!')
})



module.exports=router