
const studentModels = require('../models/studentSchema')
// using post method
const datapost =  async(req,res)=>{
    try {
        const data = new studentModels(req.body)
        const savedata = await data.save()
        res.json(savedata)
    } catch (error) {
        console.log(`Something Went Wrong ${error}`)
    }
}

// using get method 
const dataget = async(req,res)=>{
    try {
        const data = await studentModels.find()
        res.json(data)
        
    } catch (error) {
        console.log(`Something Went Wrong methed detdata ${error}`)
        
    }
}
// personal id find using id  indivison men
const personalid = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await studentModels.findById({_id:id})
        res.json(data)
        
    } catch (error) {
        res.json(error)
        console.log(`Something Went Wrong methed detdata ${error}`)
        
    }
}
// update and edit user data
const dataUpdate = async (req,res)=>{
    try {
        const {id} = req.params
        updatedata = await studentModels.findByIdAndUpdate(id,req.body,{
            new:true
        })
        res.json(updatedata)
        
    } catch (error) {
        console.log(error);
        console.log(`Something Went Wrong methed detdata ${error}`)
        
    }
}
const dataDelete = async (req,res)=>{
    try {
        const {id} = req.params
        const data = await studentModels.findByIdAndDelete({_id:id})
        res.json(data)
    } catch (error) {
        console.log(`Something Went Wrong methed detdata ${error}`)
        
    }
}
module.exports = {
    datapost,
    dataget,
    personalid,
    dataUpdate,
    dataDelete
}