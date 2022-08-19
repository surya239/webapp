const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname,"client/build")))
app.use(express.json())
const PORT = process.env.PORT || 5000;
console.log('hi')
app.listen(PORT, () =>{
    console.log("App Listening in ", PORT)
})