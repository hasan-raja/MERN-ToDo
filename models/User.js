const mongoose=require('mongoose');
const Schema=mongoose.Schema;

const userSchema= new Schema({
    // name:String,
    //Employee_id:Number,
    username:{
        unique:true,
        type:Number
    },
    password:String
})

const User=mongoose.model('user', userSchema);

module.exports = User;