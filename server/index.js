import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import StudentModel from './models/student.js'

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect('mongodb://localhost:27017/school')

app.post('/register',(req,res) =>{
    const{fullname, email, password}=req.body;
    StudentModel.create({fullname, email,password})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is Running !")
})