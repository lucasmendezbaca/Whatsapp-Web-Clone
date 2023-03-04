import { io } from 'socket.io-client';
import axios from "axios";

export const socket = io('http://localhost:3001')

export function newUser(user) {
    console.log(socket)
    socket.emit('newUser', user)
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
