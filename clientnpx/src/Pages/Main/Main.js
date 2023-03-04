import { useEffect, useState } from "react";
import ContactSidebar from "./ContactsSidebar/ContactSidebar";
import Chat from "./Chat/Chat";
import ChatDetail from "./ChatDetail/ChatDetail";

function Main() {
    const [selectedChat, setSelectedChat] = useState(null);

    useEffect(() => {
        console.log('Main')
    }, [selectedChat])

    return(
        <div className="container main">
            <ContactSidebar setSelectedChat={setSelectedChat} />
            {/* <Chat /> */}
            {/* si selectedChat == null que se renderice <Chat /> <ChatDetail />*/}
            {/* si selectedChat != null que se renderice <ChatDetail /> */}
            {selectedChat ? <ChatDetail selectedChat={selectedChat} /> : <Chat />}
            {/* <ChatDetail selectedChat={selectedChat} /> */}
        </div>
    )

}

export default Main;