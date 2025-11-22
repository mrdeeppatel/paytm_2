const express = require("express")
const router = require("./routes/index")
const app = express()
const cors = require("cors")
// now CORS is added before all the 
app.use(cors())

// const parser = require("body-parser")
// app.use(parser.json())
app.use(express.json())
// Like app.use("/api/v1",cors, router)

app.use("/api/v1", router)

app.listen(3000)