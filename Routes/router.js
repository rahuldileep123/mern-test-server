const express =require('express')
const testController=require('../controllers/testcontroller')
const router = new express.Router()

//test
router.post('/test',testController.test )

module.exports=router