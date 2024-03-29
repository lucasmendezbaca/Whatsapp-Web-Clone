import './ChatDetail.css';
import Message from './Message/Message';
import { newMessage } from '../../../Services/BackendService';
import { useState, useEffect } from "react";
import { serverUrl, socket, throwMessages, isTyping } from "../../../Services/BackendService";

function ChatDetail({ selectedChat, currentUser }) {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        throwMessages()
        console.log('ChatDetail')
        socket.on('messages', (messages) => {
            console.log(messages)
            setMessages(messages)
        })

        return () => {
            socket.off('messages')
        }
    }, [])

    useEffect(() => {
        const chatBox = document.querySelector('.chatBox');
        chatBox.scrollTop = chatBox.scrollHeight;
    }, [messages])

    const handleSubmit = (e) => {
        const message = {
            text: e.target.value,
            sender: currentUser.name,
            receiver: selectedChat.name,
            date: new Date(),
        };

        console.log(message)

        newMessage(message);
        e.target.value = '';
    };

    function handleKeyPress(e) {
        if (e.key === 'Enter') {
            handleSubmit(e);
        }

        isTyping(currentUser.name)
    }

    return (
        <div className="Right-Container" id="right">
            <div className="rightSide" id="rightSide">
                <div className="header">
                    <div className="imgText" role="button">
                        <div className="userImg">
                            <img src={`${serverUrl}images/${selectedChat.image}`} alt="" className="cover" />
                        </div>
                        <h4 title="Shayan" aria-label="Shayan">{selectedChat.name}<br /><span aria-label="online">online</span></h4>
                    </div>

                    <div className="chat-side">
                        <button className="icons pP">
                            <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                <path fill="currentColor" d="M15.9 14.3H15l-.3-.3c1-1.1 1.6-2.7 1.6-4.3 0-3.7-3-6.7-6.7-6.7S3 6 3 9.7s3 6.7 6.7 6.7c1.6 0 3.2-.6 4.3-1.6l.3.3v.8l5.1 5.1 1.5-1.5-5-5.2zm-6.2 0c-2.6 0-4.6-2.1-4.6-4.6s2.1-4.6 4.6-4.6 4.6 2.1 4.6 4.6-2 4.6-4.6 4.6z">
                                </path>
                            </svg>
                        </button>

                        <div className="dropdown-icon">
                            <button className="pressed icons pP" id="dropDown">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
                                    </path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div className="chatBox">
                        <p className="chat__encryption-msg">
                            <svg width="10px" height="12px" viewBox="0 0 10 12" version="1.1" xmlns="http://www.w3.org/2000/svg" className="chat__encryption-icon">
                                <path d="M5.00847986,1.6 C6.38255462,1.6 7.50937014,2.67435859 7.5940156,4.02703389 L7.59911976,4.1906399 L7.599,5.462 L7.75719976,5.46214385 C8.34167974,5.46214385 8.81591972,5.94158383 8.81591972,6.53126381 L8.81591972,9.8834238 C8.81591972,10.4731038 8.34167974,10.9525438 7.75719976,10.9525438 L2.25767996,10.9525438 C1.67527998,10.9525438 1.2,10.4731038 1.2,9.8834238 L1.2,6.53126381 C1.2,5.94158383 1.67423998,5.46214385 2.25767996,5.46214385 L2.416,5.462 L2.41679995,4.1906399 C2.41679995,2.81636129 3.49135449,1.68973395 4.84478101,1.60510326 L5.00847986,1.6 Z M5.00847986,2.84799995 C4.31163824,2.84799995 3.73624912,3.38200845 3.6709675,4.06160439 L3.6647999,4.1906399 L3.663,5.462 L6.35,5.462 L6.35111981,4.1906399 C6.35111981,3.53817142 5.88169076,2.99180999 5.26310845,2.87228506 L5.13749818,2.85416626 L5.00847986,2.84799995 Z" fill="currentColor"></path>
                            </svg>
                            Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp, can
                            read or listen to them. Click to learn more.
                        </p>

                        {
                            messages.map((message, index) => {
                                if(message.sender) {
                                    return <Message key={index} message={message} currentUser={currentUser} />
                                } else {
                                    return <div key={index} className="chat__date-wrapper"><span className="chat__date">{message.text}</span></div>
                                }
                            })
                        }

                </div>

                <div className="chat-footer">
                    <div className="emojis__wrapper" id="emoji-wrap">
                        <div className="emojis__tabs">
                            <div className="emojis__tab emojis__tab--active">
                                <button aria-label="Recent emojis">
                                    <svg width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="emojis__tab-icon">
                                        <path d="M20.538 11.975a8.563 8.563 0 1 0-17.126 0 8.563 8.563 0 0 0 17.126 0zm1.412 0c0 5.509-4.466 9.975-9.975 9.975C6.465 21.95 2 17.484 2 11.975 2 6.465 6.466 2 11.975 2c5.509 0 9.975 4.466 9.975 9.975zm-9.832-5.27v5.692l4.386 2.627a.706.706 0 1 1-.725 1.212l-5.073-3.04v-6.49a.706.706 0 1 1 1.412 0z" fill="currentColor">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="People emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M12 22.1C6.4 22.1 1.9 17.6 1.9 12S6.4 1.9 12 1.9 22.1 6.4 22.1 12 17.6 22.1 12 22.1zm0-18.6c-4.7 0-8.5 3.8-8.5 8.5s3.8 8.5 8.5 8.5 8.5-3.8 8.5-8.5-3.8-8.5-8.5-8.5z">
                                        </path>
                                        <path fill="currentColor" d="M8.9 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5zM17.1 13.6c-1.1.1-3 .4-5 .4s-4-.3-5-.4c-.4 0-.6.3-.4.7 1.1 2 3.1 3.5 5.5 3.5 2.3 0 4.4-1.5 5.5-3.5.1-.3-.2-.7-.6-.7zM12.3 16c-2.6 0-4.1-1-4.2-1.6 0 0 4.4.9 8 0 0 0-.5 1.6-3.8 1.6zM15.1 11.6c.7 0 1.3-.7 1.3-1.5s-.6-1.5-1.3-1.5-1.3.7-1.3 1.5.6 1.5 1.3 1.5z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Nature emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M7.2 12.2c.608 0 1.1.627 1.1 1.4S7.808 15 7.2 15s-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm9.7 0c.608 0 1.1.627 1.1 1.4s-.492 1.4-1.1 1.4-1.1-.627-1.1-1.4.492-1.4 1.1-1.4zm4.6-1.1l-1.2-2.4c.9-.4 1.7-1.3 2-2.2.3-.7.4-2.1-1-3.5-1-.9-2-1.2-2.9-1-1.1.3-1.9 1.2-2.3 1.9-1.4-.7-2.9-.8-4.1-.8-1.5 0-2.8.3-4 .9-.5-.9-1.2-1.8-2.3-2.1-1-.2-2 .1-2.9 1-1 1-1.4 2.2-1 3.4.4 1.1 1.2 1.9 2 2.3-.2.5-.4 1-.6 1.6l-.2.2c-.3.7-.5 1.3-.8 1.9-.4 1-.9 1.9-.9 3.1 0 1.6.8 6.7 10.5 6.7 3.8 0 6.6-.7 8.5-2.2s2.2-3.4 2.2-4.3c.2-2.1-.2-2.9-1-4.5zm-2.7-7.6c.4-.1.9.1 1.5.6.6.6.8 1.2.6 1.8-.2.6-.7 1.1-1.2 1.3-.6-1.2-1.3-2-2.1-2.6.2-.4.6-1 1.2-1.1zM3.3 5.9c-.2-.6 0-1.2.6-1.8.5-.5 1.1-.7 1.5-.6.5.1 1.1.7 1.3 1.2-.9.7-1.6 1.5-2.2 2.6C4 7 3.4 6.5 3.3 5.9zm17.8 9.7c0 .7-.2 2-1.6 3.1-1.5 1.2-4.1 1.8-7.5 1.8-8.3 0-8.9-3.9-8.9-5.1 0-.8.3-1.5.7-2.4.3-.6.6-1.2.8-2.1l.1-.2c.5-1.5 2-6.2 7.3-6.2 1.2 0 2.5.2 3.7.9.1.1.5.3.5.3.9.7 1.7 1.7 2.4 3.2.6 1.3 1 2.2 1.4 2.9.8 1.6 1.1 2.1 1.1 3.8zM14.6 17c-.1.1-.6.4-1.2.3-.4-.1-.7-.3-.9-.8 0-.1-.1-.1-.1-.2.8-.1 1.3-.6 1.3-1.3s-.7 0-1.7 0c-.9 0-1.7-.7-1.7 0 0 .6.6 1.2 1.4 1.3l-.1.1c-.3.4-.5.7-.9.8-.5.1-1.1-.1-1.3-.3-.2-.2-.5-.1-.7.1s-.1.5.1.7c.1.1.8.5 1.6.5.2 0 .4 0 .5-.1.4-.1.8-.3 1.1-.7.4.4.9.6 1.2.7.8.2 1.7-.2 2-.5.2-.2.2-.5 0-.7-.1 0-.4-.1-.6.1z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Food emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M7.4 11.4c-.4 0-.8.4-.8.8V14c0 .4.4.8.8.8s.8-.4.6-.8v-1.8c0-.6-.2-.8-.6-.8zM4.6 10.4c-.4 0-.8.4-.8.8V15c0 .4.4.8.8.8s.8-.4.8-.8v-3.8c0-.6-.4-.8-.8-.8z">
                                        </path>
                                        <path fill="currentColor" d="M23 7.2c-.6-.6-1.6-.8-2.8-.6-.2 0-.4.2-.6.2V4.2c0-.6-.6-1.2-1.2-1.2h-17C.8 3 .2 3.6.2 4.2v7.4c0 5.4 3.2 9.6 8.4 9.6h2.2c4.2 0 7-2.6 8-6h.4c2.2-.4 4-2.6 4.4-4.8.4-1.4.2-2.4-.6-3.2zm-4.8-2.8v3H1.6v-3h16.6zM11 19.8H8.8c-5.2 0-7-4.4-7-8.2V8.8h16.6v2.8c-.2 4-2.4 8.2-7.4 8.2zm8.4-6.2c.2-.6.2-1.4.2-2V8.4c.4-.2.6-.4 1-.4.6-.2 1.2 0 1.4.4.4.4.6 1 .4 1.8-.2 1.4-1.6 3-3 3.4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Activity emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M14.8 15.3l1.3-3.8c.1-.2 0-.5-.2-.6l-3.3-2.4c-.2-.1-.5-.1-.6 0l-3.3 2.4c-.2.1-.3.4-.2.6l1.3 3.8c.1.2.3.4.5.4h4c.2 0 .4-.2.5-.4z">
                                        </path>
                                        <path fill="currentColor" d="M12 1.9C6.4 1.9 1.9 6.4 1.9 12S6.4 22.1 12 22.1 22.1 17.6 22.1 12 17.6 1.9 12 1.9zM9.8 20.3c.1-.2.1-.4 0-.6l-1.4-2.3c-.1-.1-.2-.2-.4-.3l-2.5-.6c-.2-.1-.5.1-.6.2-.9-1.3-1.4-2.9-1.5-4.5.2 0 .4 0 .5-.2l1.7-2c.1 0 .2-.2.2-.3l-.3-2.6c0-.2-.1-.3-.3-.4C6.2 5.4 7.5 4.5 9 4c0 .1.2.3.3.3l2.5 1.1c.1.1.3.1.4 0l2.5-1.1.3-.3c1.5.6 2.7 1.5 3.7 2.7-.1.1-.2.2-.2.4l-.2 2.6c0 .2 0 .3.1.4l1.7 2c.1.1.3.2.4.2 0 1.6-.5 3.1-1.3 4.4-.1-.1-.2-.1-.4-.1l-2.5.6c-.1 0-.3.1-.4.3l-1.4 2.3c-.1.2-.1.3 0 .5-.8.2-1.6.4-2.5.4-.7-.1-1.5-.2-2.2-.4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Travel emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M21.5 11.5c0-.7-.1-1.4-.3-2l-1.5-4.3C19.2 3.9 18 3 16.6 3H7.3c-1.4 0-2.6.9-3.1 2.2L2.6 9.9c-.1.4-.2.7-.2 1.1v8.6c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-1.1h12.7v1.1c0 .6.5 1.1 1.1 1.1h1.1c.6 0 1.1-.5 1.1-1.1v-7.4l-.2-.7zM4.1 10.4l1.6-4.7c.2-.7.9-1.2 1.7-1.2h9.2c.7 0 1.4.5 1.6 1.2l1.5 4.3c.1.3.2.6.2.8H4c-.1-.1 0-.3.1-.4zm1.4 5.7c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5c-.1.8-.7 1.5-1.5 1.5zm9.4-.6H9.3c-.5 0-1-.4-1-1 0-.5.4-1 1-1h5.6c.5 0 1 .4 1 1-.1.6-.5 1-1 1zm3.7.6c-.8 0-1.5-.7-1.5-1.5s.7-1.5 1.5-1.5 1.5.7 1.5 1.5-.7 1.5-1.5 1.5z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Object emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M18.8 6.7c-.9-2.6-3.2-4.6-6-4.9h-1.6c-2.8.3-5.1 2.2-6 4.9-1 3 .1 6.2 2.7 8H8c.2.1.3.4.3.6v2c0 .8.6 1.4 1.4 1.4h4.6c.8 0 1.4-.6 1.4-1.4v-2c0-.2.1-.5.3-.6l.1-.1c2.5-1.8 3.6-5 2.7-7.9zm-3.5 6.9l-.1.1c-.5.4-.9 1-.9 1.7v2s0 .1-.1.1H9.8s-.1 0-.1-.1v-2c0-.7-.3-1.3-.9-1.7l-.1-.1c-2-1.4-3-4-2.2-6.5.7-2.1 2.6-3.7 4.9-3.9H12.7c2.2.2 4.2 1.8 4.9 3.9.7 2.4-.2 5-2.3 6.5zM9.2 21.2c0 .6.5 1 1 1h3.7c.6 0 1-.5 1-1v-1H9.2v1z">
                                        </path>
                                        <path fill="currentColor" d="M13.6 10.5c-.4 0-.8.3-.8.8 0 .1 0 .2.1.3-.2.3-.5.5-.8.5s-.6-.2-.8-.5c0-.1.1-.2.1-.3 0-.4-.3-.8-.8-.8-.4 0-.8.3-.8.8 0 .4.3.7.7.8.3.4.7.7 1.1.8V15c0 .2.2.4.4.4s.4-.2.4-.4v-2.1c.4-.1.8-.4 1.1-.8.4 0 .8-.3.8-.8s-.3-.8-.7-.8z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Symbol emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M14.5 12.9V11h2.2l-.2-1.3h-2V7.3H13v2.5h-2V7.4H9.5v2.4H7.2l.2 1.2h2.1v1.9H7.3l.2 1.3h2v2.4H11v-2.4h2v2.4h1.5v-2.4h2.3l-.2-1.3h-2.1zM11 11h2v1.9h-2V11z">
                                        </path>
                                        <path fill="currentColor" d="M16.1 2.6H7.9C5 2.6 2.6 5 2.6 7.9V16c0 3 2.4 5.3 5.3 5.3H16c3 0 5.3-2.4 5.3-5.3V7.9c.1-2.9-2.3-5.3-5.2-5.3zm3.7 13.5c0 2.1-1.6 3.8-3.7 3.8H7.9c-2.1 0-3.8-1.7-3.8-3.8V7.9c0-2.1 1.7-3.8 3.8-3.8H16c2.1 0 3.8 1.7 3.8 3.8v8.2z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                            <div className="emojis__tab ">
                                <button aria-label="Flag emojis">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="emojis__tab-icon">
                                        <path fill="currentColor" d="M5.5 3.8v-.2c0-.3-.2-.5-.5-.5h-.5c-.3 0-.5.2-.5.5V21c0 .3.2.5.5.5H5c.3 0 .5-.2.5-.5v-6.2c5 1.8 9.3-2.7 14.5.6V4.1C14.9 1 10.3 5.6 5.5 3.8zm10.3 8.8c-1.4 0-2.8.3-4.1.6-1.2.3-2.4.5-3.5.5-.9 0-1.8-.2-2.6-.5V5.4c.8.2 1.5.3 2.3.3 1.5 0 2.9-.4 4.3-.7 1.3-.3 2.5-.6 3.8-.6.9 0 1.7.2 2.5.5V13c-.9-.2-1.8-.4-2.7-.4z">
                                        </path>
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="chat-input-wrapper">

                        <button aria-label="Close emojis" className="icons hidden" id="emoji-remove-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="chat__input-icon">
                                <path fill="currentColor" d="M19.1 17.2l-5.3-5.3 5.3-5.3-1.8-1.8-5.3 5.4-5.3-5.3-1.8 1.7 5.3 5.3-5.3 5.3L6.7 19l5.3-5.3 5.3 5.3 1.8-1.8z">
                                </path>
                            </svg>
                        </button>

                        <button role="button" className="icons" id="emoji-icon">
                            <span className="">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor" d="M9.153 11.603c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962zm-3.204 1.362c-.026-.307-.131 5.218 6.063 5.551 6.066-.25 6.066-5.551 6.066-5.551-6.078 1.416-12.129 0-12.129 0zm11.363 1.108s-.669 1.959-5.051 1.959c-3.505 0-5.388-1.164-5.607-1.959 0 0 5.912 1.055 10.658 0zM11.804 1.011C5.609 1.011.978 6.033.978 12.228s4.826 10.761 11.021 10.761S23.02 18.423 23.02 12.228c.001-6.195-5.021-11.217-11.216-11.217zM12 21.354c-5.273 0-9.381-3.886-9.381-9.159s3.942-9.548 9.215-9.548 9.548 4.275 9.548 9.548c-.001 5.272-4.109 9.159-9.382 9.159zm3.108-9.751c.795 0 1.439-.879 1.439-1.962s-.644-1.962-1.439-1.962-1.439.879-1.439 1.962.644 1.962 1.439 1.962z">
                                    </path>
                                </svg>
                            </span>
                        </button>

                        <button aria-label="Choose GIF" className="icons hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="chat__input-icon">
                                <path fill="currentColor" d="M13.177 12.013l-.001-.125v-.541-.512c0-.464 0-.827-.002-1.178a.723.723 0 0 0-.557-.7.715.715 0 0 0-.826.4c-.05.115-.072.253-.073.403-.003 1.065-.003 1.917-.002 3.834v.653c0 .074.003.136.009.195a.72.72 0 0 0 .57.619c.477.091.878-.242.881-.734.002-.454.003-.817.002-1.633l-.001-.681zm-3.21-.536a35.751 35.751 0 0 0-1.651-.003c-.263.005-.498.215-.565.48a.622.622 0 0 0 .276.7.833.833 0 0 0 .372.104c.179.007.32.008.649.005l.137-.001v.102c-.001.28-.001.396.003.546.001.044-.006.055-.047.081-.242.15-.518.235-.857.275-.767.091-1.466-.311-1.745-1.006a2.083 2.083 0 0 1-.117-1.08 1.64 1.64 0 0 1 1.847-1.41c.319.044.616.169.917.376.196.135.401.184.615.131a.692.692 0 0 0 .541-.562c.063-.315-.057-.579-.331-.766-.789-.542-1.701-.694-2.684-.482-2.009.433-2.978 2.537-2.173 4.378.483 1.105 1.389 1.685 2.658 1.771.803.054 1.561-.143 2.279-.579.318-.193.498-.461.508-.803.014-.52.015-1.046.001-1.578-.009-.362-.29-.669-.633-.679zM18 4.25H6A4.75 4.75 0 0 0 1.25 9v6A4.75 4.75 0 0 0 6 19.75h12A4.75 4.75 0 0 0 22.75 15V9A4.75 4.75 0 0 0 18 4.25zM21.25 15A3.25 3.25 0 0 1 18 18.25H6A3.25 3.25 0 0 1 2.75 15V9A3.25 3.25 0 0 1 6 5.75h12A3.25 3.25 0 0 1 21.25 9v6zm-2.869-6.018H15.3c-.544 0-.837.294-.837.839V14.309c0 .293.124.525.368.669.496.292 1.076-.059 1.086-.651.005-.285.006-.532.004-1.013v-.045l-.001-.46v-.052h1.096l1.053-.001a.667.667 0 0 0 .655-.478c.09-.298-.012-.607-.271-.757a.985.985 0 0 0-.468-.122 82.064 82.064 0 0 0-1.436-.006h-.05l-.523.001h-.047v-1.051h1.267l1.22-.001c.458-.001.768-.353.702-.799-.053-.338-.35-.56-.737-.561z">
                                </path>
                            </svg>
                        </button>

                        <button aria-label="Choose sticker" className="icons hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" className="chat__input-icon">
                                <path fill="currentColor" d="M21.799 10.183c-.002-.184-.003-.373-.008-.548-.02-.768-.065-1.348-.173-1.939a6.6 6.6 0 0 0-.624-1.87 6.24 6.24 0 0 0-1.171-1.594 6.301 6.301 0 0 0-1.614-1.159 6.722 6.722 0 0 0-1.887-.615c-.59-.106-1.174-.15-1.961-.171-.318-.008-3.607-.012-4.631 0-.798.02-1.383.064-1.975.17a6.783 6.783 0 0 0-1.888.616 6.326 6.326 0 0 0-2.785 2.753 6.658 6.658 0 0 0-.623 1.868c-.107.591-.152 1.186-.173 1.941-.008.277-.016 2.882-.016 2.882 0 .52.008 1.647.016 1.925.02.755.066 1.349.172 1.938.126.687.33 1.3.624 1.871.303.59.698 1.126 1.173 1.595a6.318 6.318 0 0 0 1.614 1.159 6.786 6.786 0 0 0 2.146.656c.479.068.833.087 1.633.108.035.001 2.118-.024 2.578-.035a6.873 6.873 0 0 0 4.487-1.811 210.877 210.877 0 0 0 2.928-2.737 6.857 6.857 0 0 0 2.097-4.528l.066-1.052.001-.668c.001-.023-.005-.738-.006-.755zm-3.195 5.92c-.79.757-1.784 1.684-2.906 2.716a5.356 5.356 0 0 1-2.044 1.154c.051-.143.116-.276.145-.433.042-.234.06-.461.067-.74.003-.105.009-.789.009-.789.013-.483.042-.865.107-1.22.069-.379.179-.709.336-1.016.16-.311.369-.595.621-.844.254-.252.542-.458.859-.617.314-.158.65-.268 1.037-.337a8.127 8.127 0 0 1 1.253-.106s.383.001.701-.003a4.91 4.91 0 0 0 .755-.066c.186-.034.348-.105.515-.169a5.35 5.35 0 0 1-1.455 2.47zm1.663-4.757a1.128 1.128 0 0 1-.615.859 1.304 1.304 0 0 1-.371.119 3.502 3.502 0 0 1-.52.043c-.309.004-.687.004-.687.004-.613.016-1.053.049-1.502.129a5.21 5.21 0 0 0-1.447.473 4.86 4.86 0 0 0-2.141 2.115 5.088 5.088 0 0 0-.479 1.434 9.376 9.376 0 0 0-.131 1.461s-.006.684-.008.777c-.006.208-.018.37-.043.511a1.154 1.154 0 0 1-.626.86c-.072.036-.168.063-.37.098-.027.005-.25.027-.448.031-.021 0-1.157.01-1.192.009-.742-.019-1.263-.046-1.668-.126a5.27 5.27 0 0 1-1.477-.479 4.823 4.823 0 0 1-2.127-2.1 5.141 5.141 0 0 1-.482-1.453c-.09-.495-.13-1.025-.149-1.71a36.545 36.545 0 0 1-.012-.847c-.003-.292.005-3.614.012-3.879.02-.685.061-1.214.151-1.712a5.12 5.12 0 0 1 .481-1.45c.231-.449.53-.856.892-1.213.363-.36.777-.657 1.233-.886a5.26 5.26 0 0 1 1.477-.479c.503-.09 1.022-.129 1.74-.149a342.03 342.03 0 0 1 4.561 0c.717.019 1.236.058 1.737.148a5.263 5.263 0 0 1 1.476.478 4.835 4.835 0 0 1 2.126 2.098c.228.441.385.913.482 1.453.091.499.131 1.013.15 1.712.008.271.014 1.098.014 1.235a2.935 2.935 0 0 1-.037.436z">
                                </path>
                            </svg>
                        </button>

                        <div className="chat-attach">
                            <button role="button" className="icons Marg" id="chat-popup">
                                <span className="">
                                    <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                        <path fill="currentColor" d="M1.816 15.556v.002c0 1.502.584 2.912 1.646 3.972s2.472 1.647 3.974 1.647a5.58 5.58 0 0 0 3.972-1.645l9.547-9.548c.769-.768 1.147-1.767 1.058-2.817-.079-.968-.548-1.927-1.319-2.698-1.594-1.592-4.068-1.711-5.517-.262l-7.916 7.915c-.881.881-.792 2.25.214 3.261.959.958 2.423 1.053 3.263.215l5.511-5.512c.28-.28.267-.722.053-.936l-.244-.244c-.191-.191-.567-.349-.957.04l-5.506 5.506c-.18.18-.635.127-.976-.214-.098-.097-.576-.613-.213-.973l7.915-7.917c.818-.817 2.267-.699 3.23.262.5.501.802 1.1.849 1.685.051.573-.156 1.111-.589 1.543l-9.547 9.549a3.97 3.97 0 0 1-2.829 1.171 3.975 3.975 0 0 1-2.83-1.173 3.973 3.973 0 0 1-1.172-2.828c0-1.071.415-2.076 1.172-2.83l7.209-7.211c.157-.157.264-.579.028-.814L11.5 4.36a.572.572 0 0 0-.834.018l-7.205 7.207a5.577 5.577 0 0 0-1.645 3.971z">
                                        </path>
                                    </svg>
                                </span>
                            </button>

                            <div className="popup" id="popup">
                                <button aria-label="Contact" title="Contact" className="popopIcons" role="button">
                                    <span className="">
                                        <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                            <defs>
                                                <circle id="contact-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                            </defs>
                                            <clipPath id="contact-SVGID_2_">
                                                {/* <use xlink:href="#contact-SVGID_1_" overflow="visible"></use> */}
                                            </clipPath>
                                            <g clipPath="url(#contact-SVGID_2_)">
                                                <path fill="#0795DC" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z">
                                                </path>
                                                <path fill="#0EABF4" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z">
                                                </path>
                                            </g>
                                            <g fill="#F5F5F5">
                                                <path id="svg-contact" d="M26.5 26.5A4.5 4.5 0 0 0 31 22a4.5 4.5 0 0 0-4.5-4.5A4.5 4.5 0 0 0 22 22a4.5 4.5 0 0 0 4.5 4.5Zm0 2.25c-3.004 0-9 1.508-9 4.5v1.125c0 .619.506 1.125 1.125 1.125h15.75c.619 0 1.125-.506 1.125-1.125V33.25c0-2.992-5.996-4.5-9-4.5Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                </button>

                                <button aria-label="Document" title="Document" className="popopIcons" role="button">
                                    <span className="">
                                        <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                            <defs>
                                                <circle id="document-SVGID_1_" cx="26.5" cy="26.5" r="25.5">
                                                </circle>
                                            </defs>
                                            <clipPath id="document-SVGID_2_">
                                                {/* <use xlink:href="#document-SVGID_1_" overflow="visible"></use> */}
                                            </clipPath>
                                            <g clipPath="url(#document-SVGID_2_)">
                                                <path fill="#5157AE" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z">
                                                </path>
                                                <path fill="#5F66CD" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z">
                                                </path>
                                            </g>
                                            <g fill="#F5F5F5">
                                                <path id="svg-document" d="M29.09 17.09c-.38-.38-.89-.59-1.42-.59H20.5c-1.1 0-2 .9-2 2v16c0 1.1.89 2 1.99 2H32.5c1.1 0 2-.9 2-2V23.33c0-.53-.21-1.04-.59-1.41l-4.82-4.83zM27.5 22.5V18l5.5 5.5h-4.5c-.55 0-1-.45-1-1z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    {/* <input accept="*" type="file" multiple="" style="display: none;" /> */}
                                </button>

                                <button aria-label="Camera" title="Camera" className="popopIcons" role="button">
                                    <span className="">
                                        <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                            <defs>
                                                <circle id="camera-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                            </defs>
                                            <clipPath id="camera-SVGID_2_">
                                                {/* <use xlink:href="#camera-SVGID_1_" overflow="visible"></use> */}
                                            </clipPath>
                                            <g clipPath="url(#camera-SVGID_2_)">
                                                <path fill="#D3396D" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z">
                                                </path>
                                                <path fill="#EC407A" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z">
                                                </path>
                                                <path fill="#D3396D" d="M17 24.5h15v9H17z"></path>
                                            </g>
                                            <g fill="#F5F5F5">
                                                <path id="svg-camera" d="M27.795 17a3 3 0 0 1 2.405 1.206l.3.403a3 3 0 0 0 2.405 1.206H34.2a2.8 2.8 0 0 1 2.8 2.8V32a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4v-9.385a2.8 2.8 0 0 1 2.8-2.8h1.295a3 3 0 0 0 2.405-1.206l.3-.403A3 3 0 0 1 25.205 17h2.59ZM26.5 22.25a5.25 5.25 0 1 0 .001 10.501A5.25 5.25 0 0 0 26.5 22.25Zm0 1.75a3.5 3.5 0 1 1 0 7 3.5 3.5 0 0 1 0-7Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                </button>

                                <button aria-label="Sticker" title="Sticker" className="popopIcons" role="button">
                                    <span className="">
                                        <svg width="53" height="53" viewBox="0 0 53 53" fill="none" className="">
                                            <g clipPath="url(#clip0_850:74884)">
                                                <circle cx="26.5" cy="26.5" r="26.5" fill="#0063CB"></circle>
                                                <path d="M53 26.5C53 41.136 41.136 53 26.5 53S0 41.136 0 26.5h53Z" fill="#0070E6"></path>
                                                <path fillRule="evenodd" clipRule="evenodd" d="M36.002 22.17v4.32c-.24.321-.624.53-1.056.53H33.14a6.12 6.12 0 0 0-6.12 6.12v1.804c0 .434-.209.818-.532 1.058H22.17a5.17 5.17 0 0 1-5.17-5.17V22.17A5.17 5.17 0 0 1 22.17 17h8.662a5.17 5.17 0 0 1 5.17 5.17Zm-5.48 3.33.937-2.063 2.063-.937-2.063-.938-.937-2.062-.938 2.063-2.062.937 2.062.938.938 2.062Zm-7.022-3 1.406 3.094L28 27l-3.094 1.406L23.5 31.5l-1.406-3.094L19 27l3.094-1.406L23.5 22.5Z" fill="#F7F7F7"></path>
                                                <path d="M34.946 28.52c.352 0 .69-.065 1-.183a3.87 3.87 0 0 1-1.078 2.088l-4.443 4.443a3.87 3.87 0 0 1-2.087 1.079 2.81 2.81 0 0 0 .184-1.003V33.14a4.62 4.62 0 0 1 4.62-4.62h1.804Z" fill="#F7F7F7"></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_850:74884">
                                                    <path fill="#fff" d="M0 0h53v53H0z"></path>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </span>
                                    {/* <input accept="image/*" type="file" style="display: none;" /> */}
                                </button>

                                <button aria-label="Photos &amp; Videos" title="Photos &amp; Videos" className="popopIcons" role="button">
                                    <span className="">
                                        <svg viewBox="0 0 53 53" width="53" height="53" className="">
                                            <defs>
                                                <circle id="image-SVGID_1_" cx="26.5" cy="26.5" r="25.5"></circle>
                                            </defs>
                                            <clipPath id="image-SVGID_2_">
                                                {/* <use xlink:href="#image-SVGID_1_" overflow="visible"></use> */}
                                            </clipPath>
                                            <g clipPath="url(#image-SVGID_2_)">
                                                <path fill="#AC44CF" d="M26.5-1.1C11.9-1.1-1.1 5.6-1.1 27.6h55.2c-.1-19-13-28.7-27.6-28.7z">
                                                </path>
                                                <path fill="#BF59CF" d="M53 26.5H-1.1c0 14.6 13 27.6 27.6 27.6s27.6-13 27.6-27.6H53z">
                                                </path>
                                                <path fill="#AC44CF" d="M17 24.5h18v9H17z"></path>
                                            </g>
                                            <g fill="#F5F5F5">
                                                <path id="svg-image" d="M18.318 18.25h16.364c.863 0 1.727.827 1.811 1.696l.007.137v12.834c0 .871-.82 1.741-1.682 1.826l-.136.007H18.318a1.83 1.83 0 0 1-1.812-1.684l-.006-.149V20.083c0-.87.82-1.741 1.682-1.826l.136-.007h16.364Zm5.081 8.22-3.781 5.044c-.269.355-.052.736.39.736h12.955c.442-.011.701-.402.421-.758l-2.682-3.449a.54.54 0 0 0-.841-.011l-2.262 2.727-3.339-4.3a.54.54 0 0 0-.861.011Zm8.351-5.22a1.75 1.75 0 1 0 .001 3.501 1.75 1.75 0 0 0-.001-3.501Z">
                                                </path>
                                            </g>
                                        </svg>
                                    </span>
                                    {/* <input accept="image/*,video/mp4,video/3gpp,video/quicktime" type="file" multiple="" style="display: none;" /> */}
                                </button>
                            </div>
                        </div>

                        <input onKeyUp={handleKeyPress} id='message-input' type="text" placeholder="Type a message" className="send-message" />

                        <button role="button" className="icons">
                            <span className="">
                                <svg viewBox="0 0 24 24" width="24" height="24" className="">
                                    <path fill="currentColor" d="M11.999 14.942c2.001 0 3.531-1.53 3.531-3.531V4.35c0-2.001-1.53-3.531-3.531-3.531S8.469 2.35 8.469 4.35v7.061c0 2.001 1.53 3.531 3.53 3.531zm6.238-3.53c0 3.531-2.942 6.002-6.237 6.002s-6.237-2.471-6.237-6.002H3.761c0 4.001 3.178 7.297 7.061 7.885v3.884h2.354v-3.884c3.884-.588 7.061-3.884 7.061-7.885h-2z">
                                    </path>
                                </svg>
                            </span>
                        </button>
                    </div>


                </div>
            </div>

            <div className="modal fade" id="mute-modal" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <h5 className="m-title">Mute "Shayan" for...</h5>
                        <ul>
                            <li>
                                <div className="m-list">
                                    <label className="form-check-label" htmlFor="8-hours">
                                        <input className="form-check-input" type="radio" name="groupsRadios" value="" id="8-hours" />
                                        <h4>8 Hours</h4>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="m-list">
                                    <label className="form-check-label" htmlFor="week">
                                        <input className="form-check-input" type="radio" name="groupsRadios" value="" id="week" />
                                        <h4>1 Week</h4>
                                    </label>
                                </div>
                            </li>
                            <li>
                                <div className="m-list">
                                    <label className="form-check-label" htmlFor="always">
                                        <input className="form-check-input" type="radio" name="groupsRadios" value="" id="always" />
                                        <h4>Always</h4>
                                    </label>
                                </div>
                            </li>
                        </ul>

                        <div className="m-btn">
                            <button type="button" className="btn1" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn2" data-bs-dismiss="modal">Mute notification</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="clear-modal" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <h5 className="m-title">Clear this chat</h5>
                        <p className="modal-text">Messages will only be removed from this device and your devices on the
                            newer versions of WhatsApp.
                        </p>
                        <ul className="checkbox">
                            <li>
                                <div className="m-list">
                                    <label className="form-check-label" htmlFor="keep-starred-message">
                                        <input className="form-check-input" type="checkbox" name="groupsRadios" value="" id="keep-starred-message" />
                                        <h4>Keep Starred Message</h4>
                                    </label>
                                </div>
                            </li>
                        </ul>
                        <div className="m-btn">
                            <button type="button" className="btn1" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn2" data-bs-dismiss="modal">Clear Chat</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="modal fade" id="delete-modal" data-bs-backdrop="static" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <h5 className="m-title">Delete this chat</h5>
                        <p className="modal-text v2">Messages will only be removed from this device and your devices on the
                            newer versions of WhatsApp.
                        </p>
                        <div className="m-btn">
                            <button type="button" className="btn1" data-bs-dismiss="modal">Cancel</button>
                            <button type="button" className="btn2" data-bs-dismiss="modal">Delete Chat</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default ChatDetail;