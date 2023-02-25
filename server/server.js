const express = require('express')
var morgan = require('morgan')
var cors = require('cors')
var {config} = require('dotenv')

const app = express()

app.use(morgan())
app.use(cors())
app.use(express.json())
config();

const port = process.env.PORT || 8080

app.get('/', (req,res) => {
    try {
        res.json("GET Request")
    } catch (error) {
        res.json(error)
    }
})

app.listen(port, () => {
    console.log(`server is connected to http://localhost:${port}`)
})