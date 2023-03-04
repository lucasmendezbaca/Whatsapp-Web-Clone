import { io } from 'socket.io-client';
import axios from "axios";

export const socket = io('http://localhost:3001')

export function newUser(user) {
    console.log(socket)
    socket.emit('newUser', user)
}

export async function saveImage(image) {
    const response = await axios.post('http://localhost:3001/', image, {
      image_name: image.name,
    })

    console.log(response)
}










    // axios.post('http://localhost:3001/', image, {
    //   image_name: image.name,
    // })

// funcion asincrona para enviar la imagen al servidor
// const send_image = async (files) => {
//     const formData = new FormData();
//     formData.append('file', files)
//     setImage(formData)
//     setImgName(files.name)
//     console.log(formData)
//     const response = await axios.post('http://localhost:3001/', formData, {
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
//     console.log(response)
// }
