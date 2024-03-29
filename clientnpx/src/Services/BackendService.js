import { io } from 'socket.io-client';
import axios from "axios";

// desarrollo
// export const serverUrl = 'http://localhost:3001/'
// export const socket = io(serverUrl)

// produccion
export const serverUrl = 'https://whatsapp-web-clone-35y7.onrender.com/'
export const socket = io(serverUrl, {
    path: "/socket.io/",
})


export function newUser(user) {
    socket.emit('newUser', user)
}

export function newMessage(message) {
    socket.emit('newMessage', message)
}

export function saveImage(image) {
    return new Promise((resolve, reject) => {
        axios.post(serverUrl, image, {
        image_name: image.name,
        })
        .then((response) => {
            console.log('response saveImage' + response)
            resolve(response)
        })
        .catch((error) => {
            reject(error)
        })
    })
}

export function isTyping(user) {
    socket.emit('isTyping', user)
}

export function throwUsers() {
    socket.emit('throwUsers')
}

export function throwMessages() {
    socket.emit('throwMessages')
}
