require('dotenv').config()
const express = require('express')
const cors =require('cors')
const router = require('./Routes/router')
require('./DB/connection')

//create express server
const TESTserver =express()

TESTserver.use(cors())
TESTserver.use(express.json())
TESTserver.use(router)

const PORT = 3000 || process.env.PORT

TESTserver.listen(PORT,()=>{
    console.log(`test server started ${PORT}`);
})