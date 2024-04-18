const mongoose=require('mongoose')

const testSchema= mongoose.Schema({
    testName:{
        type:String,
        required:true
    },
    testAge:{
        type:String,
        required:true
    }
})
const tests=mongoose.model('tests',testSchema)
module.exports=tests