import Avatar from '@material-ui/core/Avatar';
import React, { useState } from 'react'

import "./ChatScreen.css"

function ChatScreen() {
    
    const [input, setInput] = useState('');
    const [messages, setMessages] = useState([
        {
            name:"Elon",
            image:"https://images.hdqwalls.com/wallpapers/elon-musk-4k-rq.jpg",
            message:"Hey ssup tesla?"
        },
        {
            name:"Elom",
            image:"https://images.hdqwalls.com/wallpapers/elon-musk-4k-rq.jpg",
            message:"How are you?"
        },
        {
            message:"Hey ssup amazon?"
        }
    ]);
    
    const handleSend = e => {
        e.preventDefault();
        setMessages([...messages, { message: input}]);
        setInput("");
    }

    return (
            <div className="chatScreen">
                <p className="chatScreen__timestamp">You matched with Elon on 11/10/2020.</p> 
                {messages.map(message => (
                    message.name ? (
                        <div className="chatScreen__message">
                        <Avatar className="chatScreen__image" alt={message.name} src={message.image}></Avatar>
                        <p className="chatScreen__text"> 
                            {message.message}
                        </p>
                    </div>
                    ): (
                        <div className="chatScreen__message">
                        <p className="chatScreen__textUser"> 
                            {message.message}
                        </p>
                    </div>
                    )
                ))}
                <form className="chatScreen__input">
                    <input className="chatScreen_inputField"  value={input} onChange={e => setInput(e.target.value)} placeholder="Type a Message..." type="text">
                    </input>
                    <button  onClick={handleSend} className="chatScreen_inputButton" type="submit" >Send
                    </button>
                </form>
                </div>
        )
    }
    
    export default ChatScreen
    