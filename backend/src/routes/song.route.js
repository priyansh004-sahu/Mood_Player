const express = require('express');
const multer = require('multer');
const uploadFile = require('../service/storage.service')
const router = express.Router();

const upload = multer({storage:multer.memoryStorage()});   // access the req.body

router.post('/songs', upload.single("audio"), async (req, res)=> {

    console.log(req.body);
    console.log(req.file);
    const fileData = await uploadFile(req.file);     // come from service
    console.log(fileData);
    
    res.status(201).json({
        message:'song created sucessfully',
        song:req.body
    });
})

module.exports = router;