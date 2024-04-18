const express =require('express')
const testController=require('../controllers/testcontroller')
const studentController =require('../controllers/studentController')
const router = new express.Router()

//test
router.post('/test',testController.test )

//students
router.post('/register',studentController.student)
router.get("/student-list",studentController.getAllStudents)

module.exports=router