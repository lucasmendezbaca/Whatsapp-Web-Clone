import Router from './Router';
import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    console.log('Current User: ', currentUser)
  }, [currentUser])

  return (
    <>
      <Router setCurrentUser={setCurrentUser} currentUser={currentUser} />
    </>
  );
}

export default App;
