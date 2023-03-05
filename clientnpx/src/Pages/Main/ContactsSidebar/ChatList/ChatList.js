import { serverUrl, socket } from "../../../../Services/BackendService";
import { useState, useEffect } from "react";
import './ChatList.css';

function ChatList({ user }) {

    const [isTyping, setIsTyping] = useState(false)
    const [userTyping, setUserTyping] = useState('')

    useEffect(() => {
        socket.on('isTyping', (userTyping) => {
            console.log('Escribiendo: ' + userTyping)
            setUserTyping(userTyping)
            setIsTyping(true)

            setTimeout(() => {
                setIsTyping(false)
            }, 3000)
        })

        return () => {
            socket.off('isTyping')
        }
    }, [])

    function renderIsTyping() {
        if (isTyping && user.name == userTyping) {
            return (
                <div className="typing">typing...</div>
            )
        }
    }

    return (
        <div className="block chat-list">
            <div className="imgBox">
                <img src={`${serverUrl}images/${user.image}`} className="cover" />
            </div>
            <div className="h-text">
                <div className="head">
                    <h4 title="Shayan" aria-label="Shayan">{user.name}</h4>
                    <p className="time">online</p>
                </div>
                <div className="message-chat">
                    <div className="chat-text-icon">
                        <span className="thanks">{user.status}</span>
                        <div className="icon-more">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                className="hide animate__animated animate__fadeInUp">
                                <path fill="currentColor"
                                    d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                </path>
                            </svg>
                        </div>
                    </div>

                    {
                        renderIsTyping()
                    }

                </div>
            </div>
        </div>
    )

}

export default ChatList;