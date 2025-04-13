import mongoose from "mongoose"; 

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },

    email:{
        type:String,
        required:true,
        unique: true,
        trim: true
    },

    passward:{
        type:String,
        required:true,
        minlength:8
    },

    
})
const User = mongoose.model('User',userSchema)
export default User