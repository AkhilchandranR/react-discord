import React from 'react';
import './Chat.css';
import ChatHeader from './ChatHeader';
import EmojiEmotionsIcon from '@material-ui/icons/EmojiEmotions';
import GifIcon from '@material-ui/icons/Gif';
import CardGiftcardIcon from '@material-ui/icons/CardGiftcard';
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import Message from './Message';
import { selectUser } from './features/userSlice';
import { selectChannelId, selectChannelName } from './features/appSlice';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useEffect } from 'react';
import db from './firebase';
// import firebase from 'firebase';

function Chat() {
    const user = useSelector(selectUser);
    const channelId = useSelector(selectChannelId);
    const channelName = useSelector(selectChannelName);
    const [input,setInput] = useState('');
    const [messages,setMessages] = useState([]);

    useEffect(() => {
        if(channelId){
            db.collection('channels').doc(channelId).collection('messages')
       .onSnapshot((snapshot)=>
        setMessages(snapshot.docs.map((doc)=>(
            doc.data()
        ))));
        }
       
    }, [channelId]);

    const sendMessage = e =>{
        e.preventDefault();
        db.collection('channels').doc(channelId)
        .collection('messages').add({
            message: input,
            user: user,
            // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
        });
        setInput('');
    }


    return (
        <div className="chat">
            <ChatHeader channelName={channelName}/>
            <div className="chat__messages">
                {messages.map((message)=>(
                    <Message 
                    timestamp={message.timestamp}
                    message={message.message}
                    user={message.user}
                    />
                ))}
            </div>
            <div className="chat__input">
                <AddCircleRoundedIcon fontSize="large"/>
                <form>
                <input placeholder={`message #${channelName}`}
                value={input}
                onChange={(e)=>setInput(e.target.value)}
                disabled={!channelId}
                />
                <button type="submit" onClick={sendMessage}>Send Message</button>
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
