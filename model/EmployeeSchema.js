const mongoose = require("mongoose")


EmployeeSchema = mongoose.Schema({
    Name:{type:String,required:true},
    Email:{type:String,required:true},
    Password:{type:String,required:true},
})


const Employee = mongoose.model('pracice',EmployeeSchema)

module.exports= Employee