import React from 'react'

import Chat from "./Chat"

import "./Chats.css"

function Chats() {
    return (
        <div className="chats">
            <Chat 
                name = "Elon Musk"
                message="yo Whats up!!!"
                timestamp="40 secs ago"
                profilePic="https://images.hdqwalls.com/wallpapers/elon-musk-4k-rq.jpg"
            >
            </Chat>
            <Chat 
                name = "Jeff Bezos" 
                message="yo Whats up!!!"
                timestamp="40 secs ago"
                profilePic="https://equalman.com/wp-content/uploads/2020/05/01-30-19-Jeff-Bezos-Super-U-Thumbnail.png"
            >   
            </Chat>
        </div>
    )
}

export default Chats
