const mongoose = require('mongoose')
dbs = "mongodb+srv://abhi:abhishek@cluster0.fv7kp8a.mongodb.net/crud_application?retryWrites=true&w=majority"
const con = mongoose.connect(dbs,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("db is connted");
}).catch(err =>{
    console.log("Db is not connted",err)
})
