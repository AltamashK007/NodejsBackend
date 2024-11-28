const { createEmployee, getEmployee , updateEmployee } = require("../controller/EmployeeController")


const Router = require("express").Router()


Router.post('/create',createEmployee)
Router.get('/read',getEmployee)
Router.put('/update', updateEmployee)


module.exports = Router
