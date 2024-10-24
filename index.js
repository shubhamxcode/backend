require('dotenv').config()
const express=require('express')
const app=express()
const port=3000
app.get('/',(req,res)=>{
    res.send("hello world")
})
app.get('/insta',(req,res)=>{
    res.send("this is insta url")
})
app.get('/code',(req,res)=>{
    res.send("<h1>this is h1 code</h1>")
})
app.get('/getit',(req,res)=>{
    res.send("this is get")
})
app.listen(process.env.PORT,()=>{
    console.log(`example app litsning on port ${port}`);
})