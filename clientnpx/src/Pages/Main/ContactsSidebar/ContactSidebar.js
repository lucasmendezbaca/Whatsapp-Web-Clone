function ContactSidebar() {
    return(
        <div class="leftSide animate__animated animate__fadeInRight" id="leftSid">
            <div class="header">
                <div class="userImg">
                    <img src="images/Avatar-10.jpeg" alt="" class="cover" />
                </div>

                <ul class="dropLeft" id="dropLeft">
                    <li class="listItem" role="button" onclick="openGrp()">New group</li>
                    <li class="listItem" role="button" onclick="openStarred()">Starred messages</li>
                    <li class="listItem" role="button" onclick="openSettings()">Settings</li>
                    <li class="listItem" role="button" data-bs-toggle="modal" data-bs-target="#exampleModalSec">Log out
                    </li>
                </ul>

                <div class="ICON">
                    <img src="images/Sun-1.png" alt="" id="moon" class="icons" title="Light Mode"
                        aria-label="Light Mode" />
                    <button role="button" class="icons" onclick="openStatus()">
                        <span class="">
                            <svg version="1.1" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" class="">
                                <path fill="currentColor"
                                    d="M12.072 1.761a10.05 10.05 0 0 0-9.303 5.65.977.977 0 0 0 1.756.855 8.098 8.098 0 0 1 7.496-4.553.977.977 0 1 0 .051-1.952zM1.926 13.64a10.052 10.052 0 0 0 7.461 7.925.977.977 0 0 0 .471-1.895 8.097 8.097 0 0 1-6.012-6.386.977.977 0 0 0-1.92.356zm13.729 7.454a10.053 10.053 0 0 0 6.201-8.946.976.976 0 1 0-1.951-.081v.014a8.097 8.097 0 0 1-4.997 7.209.977.977 0 0 0 .727 1.813l.02-.009z">
                                </path>
                                <path fill="#009588" d="M19 1.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <button role="button" class="icons" onclick="openForm()">
                        <span class="">
                            <svg viewBox="0 0 24 24" width="24" height="24" class="">
                                <path fill="currentColor"
                                    d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <button role="button" class="icons" id="dropDown2">
                        <span class="">
                            <svg viewBox="0 0 24 24" width="24" height="24" class="">
                                <path fill="currentColor"
                                    d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
                                </path>
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div class="search-bar">
                <div>
                    <button class="search">
                        <span class="">
                            <svg viewBox="0 0 24 24" width="24" height="24" class="">
                                <path fill="currentColor"
                                    d="M15.009 13.805h-.636l-.22-.219a5.184 5.184 0 0 0 1.256-3.386 5.207 5.207 0 1 0-5.207 5.208 5.183 5.183 0 0 0 3.385-1.255l.221.22v.635l4.004 3.999 1.194-1.195-3.997-4.007zm-4.808 0a3.605 3.605 0 1 1 0-7.21 3.605 3.605 0 0 1 0 7.21z">
                                </path>
                            </svg>
                        </span>
                    </button>

                    <span class="go-back">
                        <svg viewBox="0 0 24 24" width="24" height="24" class="">
                            <path fill="currentColor" d="m12 4 1.4 1.4L7.8 11H20v2H7.8l5.6 5.6L12 20l-8-8 8-8z">
                            </path>
                        </svg>
                    </span>
                    <input type="text" title="Search or start new chat" aria-label="Search or start new chat"
                        placeholder="Search or start new chat" />
                </div>
            </div>

            <div class="chats">
                <div class="block chat-list" onclick="openRightSide()">
                    <div class="imgBox">
                        <img src="images/Avatar-7.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Shayan" aria-label="Shayan">Shayan</h4>
                            <p class="time">12:44 AM</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    aria-label="read" class="white-tick">
                                    <path fill="currentColor"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">ok thanks for your help i really appreciate</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/avatar-3.png" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Ashlar" aria-label="Ashlar">Ashlar</h4>
                            <p class="time">7:30 PM</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    aria-label="read" class="blue-tick">
                                    <path fill="currentColor"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">Thank you.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-1.png" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Olivia" aria-label="Olivia">Olivia</h4>
                            <p class="time">yesterday</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Hi, i found you on github</span>
                                <div class="unread">
                                    <span class="numb">1</span>
                                    <div class="icon-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19"
                                            height="20" class="hide animate__animated animate__fadeInUp">
                                            <path fill="currentColor"
                                                d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-2.png" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Amelia" aria-label="Amelia">Amelia</h4>
                            <p class="time">yesterday</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Hello...</span>
                                <div class="unread">
                                    <span class="numb">3</span>
                                    <div class="icon-more">
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19"
                                            height="20" class="hide animate__animated animate__fadeInUp">
                                            <path fill="currentColor"
                                                d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                            </path>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-5.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Raoul" aria-label="Raoul">Raoul</h4>
                            <p class="time">yesterday</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    aria-label="read" class="blue-tick">
                                    <path fill="currentColor"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">oh okay.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-16.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Joseph" aria-label="Joseph">Joseph</h4>
                            <p class="time">8/12/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    aria-label="read" class="blue-tick">
                                    <path fill="currentColor"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">we are done with the project</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-11.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Diana" aria-label="Diana">Diana</h4>
                            <p class="time">8/8/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">please wait..</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/avatar-8.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Kabir" aria-label="Kabir">Kabir</h4>
                            <p class="time">8/6/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    aria-label="read" class="white-tick">
                                    <path fill="currentColor"
                                        d="M15.01 3.316l-.478-.372a.365.365 0 0 0-.51.063L8.666 9.879a.32.32 0 0 1-.484.033l-.358-.325a.319.319 0 0 0-.484.032l-.378.483a.418.418 0 0 0 .036.541l1.32 1.266c.143.14.361.125.484-.033l6.272-8.048a.366.366 0 0 0-.064-.512zm-4.1 0l-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">Happy Birthday</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-15.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Grace" aria-label="Grace">Grace</h4>
                            <p class="time">3/4/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="tick-icon">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" width="20" height="20"
                                    class="white-tick">
                                    <path fill="currentColor"
                                        d="m10.91 3.316-.478-.372a.365.365 0 0 0-.51.063L4.566 9.879a.32.32 0 0 1-.484.033L1.891 7.769a.366.366 0 0 0-.515.006l-.423.433a.364.364 0 0 0 .006.514l3.258 3.185c.143.14.361.125.484-.033l6.272-8.048a.365.365 0 0 0-.063-.51z">
                                    </path>
                                </svg>
                            </div>

                            <div class="chat-text-icon">
                                <span class="thanks">Thank you for your help.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-10.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Adeboye" aria-label="Adeboye">Adeboye</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-12.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Danjuma" aria-label="Danjuma">Danjuma</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-13.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Mutiat" aria-label="Mutiat">Mutiat</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-14.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Mutiat" aria-label="Mutiat">Mutiat</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-17.jpeg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Alihu" aria-label="Alihu">Alihu</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/Avatar-1.png" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Shayan" aria-label="Shayan">Shayan</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/img16.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Shayan" aria-label="Shayan">Shayan</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/img17.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Shayan" aria-label="Shayan">Shayan</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="block chat-list">
                    <div class="imgBox">
                        <img src="images/img18.jpg" class="cover" />
                    </div>
                    <div class="h-text">
                        <div class="head">
                            <h4 title="Shayan" aria-label="Shayan">Shayan</h4>
                            <p class="time">29/5/2022</p>
                        </div>
                        <div class="message-chat">
                            <div class="chat-text-icon">
                                <span class="thanks">Messages are end-to-end encrypted. No one outside of this chat, not
                                    even WhatsApp, can
                                    read or listen to them. Click to learn more.</span>
                                <div class="icon-more">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20" width="19" height="20"
                                        class="hide animate__animated animate__fadeInUp">
                                        <path fill="currentColor"
                                            d="M3.8 6.7l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
                                        </path>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ContactSidebar;