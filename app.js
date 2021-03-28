const express = require('express');
const app = express();

require('dotenv').config()


const bodyParser=require("body-parser");
const cors=require("cors");

const jwt=require("jsonwebtoken");

const mongoose=require('mongoose');

const User=require('./models/User');

mongoose.connect(process.env.MONGODB_URI)

const port = process.env.PORT || 3001 ;

app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({extended:false}));

app.post('/signup',(req,res)=>{
    const newUser= new User({
        username:req.body.username,
        password:req.body.password
    });

    newUser.save(err=>{
        if(err){
            return res.status(400).json({
                title:"error",
                error:"Email is already in use"
            })
        }
        return res.status(200).json({
            title:"user successfully added"
        })
    })
})

app.listen(port,(err)=>{
    if(err) return console.log(err);
    else console.log("server is listening on port",port);
})