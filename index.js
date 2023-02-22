const express = require('express')
const app = express()
const port = 3001
const http = require('http')
const server = http.createServer(app)
// const { Server } = require('socket.io')
// const io = new Server(server)

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})


app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('<h1>Prueba</h1>')
// })