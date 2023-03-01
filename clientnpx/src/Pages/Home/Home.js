import { useState } from "react";
import newUser from "../../Services/BackendService";

function Home() {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");

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
    </div>
  );
}

export default Home;