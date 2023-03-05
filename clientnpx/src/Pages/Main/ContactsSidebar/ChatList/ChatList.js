import { serverUrl } from "../../../../Services/BackendService";

function ChatList({ user }) {

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
                    <div className="tick-icon">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                            aria-label="read" className="white-tick">
                            <path fill="currentColor"
                                d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                            </path>
                        </svg>
                    </div>

                    <div className="chat-text-icon">
                        <span className="thanks">ok thanks for your help i really appreciate</span>
                        <div className="icon-more">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                className="hide animate__animated animate__fadeInUp">
                                <path fill="currentColor"
                                    d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                </path>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )

}

export default ChatList;