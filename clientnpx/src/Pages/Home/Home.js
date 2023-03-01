import { useState, useEffect } from "react";
import { newUser } from "../../Services/BackendService";
import { socket } from "../../Services/BackendService";

function Home() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    socket.on('users', (users) => {
      console.log(users)
      setUsers(users)
    })

    return () => {
      socket.off('users')
    }
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      name,
      status
    };

    newUser(user);
  };

  return (
    <div>
      <h1>Whatsapp Web Clone</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input onChange={e => setName(e.target.value)} type="text" id="name" /><br />
        <label htmlFor="status">Estado: </label>
        <input onChange={e => setStatus(e.target.value)} type="text" id="status" /><br />
        
        <input type="submit" value="Entrar" />
      </form>

      {
        users.map(user => (
          <div key={user.name}>
            <h3>{user.name}</h3>
            <p>{user.status}</p>
          </div>
        ))
      }
    </div>
  );
}

export default Home;