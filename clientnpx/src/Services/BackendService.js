import { io } from 'socket.io-client';

export const socket = io('http://localhost:3001')

export function newUser(user) {
    console.log(socket)
    socket.emit('newUser', user)
}
