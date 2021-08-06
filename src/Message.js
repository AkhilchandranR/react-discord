import { Avatar } from '@material-ui/core';
import React from 'react';
import './Message.css';

function Message() {
    return (
        <div className="message">
            <Avatar/>
            <div className="message__info">
                <h4>Akhil
                    <span className="message__timestamp">
                        timestamp placeholder
                    </span>
                </h4>
                <p>message</p>
            </div>
        </div>
    )
}

export default Message
