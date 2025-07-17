const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.post("/add-visitor", (request, response) => {
    response.json(
        {
            "status":"Successfully Added Visitor Data"
        }
    )
})

app.post("/view-visitor",(request,response)=>{
    response.json(
        {
            "status":"Successfully Fetched Visitors Data"
        }
    )
})

app.listen(4000, () => {
    console.log("Server is Running <3")
})