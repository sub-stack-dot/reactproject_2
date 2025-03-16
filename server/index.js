import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app=express()

app.listen(3001, ()=>{
    console.log("Server is Running !")
})