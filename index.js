const express = require('express')
const app = express()
const port = 3001
const http = require('http')
const server = http.createServer(app)
const fileUpload = require('express-fileupload')
const router = express.Router();

const io = require('socket.io')(server, {
    cors: {
        origin: 'http://localhost:3000',
        methods: ['GET', 'POST']
    }
})

// Configurar cabeceras y cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});


app.use(express.static('public'))
app.use(fileUpload())


// app.get('/', (req, res) => {
//   res.send('<h1>Prueba</h1>')
// })

app.post('/', (req, res, next) => {
    const newPath = __dirname + '/public/images/';
    const file = req.files.file;
    const filename = file.name;

    file.mv(`${newPath}${filename}`)

    res.send('Archivo subido')
})

var users = []
var messages = []

io.on('connection', (socket) => {
    console.log('a user connected')
    socket.name = '';

    socket.on('newUser', (user) => {
        socket.name = user.name;
        console.log('Nuevo usuario: ' + user.name)

        users.push(user)

        socket.emit('users', users)
        socket.broadcast.emit('users', users)
    })

    socket.on('newMessage', (message) => {
        console.log('Nuevo mensaje: ' + message.text)
        messages.push(message)

        socket.emit('messages', messages)
        socket.broadcast.emit('messages', messages)
    })

    socket.on('throwUsers', () => {
        socket.emit('users', users)
    })

    socket.on('throwMessages', () => {
        socket.emit('messages', messages)
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
