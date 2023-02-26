const express = require('express')
var morgan = require('morgan')
var cors = require('cors')
var {config} = require('dotenv')
var router = require('./router/route')

//database connect
const {connect} = require('./database/conn')

const app = express()

app.use(morgan())
app.use(cors())
app.use(express.json())
config();
app.use('/api', router)

const port = process.env.PORT || 8080

app.get('/', (req,res) => {
    try {
        res.json("GET Request")
    } catch (error) {
        res.json(error)
    }
})

connect().then(() => {
    try {

        app.listen(port, () => {
            console.log(`server is connected to http://localhost:${port}`)
        })

    } catch (error) {

        console.log("Database is not connected to server")

    }
}).catch(error => {

    console.log("Invalid Database connection")
    
})
