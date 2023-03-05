import ChatList from "./ChatList/ChatList";
import { serverUrl, socket } from "../../../Services/BackendService";
import { useState, useEffect } from "react";

function ContactSidebar({ setSelectedChat, currentUser }) {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        console.log('ContactSidebar')
        socket.on('users', (users) => {
            console.log(users)
            setUsers(users)
        })

        return () => {
            socket.off('users')
        }
    }, [])

    function handleChatClick(user) {
        setSelectedChat(user)
    }

    return(
        <div className="leftSide animate__animated animate__fadeInRight" id="leftSid">
            <div className="header">
                <div className="userImg">
                    <img src={`${serverUrl}/images/${currentUser.image}`} alt="" className="cover" />
                </div>

                <ul className="dropLeft" id="dropLeft">
                    <li className="listItem" role="button">New group</li>
                    <li className="listItem" role="button">Starred messages</li>
                    <li className="listItem" role="button">Settings</li>
                    <li className="listItem" role="button" data-bs-toggle="modal" data-bs-target="#exampleModalSec">Log out
                    </li>
                </ul>

                <div className="ICON">
                    <img src="images/Sun-1.png" alt="" id="moon" className="icons" title="Light Mode"
                        aria-label="Light Mode" />
                    <button role="button" className="icons">
                        <span className="">
                            <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" className="">
                                <path fill="currentColor"
                                    d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z">
                                </path>
                                <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <button role="button" className="icons">
                        <span className="">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                <path fill="currentColor"
                                    d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <button role="button" className="icons" id="dropDown2">
                        <span className="">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                <path fill="currentColor"
                                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="search-bar">
                <div>
                    <button className="search">
                        <span className="">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                <path fill="currentColor"
                                    d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <span className="go-back">
                        <svg viewBox="0 0 24 24" width="24" height="24" className="">
                            <path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z">
                            </path>
                        </svg>
                    </span>
                    <input type="text" title="Search or start new chat" aria-label="Search or start new chat"
                        placeholder="Search or start new chat" />
                </div>
            </div>

            <div className="chats">
                <div onClick={() => handleChatClick('General')}>
                    <ChatList user={{name: 'General', status: 'Chat General', image: 'anillo.jpg'}}/>
                </div>
                {
                    users.map((user, index) => {
                        return <ChatList key={index} user={user} />
                    })
                }
            </div>
        </div>
    )
}

export default ContactSidebar;