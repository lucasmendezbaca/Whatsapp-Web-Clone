import { io } from 'socket.io-client';
import axios from "axios";

export const serverUrl = 'http://localhost:3001'
export const socket = io(serverUrl)

export function newUser(user) {
    socket.emit('newUser', user)
}

export function newMessage(message) {
    socket.emit('newMessage', message)
}

export function saveImage(image) {
    return new Promise((resolve, reject) => {
        axios.post('http://localhost:3001/', image, {
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
