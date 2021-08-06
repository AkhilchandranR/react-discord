import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Message from './Message';

function Chat() {
    return (
        <div className="chat">
            <ChatHeader/>
            <div className="chat__messages">
                <Message/>
                <Message/>
                <Message/>
            </div>
            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large"/>
                <form>
                <input placeholder="message youtube"/>
                <button type="submit">Send Message</button>
                </form>
                <div className="chat__inputicons">
                    <CardGiftcardIcon fontSize="large"/>
                    <GifIcon fontSize="large"/>
                    <EmojiEmotionsIcon fontSize="large"/>
                </div>               
            </div>
        </div>
    )
}

export default Chat
