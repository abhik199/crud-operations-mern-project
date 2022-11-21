const express = require('express')
const Routers = express.Router()
const cors = require('cors')
const studentController = require('../Controllers/studentController')
Routers.use(express.json())
Routers.use(cors())

Routers.post('/student',studentController.datapost)
Routers.get('/student',studentController.dataget)
Routers.get('/student/:id',studentController.personalid)
// update patch or pul done use kar sakte hai
// put fullupdate user fill one input
// patch  for single input fil update single
Routers.patch('/student/:id',studentController.dataUpdate)

Routers.delete('/student/:id',studentController.dataDelete)




module.exports = Routers