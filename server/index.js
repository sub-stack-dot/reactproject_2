import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken'
import StudentModel from './models/student.js'

const app=express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: "http://localhost:3000", 
    credentials: true, 
}));

mongoose.connect('mongodb://localhost:27017/school'),{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}

//const cors = require("cors");

//app.use(cors({ origin: "http://localhost:3000", credentials: true }));


app.post('/register',(req,res) =>{
    const{fullname, email, password}=req.body;
    StudentModel.create({fullname, email,password})
    .then(user=>res.json(user))
    .catch(err=>res.json(err))
})

app.post('/login',(req,res)=>{
    const{email, password}=req.body;
    StudentModel.findOne({email})
    .then(user=>{
        if(user){
           if(user.password === password){
            const accessToken = jwt.sign({email:email},
                "jwt-access-token-secret-key",{expiresIn:'1m'})
            const refreshToken = jwt.sign({email:email},
                "jwt-refresh-token-secret-key",{expiresIn: '5m'}) 
                res.cookie('accessToken',accessToken,{maxAge:60000}) 
                res.cookie('refreshToken',accessToken,{maxAge:30000, httpOnly:true,secure:true, sameSite:'strict'})  
                res.json("Login Successful")
  
           }
        }else{
            res.json("No record existed")
        }
    }).catch(err =>res.json(err))
})

app.listen(3001, ()=>{
    console.log("Server is Running !")
})