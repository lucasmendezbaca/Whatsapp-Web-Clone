function Message({ message, currentUser }) {

    return (
        <p className={`chatMessage ${currentUser.name === message.sender ? 'my-chat' : 'frnd-chat'}`}>
            <span>{message.text}</span>
            <span className="chat__msg-filler"> </span>
            <span className="msg-footer">
                <span>08:11 AM</span>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 15" width="16" height="15" aria-label="read" className="chat-icon--blue">
                    <path fill="currentColor" d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                    </path>
                </svg>
            </span>
            <button aria-label="Message options" className="chat__msg-options"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20" className="chat__msg-options-icon">
                    <path fill="currentColor" d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                    </path>
                </svg>
            </button>
        </p>
    )
}

export default Message;