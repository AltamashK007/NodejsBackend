const mongoose = require("mongoose")

const connectToDB = async () => {
    try {
        await mongoose.connect(("mongodb://localhost:27017/Practice"))
        console.log("DB Connected Successfully")
    } catch (error) {
        console.log(error.message,"Failed to connect db")
    }
}


module.exports = connectToDB