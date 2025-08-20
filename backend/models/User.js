const mongoose = require("mongoose");
const validator = require("validator")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
   firstName : {
     type: String,
     required : true,
     index: true,
     minLength: 4
   },
   lastName :{
     type: String
   },
   emailId : {
      type: String,
      lowercase: true,
      required: true,
      trim: true,
      unique: true,
      validate(value){
         if(!validator.isEmail(value)){
             throw new Error("Invalid email address" + value)
         }
      }
   },
   password : {
    type: String,
    required : true,
    validate(value){
        if(!validator.isStrongPassword(value)){
             throw new Error("Enter a strong Password:" + value)
        }
    }
   },
   age :{
     type: Number
   },
   gender : {
     type: String,
     enum:{
        values:["male" , "female" , "other"],
        message: `{VALUES} is incorrect gender type`
     }
   },
   photoUrl : {
      type: String,
      default : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsGjDJxNoPQgkbqeBPV0yYH7CNMJwficf9hw&s",
      validate(value){
        if(!validator.isURL(value)){
            throw new Error("Invalid photo URL" +value)
        }
      }
   },
   about: {
        type:String,
        default: "This is default about of the user"
    },
    skills:{
        type: [String]

    }
    
},
 { timestamps: true }
)

module.exports = mongoose.model("User" , userSchema)