import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import ContactSidebar from "./ContactsSidebar/ContactSidebar";
import Chat from "./Chat/Chat";
import ChatDetail from "./ChatDetail/ChatDetail";

function Main({ currentUser }) {
    const navigate = useNavigate();

    const [selectedChat, setSelectedChat] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if(!currentUser) {
            navigate('/')
        }

        console.log('Main')
        setLoading(false)
    }, [selectedChat])

    if(!loading) {
        return(
            <div className="container main">
                <ContactSidebar setSelectedChat={setSelectedChat} currentUser={currentUser} />
                {selectedChat ? <ChatDetail selectedChat={selectedChat} currentUser={currentUser} /> : <Chat />}
            </div>
        )
    } else {
        return (
            <h1>Loading...</h1>
        )
    }

}

export default Main;