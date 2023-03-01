const express = require('express')
const app = express()
const port = 3001
const http = require('http')
const server = http.createServer(app)

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

app.use(express.static('public'))

var users = []

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.name = '';

    socket.on('newUser', (user) => {
        socket.name = user.name;
        console.log('Nuebo usuario: ' + user.name)
        users.push(user)

        socket.emit('users', users)
        socket.broadcast.emit('users', users)
    })

    socket.on('disconnect', () => {
        console.log('user disconnected' + socket.name)
        users = users.filter(user => user.name !== socket.name)

        socket.emit('users', users)
        socket.broadcast.emit('users', users)
    })
})


server.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})



// ###########
// const { Server } = require('socket.io')
// const io = new Server(server)

//  ###########
// app.get('/', (req, res) => {
//   res.send('<h1>Prueba</h1>')
// })
