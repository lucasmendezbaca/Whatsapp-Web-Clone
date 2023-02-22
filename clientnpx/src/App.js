import Router from './Router';
import './App.css';
import { io } from 'socket.io-client';
import Main from './Pages/Main/Main';
import { useEffect } from 'react';

const socket = io('http://localhost:3001')

function App() {

  // useEffect(() => {
  //   socket.on('connect', () => {
  //     console.log('Connected to server')
  //   })
  //   socket.on('disconnect', () => {
  //     console.log('Disconnected from server')
  //   })
  // }, [])

  return (
    <Router />
  );
}

export default App;
