const express = require('express')
const app = express();

app.get('/', (req,res)=>{
    res.send("You are on the Home Page ..")
    console.log("Client is on the website ")
})

module.exports = app ;