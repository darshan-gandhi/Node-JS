const router=require('express').Router()

const multer= require('multer')

const upload = multer({dest: 'uploads/',fileFilter: (req, file, cb) => { // file type filter
    if (
      !file.mimetype.includes('jpeg') &&
    !file.mimetype.includes('jpg') &&
    !file.mimetype.includes('png') &&
    !file.mimetype.includes('gif') && 
    !file.mimetype.includes('png') &&
    !file.mimetype.includes('pdf')

    ) {
      return cb(new Error('Only images are allowed'))
    }
    cb(null, true)
  }})

const path = require('path')

const { lineCount, checkAccess, fileLineReader } = require('../utils/file')




router.post('/uploadSingle',upload.single('file_single_upload'), async (req,res)=>{
    const path_of_file =path.join(__dirname,"..",req.file.path)
    res.sendFile("/Users/apple/Downloads/file_uploading/uploads/Photo.jpg")
    checkAccess(path_of_file)
    const lc = await lineCount(path_of_file)
    fileLineReader(path_of_file)
    // res.send(`uploaded file has ${lc} number of lines`)
    res.send(`the file has been uploaded containing ${lc}`)
})

router.post('/uploadMultiple',upload.array('allfiles',10), (req,res)=>{
    const files=req.files
    res.send(files)
    // res.status(200).send('files have been uploaded!')
})



module.exports=router