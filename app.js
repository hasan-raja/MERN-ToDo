const express = require('express');
const app = express();

require('dotenv').config()


const bodyParser=require("body-parser");
const cors=require("cors");

const jwt=require("jsonwebtoken");

const mongoose=require('mongoose');

mongoose.connect(process.env.MONGODB_URI)

const port = process.env.PORT || 3001 ;

app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port,(err)=>{
    if(err) return console.log(err);
    else console.log("server is listening on port",port);
})