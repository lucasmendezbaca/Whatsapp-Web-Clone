import { useEffect, useState } from "react";
import ContactSidebar from "./ContactsSidebar/ContactSidebar";
import Chat from "./Chat/Chat";
import ChatDetail from "./ChatDetail/ChatDetail";

function Main({ currentUser }) {
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        console.log('Main')
    }, [selectedChat])

    return(
        <div className="container main">
            <ContactSidebar setSelectedChat={setSelectedChat} />
            {selectedChat ? <ChatDetail selectedChat={selectedChat} currentUser={currentUser} /> : <Chat />}
        </div>
    )

}

export default Main;