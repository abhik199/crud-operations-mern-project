const express = require('express')
const dotenv = require('dotenv')
const allroutes = require('./routes/MainJS')
const app = express()
const cors = require('cors')
app.use(cors())
const PORT  = process.env.PORT  || 5000
app.use(express.json())
require('./dbs/conn')
app.use(allroutes)

if(process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"))
}

app.listen(PORT,()=>console.log(`server is running at ${PORT}`))