// ALL requirement and imports 
require('dotenv').config();
const app = require('./app');
const http = require('http');
const connectDB = require('./config/db')
const { Server } = require('socket.io')
const handShake = require('./sockets/index')

// Declarations 
const PORT = process.env.PORT;
const server = http.createServer(app)

//Initialization 
connectDB();
const io = new Server(server, {
    cors : {
        origin : "*"
    }
})
handShake(io)

server.listen(PORT , ()=>{
    console.log(`The server is listening on the port ${PORT}`)
})
