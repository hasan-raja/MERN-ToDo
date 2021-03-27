const express = require('express');
const app = express();

const bodyParser=require("body-parser");
const cors=require("cors");

const jwt=require("jsonwebtoken");

const mongoose=require('mongoose');

mongoose.connect(`mongodb+srv://Hasan:3107Anees!@todo.yeogc.mongodb.net/todo?retryWrites=true&w=majority`)

const port = process.env.PORT || 3030;

app.use(cors());
app.use((bodyParser.json()));
app.use(bodyParser.urlencoded({extended:false}));

app.listen(port,(err)=>{
    if(err) return console.log(err);
    else console.log("server is listening on port",port);
})