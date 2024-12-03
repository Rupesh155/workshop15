let mongoose  = require('mongoose')
 let userSchema=  mongoose.Schema({
    firstName:{
        type:String
    },
    lastName:{
        type:String
    },
    email:{
        type:String
    },passWord:{
        type:String
   
    },
    role:{
        type:String,
        enum:['admin','user']
    }


})
 let User=   mongoose.model('user',userSchema)
 module.exports=User