const tests=require('../Models/testModel')

exports.test=async(req,res)=>{
    console.log('inside test controller');
   
    const {testName,testAge}=req.body
    try{
        const existingTest= await tests.findOne({testName})
        if(existingTest){
            res.status(406).json("user already exists")
        }else{
            const newTest= new tests({
                testName,testAge
            })
            await newTest.save()
            res.status(200).json(newTest)
    
        }
    }catch(err){
        res.status(401).json(err)
    }



  
}