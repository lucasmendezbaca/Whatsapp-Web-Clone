import { useState } from "react";
import { newUser, saveImage } from "../../Services/BackendService";
import { useNavigate } from 'react-router-dom';

function Home({ setCurrentUser }) {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const [image, setImage] = useState("");
  const [imgName, setImgName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await saveImage(image)

    console.log('despues de saveImage')
    const user = {
      name: name,
      status: status,
      image: imgName,
    };

    setCurrentUser(user);

    newUser(user);
    navigate('/chats');
  };

  const send_image = (files) => {
      const formData = new FormData();
      formData.append('file', files)
      setImage(formData)
      setImgName(files.name)
      console.log(formData)
  }


  return (
    <div>
      <h1>Whatsapp Web Clone</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre: </label>
        <input onChange={e => setName(e.target.value)} type="text" id="name" /><br />
        <label htmlFor="status">Estado: </label>
        <input onChange={e => setStatus(e.target.value)} type="text" id="status" /><br />
        <label htmlFor="image">Imagen: </label>
        <input onChange={(e) => {send_image(e.target.files[0])}} type="file" id="image" /><br />
        
        <input type="submit" value="Entrar" />
      </form>
    </div>
  );
}

export default Home;