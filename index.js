// npm packages
const express = require('express')
const bodyParser = require('body-parser')

// modules
const applyRoutes = require('./routes')

// config
const API_PORT = 9000
const API_INTERFACE = "127.0.0.1"

setup()

//entrypoint method
async function setup(){
    //set up and start HTTP server and routes
    const app = express()
    app.use(bodyParser.json());
    applyRoutes(app)
    serveAPI(app)
}

//start express HTTP server
function serveAPI(app){
    app.listen(API_PORT, () => console.log(`Example app listening on port ${API_PORT}!`))
}
