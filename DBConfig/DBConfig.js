const mongoose = require("mongoose")





mongoose.connect(process.env.DB_URL)

const connection = mongoose.connection;


connection.on("connected", ()=>{
    console.log("MongoDB is connected");
})



connection.on("erro", (error)=>{
    console.log("error is occurred");
})


module.exports = mongoose;