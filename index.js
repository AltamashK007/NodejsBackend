const express = require("express")
const connectToDB = require("./config/db")
const Router = require("./routes/EmployeeRoute")

const app = express()
connectToDB()
app.use(express.json())
 app.use("/api",Router)
 
app.listen(8001,() => {
    console.log("server running at port 8001")
})