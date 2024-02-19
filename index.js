const express = require('express')
const customRoutes = require('./routes/index')
const cors = require('cors');

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/v1", customRoutes);

app.listen(8080, (req, res)=>{
    console.log("Your server is up on the port 8080");
})