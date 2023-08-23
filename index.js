const {createServer} = require('http')
const mongoose = require('mongoose');
const {Server} = require('socket.io')
const registerController = require('./controller/registerController');
const express = require('express')
const findSocket = require('./util/findSocket')
const {chatListController, messageListController} = require('./controller/chatController');
const cors = require('cors');
require('dotenv').config()

// Connection database
mongoose.set('strictQuery', false)
mongoose.connect(process.env.DATABASE_URL)

const corsConfig = {
    origin: '*'
}

// Initializing server
const expressApp = express()
const server = createServer(expressApp)
const io = new Server(server, {cors: corsConfig})

io.findSocket = findSocket(io)
io.on('connection', registerController)

expressApp.use(cors(corsConfig))
expressApp.get('/chats', chatListController)
expressApp.get('/chats/:id', messageListController)

// Launching server
server.listen(process.env.SERVER_PORT, () => console.log("Server is running on", process.env.SERVER_PORT))