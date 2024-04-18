const mongoose=require('mongoose')

mongoose.connect(process.env.CONNECTION_STRING).then(
    result=>{
        console.log("mongoDB connected to server");
    }
).catch(err=>{
    console.log('connection failed');
    console.log(err);
})