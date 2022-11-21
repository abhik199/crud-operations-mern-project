const mongoose = require('mongoose')
const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    contact:{
        type:String,
        required:true,
    },
    city:{
        type:String,
        required:true
    },
    date:{
        type:String,
        required:true
    }
})
const op = mongoose.model("New_Student",studentSchema)
module.exports=op