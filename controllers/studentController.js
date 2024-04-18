const students = require('../Models/studentModel')

exports.student=async(req,res)=>{
  console.log('inside student controller');
  
  const {firstname,lastname,address,email,gender,mobile,password,dob,course}=req.body

  try{
    const existingStudent= await students.findOne({email})
    if(existingStudent){
        res.status(406).json("student already exists")
    }else{
        const newStudent= new students({
            firstname,lastname,address,email,gender,mobile,password,dob,course
        })
        await newStudent.save()
        res.status(200).json(newStudent)

    }
}catch(err){
    res.status(401).json(err)
}
}
exports.getAllStudents=async(req,res)=>{
    try{
        const allStudents=await students.find()
        res.status(200).json(allStudents)
    }catch(err){
        res.status(401).json(err)
    }
    }