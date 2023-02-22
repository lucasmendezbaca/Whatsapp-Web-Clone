import Router from './Router';
import './App.css';
import { io } from 'socket.io-client';
import Main from './Pages/Main/Main';
import { useEffect } from 'react';

const socket = io('http://localhost:3001')

function App() {


  return (
    <>
      {/* <input type="text" id="nombre" />
      <button onClick={() => {
        socket.emit('nombre', document.getElementById('nombre').value)
      }}>Enviar</button> */}
      <Router />
    </>
  );
}

export default App;
