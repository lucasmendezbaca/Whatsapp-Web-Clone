import Router from './Router';
import './App.css';
import { io } from 'socket.io-client';
import Main from './Pages/Main/Main';

const socket = io('http://localhost:3001')

function App() {
  return (
    <Router />
  );
}

export default App;
