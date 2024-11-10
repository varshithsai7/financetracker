const express = require('express');
const cors=require('cors')
const morgan = require('morgan')
const dotenv = require('dotenv')
const colors = require('colors');
const connectDB = require('./config/connectDB');


//config dotenvfile
dotenv.config()

//db call
connectDB()

//rest
const app= express()

//middlewares
app.use(morgan('dev'))
app.use(express.json())
app.use(cors())

//routes
app.get('/',(req,res)=>{
    res.send("<h1>Hello from server</h1>")
})

//port
const Port = 8080 || process.env.Port

//listen server
app.listen(Port,()=>{
    console.log(`server running on port ${Port}`)
});