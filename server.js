const express = require('express')
const app = express()
require("dotenv").config()

const dbConfig = require('./DBConfig/DBConfig')
const port = process.env.PORT || 5000  // solution for the port being used



app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})